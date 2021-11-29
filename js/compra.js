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
    
    restaStock(cantidadElegida){
        this.stock = this.stock - cantidadElegida;
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


const producto1 = new Producto(id=1,nombre="Tabaco Flandria Vainilla x 30gr", categoria="Tabaco", 450, peso="30gr", 0, marca="Flandria", sabor="Vainilla", 10, imagen="imagenes/img-tabacos/Flandria Vainilla x 30gr.png");
const producto2 = new Producto(id=2,nombre="Tabaco Flandria Silver x 30gr", categoria="Tabaco", 450, peso="30gr", 0, marca="Flandria", sabor="Silver", 10, imagen="imagenes/img-tabacos/Flandria Silver x 30gr.png");
const producto3 = new Producto(id=3,nombre="Tabaco Flandria ECO x 30gr", categoria="Tabaco", 450, peso="30gr", 0, marca="Flandria", sabor="Eco", 10, imagen="imagenes/img-tabacos/Flandria Eco x 30gr.png");
var arrayProductos = [producto1, producto2, producto3];
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
guardarLocal("listaProductos", JSON.stringify(arrayProductos));
$("#filtros").append(`<button id='btnTerminar'>Finalizar</button>`);

$(`#btnTerminar`).click(finalizarCompra);

function imprimirProductos(){
    let contador = arrayProductos.length;
    for (let i = 0; i <= contador; i++){
        $("#seccionProductos").append(`<article class="work container">
        <a href='pageproduct.html'> <img src='${arrayProductos[i].imagen}'>
        <h3>${arrayProductos[i].nombre}</h3></a>` + `<h4>Precio: $${arrayProductos[i].precio}</h4>` + `<button id='btn${arrayProductos[i].id}'>Comprar</button>` 
        + `<select id='select${arrayProductos[i].id}'>
        <option id='cant1' type="number" value='1'>1</option>
        <option id='cant2' type="number" value='2'>2</option>
        <option id='cant3' type="number" value='3'>3</option>
        <option id='cant4' type="number" value='4'>4</option>
        <option id='cant5' type="number" value='5'>5</option>
        <option id='cant6' type="number" value='6'>6</option>
        <option id='cant7' type="number" value='7'>7</option>
        <option id='cant8' type="number" value='8'>8</option>
        <option id='cant9' type="number" value='9'>9</option>
        <option id='cant10' type="number" value='10'>10</option>
    </select></article>`);
    
            
    $(`#btn${arrayProductos[i].id}`).click(function(){
            idRef = arrayProductos[i].id;
            cantidadElegida = document.getElementById("select"+idRef).value;
            productoElegido = arrayProductos[i].nombre;
            agregarCarrito(cantidadElegida, idRef);
        });
    }

}  

console.table(arrayProductos);


let carrito = [];
let productoElegido;
let cantidadElegida;

let productosCarrito = "Vas a llevar: ";
let precioCarrito = 0;
let cantidadProducto = 0;


    function agregarCarrito(cantidadElegida, idRef){
            
        let precioTotal = cantidadElegida * arrayProductos[idRef-1].precio;
        const comprado = new ProductoComprado(carrito.length+1, arrayProductos[idRef-1].nombre, cantidadElegida, precioTotal);
        carrito.push(comprado);
            
        alert(`Agregaste al carrito ${cantidadElegida} unidades de ${arrayProductos[idRef-1].nombre} a un total de $ ${precioTotal}`);
        arrayProductos[idRef-1].restaStock(cantidadElegida);    

        
    }

    function finalizarCompra(){
        console.log(`Cerramos su pedido!`);
        for (itemsElegidos of carrito){
            productosCarrito += `\n - ${itemsElegidos.nombre} x ${itemsElegidos.cantidad} unidades `;
            precioCarrito += itemsElegidos.precio;
        }
        
        alert (`Repasemos \n ${productosCarrito} \n por un total de $ ${precioCarrito}`);
    }    

    
    imprimirProductos();  