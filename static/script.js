function inicio(){
    console.log("Inicio el juego");
    alert("El juego ha iniciado");
    var jugadoractual= 1;
    alert("Jugador " + jugadoractual);
    
}
function dado(){
    let nroaleatorio = Math.floor(Math.random()*6)+1;
    console.log(nroaleatorio);
    let fuente = "/static/img/L"+nroaleatorio+".png";
    document.querySelector('.img').setAttribute('src',fuente);
    //Para mostrar el ganador en datos:
// if(nroaleatorio1>nroaleatorio2){
//     document.querySelector('h1').textContent="Gana Jugador 1";
// }
}