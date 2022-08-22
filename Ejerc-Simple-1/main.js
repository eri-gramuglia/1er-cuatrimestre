'use strict';

let btn = document.querySelector(".btnIngreso");
btn.addEventListener("click", ingreso);

function ingreso () {
let miPos = document.querySelector(".ingresoPos");
let miNeg = document.querySelector(".ingresoNeg");

miPos.innerHTML = parseInt(miPos.value);
miNeg.innerHTML = parseInt(miNeg.value);
/* alert(miPos.value); */

if (miPos.value>=0) {
    alert ("Se ingresó un número positivo en input 1")
} else {
    alert ("ingresó un número negativo en input 1")
       }
 if (miNeg.value>=0) {
        alert ("Se ingresó un número positivo en input 2")
    } else {
        alert ("ingresó un número negativo en input 2")
           }


    }
