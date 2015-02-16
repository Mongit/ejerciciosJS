var arr = [1,2,3,4,5];
var pares = [2,4,6,8];

var inSet = function(elArray, n) {
    return elArray.indexOf(n) != -1;
}

var bound = inSet.bind(null, pares);

var enPares = arr.filter(function(n) {
    bound(n);
});

var enPares1 = arr.filter(bound);

var enPares = arr.filter(function(n) {
    inSet(pares, n);
});
