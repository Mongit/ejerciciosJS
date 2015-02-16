var deepEqual = function(a, b) {
    if(a === b) {  return true;  }
    
    if(a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;

    var propertiesInA = 0, propertiesInB = 0;
    
    for(var prop in a)
        propertiesInA += 1;
    
    for(var prop in b) {
        propertiesInB += 1;
        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
    }
        
     return propertiesInA == propertiesInB;    
    
};


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true