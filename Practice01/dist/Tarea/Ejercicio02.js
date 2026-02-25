"use strict";
// Crear una clase CuentaBancaria con los atributos titular y saldo. 
// Implementar métodos para depositar, retirar y mostrar el saldo actual.
Object.defineProperty(exports, "__esModule", { value: true });
class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    mostrarSaldo() {
        console.log(`
            Saldo actual: $${this.saldo}`);
    }
    mostrarDetalles() {
        console.log(`
            Nombre del titular: ${this.titular}
            Saldo actual: $${this.saldo}`);
    }
    depositar(deposito) {
        let nuevoSaldo = this.saldo + deposito;
        this.saldo = nuevoSaldo;
        console.log(`
            Se han depositadoL $${deposito}
            su  nuevo saldo es: $${this.saldo}`);
    }
    retirar(retiro) {
        let nuevoSaldo = this.saldo - retiro;
        this.saldo = nuevoSaldo;
        console.log(`
            Se han retirado $${retiro}
            su  nuevo saldo es: $${this.saldo}`);
    }
}
const usuario1 = new CuentaBancaria("Yona", 100);
usuario1.mostrarSaldo();
usuario1.depositar(200);
usuario1.retirar(150);
usuario1.mostrarDetalles();
//# sourceMappingURL=Ejercicio02.js.map