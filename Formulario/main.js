let btn = document.querySelector ("#btnEnviar");

let nombre = document.getElementById ("nombre");
let apellido = document.getElementById ("apellido");
let mail = document.getElementById ("mail");
let consulta = document.getElementById ("consulta");

btn.addEventListener ("click"), () => {
    nombre.string (nombre.value);
    apellido.string (apellido.value);
    consulta.string (consulta.value);
    verificarTexto (nombre);
    verificarTexto (apellido);
    verificarComentar (consulta);
}

function verificarTexto(texto){
if ((texto!="")&&(texto.length>=3)&&(texto.length<=20)(typeof texto=="undefined"));
}
function verificarComentar(texto){
    if((texto=="")&&(typeof texto=="undefined")){
        console.log(comentario)
    };
}