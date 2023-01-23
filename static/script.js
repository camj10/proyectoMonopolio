let dinero= 1000; 
let prop=[]; 
let jug, propiedades= ['n','n','n','n','n','n','n','n','n','n','n']; 
let propiedadesCompradas=0;
btnDado.disabled = true;
var posAct=0; 

function inicioJugar(){ 
    alert("A jugar!");
    btnDado.disabled= false;
    alert("Presione el dado");
    document.getElementById("btnJugar").style.visibility = "hidden";
    document.getElementById("datos").innerHTML = "Dinero actual: "+dinero;
} 
function dado(){
    let nroaleatorio = aleatorio();
    let fuente = "/static/img/L"+nroaleatorio+".jpg";
    document.querySelector('.img').setAttribute('src',fuente);
    alert("Debe moverse: "+nroaleatorio+" casillas");
    posAct=posAct+nroaleatorio;
    if(posAct>11){posAct=posAct-11;}
    document.getElementById('c'+posAct).style.backgroundColor="orange";
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
