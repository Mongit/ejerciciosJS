function greaterThan(n) {
    return function (m) { return m > n};
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

/* FOREACH
function forEach(array, action) {
for (var i = 0; i < array.length; i++)
action(array[i]);
}
forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
//
Wampeter
//
Foma
//
Granfalloon
*/

/* FILTERING AN ARRAY

function filter(array, test) {
var passed = [];
for (var i = 0; i < array.length; i++) {
if (test(array[i]))
passed.push(array[i]);
}
return passed;
}
console.log(filter(ancestry, function(person) {
return person.born > 1900 && person.born < 1925;
}));
//
[{name: "Philibert Haverbeke", ...}, ...]
*/


/*TRANSFORMING WITH MAP
function map(array, transform) {
var mapped = [];
for (var i = 0; i < array.length; i++)
mapped.push(transform(array[i]));
return mapped;
}
var overNinety = ancestry.filter(function(person) {
return person.died - person.born > 90;
});
console.log(map(overNinety, function(person) {
return person.name;
}));
//
["Clara Aernoudts", "Emile Haverbeke",
//
"Maria Haverbeke"]
*/


/*REDUCE
function reduce(array, combine, start) {
var current = start;
for (var i = 0; i < array.length; i++)
current = combine(current, array[i]);
return current;
}
console.log(reduce([1, 2, 3, 4], function(a, b) {
return a + b;
}, 0));
//
10
*/