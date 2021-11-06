class Producto{
    constructor (id, nombre, rubro, precio, peso, tamaño, marca, sabor, stock, cantidadComprar, precioVenta){
        this.id = id;
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
const producto1 = new Producto(id=1,nombre="Tabaco Flandria Vainilla x 30gr", rubro="Tabaco", precio=450, stock=10, 0, 0);
const producto2 = new Producto(id=2,nombre="Tabaco Flandria Silver x 30gr", rubro="Tabaco", precio=450, stock=10, 0, 0);
const producto3 = new Producto(id=3,nombre="Tabaco Flandria ECO x 30gr", rubro="Tabaco", precio=450, stock=10, 0, 0);
const productos = [producto1, producto2, producto3]

function listarProductos(){
    for(const producto of productos){
        console.log("ID: " + producto.id +" "+ producto.nombre);
    }
}
function elegirProducto(){
    var productoElegido = prompt("Ingresa el N° de ID del producto que deseas: ");
    alert("El producto elegido es: " + productos[productoElegido].nombre);    
}

listarProductos();
elegirProducto();

do{
    producto1.iva();
    producto1.venta();
    producto1.resetVentaFinalizada();
    console.log(producto1);
}while(productoElegido == 1)
do{
    producto2.iva();
    producto2.venta();
    producto2.resetVentaFinalizada();
    console.log(producto2);
}while(productoElegido == 2)
do{
    producto3.iva();
    producto3.venta();
    producto3.resetVentaFinalizada();
    console.log(producto3);
}while(productoElegido == 3)

