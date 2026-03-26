"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Operacion {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Duplicar extends Operacion {
    constructor() {
        super("Duplicar");
    }
    ejecutar(valor) {
        return valor * 2;
    }
}
class Sumar extends Operacion {
    constructor(cantidad) {
        super("Sumar");
        this.cantidad = cantidad;
    }
    ejecutar(valor) {
        return valor + this.cantidad;
    }
}
class Elevar extends Operacion {
    constructor(exponente) {
        super("Elevar");
        this.exponente = exponente;
    }
    ejecutar(valor) {
        return Math.pow(valor, this.exponente);
    }
}
const operaciones = [
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
//# sourceMappingURL=excTarea.js.map