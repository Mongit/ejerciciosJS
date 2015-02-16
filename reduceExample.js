var num = [1, 20, 300, 40, 51];

var expected = num.reduce(function(acumulado, actual, i, arr){
    return acumulado > actual ? acumulado : actual;
});

console.log(expected + " Deberia tener 300");