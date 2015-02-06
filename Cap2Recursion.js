//por que nunca llegar a 0 o 1
//haciendo un if donde al hacer la recursion sume 2 si llega a 0 o si llega a+1
"use strict";

var isEven=function(number) {

  if(number === 0) return true;

  if(number === 1) return false;

  let esNegativo = number < 0;
  if (esNegativo)
    number = number * -1;

  return isEven(number - 2);  
}


exports.isEven = isEven;

