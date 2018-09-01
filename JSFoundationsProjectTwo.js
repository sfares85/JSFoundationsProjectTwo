// BONUS: Do sumOdds() without using the filterOdds() function and without using a .filter() method.
// BONUS: Do the functions logger() toCelsius() hottestDays() logHottestDays() each in a single line.

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

let names = ["full house", "huehuehue", "abraaj", "coded", "full house", "joy of painting", "huehuehue", "sublime text", "huehuehue", "joy of painting"]

/**
 * Receives a number (`maxLength`)
 * Returns an array of the names whose length is larger than `maxLength`
 *
 * Example usage:
 *
 *     namesLargerThan(10)
 *     returns [ 'joy of painting', 'sublime text', 'joy of painting' ]
 *
 */
const namesLargerThan = function(maxLength) {
	return names.filter(name => name.length > maxLength);
}

/**
 * Receives a number (`maxLength`)
 * Returns the number of names that are larger than `maxLength`
 *
 * Example usage:
 *
 *     numberOfNamesLargerThan(10)
 *     returns 3
 *
 */
const numberOfNamesLargerThan = function(maxLength) {
	return namesLargerThan(maxLength).length
}

/**
 * Receives a name (`newName`) and a length (`len`)
 * Replaces all names with length equal to `len` with `newName`.
 * Returns the new array.
 *
 * Example usage:
 *
 *     replaceNames()
 *     returns [ 'full house',
 *               'huehuehue',
 *               'abraaj',
 *               'coded',
 *               'full house',
 *               'joy of painting',
 *               'huehuehue',
 *               'rebound',
 *               'huehuehue',
 *               'joy of painting' ]
 *
 */
const replaceNames = function(newName, len) {
	return names.map(name => {
		if (name.length === len) {
			return newName;
		} else {
			return name;
		}
	})
}

/**
 * Receives a name
 * Returns the number of times that name is repeated in the `names` array.
 *
 * Example usage:
 *
 *     count("joy of painting")
 *     returns 2
 *
 */
const count = function(repeatedName) {
	let count = 0;
	names.forEach(name => {
		if (name === repeatedName) {
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

// namesLargerThan
let largeNames = namesLargerThan(10);
console.log("\n--------------------------")
console.log("NAMES LARGER THAN:");
console.log(largeNames);

// numberOfNamesLargerThan
let numOfLargeNames = numberOfNamesLargerThan(10);
console.log("\n--------------------------")
console.log("NUMBER OF NAMES LARGER THAN:");
console.log(numOfLargeNames);

// replaceNames
let newNames = replaceNames("rebound", 12);
console.log("\n--------------------------")
console.log("REPLACE NAMES:");
console.log(newNames);

// count
let occurances = count("joy of painting");
console.log("\n--------------------------")
console.log("COUNT:");
console.log(occurances);

