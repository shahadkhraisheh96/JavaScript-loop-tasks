
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


/*
 * Exercise 11
 *
 * Count total sum using forEach
 *
 * Test Case:
 * console.log(sumNumbers([10,20,30]))
 *
 * Result:
 * 60
*/
function sumNumbers(arr){
    let sum=0;
    arr.forEach(num => {
        sum+=num;  
    });
    return sum;

}console.log(sumNumbers([10,20,30]));

/*
 * Exercise 12
 *
 * Count how many numbers are even
 *
 * Test Case:
 * console.log(countEven([1,2,3,4]))
 *
 * Result:
 * 2
*/
function countEven(arr){
  let count=0;
    arr.forEach(num => {
        if(num %2==0){
            count ++
        }
    });
    return count;
} console.log(countEven([1,2,3,4]));

/*
 * Exercise 13
 *
 * Create array where each number becomes number * 10
 *
 * Test Case:
 * console.log(timesTen([1,2,3]))
 *
 * Result:
 * [10,20,30]
*/
function timesTen(arr){
  return arr.map(num => num*10);
}console.log(timesTen([1,2,3]));

/*
 * Exercise 14
 *
 * Add property "adult" depending on age
 *
 * Test Case:
 * console.log(addAdult([
 * {name:"Ali",age:20},
 * {name:"Sara",age:15}
 * ]))
 *
 * Result:
 * [
 * {name:"Ali",age:20,adult:true},
 * {name:"Sara",age:15,adult:false}
 * ]
*/
function addAdult(arr){
return arr.map((obj) => ({...obj , adult: obj.age > 18 }) );
}
console.log(addAdult([
  {name:"Ali",age:20},
  {name:"Sara",age:15}
  ]));

 /*
 * Exercise 15
 *
 * Create array of prices after adding 10 tax
 *
 * Test Case:
 * console.log(addTax([100,200]))
 *
 * Result:
 * [110,210]
*/
function addTax(arr){
   let taxArray=arr.map(num => num+10);
   return taxArray;
} console.log(addTax([100,200]));

/*
 * Exercise 16
 *
 * Count how many numbers are greater than 50
 *
 * Test Case:
 * console.log(countBig([20,60,80]))
 *
 * Result:
 * 2
*/
function countBig(arr){
    let count=0;
    arr.forEach(num => {
        if(num > 50){
            count ++
        }
    });
    return count;

}console.log(countBig([20,60,80]));

/*
 * Exercise 17
 *
 * Convert numbers to "Number: X"
 *
 * Test Case:
 * console.log(labelNumbers([5,10]))
 *
 * Result:
 * ["Number: 5","Number: 10"]
*/
function labelNumbers(arr){
   return arr.map(item => `Number:${item}`); 

}console.log(labelNumbers([5,10]));


/*
 * Exercise 18
 *
 * Get product names
 *
 * Test Case:
 * console.log(productNames([
 * {product:"Laptop",price:1000},
 * {product:"Phone",price:500}
 * ]))
 *
 * Result:
 * ["Laptop","Phone"]
*/
function productNames(arr){
    return arr.map(obj => obj.product);

}console.log(productNames([
 {product:"Laptop",price:1000},
  {product:"Phone",price:500}
  ]));

  /*
 * Exercise 19
 *
 * Create array where each number becomes number + index
 *
 * Test Case:
 * console.log(addIndex([5,5,5]))
 *
 * Result:
 * [5,6,7]
*/
function addIndex(arr){
  return arr.map((num , index) => num+index) ;

}console.log(addIndex([5,5,5]));
 
/*
 * Exercise 20
 *
 * Create array of boolean values (true if even)
 *
 * Test Case:
 * console.log(isEvenArray([1,2,3,4]))
 *
 * Result:
 * [false,true,false,true]
*/
function isEvenArray(arr){
    let evenOrOdd=arr.map(num => num %2===0);
    return evenOrOdd;

}console.log(isEvenArray([1,2,3,4]))