let añoActual = 2021;
let mesActual = 10;
let mesNacimiento = 0;
let diaNacimiento = 0;
let añoNacimiento = 0;



function solicitarFecha(){
    alert("Por favor, ten presente que está prohibida la venta de tabaco a personas menores de 18 años.");
    do{
        añoNacimiento = prompt("Ingresa un numero valido para tu año de nacimiento (aaaa):");
        let salida = "El año ingresado es: " + añoNacimiento;
        alert(salida);
    }while(añoNacimiento <= 0 || añoNacimiento > 2021);
    do {
        mesNacimiento = prompt("Ingresa un numero valido para tu mes de nacimiento (mm):");
        let salida = "El mes ingresado es: " + mesNacimiento;
        alert(salida);
    }while (mesNacimiento <= 0 || mesNacimiento > 12);
    do {
        diaNacimiento = prompt("Ingresa un numero valido para tu día de nacimiento (dd):");
        let salida = "El día ingresado es: " + diaNacimiento;
        alert(salida);
    }while (diaNacimiento <= 0 || diaNacimiento > 31);

    let salida = "Tu fecha de nacimiento es: " + diaNacimiento + "/" + mesNacimiento + "/" + añoNacimiento;
    alert(salida);

}

function calcularMayoria(añoActual, añoNacimiento, mesActual, mesNacimiento){
    let edad = añoActual - añoNacimiento;
    let meses = mesActual - mesNacimiento;

    if (edad >= 18) {
        if (meses >= 0) {
            console.log("Es mayor de edad");
            alert("Bienvenido a Blend&roll Tabaqueria Online.");
        }else{
            console.log("No es mayor de edad");
            alert("No tienes edad suficiente para acceder.");
        }
    }else{
        console.log("No es mayor de edad");
        alert("No tienes edad suficiente para acceder.");
    }
}

solicitarFecha();
calcularMayoria(añoActual, añoNacimiento, mesActual, mesNacimiento);

