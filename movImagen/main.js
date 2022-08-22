let caja = document.createElement("div");
let body = document.querySelector("body");
body.appendChild(caja);
let lista = document.createElement("ul");
lista.classList.add("list-group");
caja.appendChild(lista);

let elemento1 = document.createElement("li");
let texto1 = document.createTextNode("Item 1");
elemento1.classList.add("list-group-item");
elemento1.classList.add("active");
elemento1.appendChild(texto1);
lista.appendChild(elemento1);

let elemento2 = document.createElement("li");
let texto2 = document.createTextNode("Agregado desde el hermano");
elemento2.classList.add("list-group-item");
elemento2.appendChild(texto2);
// agregamos un elemento a parti del hermano
elemento1.parentElement.appendChild(elemento2);

// Se reasigna la lista ul a body como padre
// body.appendChild(lista);

caja = document.createElement("div");
let img = document.createElement("img");
img.src =
  "https://ahseeit.com/spanish/king-include/uploads/2021/03/152397307_343249596916112_8257850045027882856_n-8491595013.jpg";
caja.appendChild(img);
body.appendChild(caja);

let boton = document.createElement("button");
boton.appendChild(document.createTextNode("Alternar"));
boton.classList.add("btn");
boton.classList.add("btn-success");
body.appendChild(boton);
boton.addEventListener("click", () => {
  // metodo utilizando clases y toggle
  caja.classList.toggle("alternar_img");
});

// metodo modificando display desde javascript

// if (caja.style.display === "none") {
//   caja.style.display = "block";
// } else {
//   caja.style.display = "none";
// }
