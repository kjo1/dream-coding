// Q1. make a string out of an array
{
	const fruits = ['apple', 'banana', 'orange'];

	const madeString = fruits.join(', ');

	console.log(`Q1 - ${madeString}`);
}

// Q2. make an array out of a string
{
	const fruits = '🍎, 🥝, 🍌, 🍒';

	// let madeArray = fruits.map((element) => {
	// 	element;
	// });

	// console.log(`Q2 - ${madeArray} - ${typeof madeArray}`);
	// console.log(fruits.map((element) => {element}));

	let fruitsArray = [];

	fruitsArray.push(fruits);
	console.log('Q2 -', fruitsArray);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
	const array = [1, 2, 3, 4, 5];

	const reverseArray = array.reverse();

	console.log(`Q3 - ${reverseArray}`);
}

// Q4. make new array without the first two elements
{
	const array = [1, 2, 3, 4, 5];

	const newArray = array.slice(2, array.length);

	console.log(`Q4 - ${newArray}`);
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}
const students = [new Student('A', 29, true, 45), new Student('B', 28, false, 80), new Student('C', 30, true, 90), new Student('D', 40, false, 66), new Student('E', 18, true, 88)];

// Q5. find a student with the score 90
{
	const filteredStudents = students.filter((student) => student.score === 90);

	console.log(`Q5 - Student ${filteredStudents[0].name}`);
}

// Q6. make an array of enrolled students
{
	const enrolledStudents = students.filter((student) => student.enrolled === true);

	console.log('Q6 -', enrolledStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
	const scoresOnly = [];
	students.forEach((student) => scoresOnly.push(student.score));

	console.log('Q7 -', scoresOnly);
}

// Q8. check if there is a student with the score lower than 50
{
	const failedStudent = students.filter((student) => student.score < 50);

	console.log(`Q8 - Student ${failedStudent[0].name}`);
}

// Q9. compute students' average score
{
	// const sumStudentScore = students.score.reduce((acc, cur) => acc + cur.score);

	// using for loop
	// let total = 0;

	// for (let index = 0; index < students.length; index++) {
	// 	total += students[index].score;
	// }

	// console.log(total / students.length);

	const scoresOnly = [];
	students.forEach((student) => scoresOnly.push(student.score));

	const total = scoresOnly.reduce((acc, cur) => acc + cur);

	const average = total / scoresOnly.length;

	console.log('Q9 - ', average);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
	const stringScores = [];
	students.forEach((student) => stringScores.push(student.score));

	console.log('Q10 - ', stringScores.toString());
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
	const stringScores = [];
	students.forEach((student) => stringScores.push(student.score));

	console.log('Q10 b - ', stringScores.sort().toString());
}
