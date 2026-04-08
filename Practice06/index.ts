
abstract class Suscripcion {
    private precioBase: number;

    constructor() {
        this.precioBase = 2 //precio base de $2
    }

    abstract calcularCosto(): void;
    abstract mostrarBeneficios(): void;
    getPrecioBase() {
        return this.precioBase
    }
}

class SuscripcionBasica extends Suscripcion {
    private limiteUso: number
    constructor() {
        super()
        this.limiteUso = 500 //500 tockens
    }

    calcularCosto(): void {
        let costoAdicional: number = this.limiteUso * 0.02 // aumenta el precio en proporcion al 20% de los tockens
        let costoFinal = this.getPrecioBase() + costoAdicional
        console.log(`\nCosto de suscripcion basica: $${costoFinal}`)
    }
    mostrarBeneficios(): void {
        console.log(`Beneficios de Suscripcion Basica: 
            Dispone de ${this.limiteUso} tockens adicionales`)
    }
}

class SuscripcionPremium extends Suscripcion {
    private limiteUso: number
    private beneficioExtra: number
    constructor() {
        super()
        this.limiteUso = 2000 //2K tockens
        this.beneficioExtra = 5 //5 usos de generacion de imagenes
    }
    calcularCosto(): void {
        let costoAdicional: number = this.limiteUso * 0.012 // aumenta el precio en proporcion al 12% de los tockens
        let costoFinal = this.getPrecioBase() + costoAdicional
        console.log(`\nCosto de suscripcion Premium: $${costoFinal}`)
    }
    mostrarBeneficios(): void {
        console.log(`Beneficios de Suscripcion Premium: 
            Dispone de ${this.limiteUso} tockens
            Adicionalmente cuenta con ${this.beneficioExtra} usos del generador de imagenes`)
    }
}

class Usuario {
    nombre: string;
    private suscripcion: Array<Suscripcion>
    constructor(nombre: string) {
        this.nombre = nombre
        this.suscripcion = []
    }

    asignarSuscripcion(suscripcion: Suscripcion): void {
    this.suscripcion.push(suscripcion)
    console.log(`Suscripción asignada a ${this.nombre}`)
}

    mostrarEstado(): void {
    console.log(`\nSuscripciones activas de ${this.nombre}:`)
    this.suscripcion.forEach(s => {
        s.calcularCosto()
        s.mostrarBeneficios()
    })
}
}


// const prueba = new SuscripcionBasica()
// prueba.calcularCosto()
// prueba.mostrarBeneficios()

// const prueba2 = new SuscripcionPremium()
// prueba2.calcularCosto()
// prueba2.mostrarBeneficios()

const user = new Usuario("Yona")
user.asignarSuscripcion(new SuscripcionBasica())
user.asignarSuscripcion(new SuscripcionPremium())
user.mostrarEstado()