const { ajaxPrefilter } = require("jquery");
let respCompra;
let dinero1= 1000; let dinero2=1000;
let prop1=[]; let prop2=[];
let jug, propietario= [n,n,n,n,n,n,n,n,n,n,n];
btnDado.disabled = true;
btnResp.disabled = true;
//Prueba para ocultar inicialmente la pregunta de SI o NO
// var el = document.querySelector("#aparte");
//el.setAttribute("style", "background-color:darkblue;");
//document.querySelector('#aparte').style.display = "none"; 
//document.getElementById('aparte').innerHTML.style.backgroundColor= "blue";

// jug =1;
function inicioJugar(){
    document.querySelector('#aparte').style.display = "none"; 
    alert("El juego ha iniciado");
    btnDado.disabled= false;
    // document.querySelector('#datos').textContent="Presione el dado";
    alert("Presione el dado");
    document.getElementById("btnJugar").style.visibility = "hidden";
}
function dado(){
    var posAct=0;
    let nroaleatorio = aleatorio();
    let fuente = "/static/img/L"+nroaleatorio+".jpg";
    document.querySelector('.img').setAttribute('src',fuente);
    alert("Debe moverse: "+nroaleatorio+" casillas");
    posAct=posAct+nroaleatorio;
    alert("Posicion actual: "+posAct);
    if(verificacion(posAct)){
        document.querySelector('#aparte').style.display = "flex"; 
        btnResp.disabled= false;
    } else{
        alert("Casilla ocupada");
        inicioJugar();
    }
}
function aleatorio(){
    let nro = Math.floor(Math.random()*6)+1;
    console.log("El numero aleatorio es: "+nro);
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


//Para mostrar el ganador en datos:
// if(nroaleatorio1>nroaleatorio2){
//     document.querySelector('h1').textContent="Gana Jugador 1";
//  }
// const cuadro = document.getElementById('c1v').innerHTML;
// console.log(cuadro);
// console.log("Se removera la letra d en el primer recuadro");
// const disp = document.querySelector('#c1d');
// if( disp=='Disponible') 
function verificarRespuestas(){
    alert("Boton enviar activado");
    var myForm= document.forms["quizForm"];
    if(myForm["p1"].value===null || myForm["p1"].value===""){
        alert("Favor responde la pregunta");
        return false;
    }else{
        if(myForm["p1"].value == 'si'){
            alert("Ha respondido si");
            document.querySelector('#datos').textContent="si";
            respCompra= 1;
            return false;
        } else if(myForm["p1"].value == 'no'){
            alert("Ha respondido no");
            document.querySelector('#datos').textContent="no";
            respCompra= 0;
            return false;
        }
    }
}