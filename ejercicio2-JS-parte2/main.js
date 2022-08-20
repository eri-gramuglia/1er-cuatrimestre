let arrBotones = document.querySelectorAll('.btn1');

arrBotones.forEach((element) => {
  element.addEventListener("click", ocultarBotones);
});
function ocultarBotones() {
  document.getElementById("divParrafo").classList.toggle("parrafoOculto");
}

