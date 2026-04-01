class Producto {
    public nombre: string;
    public precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    private productos: { producto: Producto, cantidad: number }[];
    private total: number;

    constructor() {
        this.productos = [];
        this.total = 0;
    }

    agregarProducto(producto: Producto, cantidad: number): void {
        if (cantidad <= 0) {
            console.log("La cantidad debe ser mayor a cero");
            return;
        }
        this.productos.push({ producto, cantidad });
        this.calcularTotal();
        console.log(`Agregado: ${producto.nombre} x${cantidad}`);
    }

    eliminarProducto(nombre: string): void {
        const indice = this.productos.findIndex(p => p.producto.nombre === nombre);
        if (indice === -1) {
            console.log(`Producto "${nombre}" no encontrado en el carrito`);
            return;
        }
        this.productos.splice(indice, 1);
        this.calcularTotal();
        console.log(`Producto "${nombre}" eliminado del carrito`);
    }

    private calcularTotal(): void {
        this.total = 0;
        for (const item of this.productos) {
            this.total += item.producto.precio * item.cantidad;
        }
    }

    mostrarDetalle(): void {
        if (this.productos.length === 0) {
            console.log("El carrito está vacío");
            return;
        }
        console.log("Detalle del Carrito: ");
        for (const item of this.productos) {
            console.log(`${item.producto.nombre} x${item.cantidad} - $${item.producto.precio * item.cantidad}`);
        }
        console.log(`Total: $${this.total}`);
    }
}

const laptop = new Producto("Laptop", 1500); //milquinientos 🫦
const mouse = new Producto("Mouse", 25);
const teclado = new Producto("Teclado", 45);

const carrito = new Carrito();

carrito.agregarProducto(laptop, 1);
carrito.agregarProducto(mouse, 2);
carrito.agregarProducto(teclado, 1);
carrito.mostrarDetalle();

carrito.eliminarProducto("Mouse");
carrito.mostrarDetalle();