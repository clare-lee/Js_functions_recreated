// myEach
const arr = [1,2,3];

console.log("myEach: ")
arr.myEach( x => console.log(x) );

console.log("forEach: ")
arr.forEach( x => console.log(x) );

// myMap
const map_arr =['bibi', 'jhgfghj', 'kmijnuhb']

console.log("myMap: ")
console.log( map_arr.myMap(function(callbackFn) {return callbackFn;}) )

console.log("Map: ")
console.log( map_arr.map(function(callbackFn) {return callbackFn;}) )

// myFilter
const filter_arrr =['bibi', 'jhgfghj', 'kmijnuhb']

console.log("myFilter: ")
console.log( filter_arrr.myFilter(function(callbackFn) {return callbackFn.length < 8;}) )

console.log("Filter: ")
console.log( filter_arrr.filter(function(callbackFn) {return callbackFn.length < 8;}) )

// mySome
const some_arr =['bibibibibibibib', 'jgj', 'kmijnuhjhgfdb']

console.log("mySome: ")
console.log( some_arr.mySome(function(callbackFn) {return callbackFn.length < 8;}) )

console.log("Some: ")
console.log( some_arr.some(function(callbackFn) {return callbackFn.length < 8;}) )

// myEvery 
// used test from developer.mozilla.org
const isBelowThreshold = (currentValue) => currentValue < 40;

const every_arr = [1, 30, 39, 29, 10, 13];
console.log(every_arr.every(isBelowThreshold));    // expected output: true

// myReduce
// used test from developer.mozilla.org

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(array1.reduce(reducer));    // 1 + 2 + 3 + 4 =1 0
console.log(array1.reduce(reducer, 5)); // 5 + 1 + 2 + 3 + 4 = 15