"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcesadorArchivos {
    // public estadoArchivo: string;
    constructor(nombreArchivo, estadoArchivo) {
        this.nombreArchivo = nombreArchivo;
    }
}
//convertir de PNG a JPG
class ProcesadorImagenPNG extends ProcesadorArchivos {
    constructor(nombreArchivo, estadoArchivo) {
        super(nombreArchivo, estadoArchivo);
        this.nombreArchivoIMG = "";
        this.validacion(nombreArchivo);
    }
    convertir(archivo) {
        let nombreArchivo = archivo.split('.');
        this.nombreArchivoIMG = nombreArchivo[0] + ".JPG";
        return this.nombreArchivoIMG;
    }
    validacion(nombreArchivo) {
        let formato = nombreArchivo.split(".");
        if (formato[-1] === "PNG" || formato[-1] === "png") {
            throw new Error("El archivo no es formato PNG");
        }
    }
}
const imagenPNG = new ProcesadorImagenPNG("imagen.png", "");
console.log(imagenPNG.convertir("captura.png"));
console.log(imagenPNG.convertir("imagen.png"));
console.log(imagenPNG.convertir("Foto.PNG"));
console.log(imagenPNG.convertir("img.png"));
//# sourceMappingURL=index.js.map