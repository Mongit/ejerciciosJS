"use strict";


var countBs = function(stringg) {
  var con=0;
  for(var i=0; i<stringg.length; i++) {
    if(stringg.charAt(i)==="B")
       con++;
  }
  return con;
}




function countChar(oracion, character) {
  var con=0;
  for(var i=0; i<oracion.length; i++) {
    if(oracion.charAt(i)===character)
      con++; 
  }
 
  return con;
}


exports.countBs = countBs;
exports.countChar = countChar;
