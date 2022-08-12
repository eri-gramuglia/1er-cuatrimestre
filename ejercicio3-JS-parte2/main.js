'use strict';


let miEntrada = document.querySelector(".myInput"); //va a contener el valor que hay en el input
let miLista = document.querySelector (".myOl");

let arregloTareas =[]; //voy a guardar la lista en un arreglo y lo defino al principio como vacio


    



let agregarTarea= ()=> {
    let nuevaTarea= miEntrada.value; //me da o devuelve el contenido del input  
    arregloTareas.push(nuevaTarea); //la nueva tarea la voy a poner al final de la lista con "PUSH"
    miEntrada.value="";
    let miItem = document.createElement("li");
    miItem.innerHTML =  nuevaTarea; //vaciar la lista o igualarla a cero.  innerHTML es la propiedad para cacrgar la lista
    miLista.appendChild(miItem);
    
}

let botonAgregar=document.querySelector(".addBtn");
botonAgregar.addEventListener("click",agregarTarea);