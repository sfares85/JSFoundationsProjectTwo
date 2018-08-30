// BONUS: Do sumOdds() without using the filterOdds() function and without using a .filter() method.

/**
 * Receives an array of numbers
 * Filters out odd numbers
 * Returns an array of the even numbers
 */
function filterEvens(numbers) {
	return numbers.filter(num => num%2 == 0)
}

/**
 * Receives an array of numbers
 * Filters out even numbers
 * Returns an array of the odd numbers
 */
function filterOdds(numbers) {
	return numbers.filter(num => num%2 != 0)
}

/**
 * Receives an array of numbers
 * Returns the sum of the odd numbers in that array
 */
function sumOdds(numbers) {
	let odds = filterOdds(numbers);
	let sum = 0;
	odds.forEach(num => {
		sum += num;
	})
	return sum;
}

/**
 * Receives an array of names
 * Makes the array into an array of pairs
 * Order of names and pairs doesn't matter
 * if the length of the array is odd, the last element is in an array on its own
 * Returns the array of pairs
 */
function makePairs(names) {
	let result = [];
	let pairs = [];

	while(names.length > 1) {
		pairs.push(names.pop());
		pairs.push(names.pop());
		result.push(pairs);
		pairs = [];
	}

	if (names.length) {
		result.push([names.pop()])
	}

	return result;
}

/**************************************************
The following code runs the functions defined above
***************************************************/
let numbers = [153,67,9,34,7,67,342,7,34,8656,2,124,5,43];
// let instructors = ["Hamza", "Mshary", "Aziz", "Hussein", "Fawaz"];

// // filterEvens
// evens = filterEvens(numbers);
// console.log(evens);

// sumOdds
sum = sumOdds(numbers);
console.log(sum);

// // makePairs
// let pairs = makePairs(instructors);
// console.log(pairs);