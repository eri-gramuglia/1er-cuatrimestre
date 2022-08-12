'use strict';


let miEntrada = document.querySelector(".myInput"); //va a contener el valor que hay en el input
let miLista = document.querySelector (".myOl");

let arregloTareas =[]; //voy a guardar la lista en un arreglo y lo defino al principio como vacio


let agregarTarea= ()=> {
    arregloTareas.push(miEntrada.value); //la nueva tarea la voy a poner al final de la lista con "PUSH"
    let miItem = document.createElement("li");
    miItem.innerHTML =  miEntrada.value; //vaciar la lista o igualarla a cero.  innerHTML es la propiedad para cacrgar la lista
    miLista.appendChild(miItem);
    miEntrada.value='';
    
}

let botonAgregar=document.querySelector(".addBtn");
botonAgregar.addEventListener("click",agregarTarea);