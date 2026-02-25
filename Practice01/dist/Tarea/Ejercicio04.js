"use strict";
// Crear una clase Libro con los atributos titulo, autor y numeroPaginas. 
// Instanciar al menos dos objetos y mostrar la información de cada uno utilizando un método.
Object.defineProperty(exports, "__esModule", { value: true });
class Libro {
    constructor(titulo, autor, numeroPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }
    mostrarDetalles() {
        console.log(`
            Detalles del libro:
            titulo: ${this.titulo}
            autor: ${this.autor}
            Numero de paginas: ${this.numeroPaginas}`);
    }
}
const libro1 = new Libro("LOTM", "alguien", 2000);
const libro2 = new Libro("TBATE", "alguien", 1500);
libro1.mostrarDetalles();
libro2.mostrarDetalles();
//# sourceMappingURL=Ejercicio04.js.map