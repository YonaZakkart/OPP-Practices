"use strict";
// Crear una clase Empleado con los atributos nombre, salarioBase y horasTrabajadas. Implementar un método que calcule el salario total considerando que cada hora trabajada se paga a una tarifa fija.
Object.defineProperty(exports, "__esModule", { value: true });
//SALARIO/HPRA = 2.50
class Empleado {
    constructor(nombre, salarioBase, horasTrabajadas) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
        this.horasTrabajadas = horasTrabajadas;
    }
    calcularSalario() {
        let salario = this.salarioBase * this.horasTrabajadas;
        console.log(`
            El salario total de ${this.nombre} es: $${salario}`);
    }
}
const empleado1 = new Empleado("Yona", 2.5, 160);
empleado1.calcularSalario();
//# sourceMappingURL=Ejercicio01.js.map