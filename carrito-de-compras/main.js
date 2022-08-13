'use strict';

let miEntrada = document.querySelector(".myInputProd");
let miPrecio = document.querySelector(".myInputPrecio");
let miLista = document.querySelector (".myUl");
let arregloPrecio=[];

let agregarProducto = () => {
    let miItem = document.createElement("li"); //agregamos a la lista un elemento, creando el elemento del tipo li
    
    miItem.innerHTML =  miEntrada.value; // accedemos al valor con innerHTML, le damos el valor q tiene la entrada input y accedemos al valor con .value 
    miLista.appendChild(miItem); //agregamos un elemento a la lista, un item, en el DOM
    miEntrada.value='';    //vaciamos la entrada de producto
   
    let ingresoPcio=miPrecio.value;
    for (let i=0; i<arregloPrecio.length; i++) { 
        arregloPrecio[i]= ingresoPcio;
    }
       miPrecio.value='';    //vaciamos la entrada de precio
       console.log("mi arreglo de precios es: ",arregloPrecio)
}

let calcularSumaPrecio = () => {
    let suma=0;
    for (let i=0; i<arregloPrecio.length; i++) { 
       suma= suma + arregloPrecio[i];
    }
 //cómo muestro la suma?
    console.log ("la suma es:  ",calcularSumaPrecio); 
}


let botonAgregarProducto=document.querySelector(".addProdBtn"); //acá traigo el elemento con la clase del boton
botonAgregarProducto.addEventListener("click",agregarProducto);  // acá el boton escucha el click para poder ir desp a la funcion

let botonCalcularSuma=document.querySelector(".totalBtn");
botonCalcularSuma.addEventListener("click",calcularSumaPrecio);