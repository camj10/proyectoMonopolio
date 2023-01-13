btnDado.disabled = true;


const cuadro = document.getElementById('c1v').innerHTML;
console.log(cuadro);
console.log("Se removera la letra d en el primer recuadro");
const disp = document.querySelector('#c1d');
if( disp[0]=='d') console.log("Posicion 1 disponible ");
document.querySelector("#c1d").style.display = 'none';






function inicioJugar(){
    console.log("Inicio el juego");
    alert("El juego ha iniciado");
    btnDado.disabled= false;
    document.querySelector('#datos').textContent="Presione el dado";
}
function dado(){
    let nroaleatorio = aleatorio();
    let fuente = "/static/img/L"+nroaleatorio+".jpg";
    document.querySelector('.img').setAttribute('src',fuente);
    let jugador= 1;
    juego(jugador);
    alert("Jugador " + jugador);
    let datosparajuego = [jugador, nroaleatorio];
    juego(datosparajuego);
    //Para mostrar el ganador en datos:
// if(nroaleatorio1>nroaleatorio2){
//     document.querySelector('h1').textContent="Gana Jugador 1";
// }
    juego();
}
function aleatorio(){
    let nro = Math.floor(Math.random()*6)+1;
    console.log("El numero aleotorio es: "+nro);
    // var selectvalue = document.getElementById("c"+nro);
    // console.log("Prueba de select value es: "+ selectvalue);
    //var selectvalue = document.getElementById("c"+1), test = {{ tablero | tojson }};
    return nro;
}


// function juego(datosparajuego){
//     console.log("Ha ingresado a la ultima funcion juego.");
//     console.log("Jugador es: "+datosparajuego[0]);
//     console.log("Nro aleatorio enviado es: "+datosparajuego[1]);
// }
