
//  * Exercise 1
//  *
//  * Double each number in the array
//  *
//  * Test Case:
//  * console.log(doubleNumbers([1,2,3]))
//  *
//  * Result:
//  * [2,4,6]
function doubleNumbers(arr){
    return arr.map(num => num * 2);
}
console.log(doubleNumbers([1,2,3]));

// * Exercise 2
//  *
//  * Convert numbers to strings
//  *
//  * Test Case:
//  * console.log(numbersToStrings([1,2,3]))
//  *
//  * Result:
//  * ["1","2","3"]
// 
function numbersToStrings(arr){
return arr.map(item => item.toString());
}console.log(numbersToStrings([1,2,3]));

// * Exercise 3
//  *
//  * Make all names uppercase
//  *
//  * Test Case:
//  * console.log(upperCaseNames(["ali","sara"]))
//  *
//  * Result:
//  * ["ALI","SARA"]
// */

function upperCaseNames(arr){
 return arr.map(name => name.toUpperCase(arr));
}console.log(upperCaseNames(["ali","sara"]));

/*
 * Exercise 4
 *
 * Add 5 to each number
 *
 * Test Case:
 * console.log(addFive([10,20,30]))
 *
 * Result:
 * [15,25,35]
*/
function addFive(arr){
 return arr.map(num => num + 5);
}console.log(addFive([10,20,30]));

/*
 * Exercise 5
 *
 * Get only the name from objects
 *
 * Test Case:
 * console.log(getNames([
 * {name:"Ali",age:20},
 * {name:"Sara",age:25}
 * ]))
 *
 * Result:
 * ["Ali","Sara"]
*/
function getNames(arr){
 return arr.map(user => user.name);
}console.log(getNames([
  {name:"Ali",age:20},
  {name:"Sara",age:25} ]));

  /*
 * Exercise 6
 *
 * Return the length of each word
 *
 * Test Case:
 * console.log(wordLengths(["apple","dog"]))
 *
 * Result:
 * [5,3]
*/
function wordLengths(arr){
return arr.map(word => word.length);
}console.log(wordLengths(["apple","dog"]));

/*
 * Exercise 7
 *
 * Multiply each number by its index
 *
 * Test Case:
 * console.log(valTimesIndex([2,3,4]))
 *
 * Result:
 * [0,3,8]
*/
function valTimesIndex(arr){
  return arr.map(num => num* arr.indexOf(num));
}console.log(valTimesIndex([2,3,4]));

/*
 * Exercise 8
 *
 * Create array of usernames starting with "@"
 *
 * Test Case:
 * console.log(makeUsernames([
 * {username:"ahmad"},
 * {username:"sara"}
 * ]))
 *
 * Result:
 * ["@ahmad","@sara"]
*/
function makeUsernames(arr){
 return arr.map( obj => "@"+obj.username);
}
console.log(makeUsernames([
  {username:"ahmad"},
  {username:"sara"}
  ]));

  /*
 * Exercise 9
 *
 * Create array of squares
 *
 * Test Case:
 * console.log(squareNumbers([2,3,4]))
 *
 * Result:
 * [4,9,16]
*/
function squareNumbers(arr){
    return arr.map(num => Math.pow(num ,2));

}console.log(squareNumbers([2,3,4]));

/*
 * Exercise 10
 *
 * Convert words to their first letter
 *
 * Test Case:
 * console.log(firstLetters(["Ali","Sara"]))
 *
 * Result:
 * ["A","S"]
*/
function firstLetters(arr){
 return arr.map(name => name.charAt(0));
}console.log(firstLetters(["Ali","Sara"]));
