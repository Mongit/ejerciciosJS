"use strict";
//bind relaciona una funcion con un objeto
function print() {
    for(var i = 0; i < arguments.length; i++) {
         console.log(arguments[i]);
    }
}

print("Hola", "Mundo");


var persona = {nombre: "Monse"};//objeto

function f(text) {
    console.log(text + " mi nombre es: " + this.nombre);
}
//bind call y apply sirven para hacer el contexto de f a ser el contexto de persona

var printCall = function(text) {
    f.call(persona,text);//manda en forma de string, argumentos separados por coma manda llamar la funcion directamenet
};

printCall("Hola con Call");

var printApply = function() {
    f.apply(persona, arguments);//manda en forma de array, le manda argumentos en un array de argumentos
};

printApply("Hola con Apply");//se le pasa a arguments, aqui se ponen los argumentos que van adentro del array

var printBind = function(text) {//le manda un obj a una funcion para q this tenga un conexto definido
  var bound = f.bind(persona);//regresa una funcion que ya esta bindeada y le pasas los parametros q quiera
  bound(text);
};

printBind("Hola con Bind");