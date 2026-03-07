// 2. Modelar un sistema académico. Clase base: Persona (nombre y edad). Clases hijas: Estudiante y Docente. Validar que la edad sea mayor a 0. Cada clase debe tener un método mostrarRol().

class Persona {
    nombre: string;
    edad: number
    constructor(nombre: string, edad: number) {
        if (edad <= 0) throw new Error("La edad debe ser mayor que 0");
        this.nombre = nombre
        this.edad = edad
    }
    mostrarRol(): void {
        console.log(`\nNombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

class Estudiante extends Persona {
    constructor(nombre: string, edad: number) {
        super(nombre, edad)
    }
    override mostrarRol(): void {   //te amo override gracias por existir
        super.mostrarRol()
        console.log("Rol> Estudiante")
    }
}
class Docente extends Persona {
    constructor(nombre: string, edad: number) {
        super(nombre, edad)
    }
    override mostrarRol(): void {
        super.mostrarRol()
        console.log("Rol: Docente")
    }
}


const alumno = new Estudiante("Huan", 18)
alumno.mostrarRol()
const maestro = new Docente("Will", 28)
maestro.mostrarRol()