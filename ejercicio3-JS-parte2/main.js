'use strict';

// la llamada de los objetos en el html se realizan por  CLASS

let miEntrada = document.querySelector(".myInput"); //la variable va a contener el valor que hay en el input y lo traemos con el queryselector
let miLista = document.querySelector (".myOl");  //lo rojo es la clase
let miIndice = document.querySelector("myInputOrden");


//let arregloTareas =[]; //voy a guardar la lista en un arreglo y lo defino al principio como vacio


let agregarTarea= ()=> {
    let miItem = document.createElement("li"); //agregamos a la lista un elemento, creando el elemento del tipo li
    miItem.innerHTML =  miEntrada.value; // accedemos al valor con innerHTML, le damos el valor q tiene la entrada input y accedemos al valor con .value 
    miLista.appendChild(miItem); //agregamos un elemento a la lista, un item, en el DOM
    miEntrada.value='';    //vaciamos la entrada
}

let eliminarUltTarea = () => { 
     miLista.removeChild(miLista.lastChild); //remueve el último hijo de mi lista.
}

let eliminarTodasLasTareas = () => {   //funcion que remueve toda la lista
    miLista.innerHTML = ''; // voy al contenido de la lista y le agrego vacio
}

function eliminarTareaIndicada() {
    let valor = miIndice.value;            
    miLista.removeChild(miLista.children[valor - 1]); //

}


let botonAgregar=document.querySelector(".addBtn"); //a;cá traigo el elemento con la clase del boton
botonAgregar.addEventListener("click",agregarTarea);  // acá el boton escucha el click para poder ir desp a la funcion

let botonEliminarUlt=document.querySelector(".removeBtn");
botonEliminarUlt.addEventListener("click",eliminarUltTarea);

let botonEliminarTodo=document.querySelector(".removeAllBtn");
botonEliminarTodo.addEventListener("click",eliminarTodasLasTareas);

let botonEliminarTarea=document.querySelector(".removeOrdenBtn");
botonEliminarTarea.addEventListener("click",eliminarTareaIndicada);