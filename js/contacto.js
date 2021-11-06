const arrayMails = []

function obtenerDatos(){
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var celu = document.getElementById("celu").value;
    var lista = [name, mail, celu]
    
    for (let i=0; i<3; i++){
        alert("Campo #" + i + ": " + lista[i]);
    }

    arrayMails.push(mail);
    console.log ("Cantidad de Mails: " + arrayMails.length);
    console.log ("Todos los mails: " + arrayMails.join("\n"));
}