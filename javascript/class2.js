class Counter {
	constructor(runEveryFiveTimes) {
		this.counter = 0;
		this.callback = runEveryFiveTimes;
	}

	increase(runIf5Times) {
		this.counter++;
		console.log(this.counter);
		if (this.counter % 5 === 0) {
			this.callback && this.callback(this.counter);
			// if (this.callback) {
			// 	this.callback(this.counter);
			// }
		}
	}
}
function printSomething(num) {
	console.log(`'Wow! ${num}'`);
}
function alertNum(num) {
	alert(`'alert! ${num}'`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

// const coolCounter = new Counter();

// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();

// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
