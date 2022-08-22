
'use strict';

let boton = document.querySelector(".btnOnOff");
boton.addEventListener('click', desaparecer);

function desaparecer (){
  let caja = document.querySelector("divOnOff");
  caja.classList.toggle("desaparece");
};

//busco el boton, le agrego el evento click, lo asocio a una funcion 
  // dentro de la funcion busco el elemento div y cambio la clase css con toggle (ALTERNAR)