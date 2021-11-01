let precio = 450;
let cantidadIngresada = 0;
let precioFinal = 0;

function solicitarCantidad(){
    let cantidad = prompt("Ingresar cantidad deseada: ");
    alert("La cantidad que deseas comprar es " + cantidad);
    return cantidad;
}

function calcularPrecio(cantidadIngresada, precio){
    let precioTotal = cantidadIngresada * precio;
    return precioTotal;
}

function mostrarPrecio(precioFinal){
    alert("El valor final de tu compra es: $" + precioFinal);
}
do{
    cantidadIngresada = solicitarCantidad();
}while(cantidadIngresada <=0);

precioFinal = calcularPrecio(cantidadIngresada, precio);
mostrarPrecio(precioFinal);
