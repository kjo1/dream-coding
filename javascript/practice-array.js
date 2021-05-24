const dailyWork = ['Coding', 'Reading', 'Shadowing'];

console.log(dailyWork);
console.log(dailyWork.length);

const numbers = [7, 3, 1];

console.log(numbers);

console.log(typeof numbers[0]);
console.log(typeof numbers[0].toString());
console.log(typeof numbers.toString);

const emptyArray = [];

console.clear();

numbers.toLocaleString();
console.log(numbers);

emptyArray.toLocaleString();
console.log(emptyArray);

numbers.pop();
console.log(numbers);

numbers.push(23);
console.log(numbers);

const strings = ['Happy', 'Hacking', 'Keyboard'];

const concatArray = numbers.concat(strings);
console.log(concatArray);

console.log(concatArray.join(' + '));

console.log(concatArray.shift());

console.clear();

console.log(concatArray);
const shiftedConcatArray = concatArray.shift();
console.log(shiftedConcatArray);

console.log(concatArray.reverse());

console.log(concatArray.shift());

console.clear();
const newArray = [1, 4, 3, 2, 6, 5];

// const shiftedNewArray = newArray.shift();

// console.log(shiftedNewArray);

// console.log(newArray.slice(1, 3));

// console.log(newArray.sort());
console.log(newArray);
newArray.splice(0, 1, 0, 99);
console.log(newArray);

console.log(newArray.unshift(22, 33, 33, 33));

console.log(newArray);

console.log(newArray.indexOf(99));

const searchNumber = 33;

console.log(newArray.lastIndexOf(searchNumber));

console.log(newArray.indexOf(searchNumber));

// console.clear();

/*
for (let i = 0; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log('FizzBuzz');
	} else if (i % 3 == 0) {
		console.log('Fizz');
	} else if (i % 5 == 0) {
		console.log('Buzz');
	} else {
		console.log(i);
	}
}
*/

const isBelowHundred = (currentValue) => currentValue < 100;

console.log(newArray.every(isBelowHundred));

const isBelowForty = (currentValue) => currentValue < 40;

console.log(newArray.some(isBelowForty));

newArray.forEach((element) => console.log(element));

const mapArray = newArray.map((x) => x * 2);

console.log(mapArray);

const filterArray = newArray.filter((number) => number > 30);

console.log(filterArray);

const reducer = (acc, cur) => acc + cur;

console.log(newArray.reduce(reducer));

console.log(newArray.reduce(reducer, 60));


