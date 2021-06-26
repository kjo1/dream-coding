// const num = 1;
// const num2 = 2;
// const result = num + num2;
// console.log(result);

// const num3 = 1;
// const num4 = 2;
// const result2 = num3 + num4;

// function add(num1, num2) {
// 	return num1 + num2;
// }

// const sum = add(3, 4);
// console.log(sum);

function add(num1, num2) {
	return num1 + num2;
}

function divide(num1, num2) {
	return num1 / num2;
}
function surprise(callback) {
	const result = callback(2, 3); // add(2, 3)
	console.log(result);
}

// surprise(add);
surprise(divide);

// function print(a, b) {
// 	// better to have meaningful names for parameters like name, age
// 	console.log(`${a} ${b}`);
// }

// print(8, 33);

// const doSomething = add;

// const result = doSomething(2, 3);
// console.log(result);
// const result2 = add(2, 3);
// console.log(result2);
