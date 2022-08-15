'use strict';

let miEntrada = document.querySelector(".myInputProd"); //trae el elemento del document (boton)
let miPrecio = document.querySelector(".myInputPrecio");
let miLista = document.querySelector (".myUl");
let listNumber =document.querySelector('mostrarListNumber')
let arregloPrecio=[];

let agregarProducto = () => {
    let miItem = document.createElement("li"); //agregamos a la lista un elemento, creando el elemento del tipo li
    miItem.innerHTML =  miEntrada.value; // accedemos al valor con innerHTML, le damos el valor q tiene la entrada input y accedemos al valor con .value 
    miLista.appendChild(miItem); //agregamos un elemento a la lista, un item, en el DOM
    miEntrada.value='';    //se vacía o borra la entrada de producto para volver a ingresar
    
    arregloPrecio.push(parseInt(miPrecio.value)); //se carga el arreglo con el input
    miPrecio.value=''; //se vacía o borra la entrada para volver a ingresar 
}

let botonAgregarProducto=document.querySelector(".addProdBtn"); //acá traigo el elemento con la class del boton
botonAgregarProducto.addEventListener("click",agregarProducto);  // acá el boton escucha el click para poder ir desp a la funcion

let botonCalcularSuma=document.querySelector(".totalBtn");
botonCalcularSuma.addEventListener("click",()=> {
    let suma=0;
    for (let i = 0; i < arregloPrecio.length; i++) {    //realiza la funcion de suma
        suma = suma + arregloPrecio[i];
    }
    document.getElementById('resultadoSuma').innerHTML=suma; //asigno el valor de suma al ID de P para q se escriba en p
    
    console.log("la suma es: ",suma); // los console.log son sólo para ver lo que contienen las variables
    console.log("mi arreglo desp del click", arregloPrecio);
    console.log("longitud de mi arreglo desp del click",arregloPrecio.length);
});
