"use strict";
// Crear una clase Vehiculo con los atributos marca, modelo y año. 
// Implementar un método que muestre la información completa del vehículo.
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    mostrarDetalles() {
        console.log(`
            Detalles del Vehiculo:
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Anio: ${this.anio}`);
    }
}
const auto1 = new Vehiculo("Mazda", "CX-5", 2019);
const auto2 = new Vehiculo("Honda", "Civic", 2020);
auto1.mostrarDetalles();
auto2.mostrarDetalles();
//# sourceMappingURL=Ejercicio03.js.map