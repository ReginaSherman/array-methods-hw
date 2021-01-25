const expect = require('chai').expect;
const {
	mayHoliday,
	wordsWithLessThanFourLetters,
	doesEveryWordContainA,
	doesAnyWordContainX,
	devLanguageCounts,
} = require('../lib/callbacks');
const bachelor = require('../lib/bachelor');

describe('callbacks.js:', () => {
	it('Question 1: should use .find() to return an object with the May Holiday', () => {
		expect(mayHoliday).to.deep.equal({ name: 'cinco de mayo', month: 'may' });
	});

	it('Question 2: should use .filter() to return words with less than four letters', () => {
		expect(wordsWithLessThanFourLetters).to.have.lengthOf(4);
		expect(wordsWithLessThanFourLetters).to.deep.equal([
			'cat',
			'tap',
			'bay',
			'ha',
		]);
	});

	it('Question 3: should use .every() to check if all words contain the letter "a"', () => {
		expect(doesEveryWordContainA).to.be.true;
	});

	it('Question 4: should use .some() to check if any words contain the letter "x"', () => {
		expect(doesAnyWordContainX).to.be.true;
	});

	it('Question 5: should use .reduce() to return an object with language counts', () => {
		expect(devLanguageCounts).to.deep.equal({
			javascript: 4,
			python: 3,
		});
	});
});
