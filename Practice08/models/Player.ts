import { InventoryModel } from "./inventory";
import { WeaponModel } from "./WeaponModel";

interface Player {
  attack(): void;
  changeWeapon(newWeapon: WeaponModel): void;
  removeItemInventory(item: WeaponModel): void;
  viewStats(): void;
}

export class User implements Player {
  name: string;
  weaponInUse: WeaponModel;
  inventory: InventoryModel;

  constructor(
    name: string,
    weapon: WeaponModel,
    inventory: InventoryModel
  ) {
    this.name = name;
    this.inventory = inventory;
    this.weaponInUse = weapon;
  }

  attack(): void {
    console.log(
      `El personaje ${this.name} ha realizado un ataque con ${this.weaponInUse.name} haciendo ${this.weaponInUse.attack()} de daño`
    );
  }

  changeWeapon(newWeapon: WeaponModel): void {
    const weaponExist = this.inventory
      .getItems()
      .find((item: WeaponModel) => item.name === newWeapon.name);

    if (!weaponExist) {
      console.log(
        `${this.name} no tiene el arma ${newWeapon.name} en su inventario.`
      );
      return;
    }

    this.weaponInUse = weaponExist;
    console.log(`${this.name} ha cambiado su arma a ${weaponExist.name}.`);
  }

  removeItemInventory(item: WeaponModel): void {
    this.inventory.removeItem(item);

    if (this.weaponInUse === item) {
      const remaining = this.inventory.getItems();
      if (remaining.length > 0) {
        this.weaponInUse = remaining[0];
      }
      console.log(`${this.name} eliminó ${item.name} del inventario.`);
    }
  }

  viewStats(): void {
    this.weaponInUse.stats();
  }
}

