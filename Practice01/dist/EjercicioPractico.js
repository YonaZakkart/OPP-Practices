"use strict";
// Crear una clase Producto que incluya:
// nombre (string)
// precio (number)
// cantidad (number)
// La clase debe tener:
// Un constructor que inicialice los atributos.
// Un método calcularTotal() que retorne el total (precio × cantidad).
// Un método mostrarDetalle() que imprima la información del producto.
// Instanciar al menos un objeto y ejecutar sus métodos.
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    actualizarNombre(nombre) {
        if (nombre === undefined) {
            console.log("El nombre no puede estar vacio");
        }
        else {
            this.nombre = nombre;
        }
    }
    actualizarPrecio(precio) {
        if (precio < 0.1) {
            console.log("El producto no puede tener ese precio");
        }
        else {
            this.precio = precio;
        }
    }
    mostrarDetalle() {
        console.log(`
            detalles del producto:
            nombre: ${this.nombre}
            precio: ${this.precio}`);
    }
    calcularTotal() {
        let total = this.precio * this.cantidad;
        console.log(`
            Detalles de compra:
            Producto: ${this.nombre}
            cantidad: ${this.cantidad}
            Total a pagar: ${total}`);
    }
}
const cliente1 = new Producto("Ram", 400, 2);
cliente1.mostrarDetalle();
cliente1.actualizarNombre("VRAM");
cliente1.actualizarPrecio(-2);
cliente1.mostrarDetalle();
cliente1.calcularTotal();
//# sourceMappingURL=EjercicioPractico.js.map