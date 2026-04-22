abstract class Descuento {
    public nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract aplicar(monto: number): number;
}

class DescuentoPorcentaje extends Descuento {
    private porcentaje: number;
    constructor(porcentaje: number) {
        super(`Descuento ${porcentaje}%`);
        this.porcentaje = porcentaje;
    }

    aplicar(monto: number): number {
        return monto - (monto * this.porcentaje / 100);
    }
}

class DescuentoFijo extends Descuento {
    private cantidad: number;

    constructor(cantidad: number) {
        super(`Descuento fijo $${cantidad}`);
        this.cantidad = cantidad;
    }

    aplicar(monto: number): number {
        const resultado = monto - this.cantidad;
        return resultado < 0 ? 0 : resultado;
    }
}

class DescuentoMitad extends Descuento {
    constructor() {
        super("Mitad de precio");
    }

    aplicar(monto: number): number {
        return monto / 2;
    }
}

class Producto {
    public nombre: string;
    public precio: number;
    public cantidad: number;

    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Carrito {
    private productos: Producto[];
    private descuentos: Descuento[];

    constructor() {
        this.productos = [];
        this.descuentos = [];
    }

    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
        console.log(`Agregado: ${producto.nombre} x${producto.cantidad} - $${producto.precio * producto.cantidad}`);
    }

    agregarDescuento(descuento: Descuento): void {
        this.descuentos.push(descuento);
        console.log(`Descuento agregado: ${descuento.nombre}`);
    }

    calcularTotal(): void {
        let total = 0;

        for (const p of this.productos) {
            total += p.precio * p.cantidad;
        }

        console.log(`\nSubtotal: $${total}`);

        for (const descuento of this.descuentos) {
            total = descuento.aplicar(total);
            console.log(`${descuento.nombre} aplicado: $${total}`);
        }

        console.log(`Total final: $${total}`);
    }
}

const laptop = new Producto("Laptop", 1500, 1);
const mouse = new Producto("Mouse", 25, 2);
const teclado = new Producto("Teclado", 45, 1);

const carrito = new Carrito();

carrito.agregarProducto(laptop);
carrito.agregarProducto(mouse);
carrito.agregarProducto(teclado);

carrito.agregarDescuento(new DescuentoPorcentaje(10));
carrito.agregarDescuento(new DescuentoFijo(50));
carrito.agregarDescuento(new DescuentoMitad());

carrito.calcularTotal();