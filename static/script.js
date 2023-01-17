let dinero= 1000; 
let prop=[]; 
let jug, propiedades= ['n','n','n','n','n','n','n','n','n','n','n']; 
let propiedadesCompradas=0;
btnDado.disabled = true;
var posAct=0; 

function inicioJugar(){ 
    alert("A jugar!");
    btnDado.disabled= false;
    // document.querySelector('#datos').textContent="Presione el dado";
    alert("Presione el dado");
    document.getElementById("btnJugar").style.visibility = "hidden";
} 
function dado(){
    let nroaleatorio = aleatorio();
    let fuente = "/static/img/L"+nroaleatorio+".jpg";
    document.querySelector('.img').setAttribute('src',fuente);
    alert("Debe moverse: "+nroaleatorio+" casillas");
    posAct=posAct+nroaleatorio;
    if(posAct>11){posAct=posAct-11;}
    document.getElementById('c'+posAct).style.backgroundColor="blue";
    alert("Posicion actual: "+posAct);
    alert("Dinero actual: "+dinero);
    setTimeout(function(){//Uso para ver la casilla pintada y que luego siga el juego
        if(verificacion(posAct)){
            let costo=document.getElementById('c'+posAct+'v').innerHTML;
            let nombrePropiedad= document.getElementById('c'+posAct+'n').innerHTML;
            alert(
                "costo = "+costo
            );
            if(dinero >= costo){
                alert("Dinero disponible para la compra");
                alert("Ahora la propiedad "+nombrePropiedad+" es suya");
                dinero= dinero-costo;
                propiedades[posAct-1]='ocupado';
                prop[posAct-1]=nombrePropiedad;
                propiedadesCompradas++;
                document.getElementById("c"+posAct+"d").style.visibility = "hidden";
                if(propiedadesCompradas<12){inicioJugar();}
                    else{gameover();} 
            }else{
                alert("Ya no posee suficiente dinero. Juego terminado");
                gameover();
            }
        } else{
            alert("Casilla ocupada");
            if(propiedadesCompradas<12){inicioJugar();}
            else{gameover();}
        }
    },500);
    return false;
}
function aleatorio(){
    let nro = Math.floor(Math.random()*6)+1;
    console.log("El numero aleatorio es: "+nro);
    return nro;
} 
function verificacion(posAct){
    let casillaAVerificar = document.getElementById('c'+posAct+'d').innerHTML;
    if((casillaAVerificar=='Disponible') && (propiedades[posAct-1]=='n')){
        return(1); 
    }else{
        return(0);
    }
}
function gameover(){
    alert("Ha terminado el juego con: "+propiedadesCompradas+" propiedades compradas");
    btnDado.disabled = true;
    btnJugar.disabled = true;
    document.querySelector(".tablero").style.visibility = "hidden";
}
















//Prueba para ocultar inicialmente la pregunta de SI o NO
// var el = document.querySelector("#aparte");
//el.setAttribute("style", "background-color:darkblue;");
//document.querySelector('#aparte').style.display = "none"; 
//document.getElementById('aparte').innerHTML.style.backgroundColor= "blue";

// jug =1;
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
