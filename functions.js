//creare a function value f
var f = function(a)
{
  console.log(a + 2);
};

//Declare g to be a function
function g(a, b)
{
  return a * b * 3.5;
}

//Function as Value(var f=function)
f(3);
//Declaration Notation(function g(x,y)) 
console.log("funcion g: "+g(1,2));
