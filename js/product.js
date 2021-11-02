class Producto{
    constructor (nombre, rubro, precio, peso, tamaño, marca, sabor, stock, cantidadComprar, precioVenta){
        this.nombre = nombre;
        this.rubro = rubro;
        this.precio = precio;
        this.peso = peso;
        this.tamaño = tamaño;
        this.marca = marca;
        this.sabor = sabor;
        this.stock = stock;
        this.cantidadComprar = cantidadComprar;
        this.precioVenta = precioVenta;
    }
    iva(){
        this.precio = this.precio * 1.21;
    }
    venta(){
        this.cantidadComprar = prompt("Ingresar cantidad deseada: ");
        alert("La cantidad que deseas comprar es " + this.cantidadComprar);
        this.precioVenta = this.cantidadComprar * this.precio
        alert("El valor final de tu compra es: $" + this.precioVenta);
        this.stock = this.stock - this.cantidadComprar;
    }
    resetVentaFinalizada(){
        this.cantidadComprar = 0;
        this.precioVenta = 0;
    }

}
const producto1 = new Producto("Tabaco Flandria Vainilla x 30gr", "Tabaco", 450, "0.03 kg", "14 x 7 x 2 cm", "Flandria", "Vainilla", 10, 0, 0);

console.log(producto1);

producto1.iva();
producto1.venta();
producto1.resetVentaFinalizada();

console.log(producto1);
