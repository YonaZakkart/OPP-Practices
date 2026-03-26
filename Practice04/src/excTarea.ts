abstract class Operacion {
    public nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    abstract ejecutar(valor: number): number;
}

class Duplicar extends Operacion {
    constructor() {
        super("Duplicar");
    }
    ejecutar(valor: number): number {
        return valor * 2;
    }
}

class Sumar extends Operacion {
    public cantidad: number;
    constructor(cantidad: number) {
        super("Sumar");
        this.cantidad = cantidad;
    }
    ejecutar(valor: number): number {
        return valor + this.cantidad;
    }
}

class Elevar extends Operacion {
    public exponente: number;
    constructor(exponente: number) {
        super("Elevar");
        this.exponente = exponente;
    }
    ejecutar(valor: number): number {
        return Math.pow(valor, this.exponente);
    }
}

const operaciones: Operacion[] = [
    new Duplicar(),
    new Sumar(10),
    new Elevar(2)
];

let valor = 3;
console.log(`Valor inicial: ${valor}`);

for (const op of operaciones) {
    valor = op.ejecutar(valor);
    console.log(`${op.nombre}: ${valor}`);
}

console.log(`Resultado final: ${valor}`);