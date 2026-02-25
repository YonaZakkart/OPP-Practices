"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estudiante {
    constructor(nombre, carnet, notaFinal) {
        this.nombre = nombre;
        this.carnet = carnet;
        this.notaFinal = notaFinal;
    }
    mostrarInformacion() {
        console.log(`
            Nombre: ${this.nombre}
            carnet: ${this.carnet}
            Nota Final: ${this.notaFinal}`);
    }
    actualizarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.notaFinal = nota;
        }
        else {
            console.log(`
                ingrese una nota valida`);
        }
    }
}
const alumno1 = new Estudiante("requeno", "U20201010", 9);
const alumno2 = new Estudiante("Juan", "U20201011", 8);
const alumno3 = new Estudiante("Andres", "U20201012", 10);
alumno1.mostrarInformacion();
alumno1.actualizarNota(10);
alumno1.mostrarInformacion();
// alumno2.mostrarInformacion();
// alumno3.mostrarInformacion();
//# sourceMappingURL=index.js.map