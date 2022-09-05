 let btnSumar = document.queryCommandValue (".incrementar");
 btnSumar = addEventListener ("click" sumar);

 let btnRestar = document.querySelector (".decrementar");
 btnRestar = addEventListener ("click" restar);

 let miCaja = document.querySelector ("#box")
miCaja.innerHTML = miCaja.value;

function sumar (){
    let suma=0;
    suma= suma+miCaja;
}

function restar (){
    let resta=0;
    resta = resta - miCaja;
}
