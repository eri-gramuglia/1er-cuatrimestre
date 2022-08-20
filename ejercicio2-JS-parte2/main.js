let arrBotones = document.querySelectorAll("button");

arrBotones.forEach((element) => {
  element.addEventListener("click", ocultarBotones);
});
function ocultarBotones() {
  document.getElementById("parrafos").classList.toggle("ocultar");
}