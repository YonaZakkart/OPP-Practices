"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bloque {
    constructor(tipoBloque, dureza, recurso) {
        this.tipoBloque = tipoBloque;
        this.dureza = dureza;
        this.recursoEntrega = recurso;
    }
    romper() {
        this.mensajeRomper();
        return this.recursoEntrega;
    }
}
class BloqueHierro extends Bloque {
    constructor() {
        super("Hierro", 4, "Mineral de hierro");
    }
    mensajeRomper() {
        console.log("El bloque de hierro fue destruido");
    }
}
class BloqueOro extends Bloque {
    constructor() {
        super("Oro", 6, "Mineral de oro");
    }
    mensajeRomper() {
        console.log("El bloque de oro se rompió");
    }
}
class BloqueDiamante extends Bloque {
    constructor() {
        super("Diamante", 8, "Diamante");
    }
    mensajeRomper() {
        console.log("¡Encontraste un diamante!");
    }
}
class BloqueObsidiana extends Bloque {
    constructor() {
        super("Obsidiana", 10, "Obsidiana");
    }
    mensajeRomper() {
        console.log("La obsidiana fue destruida lentamente");
    }
}
class BloqueCarbon extends Bloque {
    constructor() {
        super("Carbon", 3, "Carbon");
    }
    mensajeRomper() {
        console.log("El bloque de carbon se rompió");
    }
}
class BloqueEsmeralda extends Bloque {
    constructor() {
        super("Esmeralda", 7, "Esmeralda");
    }
    mensajeRomper() {
        console.log("¡Una esmeralda obtenida!");
    }
}
class Pico {
    constructor(material, poder) {
        this.material = material;
        this.poderDeMineria = poder;
    }
    minar(bloque) {
        if (this.poderDeMineria >= bloque.dureza) {
            console.log("Pico suficiente para minar");
            return bloque.romper();
        }
        console.log("El pico no tiene poder suficiente");
        return null;
    }
}
class PicoPiedra extends Pico {
    constructor() {
        super("Piedra", 4);
    }
}
class PicoHierro extends Pico {
    constructor() {
        super("Hierro", 7);
    }
}
class PicoDiamante extends Pico {
    constructor() {
        super("Diamante", 10);
    }
}
class Jugador {
    constructor(nombre, pico) {
        this.nombre = nombre;
        this.pico = pico;
        this.inventario = [];
    }
    minar(bloque) {
        console.log(this.nombre + " intenta minar " + bloque.tipoBloque);
        const recurso = this.pico.minar(bloque);
        if (recurso) {
            this.inventario.push(recurso);
            console.log("Recurso obtenido: " + recurso);
        }
    }
    mostrarInventario() {
        console.log("Inventario:");
        this.inventario.forEach(item => {
            console.log(item);
        });
    }
}
const pico1 = new PicoPiedra();
const pico2 = new PicoHierro();
const jugador = new Jugador("Steve", pico1);
const hierro = new BloqueHierro();
const diamante = new BloqueDiamante();
const carbon = new BloqueCarbon();
jugador.minar(hierro);
jugador.minar(diamante);
jugador.minar(carbon);
jugador.mostrarInventario();
//# sourceMappingURL=Ejercicio.js.map