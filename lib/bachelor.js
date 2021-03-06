// ARRAY METHODS HW

// Welcome to Season 65 of the Bachelor! Our Bachelor, Kolton, needs your help remembering his beautiful contestants.
// You have received an array of objects representing data about the women competing for Kolton's heart. Follow
// the prompts to jog Kolton's memory using array methods.

const contestants = [
	{
		firstName: 'Katie',
		lastInitial: 'M.',
		city: 'Los Angeles',
		state: 'CA',
		age: 24,
		zodiacSign: 'Aries',
		signUpDate: 2011,
	},
	{
		firstName: 'Lauren',
		lastInitial: 'K.',
		city: 'Philadelphia',
		state: 'PA',
		age: 26,
		zodiacSign: 'Gemini',
		signUpDate: 1994,
	},
	{
		firstName: 'Sara',
		lastInitial: 'T.',
		city: 'Encinitas',
		state: 'CA',
		age: 28,
		zodiacSign: 'Scorpio',
		signUpDate: 2012,
	},
	{
		firstName: 'Yasmein',
		lastInitial: 'A.',
		city: 'Santa Barbara',
		state: 'CA',
		age: 25,
		zodiacSign: 'Aries',
		signUpDate: 2001,
	},
	{
		firstName: 'Danielle',
		lastInitial: 'R.',
		city: 'Boston',
		state: 'MA',
		age: 25,
		zodiacSign: 'Aries',
		signUpDate: 2008,
	},
	{
		firstName: 'Marybeth',
		lastInitial: 'M.',
		city: 'New York',
		state: 'NY',
		age: 29,
		zodiacSign: 'Aquarius',
		signUpDate: 1999,
	},
	{
		firstName: 'Jillian',
		lastInitial: 'L.',
		city: 'Grand Rapids',
		state: 'MI',
		age: 27,
		zodiacSign: 'Libra',
		signUpDate: 2000,
	},
	{
		firstName: 'Krissy',
		lastInitial: 'M.',
		city: 'Raleigh',
		state: 'NC',
		age: 28,
		zodiacSign: 'Pisces',
		signUpDate: 2019,
	},
];

// Question 1

// Kolton is from California and wants to know how many contestants are from his home state. Return the number of contestants
// from California.
// Hint: After filtering the contestants from California, you can use `.length` to find the number!

const numberOfContestantsFromCalifornia = contestants.filter(homeState => homeState.state === 'CA');

console.log(numberOfContestantsFromCalifornia.length);


// Question 2

// Kolton recently read in his horoscope that he is likely to match with an Aries. Return the number of contestants
// from California who are also an Aries.

const numberWhoAreFromCaliAndAries = numberOfContestantsFromCalifornia.filter(sign => sign.zodiacSign === "Aries");
console.log(numberWhoAreFromCaliAndAries.length);

// Question 3

// Help Kolton out! The show has begun, and he needs to start a conversation with the contestants. Return an array
// where each object will have a new property 'icebreaker' with the following string value:

// Hi < firstName here >, what do you like the most about < city here >?

const contestantsArrayWithIcebreakers = contestants.map(icebreaker => contestants.icebreaker 
	= `Hi ${icebreaker.firstName}, what do you like the most about ${icebreaker.city}?`)

console.log(contestantsArrayWithIcebreakers);
// Question 4

// Kolton is nervous that an old flame from Michigan has made it onto his season. Return:

// true if at least one contestant is from MI; or
// false if there will be no contestants from MI.

const areThereContestantsFromMI = contestants.some(fromMichigan => fromMichigan.state = "MI");
console.log(areThereContestantsFromMI);

// Question 5

// Aries is of the most assertive astrological signs. Let's find out which Aries contestant signed up first,
// if there are any. Return one of the following strings:

// 'Hi, my name is < firstName here > < lastInitial here > from < city here >, and I was the first to sign up!'; or
// 'There will be no Aries contestants this season.' if there are no Aries contestants.

// Hint: You may need to use multiple array methods!

const firstAries = contestants
	.filter(sign => sign.zodiacSign === "Aries")
	.sort((aries1, aries2) => aries1.signUpDate - aries2.signUpDate)
	

//console.log(firstAries);
console.log(`Hi, my name is ${firstAries[0].firstName} ${firstAries[0].lastInitial} from ${firstAries[0].city}, and I was the first to sign up!`);

// DO NOT MODIFY CODE BELOW THIS LINE
if (!this.window) {
	module.exports = {
		numberOfContestantsFromCalifornia,
		numberWhoAreFromCaliAndAries,
		contestantsArrayWithIcebreakers,
		areThereContestantsFromMI,
		firstAries,
	};
}
