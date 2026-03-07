// 1. Modelar una jerarquía de CuentaBancaria. Clase base: titular y saldo. Clases hijas: CuentaAhorro y CuentaCorriente. Implementar métodos de depósito y retiro con validaciones (no permitir saldo negativo).

class CuentaBancaria {
    titular: string;
    protected saldo: number;
    constructor(titular: string, saldo: number) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(deposito: number): void {
        this.validaDeposito(deposito)
        this.mostrarSaldo()
    }
    validaDeposito(deposito: number): void {
        if (deposito >= 1) {
            this.saldo += deposito
            console.log(`Se ha depositado: $${deposito}`)
        } else if (deposito <= 0) {
            console.log(`Error: no se puede depositar $${deposito}
        Por favor deposite mas de 1 dolae`)
        }
    }

    retirar(retiro: number) {
        this.validarRetiro(retiro, this.saldo)
        this.mostrarSaldo()
    }
    validarRetiro(retiro: number, saldo: number): void {
        if (retiro > this.saldo) {
            console.log(`Error: No se puede hacer el retiro de: $${retiro}`)
        } else {
            console.log(`Se han retirado: $${retiro}`)
            this.saldo -= retiro
        }
    }
    mostrarSaldo(): void {
        console.log(`Saldo Actual: $${this.saldo}`)
    }

    mostrarDetalles(): void {
        console.log(`\nNombre del titular: ${this.titular}`)
        console.log(`Saldo: $${this.saldo}`)
    }
}

class CuentaAhorro extends CuentaBancaria {
    constructor(titular: string, saldo: number) {
        super(titular, saldo)
    }
    override mostrarDetalles(): void { //investigue como hacer esto y enconré el override que sobreescribe el metodo xd
        super.mostrarDetalles();
        console.log(`Tipo: Cuenta de Ahorro\n`);
    }
}

class CuentaCorriente extends CuentaBancaria {
    private readonly limiteSaldo: number = 4000;
    constructor(titular: string, saldo: number) {
        super(titular, saldo)
    }
    override depositar(deposito: number): void {
        let nuevoSaldo = this.saldo + deposito
        if (nuevoSaldo > this.limiteSaldo) {
            console.log(`Error: una cuenta corriente no puede tener mas de $4000`)
            this.mostrarSaldo()
        } else {
            super.depositar(deposito)
        }
    }
    override mostrarDetalles(): void {

        super.mostrarDetalles();
        console.log(`Tipo:    Cuenta Corriente`);
        console.log(`Límite:  $${this.limiteSaldo}\n`);
    }
}

const usuario1 = new CuentaBancaria("Yona", 0)
// usuario1.depositar(20)
// usuario1.retirar(4)

const usuario2 = new CuentaAhorro("Yona", 0)
usuario2.depositar(100)
usuario2.retirar(20)
usuario2.mostrarDetalles()

const usuario3 = new CuentaCorriente("Yona", 0)
usuario3.depositar(100)
usuario3.retirar(20)
usuario3.depositar(4000)
usuario3.mostrarDetalles()

// ...creo que me compliqué de manera innecesaria con esto xd