// Nullish coalescing operator
// ❌ Bad Code 💩
function printMessage(text) {
	let message = text;
	if (text == null || text == undefined) {
		message = 'Nothing to display 😜';
	}
	console.log(message);
}

// ✅ Good Code ✨
function printMessage1(text) {
	const message = text ?? 'Nothing to display 😜';
	console.log(message);
}

// ? assign default value is no the right way
// * because null cannot be handled
// * 🚨 only undefined value will have the default value
function printMessage2(text = 'Nothing to display 😜') {
	console.log(text);
}

const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
	return null;
}
function fetchFromServer() {
	return 'Hiya from 💻';
}

printMessage1('Hello');
printMessage1(undefined);
printMessage1(null);

printMessage2('Hello');
printMessage2(undefined);
printMessage2(null);

// 🚨 Logical OR operator ||
function printMessage3(text) {
	const message = text || 'Nothing to display 😜';
	console.log(message);
}

printMessage3('Hello');
printMessage3(undefined);
printMessage3(null);
printMessage3(0);
printMessage3(-0);
printMessage3(false);
printMessage3('');
printMessage3(``);
