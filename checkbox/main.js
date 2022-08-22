let btn = document.getElementById("button"); //busca el boton en html
btn.addEventListener("click",saludo); //cuando escucha click ejecuta la funcion saludar

function saludo (){
    let contenido=document.getElementById


   let h1SaludoOk = document.create("h1"); //creo el elemento h1
   let h2SaludoNoOk = document.create ("h2"); // creo el elemento h2

   h1SaludoOk.className("saludoOk"); // le asigno una class
   h2SaludoNoOk.className("saludoNoOk"); // le asigno una class

   h1SaludoOk.innerHtml  ("Sí está seleccionado el checkBox"); //agrego contenido
   h2SaludoNoOk.innerHtml ("No está seleccionado el ckeckBox") //agrego contenido
    console.log(h1SaludoOk)

    if (document.getElementById ("#checkbox").checked){
      alert (h1SaludoOk);
      console.log(h1SaludoOk)
    }
    else {
        alert(h2SaludoNoOk);
        console.log(h2SaludoNoOk);
    }
}
