import { Bow, Sword, WeaponModel } from "./weaponModel";

interface Usuario {
    attack(): void;
    changeWeapon(newWeapon: WeaponModel): void;
    viewStats(): void;
}

class User implements Usuario {
    name: string;
    weapon: WeaponModel;
    constructor(name: string, weapon:WeaponModel){
        this.name=name;
        this.weapon=weapon;
    }

    attack(): void {
        console.log(`El personaje ${this.name} ha realizado un atque con ${this.weapon.name} haciendo ${this.weapon.attack()} de danio`)
    }

    changeWeapon(newWeapon: WeaponModel): void {
        this.weapon =newWeapon
    }

    viewStats(): void {
        console.log(`
            Menú del personaje:
            Nombre: ${this.name}
            Arma actual: ${this.weapon.name}
            Danio base: ${this.weapon.damage}
            Multiplicador de danio: ${this.weapon.attack()/this.weapon.damage}
            Danio Final: ${this.weapon.attack()}
            Durabilidad: ${this.weapon.durability}`)
    }
}

//espadas
const espada = new Sword('Excalibur',10,100,'sword')
const daga = new Sword('Daga',10,100,'dagger')

//Arco
const arco = new Bow('Arc', 10, 100, 'bow', 150)
const ballesta = new Bow('Balesta', 10, 100, 'crossbow', 220)

//Usuario
const personaje1 = new User('Yona', espada)
console.log('### ESPADA')
personaje1.attack()
personaje1.viewStats()

personaje1.changeWeapon(daga)
personaje1.attack()

console.log("### ARCO")
personaje1.changeWeapon(arco)
personaje1.viewStats()
personaje1.attack()