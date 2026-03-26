
class CuentaBancaria {
    public titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    getSaldo(usuario: { nombre: string, role: string }) {
        if (usuario.role == "cliente") {
            throw new Error(`Los clientes no pueden modificar el sald0`)
        }
        this.saldo
    }

    setSaldo(
        usuario: {nombre: string, role:string},
        saldo: number
    ) {
        if (usuario.role == "cliente") {
            throw new Error(`Los clientes no pueden ver el saldo`)
        }

        if (saldo <= 0) {
            throw new Error(`El saldo no puede ser menor a 0`)
        }
        this.saldo += saldo;
    }
}


const usuarioAdmin = {
    nombre: "admin",
    role: "admin"
}
const usuario = {
    nombre: "Yona xd",
    role: "cliente"
}

const CuentaAhorro = new CuentaBancaria("Yona", 123)
console.log(CuentaAhorro.titular);
console.log(CuentaAhorro.getSaldo(usuarioAdmin));
CuentaAhorro.setSaldo(usuarioAdmin,100)
console.log(CuentaAhorro.getSaldo(usuario))