// 3. Modelar una jerarquía de productos. Clase base: Producto (nombre y precio). Clases hijas: ProductoDigital y ProductoFisico. Validar que el precio sea mayor que 0. Implementar método calcularPrecioFinal() (aplicar recargo en el producto físico).

class Producto {
    nombre: string;
    precio: number
    constructor(nombre: string, precio: number) {
        if (precio <= 0) throw new Error("El precio no puede ser 0 o menor");
        this.nombre = nombre
        this.precio = precio
    }
    calcularPrecio(cantidad:number):void{
        let precioFinal = this.precio * cantidad
        this.precio= precioFinal
    }
}

class ProductoDigital extends Producto {
    constructor(nombre: string, precio: number) {
        super(nombre, precio)
    }
    override calcularPrecio(cantidad: number): void { //lo agarre y no lo solte
        super.calcularPrecio(cantidad)
        console.log(`
            Producto: ${this.nombre}
            cantidad: ${cantidad}
            precio Fina;: $${this.precio}`)
    }
    }

class ProductoFiico extends Producto {
    constructor(nombre: string, precio: number) {
        super(nombre, precio)
    }
    override calcularPrecio(cantidad: number): void {
        super.calcularPrecio(cantidad)
        let recargo = this.precio * 0.15
        this.precio = this.precio + recargo
        console.log(`
            Producto: ${this.nombre}
            cantidad: ${cantidad}
            Recargo: $${recargo}
            precio Fina;: $${this.precio}`)
    }
    }

const pDigital = new ProductoDigital("ram",100)
pDigital.calcularPrecio(2)

const pFisico = new ProductoFiico('algo', 100)
pFisico.calcularPrecio(2)


