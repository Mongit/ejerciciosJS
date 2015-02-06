"use strict";
const modulo=require("./../Cap2Minimun.js");
const mod=require("./../Cap2Recursion.js");
const m=require("./../Cap2BeanCounting.js");

exports.minTest=function(test)
{
  test.expect(3);
  let act=modulo.min(4,3);
  let exp=3;
  test.equal(act,exp);
  
  test.equal(modulo.min(10,9), 9);
  test.equal(modulo.min(-12,-4),-12);
  test.done();
}


exports.isEven=function(test)
{
  test.expect(4);
  let act=mod.isEven(24);
  let exp=true;
  test.equal(act,exp);

  test.equal(mod.isEven(-11), false);
  test.equal(mod.isEven(-12), true);
  test.equal(mod.isEven(21), false);
  test.done();
}

exports.countBs=function(test)
{
  test.expect(2);
  let a=m.countBs("BoBucho Pubucho TromBuchob");
  let e=3;
  test.equal(a, e);
  
  test.equal(m.countBs("Bibo BabE biBi bOBO BUBU"), 6);
  test.done();
}

exports.countChar=function(test)
{ 
  test.expect(2);
  let actual=m.countChar("el bebe esta llorando","e");
  let exp=4;
  test.equal(actual, exp);

  test.equal(m.countChar("Laurita Fue a la tiendita Y regresa rapidita","a"), 8);
  test.done();
}
