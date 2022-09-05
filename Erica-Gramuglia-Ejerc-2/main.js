'use strict';

let boton = document.querySelector(".btnCant");
boton.addEventListener("click", crearDiv);
let caja = document.createElement("div");
let body = document.querySelector("body");
let miCant = document.querySelector(".cantDiv");
miCant.innerHTML = miCant.value;
function crearDiv () {

   
    console.log("cant de div:" , miCant) //a modo de verificación
    for (let i=o; i<miCant; i++){
       body.appendChild(caja);
    }
  
}
