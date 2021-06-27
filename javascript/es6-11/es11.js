/*?
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
{
	const person1 = {
		name: 'Sonsy',
		job: {
			title: 'S/W Engineer',
			manager: {
				name: 'Bob'
			}
		}
	};
	const person2 = {
		name: 'Bob'
	};

	// 💩💩💩💩💩
	{
		function printManger(person) {
			console.log(person.job.manager.name);
		}
		printManger(person1);
		// printManger(person2);
	}

	// 💩💩💩
	{
		function printManger(person) {
			console.log(
				person.job //
					? person.job.manager
						? person.job.manager.name
						: undefined
					: undefined
			);
		}
		printManger(person1);
		printManger(person2);
	}

	// 💩
	{
		function printManger(person) {
			console.log(person.job && person.job.manager && person.job.manager.name);
		}
		printManger(person1);
		printManger(person2);
	}

	// ✨
	{
		function printManger(person) {
			console.log(person.job?.manager?.name);
		}
		printManger(person1);
		printManger(person2);
	}
}

console.clear();
/**
 * Nullish Coalescing Operator (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */
{
	// Logical OR operator
	// false: false, '', 0, null, undefined
	{
		const name = 'Sonsy';
		const userName = name || 'Guest';
		console.log(userName);
	}

	{
		const name = '';
		const userName = name || 'Guest';
		console.log(userName);
	}

	{
		const name = 0;
		const message = name || 'undefined';
		console.log(message);
	}

	// ✨
	{
		const name = '';
		const userName = name ?? 'Guest';
		console.log(userName);

		const num = 0;
		const message = num ?? 'undefined';
		console.log(message);
	}
}
