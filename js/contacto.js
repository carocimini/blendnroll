const arrayMails = [];
const arrayContactos = [];

let boton = document.getElementById("btnEnviar");
boton.addEventListener("click", enviarConsulta);
class Contactos{
    constructor(id, name, mail, celu){
        this.id= id;
        this.name= name;
        this.mail= mail;
        this.celu= celu;
    }
}


function consultarContactos(){
    console.log ("Cantidad de Contactos: " + arrayContactos.length);
    console.log ("Todos los Contactos: " + arrayContactos.join("\n"));
}

function consultarMails(){
    console.log ("Cantidad de Mails: " + arrayMails.length);
    console.log ("Todos los mails: " + arrayMails.join("\n"));
}

function enviarConsulta(){

    let i = arrayContactos.length;
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var celular = document.getElementById("celu").value;
    var comentario = document.getElementById("comentario").value;

    const contacto0 = new Contactos(id= i+1, nombre, email, celular);
    arrayContactos.push(contacto0);
    arrayMails.push(email);
    const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
    guardarLocal("listaContactos", JSON.stringify(arrayContactos));
    alert(nombre + " gracias por tu consutla, te estaremos respondiendo a la brevedad.");

    console.table(arrayContactos);
}