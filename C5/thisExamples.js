"use strict";//hay  un obj global con un this global 
this.persona = {//cada obj tendra su propio this
    nombre: "Monse",
    decirNombre: function(){
        console.log(this.nombre);//this = persona = obj//this no global
    }
};

this.persona.decirNombre();

var Persona = function() {//constructor
    this.apellido = "Jimenez";
    this.nombre = "monse2";
    this.decirApellido = function() {
        console.log(this.apellido);
    };
};

var otraPersona = new Persona();//nvo obj
otraPersona.decirApellido();
this.persona.decirNombre.call(otraPersona);
this.persona.decirNombre.apply(otraPersona);
var x = this.persona.decirNombre.bind(otraPersona);
x();
//this.persona.decirNombre();


