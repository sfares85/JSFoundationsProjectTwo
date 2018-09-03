// BONUS: Do sumOdds() without using the filterOdds() function and without using a .filter() method.
// BONUS: Do the functions stateNamesLongerThan() and numberOfStateNamesLongerThan() each in a single line.
// BONUS: use .reduce() for the sumOdds() and count() functions

/**
 * Receives an array of numbers
 * Filters out odd numbers
 * Returns an array of the even numbers
 *
 * Example usage:
 *
 *     filterEvens([1, 2, 3, 4, 5])
 *     returns [2, 4]
 *
 */
function filterEvens(numbers) {
	return numbers.filter(num => num%2 == 0)
}

/**
 * Receives an array of numbers
 * Filters out even numbers
 * Returns an array of the odd numbers
 *
 * Example usage:
 *
 *     filterOdds([1, 2, 3, 4, 5])
 *     returns [1, 3, 5]
 *
 */
function filterOdds(numbers) {
	return numbers.filter(num => num%2 != 0)
}

/**
 * Receives an array of numbers
 * Returns the sum of the odd numbers in that array
 *
 * Example usage:
 *
 *     sumOdds([1, 2, 3, 4, 5])
 *     returns 9
 *
 */
function sumOdds(numbers) {
	let odds = filterOdds(numbers);
	let sum = 0;
	odds.forEach(num => {
		sum += num;
	})
	return sum;
}


let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


/**
 * Receives a number (`minLength`)
 * Returns an array of the states with names longer than `minLength`
 *
 * Example usage:
 *
 *     stateNamesLongerThan()
 *     returns [ 'joy of painting', 'sublime text', 'joy of painting' ]
 *
 */
const stateNamesLongerThan = function(minLength) {
	return states.filter(state => state.length > minLength);
}

/**
 * Receives a number (`minLength`)
 * Returns the number of states that are larger than `minLength`
 *
 * Example usage:
 *
 *     numberOfNamesLargerThan()
 *     returns 
 *
 */
const numberOfStateNamesLongerThan = function(minLength) {
	return stateNamesLongerThan(minLength).length
}

/**
 * Receives a state (`newName`) and a length (`len`)
 * Replaces all states with length equal to `len` with `newName`.
 * Returns the new array.
 *
 * Example usage:
 *
 *     replaceStateNames()
 *     returns [ 'full house',
 *               'huehuehue',
 *               'abraaj',
 *               'coded',
 *               'full house',
 *               'joy of painting',
 *               'huehuehue',
 *               'rebound',		<----
 *               'huehuehue',
 *               'joy of painting' ]
 *
 */
const replaceStateNames = function(newName, len) {
	return states.map(state => {
		if (state.length === len) {
			return newName;
		} else {
			return state;
		}
	})
}

/**
 * Receives a string
 * Returns the number of states with names that contain that string
 *
 * Example usage:
 *
 *     count("New")
 *     returns 4
 *
 */
const count = function(repeatedString) {
	let count = 0;
	states.forEach(state => {
		if (state.includes(repeatedString)) {
			count++;
		}
	})
	return count;
}


/**************************************************
The following code runs the functions defined above
***************************************************/
let numbers = [153,67,9,34,7,67,342,7,34,8656,2,124,5,43];

// filterEvens
let evens = filterEvens(numbers);
console.log("EVENS:");
console.log(evens);

// sumOdds
let sum = sumOdds(numbers);
console.log("\n--------------------------")
console.log("SUM ODDS:");
console.log(sum);

// stateNamesLongerThan
let largeNames = stateNamesLongerThan(10);
console.log("\n--------------------------")
console.log("NAMES LARGER THAN:");
console.log(largeNames);

// numberOfStateNamesLongerThan
let numOfLargeStateNames = numberOfStateNamesLongerThan(10);
console.log("\n--------------------------")
console.log("NUMBER OF STATE NAMES LARGER THAN:");
console.log(numOfLargeStateNames);

// replaceStateNames
let newNames = replaceStateNames("REBOUND", 12);
console.log("\n--------------------------")
console.log("REPLACE STATE NAMES:");
console.log(newNames);

// count
let occurances = count("New");
console.log("\n--------------------------")
console.log("COUNT:");
console.log(occurances);

// How can you know the number of states with names that contain multiple words?