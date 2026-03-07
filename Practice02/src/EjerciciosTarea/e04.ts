// 4. Modelar una jerarquía de figuras geométricas. Clase base: Figura (método calcularArea()). Clases hijas: Rectangulo y Circulo. Implementar validaciones para dimensiones mayores que 0.

class Figura {
  calcularArea(): void{

  }
  mostrarArea(): void {
    console.log(`area de ${this.constructor.name}: ${this.calcularArea()}`);
  }
}

class Rectangulo extends Figura {
  constructor(private base: number, private altura: number) {
    super();
    if (base <= 0 || altura <= 0) {
      throw new Error("La base y la altura deben ser mayores que 0 ");
    }
  }

  override calcularArea(): number {
    return this.base * this.altura;
  }
}

class Circulo extends Figura {
  constructor(private radio: number) {
    super();
    if (radio <= 0) throw new Error("El radio debe ser mayor que 0");
  }

  override calcularArea(): number {
    return Math.PI * this.radio ** 2;
  }
}

const figura1 = new Rectangulo(20,10)
figura1.mostrarArea()

const figura2 = new Circulo(15)
figura2.mostrarArea()