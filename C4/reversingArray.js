var array = [1,2,3,4,5];

var ReverseArray = function(array) {
    var aux = [];
    
    for(var i = array.length - 1; i >= 0; i--) {
     aux.push(array[i]);
     }

    return aux;
};


var ReverseArrayInPlace = function(array) {
    var local;
    for(var i = 0; i < Math.floor(array.length/2); i++) {
       local = array[i];
       array[i] = array[array.length -1 - i];
       array[array.length -1 -i] = local;
    }
  return array;
};

console.log(ReverseArray(array));

ReverseArrayInPlace(array);
console.log(array);