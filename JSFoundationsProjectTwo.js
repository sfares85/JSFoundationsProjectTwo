// BONUS: Do sumOdds() without using the filterOdds() function and without using a .filter() method.
// BONUS: Do the functions logger() toCelsius() hottestDays() logHottestDays() each in a single line.

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
		if(num%2 != 0) sum += num;
	})
	return sum;
}

/**
 * Receives an array
 * Logs every element of the array
 */
const logger = function(array) {
  array.forEach(element => console.log(element));
};

/**
 * Receives an array of temperatures in degrees Fahrenheit
 * Returns an array of temperatures in degrees Celsius
 *
 * The conversion formula is:
 *   C = (F - 32) * (5/9)
 */
const toCelsius = function(temperatures) {
  return temperatures.map(t => (t - 32) * (5 / 9));
};

/**
 * Receives an array of temperatures and a threshold temperature
 * Returns an array of temperatures that exceed the threshold
 */
const hottestDays = function(temperatures, threshold) {
  return temperatures.filter(t => t > threshold);
};

/**
 * Receives an array of temperatures IN DEGREES FAHRENHEINT and a threshold temperature IN DEGREES FAHRENHEINT
 * Logs temperatures that exceed the threshold to the console IN DEGREES CELSIUS
 *
 * hint: you can combine previous functions
 */
const logHottestDays = function(temperatures, threshold) {
  logger(toCelsius(hottestDays(temperatures, threshold)));
};

/**************************************************
The following code runs the functions defined above
***************************************************/
let numbers = [153,67,9,34,7,67,342,7,34,8656,2,124,5,43];
let instructors = ["Hamza", "Mshary", "Aziz", "Hussein", "Fawaz"];
let temperatures = [32,212,-40,122,54.5];
let temperaturesForThreshold = [0,-5,35,20,45,50,10];
let threshold = 40;
hottestDays([1,2,3,4,5],0);

// filterEvens
evens = filterEvens(numbers);
console.log("EVENS:");
console.log(evens);

// sumOdds
sum = sumOdds(numbers);
console.log("\n--------------------------")
console.log("SUM ODDS:");
console.log(sum);

// logger
console.log("\n--------------------------")
console.log("LOGGER:");
logger(instructors);

// toCelsius
let tempsInCelsius = toCelsius(temperatures);
console.log("\n--------------------------")
console.log("TO CELSIUS:");
console.log(tempsInCelsius);

// hottestDays
let veryHotDays = hottestDays(temperaturesForThreshold, threshold);
console.log("\n--------------------------")
console.log("HOTTEST DAYS:");
console.log(veryHotDays);

// logHottestDays
console.log("\n--------------------------")
console.log("LOG HOTTEST DAYS:");
logHottestDays(temperaturesForThreshold, threshold);