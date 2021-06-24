// declare functions
function doSomething(add) {
	console.log(add);
	const result = add(2, 3);
	console.log(result);
}

function add(a, b) {
	const sum = a + b;
	return sum;
}

// // call functions
// doSomething(add);

const addFun = add;
console.log(addFun);
addFun(1, 2);
