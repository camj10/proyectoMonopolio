const { ajaxPrefilter } = require("jquery");

let jug, propietario= [n,n,n,n,n,n,n,n,n,n,n];
btnDado.disabled = true;
//Prueba para ocultar inicialmente la pregunta de SI o NO
// var el = document.querySelector("#aparte");
//el.setAttribute("style", "background-color:darkblue;");
//document.querySelector('#aparte').style.display = "none"; 
//document.getElementById('aparte').innerHTML.style.backgroundColor= "blue";

jug =1;
function inicioJugar(){
    document.querySelector('#aparte').style.display = "none"; 
    alert("El juego ha iniciado");
    btnDado.disabled= false;
    // document.querySelector('#datos').textContent="Presione el dado";
    alert("Presione el dado");
    document.getElementById("btnJugar").style.visibility = "hidden";
}
function dado(){
    let posAct=0;
    let nroaleatorio = aleatorio();
    let fuente = "/static/img/L"+nroaleatorio+".jpg";
    document.querySelector('.img').setAttribute('src',fuente);
    alert("Debe moverse: "+nroaleatorio+" casillas");
    posAct=posAct+nroaleatorio;
    alert("Posicion actual: "+posAct);
    if(verificacion(posAct)){
        //Acá activar la opcion de comprar o no
        document.querySelector('#aparte').style.display = "flex"; 
        if(sino()==1){
            document.querySelector('#aparte').style.display = "none";
        }else if(sino==0){
            document.querySelector('#aparte').style.display = "none";
        }
        //No olvidar: Cambiar el texto Disponible sobre cada casilla que ya se haya vendido e ir agregando los nombres de los compradores
    } else{

    }


    alert("Jugador " + jug);
}
function aleatorio(){
    let nro = Math.floor(Math.random()*6)+1;
    console.log("El numero aleotorio es: "+nro);
    return nro;
} 
function verificacion(posAct){
    let casillaAVerificar = document.getElementById('c'+posAct+'d').innerHTML;
    if(casillaAVerificar=='Disponible'){
        return(1); 
    }else{
        return(0);
    }
}
// function btnPreg(){
//     setTimeout( function(){
//         document.querySelector('#aparte').style.display = "none"; 
//         },50);
//     //Acá falta configurar para poder tomar si es SI o No y mandar a la funcion
// }
function sino(){//NO FUNCIONA ASÍ, NO ACTUA CUANDO SE PRESIONA ALGUNO DE LOS BOTONES. BUSCAR OTRA MANERA
    //Probar que al tener onclick alguno de los botones, llame a una funcion que sea de SI y otra de NO, 
    //que nos permita retornar un valor de 1 o 0 a la función en la cual estaba trabajando (creo que era de dado)
    //Puede ser usando el return con el valor devuelto en la nueva función.
    //Ver si el nombre de la varible no, iterfiere de alguna manera en el funcionamiento de la función o no.
    let si = document.getElementById("si"); 
    let no = document.getElementById("no"); 
    if(si.onclick) return(1);
    else{
        return(0);
    }
    //Así funcionaba:
    //let si = document.getElementById("si"); // Encuentra el elemento "si" en el sitio
    // si.onclick = muestraAlerta; // Agrega función onclick al elemento
    //let no = document.getElementById("no"); // Encuentra el elemento "no" en el sitio
    // no.onclick = muestraAlerta; // Agrega función onclick al elemento
    // function muestraAlerta(evento) {
    //     alert("Evento onclick ejecutado!");
    // }
}
function muestraAlerta() {
    alert("Evento onclick de SI o NO ejecutado!");
}

//Para mostrar el ganador en datos:
// if(nroaleatorio1>nroaleatorio2){
//     document.querySelector('h1').textContent="Gana Jugador 1";
//  }
// const cuadro = document.getElementById('c1v').innerHTML;
// console.log(cuadro);
// console.log("Se removera la letra d en el primer recuadro");
// const disp = document.querySelector('#c1d');
// if( disp=='Disponible') 
