

class Producto {
    public nombre: string;
    public precio: number;
    private stock: number;

    constructor(nombre: string, precio: number, stock: number) {
        this.nombre= nombre;
        this.precio=precio;
        this.stock= stock;
    }

    aumentarStock(usuario: { nombre: string, role: string }, cantidad: number): void {
        if (cantidad <= 0) {
            throw new Error("La cantidad a aumentar debe ser mayor que cero");
        }
        if (usuario.role == "admin") {
        this.stock += cantidad;
        console.log(`El Stock aumentado ${cantidad}. Stock actual: ${this.stock}`);
        }
    }

    disminuirStock(cantidad: number): void {
        if (cantidad <= 0) {
            throw new Error("La cantidad a disminuir debe ser mayor que cero");
        }
        
        if (cantidad > this.stock) {
            console.log(`No hay suficiente stock. Stock actual: ${this.stock}, cantidad solicitada: ${cantidad}`);
            return;
        }
        
        this.stock -= cantidad;
        console.log(`Stock disminuido en ${cantidad}. Stock actual: ${this.stock}`);
    }
    
    mostrarInformacion(usuario: { nombre: string, role: string }): void {
        if (usuario.role == "cliente") {
            console.log(`
        Información del Producto
        Nombre: ${this.nombre}
        Precio: $${this.precio}
        `);
        } else if (usuario.role == "admin") {
            console.log(`
        Información del Producto
        Nombre: ${this.nombre}
        Precio: $${this.precio}
        Stock disponible: ${this.stock} unidades
        `);
        }
        
    }
}


const usuarioAdmin = {
    nombre: "admin",
    role: "admin"
}
const usuario = {
    nombre: "Yona xd",
    role: "cliente"
}

const producto = new Producto("Laptop", 1500, 2)

producto.aumentarStock(usuario,2) //no aumenta pq no es admin

producto.disminuirStock(2)

producto.mostrarInformacion(usuario)

producto.mostrarInformacion(usuarioAdmin)