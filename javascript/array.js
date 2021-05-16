'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits
// !tried myself with mdn
fruits.forEach((element) => console.log(element));

// !from the tutorial
// a. for (I was going to do this way)
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
	console.log(fruit);
}

console.clear();
// c. forEach
// ? before simplified
fruits.forEach(function (fruit, index, array) {
	console.log(fruit, index, array);
});

fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🥥', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the begginning
fruits.unshift('🥑', '🍒');
console.log(fruits);

// shift: remove an item from the begginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index postion
fruits.push('🥝', '🍇', '🍈');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍌', '🥭');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍉', '🍍'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🥭'));
console.log(fruits.indexOf('🥝'));
console.log(fruits.indexOf('🍋'));

// includes
console.log(fruits.includes('🥭'));
console.log(fruits.includes('🍋'));

// lastIndexOf
console.clear();
fruits.push('🍌');
console.log(fruits);
console.log(fruits.indexOf('🍌'));
console.log(fruits.lastIndexOf('🍌'));
