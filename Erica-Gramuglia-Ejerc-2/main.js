'use strict';

let boton = document.querySelector(".btnCant");
boton.addEventListener("click", crearDiv);

function crearDiv () {

    let caja = document.createElement("div");
    let body = document.querySelector("body");

    let miCant = document.querySelector(".cantDiv");
    miCant.innerHTML = miCant.value;
    console.log("cant de div:" , miCant) 
    
    for (let i=o; i<miCant.value; i++){
       (body.appendChild(caja))
    }
}
