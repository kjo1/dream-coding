// falseL: 0, -0, '', null, undefined
// true: -1, 'hello', 'false'
let obj = {
	name: 'sonsy'
}; // undefined
if (obj) {
	console.log(obj.name);
}

obj && console.log(obj.name);
