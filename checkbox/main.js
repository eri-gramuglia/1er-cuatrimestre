'use strict';
function crearH() {
  let miH1Ok = document.createElement("h1"); //creo el elemento h1
  let miH2NoOk = document.createElement("h2"); // creo el elemento h2

  miH1Ok.innerHTML = "El checkbox está seleccionado"; //agrego contenido al h1
  miH2NoOk.innerHTML = "El checkbox NO está seleccionado" ; // agrego contenido al h2
}
function validarCheckbox (){
let checked = OpCheckBox.checked;

    if (checked) {
      alert (miH1Ok);
    } else {
        alert(miH2NoOk);   
    }
}



let btn = document.getElementById("button"); //busca el boton en html
btn.addEventListener("click",crearH); //cuando escucha click ejecuta la funcion 

let OpCheckBox = document.querySelector(".checkbox");
OpCheckBox.addEventListener("change", validarCheckbox, false);