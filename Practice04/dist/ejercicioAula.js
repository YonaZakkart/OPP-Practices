"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransformadorDatos {
    constructor(mensaje) {
        this.mensaje = mensaje;
    }
}
class TransformarMayusculas extends TransformadorDatos {
    constructor(mensaje, datoMayus) {
        super(mensaje);
        this.datoMayus = "";
    }
    transformar(mensaje) {
        this.datoMayus = mensaje.toUpperCase();
        return this.datoMayus;
    }
}
const mensaje = new TransformarMayusculas("", "");
console.log(mensaje.transformar('asdffgh'));
console.log(mensaje.transformar('poiuytr'));
console.log(mensaje.transformar('SRDTFGH'));
//# sourceMappingURL=ejercicioAula.js.map