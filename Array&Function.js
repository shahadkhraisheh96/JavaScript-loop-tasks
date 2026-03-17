//1 firstAndLast(arr)
let myArray01 = [1,2,3,4,5];

function firstAndLast(arr) {

let firstItem = arr.slice(0,1)[0];
let lastItem = arr.slice(-1)[0];

return [firstItem,lastItem];
}

console.log(firstAndLast(myArray01));

//2 removaveMiddle(arr)

function removeMiddle(arr){
const minddleIndex=Math.floor(arr.length/2);
arr.splice(minddleIndex,1);
    
return arr;

}
console.log(removeMiddle(myArray01));

//3 swapFirstLast(arr)
let myArray03 = [1,2,3,4,5];
function swapFirstLast(arr){
let temp=arr[0];
arr[0]=arr[arr.length-1];
arr[arr.length-1]=temp;

return arr;
}
console.log(swapFirstLast(myArray03));

//5 duplicateArray(arr)
let myArray05 = [1,2,3];
function duplicateArray(arr){
    return arr.concat(arr);
}
console.log(duplicateArray(myArray05));

//4 insertAtMiddle(arr,value)
let myArray04=[1,2,3,4]
function insertAtMiddle(arr,value){
    let middleIndex=Math.floor(arr.length/2);
    arr.splice(middleIndex,0,value);

    return arr;
}
console.log(insertAtMiddle(myArray04,10));

//Level 2

//6 removeDuplicates(arr)
let myArray06=[1,2,2,3,4,4,5];
function removeDuplicates(arr){
    let unique=[];
    arr.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element);
        } 
    });
    return unique;
}
console.log(removeDuplicates(myArray06));

//7 findSecondLargest(arr)
let myArray07=[4,9,2,10,6];
function findSecondLargest(arr){
    arr.sort();
    return arr[arr.length-1];
}
console.log(findSecondLargest(myArray07));

//8 findSecondSmallest(arr)
function findSecondSmallest(arr){
   arr.sort();
    return arr[1];
}
console.log(findSecondSmallest(myArray07));

//9 removeGreaterThan(arr,value)
function removeGreaterThan(arr,value){
  return  arr.filter(num => num >= value );
}
console.log(removeGreaterThan([10,5,20,3,8],10));

//10 removeLessThan(arr,value)
function removeLessThan(arr,value){
  return  arr.filter(num => num <= value );
}
console.log(removeLessThan([10,5,20,3,8],10));

//level 3

//11 countOccurrences(arr,value)
function countOccurrences(arr,value){
    return arr.filter(num => num===value ).length;
}
console.log(countOccurrences([1,2,3,2,4,2],2));

//12 arrayIntersection(arr1,arr2)
function arrayIntersection(arr1,arr2){
    return arr1.filter(item => arr2.includes(item));
}
console.log(arrayIntersection([1,2,3,4], [3,4,5,6]));

//13 arrayDifference(arr1,arr2)
function arrayDifference(arr1,arr2){
    return arr1.filter(item => !arr2.includes(item));
}
console.log(arrayDifference([1,2,3,4], [3,4,5,6]));

//14 uniqueMerge(arr1,arr2)
function uniqueMerge(arr1,arr2){
    let concatarr=arr1.concat(arr2);
    return new removeDuplicates(concatarr);
}
console.log(uniqueMerge([1,2,3] , [3,4,5]));

//15 removeNegativeNumbers(arr)
function removeNegativeNumbers(arr){
    return arr.filter(num => num >=0 );

}
console.log(removeNegativeNumbers([5,-2,10,-3,7]));

//level 4
//16 wordsLongerThan(arr,length)
function wordsLongerThan(arr,length){
    return arr.filter(word => word.length > length);
}
console.log(wordsLongerThan(["alex","mohammad","ali","sara"],4));

//17 countLetterInWords(arr,letter)
function countLetterInWords(arr,letter){
    return arr.filter(word => word.includes(letter)).length;
}
console.log(countLetterInWords(["apple","banana","car","dog"],"a"));

//18 removeShortWords(arr,length)
function removeShortWords(arr,length){
    return arr.filter(word => word.length >= length);
}
console.log(removeShortWords(["apple","banana","car","dog"], 4 ));

//19 findLongestWord(arr)
function findLongestWord(arr){
 arr.sort((a, b) => a.length - b.length);
  return arr[arr.length - 1];
}
console.log(findLongestWord(["apple","banana","car"]));
//20 findShortestWord(arr)
function findShortestWord(arr) {
  arr.sort((a, b) => a.length - b.length);
  return arr[0];

}
console.log(findShortestWord(["apple","banana","car"]));

//21 sortByLength(arr)
function sortByLength(arr){
    return arr.sort((a,b) => a.length - b.length);
}
console.log(sortByLength(["apple", "hi", "banana"]));

//22 removeEverySecond(arr) 
function removeEverySecond(arr){
    return arr.filter((item,index) => index % 2==0);
}
console.log(removeEverySecond([1, 2, 3, 4, 5, 6]));

//23 sumEvenNumbers(arr)
function sumEvenNumbers(arr){
    let sum=0;
    arr.filter(num => {
        if(num %2==0){
            sum = sum +num;
        }
    })
    return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
//24 sumOddIndex(arr)  
function sumOddIndex(arr){
    let sum =0 ;
    arr.filter((number , index) => {
        if(index % 2 !==0){
            sum =sum +number;

 } });
 return sum;
}
console.log(sumOddIndex([1, 2, 3, 4, 5, 6]));

//25 reverseWithoutReverse(arr)
function reverseWithoutReverse(arr){
    let reversedArray = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArray.unshift(arr[i]);
}
  return reversedArray;
}
console.log(reverseWithoutReverse( [1, 2, 3, 4, 5]));

//26 findMissingNumber(arr) 
function findMissingNumber(arr){
let missingNum=[];
    arr.sort((a,b) => a - b);
    for(let i=0;i<arr.length-1;i++){
        let gap=(arr[i+1] - arr[i] -1) 
        if(gap>0){
        for(let n=1;n<=gap;n++){
            missingNum.push(i+n+1);
        } 
        }
         
      
    }
     return missingNum;
}
console.log(findMissingNumber([1, 2, 7, 5, 6]));

//27 pairSum(arr,target)
function pairSum(arr,target){
   for (let i=0;i< arr.length ;i++){
    let complement=target-arr[i];

    if(arr.slice(i+1).includes(complement)){
        return[arr[i],complement];
    }
   }
   return null;
}
console.log(pairSum([2,7,11,15],9));

//28 rotateArray(arr,steps)
function rotateArray(arr,steps){
    let movearray=arr.slice(0,steps+1);
    let restarray=arr.slice(steps+1);

    return restarray.concat(movearray);

}
console.log(rotateArray([1,2,3,4,5],2));

//29 chunkArray(arr,size)
let chunks=[];
function chunkArray(arr,size){
    for(let i=0; i<arr.length; i+=size){
      chunks.push(arr.slice(i,i+size));

    }
    return chunks;

}
console.log(chunkArray([1,2,3,4,5,6],2));

//30 groupByLength(arr)
function groupByLength(arr) {
  let counter = {};
  for (item of arr) {
    len = item.length;
    if (len in counter) {
      counter[len].push(item);
    } else {
      counter[len] = [item];
    }
  }
  return counter;
}
console.log(groupByLength(["hi","cat","dog","apple"]));