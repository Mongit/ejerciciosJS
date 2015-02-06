"use strict";

const modulo=require("./../sumar.js");

exports.sumarTest=function(test)
{
  test.expect(1);
  //asert
  let actual=modulo.sumar(1,2);
  let expected=3; 
  test.equal(actual, expected);
  test.done();
}


