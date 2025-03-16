// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaracion de variables

let listaNombres = [];
let comprobarCampo = [];

function agregarAmigo(){
    //validación: Si el campo esta vacio, implementar un alert
    let comprobarCampo = document.getElementById('amigo').value;
    if (comprobarCampo == '' ) {
        alert('Por favor, inserte un nombre');
    } else {
    listaNombres.push(document.getElementById('amigo').value);
    console.log(listaNombres);
    let i = parseInt(listaNombres.length);
    console.log(typeof(i));
    agregarElemento(listaNombres);    
    
    //sortearAmigo(listaNombres, i);

    limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value ='';
    return;
}


function agregarElemento(cadena) {
        let li = document.createElement('li');
        let p = document.createElement('p');
        let contador = cadena.length - 1;
        p.appendChild(document.createTextNode(cadena[contador]));
        document.querySelector('#listaAmigos').appendChild(li).appendChild(p);
        return;  
}

function sortearAmigo() {
    if( listaNombres.length == 0) {
        alert('Por favor, inserte un nombre');
    } else {
        let indiceGenerado = Math.floor((Math.random()*listaNombres.length));
        //console.log('indice',indiceGenerado);
        let elementoHTML = document.getElementById('resultado');
        //console.log('Cadena',cadena[indiceGenerado]);
        elementoHTML.innerHTML = listaNombres[indiceGenerado];
        
    }
        
    return;
}


