import { Sword } from "./models/Sword";
import { Bow } from "./models/Bow";
import { User } from "./models/Player";
import { Inventory } from "./models/inventory";

// Espadas
const espada = new Sword('Espada', 10, 100, 'sword');
const daga = new Sword('Daga', 10, 100, 'dagger');

// Arcos
const arco = new Bow('Arco', 10, 100, 'bow', 150);
const ballesta = new Bow('Ballesta', 10, 100, 'crossbow', 220);

// Inventario
const inventarioBase = new Inventory(10);
inventarioBase.addItem(espada);
inventarioBase.addItem(daga);
inventarioBase.addItem(arco);
inventarioBase.addItem(ballesta);

// usuario
const personaje1 = new User('Link', espada, inventarioBase);
const personaje2 = new User('Amber', arco, inventarioBase);

personaje1.attack();
personaje1.changeWeapon(daga);
personaje1.attack();
personaje1.viewStats();

personaje2.attack();
personaje2.changeWeapon(ballesta);
personaje2.attack();
personaje2.viewStats();