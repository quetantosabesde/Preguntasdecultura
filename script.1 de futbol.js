//arreglo contiene las respuestas correctas
let correctas=[1,2,1,1,4,4,1,4,2,3];

//arreglo donde se guardan las respuestas del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//funcion que toma el num de pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
    //guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    //el siguiente codigo es para poner en color blanco
    //el fondo de los imputs para cuando elige otra opcion
    //armo el id para seleccionar el section correspondiente
    id="p" + num_pregunta;

    labels= document.getElementById(id).childNodes;
    labels[3] .style.backgroundColor = "white";
    labels[5] .style.backgroundColor = "white";
    labels[7] .style.backgroundColor = "white";
    labels[9] .style.backgroundColor = "white";

    //doy color a label seleccionado
    seleccionada.ParentNode.style.backgroundColor = "none";

}

//funcion que compara los arreglos para saber cuantas estuvieran correctas
function corregir(){
    cantidad_correctas  = 0;
    for(i=0; i < correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            catidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}