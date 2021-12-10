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
/*Esto a cuntinuación reemplaza a lo que esta comentado debajo*/
var arrayProductos =[];

const URLJSON = "js/datos.json";
$.getJSON(URLJSON, function(respuesta, estado){
    if(estado === "success"){
        let misDatos = respuesta;
        for(const dato of misDatos){
            const producto = new Producto(id=`${dato.id}`,nombre=`${dato.nombre}`, categoria=`${dato.categoria}`, precio=`${dato.precio}`, peso=`${dato.peso}`, tamaño=`${dato.tamaño}`, marca=`${dato.marca}`, sabor=`${dato.sabor}`, stock=`${dato.stock}`, imagen=`${dato.imagen}`);
            arrayProductos.push(producto);
        }
        imprimirProductos();  
    }
});
/*Esto que esta debajo lo estoy tratando de reemplazar por Ajax
const producto1 = new Producto(id=1,nombre="Tabaco Flandria Vainilla x 30gr", categoria="Tabaco", 450, peso="30gr", 0, marca="Flandria", sabor="Vainilla", 10, imagen="imagenes/img-tabacos/Flandria Vainilla x 30gr.png");
const producto2 = new Producto(id=2,nombre="Tabaco Flandria Silver x 30gr", categoria="Tabaco", 450, peso="30gr", 0, marca="Flandria", sabor="Silver", 10, imagen="imagenes/img-tabacos/Flandria Silver x 30gr.png");
const producto3 = new Producto(id=3,nombre="Tabaco Flandria ECO x 30gr", categoria="Tabaco", 450, peso="30gr", 0, marca="Flandria", sabor="Eco", 10, imagen="imagenes/img-tabacos/Flandria Eco x 30gr.png");
var arrayProductos = [producto1, producto2, producto3];
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
guardarLocal("listaProductos", JSON.stringify(arrayProductos));*/
$(`#filtros`).append(`<button id='btnCarrito' class="btn btn-dark">Ver Carrito</button><article id="mensajeCarrito" style="color:white;background-color: black"></article><br><br><button id='btnTerminar' class="btn btn-dark">Finalizar</button><article id="mensajeCompra" style="color:white;background-color: black"></article>`);
$(`#btnTerminar`).click(finalizarCompra);
$(`#btnCarrito`).click(verCarrito);

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
let precioTotal;

let iCarrito = 0;
let iCompra = 0;
let precioCarrito;
let cantidadProducto = 0;
let msjCarrito;
let msjCompra;
let msjCarritoVacio;
let msjCompraVacia;

    function agregarCarrito(cantidadElegida, idRef){
        if(iCompra<2){
            iCarrito = 0;
            precioTotal = cantidadElegida * arrayProductos[idRef-1].precio;
            const comprado = new ProductoComprado(carrito.length+1, arrayProductos[idRef-1].nombre, cantidadElegida, precioTotal);
            carrito.push(comprado);
            alert(`Agregaste al carrito ${cantidadElegida} unidades de ${arrayProductos[idRef-1].nombre} a un total de $ ${precioTotal}`);
            arrayProductos[idRef-1].restaStock(cantidadElegida);
            $(`#mensajeCarrito`).hide();
            $(`#mensajeCompra`).hide();
            msjCarrito = document.getElementById('listaCompras');
            msjCarrito.innerHTML = ' ';
        }
    }
    function verCarrito(){
        if(iCarrito == 0){
            iCarrito = 1;
            precioCarrito = 0;
            $("#listaCompras").show();
            if(carrito.length > 0){
                $(`#listaCompras`).append(`<h6>Carrito: </h6>`); 
                $(`#listaCompras`).append(`<ul id="listaProductos"></ul>`);
                for (itemsElegidos of carrito){
                    precioCarrito += itemsElegidos.precio;
                    $(`#listaProductos`).append(`<li>${itemsElegidos.nombre} x ${itemsElegidos.cantidad} uni - $${itemsElegidos.precio}</li>`)
                }
                $(`#listaCompras`).append(`<br><h6>Total: $${precioCarrito}</h6>`);
                
            }else{$(`#mensajeCarrito`).append(`<h6>Tienes 0 productos en el carrito</h6>`);}
            
        }
    }

    function finalizarCompra(){
        
            if(carrito.length > 0 & iCompra<2){
                iCompra = 2;
                msjCarrito = document.getElementById('listaCompras');
                msjCarrito.innerHTML = ' ';
                $(`#btnTerminar`).hide();
                $(`#btnCarrito`).hide();
                $("#carrito").show();
                precioCarrito = 0;
                console.log(`Cerramos su pedido!`);
                $(`#carrito`).append(`<h6>Cerramos tu pedido! </h6><br><h6>Repasemos, vas a llevar:</h6>`);
                $(`#carrito`).append(`<ul id="listaFinal"></ul>`);
                for (itemsElegidos of carrito){
                    $(`#listaFinal`).append(`<li>${itemsElegidos.nombre} x ${itemsElegidos.cantidad} uni - $${itemsElegidos.precio}</li>`)
                    precioCarrito += itemsElegidos.precio;
                }
    
                $(`#carrito`).append(`<br><h6>Por un total de $ ${precioCarrito}</h6><br><button id='btnPagar' class="btn btn-secondary btn-sm">Pagar</button><br><br><button id='btnVaciar' class="btn btn-secondary btn-sm">Vaciar Carrito</button>`);
                $(`#btnPagar`).click(pagarCompra);
                $(`#btnVaciar`).click(vaciarCarrito);
            }
            if(iCompra<1){
                $(`#mensajeCompra`).append(`<h6>Aun no seleccionaste productos</h6>`);
                iCompra = 1;
            }
    }    
    function vaciarCarrito(){
        msjCarrito = document.getElementById('listaCompras');
        msjCarrito.innerHTML = ' ';
        msjCompra = document.getElementById('carrito');
        msjCompra.innerHTML = ' ';
        carrito = [];
        productoElegido;
        cantidadElegida;
        precioTotal;

        iCarrito = 0;
        iCompra = 0;
        precioCarrito = 0;
        cantidadProducto = 0;
        msjCarritoVacio = document.getElementById('mensajeCarrito');
        msjCarritoVacio.innerHTML = ' ';
        msjCompraVacia = document.getElementById('mensajeCompra');
        msjCompraVacia.innerHTML = ' ';
        $(`#mensajeCarrito`).show();
        $(`#mensajeCompra`).show();
        $(`#btnTerminar`).show();
        $(`#btnCarrito`).show();
        
    }
    function pagarCompra(){
        alert (`Pagaste un total de $ ${precioCarrito} \n ¡Gracias por tu compra!`);
        vaciarCarrito();
    }
    
    imprimirProductos();  