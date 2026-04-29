import { WeaponModel } from "./WeaponModel"; 

export type SwordType = "sword" | "dagger";

export class Sword extends WeaponModel {
  swordType: SwordType;

  constructor(
    name: string,
    damage: number,
    durability: number,
    swordType: SwordType
  ) {
    super(name, damage, durability);
    this.swordType = swordType;
  }

  attack(): number {
    switch (this.swordType) {
      case "sword":
        return this.damage * 1.2;
      case "dagger":
        return this.damage * 1.5;
      default: {
        const _exhaustive: never = this.swordType;
        throw new Error(`SwordType no soportado: ${_exhaustive}`);
      }
    }
  }

  stats(): void {
    console.log(`Estadisticas del Arma:`);
    console.log(`Nombre: ${this.name}`);
    console.log(`Dano: ${this.damage}`);
    console.log(`Durabilidad: ${this.durability}`);
    console.log(`Tipo: ${this.swordType}`);
  }
}