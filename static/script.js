function inicio(){
    console.log("Inicio el juego");
    alert("El juego ha iniciado");
    var jugadoractual= 1;
    alert("Jugador " + jugadoractual);
}
function tirarDado(id){
    let posicion = getElementById("btnDado").value;
    // posicion= getElementById("id");
    console.log("Posicion es: "+posicion);
    alert("Posicion en dado "+posicion);
    // alert("El valor del dado es: "+ document.getElementById("btnDado").value);
    // console.log("El valor del dado es: "+ document.getElementById("btnDado").value);
}




// document.getElementById("button").onclick = function() {
//     setBackgroundColorById("paragraph", "blue");
// }

// document.getElementById("hover-this").onmouseover = function(){
//     setBackgroundColorById("body", "red");
// }

// document.getElementById("alert").onclick = function(){
//     alert(document.getElementById("popup-input").value);
// }

// function getValueFromId(id){
//     return document.getElementById(id).value;
// }

// function setBackgroundColorById(id, color){
//     document.getElementById(id).style = "background-color: " + color;
// }

// function mouseOverFunction(el){
//     el.style = "background-color: black";
// }