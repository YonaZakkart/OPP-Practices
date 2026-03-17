
abstract class Bloque {
    tipoBloque: string;
    dureza: number;
    recursoEntrega: string;

    constructor(tipoBloque: string, dureza: number, recurso: string) {
        this.tipoBloque = tipoBloque;
        this.dureza = dureza;
        this.recursoEntrega = recurso;

    }

    romper(): string {
        this.mensajeRomper();
        return this.recursoEntrega;

    }
    abstract mensajeRomper(): void;
}

class BloqueHierro extends Bloque {
    constructor() {
        super("Hierro", 4, "Mineral de hierro");
    }

    mensajeRomper(): void {
        console.log("El bloque de hierro fue destruido");
    }
}

class BloqueOro extends Bloque {
    constructor() {
        super("Oro", 6, "Mineral de oro");
    }

    mensajeRomper(): void {
        console.log("El bloque de oro se rompió");
    }
}

class BloqueDiamante extends Bloque {
    constructor() {
        super("Diamante", 8, "Diamante");
    }
    mensajeRomper(): void {
        console.log("¡Encontraste un diamante!");
    }
}

class BloqueObsidiana extends Bloque {
    constructor() {
        super("Obsidiana", 10, "Obsidiana");
    }
    mensajeRomper(): void {
        console.log("La obsidiana fue destruida lentamente");
    }
}

class BloqueCarbon extends Bloque {
    constructor() {
        super("Carbon", 3, "Carbon");
    }
    mensajeRomper(): void {
        console.log("El bloque de carbon se rompió");
    }
}
class BloqueEsmeralda extends Bloque {
    constructor() {
        super("Esmeralda", 7, "Esmeralda");
    }
    mensajeRomper(): void {
        console.log("¡Una esmeralda obtenida!");
    }
}


class Pico {
    material: string;
    poderDeMineria: number;
    constructor(material: string, poder: number) {
        this.material = material;
        this.poderDeMineria = poder;
    }

    minar(bloque: Bloque): string | null {
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
    nombre: string;
    pico: Pico;
    inventario: string[];
    constructor(nombre: string, pico: Pico) {
        this.nombre = nombre;
        this.pico = pico;
        this.inventario = [];
    }

    minar(bloque: Bloque): void {
        console.log(this.nombre + " intenta minar " + bloque.tipoBloque);
        const recurso = this.pico.minar(bloque);
        if (recurso) {
            this.inventario.push(recurso);
            console.log("Recurso obtenido: " + recurso);
        }
    }

    mostrarInventario(): void {
        console.log("Inventario:")
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