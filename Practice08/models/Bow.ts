import { WeaponModel } from "./WeaponModel";

export type BowType = "bow" | "crossbow";

export class Bow extends WeaponModel {
  bowType: BowType;
  scope: number;

  constructor(
    name: string,
    damage: number,
    durability: number,
    bowType: BowType,
    scope: number
  ) {
    super(name, damage, durability);
    this.bowType = bowType;
    this.scope = scope;
  }

  attack(): number {
    switch (this.bowType) {
      case "bow":
        return this.damage * 1.8;
      case "crossbow":
        return this.damage * 2.2;
      default: {
        const _exhaustive: never = this.bowType;
        throw new Error(`BowType no soportado: ${_exhaustive}`);
      }
    }
  }

  stats(): void {
    console.log(`Estadisticas del Arma:`);
    console.log(`Nombre: ${this.name}`);
    console.log(`Dano: ${this.damage}`);
    console.log(`Durabilidad: ${this.durability}`);
    console.log(`Tipo: ${this.bowType}`);
    console.log(`Alcance: ${this.scope}`);
  }
}