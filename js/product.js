class Producto{
    constructor (id, nombre, categoria, precio, peso, tamaño, marca, sabor, stock, imagen){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.peso = peso;
        this.tamaño = tamaño;
        this.marca = marca;
        this.sabor = sabor;
        this.stock = stock;
        this.imagen = imagen;
    }
    
    restaStock(cantidad){
        this.stock = this.stock - cantidad;
        console.log(`El stock de ${this.nombre} ha sido actualizado`);
    }
}
class ProductoComprado{
    constructor(id, nombre, cantidad, precio){
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}


const producto1 = new Producto(id=1,nombre="Tabaco Flandria Vainilla x 30gr", categoria="Tabaco", 450, peso="30gr", 0, marca="Flandria", sabor="Vainilla", 10, imagen="/blendnroll/imagenes/img-tabacos/Flandria Vainilla x 30gr.png");
const producto2 = new Producto(id=2,nombre="Tabaco Flandria Silver x 30gr", categoria="Tabaco", 450, peso="30gr", 0, marca="Flandria", sabor="Silver", 10, imagen="/blendnroll/imagenes/img-tabacos/Flandria Silver x 30gr.png");
const producto3 = new Producto(id=3,nombre="Tabaco Flandria ECO x 30gr", categoria="Tabaco", 450, peso="30gr", 0, marca="Flandria", sabor="Eco", 10, imagen="/blendnroll/imagenes/img-tabacos/Flandria Eco x 30gr.png");
var arrayProductos = [producto1, producto2, producto3];
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
guardarLocal("listaProductos", JSON.stringify(arrayProductos));

function imprimirProductos(){
    let contador = arrayProductos.length;
    for (let i = 0; i <= contador; i++){
        let articulo = document.createElement("article");
        articulo.setAttribute("class", "work container");
        articulo.innerHTML = `<a href='pageproduct.html'> <img src='${arrayProductos[i].imagen}'>
        <h3>${arrayProductos[i].nombre}</h3></a>` + `<h4>Precio: $${arrayProductos[i].precio}</h4>` + `<button id='btnComprar${i}' class='btnComprar'>Comprar</button>` 
        + `<select id='select${i}' class='selectCantidad'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
    </select>`;
        var seccion = document.getElementById("seccionProductos");
        seccion.appendChild(articulo);
    }
}  
console.table(arrayProductos);

let carrito = [];

let productosOfrecidos = "Tenemos para ofrecerte: ";

function agregarCarrito(){
    for(item of arrayProductos){
        productosOfrecidos += `\n ${item.id} - ${item.nombre} a $ ${item.precio} la unidad`;
    }

    productosOfrecidos += `\n Ingrese el número de id del producto que desea agregar al carrito. Para finalizar ingrese 99`;
    
    let seleccionUsuario = parseInt(prompt(productosOfrecidos));

    while(isNaN(seleccionUsuario) & seleccionUsuario != 99 || seleccionUsuario > arrayProductos.length & seleccionUsuario != 99 || seleccionUsuario == 0 & seleccionUsuario != 99){
        alert("Por favor ingrese una opción valida");
        seleccionUsuario = parseInt(prompt(productosOfrecidos));
    }
    
    while(seleccionUsuario != 99){
        let cantidad = prompt("Cuantas unidades deseas llevar?");
        while(cantidad <= 0 || cantidad > arrayProductos[seleccionUsuario -1].stock ){
            alert("Por favor ingrese una cantidad valida, el stock disponible es de " + arrayProductos[seleccionUsuario-1].stock + " unidades." );
            cantidad = parseInt(prompt("Cuantas unidades deseas llevar?"));
        }
        let precioTotal = cantidad * arrayProductos[seleccionUsuario-1].precio;
        const comprado = new ProductoComprado(carrito.length+1, arrayProductos[seleccionUsuario-1].nombre, cantidad, precioTotal);
        carrito.push(comprado);
        
        alert(`Agregamos al carrito ${cantidad} unidades de ${arrayProductos[seleccionUsuario-1].nombre}`);
        arrayProductos[seleccionUsuario-1].restaStock(cantidad);

        seleccionUsuario = parseInt(prompt(productosOfrecidos));
    }
    console.log(`Cerramos su pedido!`);
        mostrarCarrito();
}

let productosCarrito = "Vas a llevar: ";
let precioCarrito = 0;
let cantidadProducto = 0;

function mostrarCarrito(){
    for (itemsElegidos of carrito){
        productosCarrito += `\n - ${itemsElegidos.nombre} x ${itemsElegidos.cantidad} unidades `;
        precioCarrito += itemsElegidos.precio;
    }
    
    alert (`Repasemos \n ${productosCarrito} \n por un total de $ ${precioCarrito}`);
}

agregarCarrito();

imprimirProductos();


