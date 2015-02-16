var a = [2,4,6,8,10];
var b = [1,3,5,7,9];


var reduce = function(array, combine, start) {
    var d;
    for (var i = 0; i < array.length; i++)
        d = (d, array[i]);       
    return d;    
};

console.log(reduce(a, function(a, b){
    return a.concat(b);
},0));

