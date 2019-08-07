// BONUS: Do sumOdds() without using the filterOdds() function and without using a .filter() method.
// BONUS: Do the functions stateNamesLongerThan() and numberOfStateNamesLongerThan() each in a single line.
// BONUS: use .reduce() for the sumOdds() and numberOfStateNamesContaining() functions

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
  let even = [];
  numbers.forEach(number => {
    if (number % 2 === 0) {
      even.push(number);
    }
  });
  return even;
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
  let odd = [];
  numbers.forEach(number => {
    if (number % 2 === 1) {
      odd.push(number);
    }
  });
  return odd;
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
  let sum = 0;
  let odds = filterOdds(numbers);
  odds.forEach(number => {
    sum = sum + number;
  });
  return sum;
}

let states = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

/**
 * Receives a number (`minLength`)
 * Returns an array of the states with names longer than `minLength`
 *
 * Example usage:
 *
 *     stateNamesLongerThan(15)
 *     returns [ 'District of Columbia',
 * 				 'Federated States of Micronesia',
 * 				 'Marshall Islands',
 * 				 'Northern Mariana Islands' ]
 *
 */
function stateNamesLongerThan(minLength) {
  let longstates = [];
  states.forEach(state => {
    if (state.length >= minLength) longstates.push(state);
  });
  return longstates;
}

/**
 * Receives a number (`minLength`)
 * Returns the number of states that are longer than `minLength`
 *
 * Example usage:
 *
 *     numberOfNamesLongerThan(10)
 *     returns 18
 *
 */
function numberOfStateNamesLongerThan(minLength) {
  let length = 0;
  states.forEach(state => {
    if (state.length > minLength) length++;
  });
  return length;
}

/**
 * Receives a name (`newName`) and a length (`len`)
 * Replaces all states with length equal to `len` with `newName`.
 * Returns the new array.
 *
 * Example usage:
 *
 *     replaceStateNames("REBOUND", 12)
 *     returns [ 'Alabama',
 * 				  ...,
 * 				  'North Carolina',
 * 		   =--->  'REBOUND',
 * 				  'Northern Mariana Islands',
 * 				  ...,
 * 				  'Palau',
 * 		   =--->  'REBOUND',
 * 				  'Puerto Rico',
 * 		   =--->  'REBOUND',
 * 				  'South Carolina',
 * 		   =--->  'REBOUND',
 * 				  'Tennessee',
 * 				  ...,
 *				  'Wyoming' ]
 *
 */
function replaceStateNames(newName, len) {
  let newstates = [];

  states.forEach(state => {
    if (state.length === len) {
      state = newName;
      newstates.push(newName);
    } else {
      newstates.push(state);
    }
  });
  return newstates;
}

/**
 * Receives a string
 * Returns the number of states with names that contain that string
 *
 * Example usage:
 *
 *     numberOfStateNamesLongerThan("New")
 *     returns 4
 *
 */
function numberOfStateNamesContaining(subString) {
  let newstates = [];

  states.forEach(state => {
    let holder = state.toLowerCase();
    if (holder.includes(subString.toLowerCase())) {
      newstates.push(state);
    }
  });
  return newstates.length;
}

/**************************************************
The following code runs the functions defined above
***************************************************/
let numbers = [153, 67, 9, 34, 7, 67, 342, 7, 34, 8656, 2, 124, 5, 43];

// filterEvens
let evens = filterEvens(numbers);
console.log("EVENS:");
console.log(evens);

// sumOdds
let sum = sumOdds(numbers);
console.log("\n--------------------------");
console.log("SUM ODDS:");
console.log(sum);

// stateNamesLongerThan
let largeNames = stateNamesLongerThan(15);
console.log("\n--------------------------");
console.log("STATE NAMES LONGER THAN:");
console.log(largeNames);

// numberOfStateNamesLongerThan
let numOfLargeStateNames = numberOfStateNamesLongerThan(10);
console.log("\n--------------------------");
console.log("NUMBER OF STATE NAMES LONGER THAN:");
console.log(numOfLargeStateNames);

// replaceStateNames
let newNames = replaceStateNames("REBOUND", 12);
console.log("\n--------------------------");
console.log("REPLACE STATE NAMES:");
console.log(newNames);

// numberOfStateNamesContaining
let occurances = numberOfStateNamesContaining("New");
console.log("\n--------------------------");
console.log("NUMBER OF STATE NAMES CONTAININGa:");
console.log(occurances);

// How can you know the number of states with names that contain multiple words?
