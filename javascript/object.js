'use strict';
// Objects
// one of the JavaScript;s data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instaces of Object
// object = { key : value };

// ! 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
	console.log(person.name);
	console.log(person.age);
}

const me = { name: 'me', age: 4 };
print(me);

// with JavaScript magic (dynamically typed language)
// cna add properties later
me.hasJob = true;
console.log(me.hasJob);

// can delete properties later
delete me.hasJob;
console.log(me.hasJob);

// ! 2. Computed
// key should be always string
console.log(me.name); // mostly use . to call value especially when coding
console.log(me['name']); // when deciding on runtime?
me['hasJob'] = true;
console.log(me.hasJob);

function printValue(obj, key) {
	console.log(obj[key]);
}
printValue(me, 'name');
printValue(me, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('me', 30);

console.log(person4);

// 4. Constructor function
function Person(name, age) {
	// this = {}
	this.name = name;
	this.age = age;
	// return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in me);
console.log('age' in me);
console.log('random' in me);
console.log(me.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in me) {
	console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// * new way
for (let value of array) {
	console.log(value);
}

// * old way
// for (let i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'me', age: '20' };
const user2 = user;
// user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
	user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
