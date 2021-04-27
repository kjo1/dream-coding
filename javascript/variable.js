// 1. User strict
// added in ES 5
// use this for Valina Javascript.

'use strict';
console.log(age1);
// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
	let name = 'me';
	console.log(name);
	name = 'hello';
	console.log(name);

	console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)

console.log(age1);
age1 = 4;
console.log(age1);
var age1;

// has no block scope

{
	age2 = 4;
	var age2;
}
console.log(age2);

// name = 4;
// let name;

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - spicula numeric values: infinity, -infinity, negative infinity
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**52) ~ 2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;
