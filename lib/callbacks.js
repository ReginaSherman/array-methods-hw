// For this assignment, you should not delete any of the starter code or data.
// You should create the callback function that each iteration
// method needs to meet each question's criteria.

const holidays = [
	{ name: 'valentines day', month: 'february' },
	{ name: 'cinco de mayo', month: 'may' },
	{ name: 'halloween', month: 'october' },
];

// Question 1: Given the array above, write the callback for 'find' to return
// the holiday object that occurs in the month of 'may'.

// For each of these prompts, you may write a separate callback function as shown below and pass it to the array method, or write an anonymous function for the array method.
function getMayHolidays(holiday) {
	return holiday.month == 'may';
}
const mayHoliday = holidays.find(getMayHolidays);
console.log(mayHoliday.name);

////
const words = ['cat', 'bath', 'orange', 'tap', 'bay', 'ha', 'extravagant'];

// Question 2: Given the array above, write the callback for 'filter' to return
// a new array that only has the words from the original that had less than four
// letters.

// Hint: The code below will throw an error until you pass a callback function to the array method.
const wordsWithLessThanFourLetters = words.filter(word => word.length < 4);
console.log(wordsWithLessThanFourLetters)

// Question 3: Given the same array of words, write the callback for 'every' to
// determine if all the words in the array contain the letter 'a'.
const doesEveryWordContainA = words.every(wordsWithA => wordsWithA.indexOf('a'));
console.log(doesEveryWordContainA);

// Question 4: Given the same array of words, write the callback for 'some' to
// determine if any word in the array contains the letter 'x'.
const doesAnyWordContainX = words.some(wordsWithX => wordsWithX.indexOf("x"));
console.log(doesAnyWordContainX)
// DO NOT MODIFY CODE BELOW THIS LINE
if (!this.window) {
	module.exports = {
		mayHoliday,
		wordsWithLessThanFourLetters,
		doesEveryWordContainA,
		doesAnyWordContainX,
	};
}
