//1 Concatenation
let s11="Hello";
let s12="World";
console.log(s11.concat(" "+s12));

//2String length
let s21="JavaScript";
console.log(s21.length);

//3. Access First Character
let s31="programming";
console.log(s31.charAt(0));

//4 Extract Part of a String
let s41="coding is fun";
console.log(s41.slice(0,6));

//5 Replace Characters
let s51="cat";
console.log(s51.replace("a","e"));

//6 Convert to Uppercase
let s61="javascript";
console.log(s61.toUpperCase(s61));

//7 Split a String
let s71="apple,banana,orange";
console.log(s71.split());

//8 Join Array into String

let arr81=["hello", "world"];
console.log(arr81.join(" "));

//9  Remove Extra Spaces
let s91=" hello world ";
console.log(s91.trim());

//10 Check if a Word Exists
let s10="hello world";
console.log(s10.includes("world"));

//11  Reverse a String
let s011="hello";
console.log(s011.split('').reverse().join(''));

//12 Count Character Occurrences
let s012="elephant";
console.log(s012.split('e').length-1);

//13 Palindrome Check
let s013="racecar";
let IsPalindrome=s013.split('').reverse().join('');
console.log(s013===IsPalindrome);

//14 Capitalize Each Word
let s014="hello world";
console.log(s014.split(' ').map(world =>{return world.charAt(0).toUpperCase()+world.slice(1)}).join(' '));

//15 Format Number
let num015=1234.5678;
console.log(num015.toFixed(2));

//16 Extract Numbers from String
let s016="There are 3 apples and 2 oranges";
console.log(s016.split(' ').filter(char => !isNaN(char)&&char !==' '));

//17  Email Validation
let s017="example@email.com";
console.log(s017.endsWith("@email.com"));

//18 Replace Word
let s018="This is a bad word";
console.log(s018.replace("bad","good"));

//19 Remove Duplicate Characters
let s019="aabbc";
console.log([...new Set(s019)].join(''));

//20 Sort Characters Alphabetically
let s020="hello";
console.log(s020.split('').sort().join(''));

//21 Check for Anagrams
let s121="listen";
let s221="silent";
let sortS121=s121.toLowerCase().split('').sort().join('');
let sortS221=s221.toLowerCase().split('').sort().join('');
console.log(sortS121===sortS221);

//22 Reverse Words in Sentence
let s022="The quick brown fox";
console.log(s022.split(' ').reverse().join(' '));

//23 Find the Longest Word
let s023="Web development is fascinating";
let word=s023.split(' ').sort((a, b) => b.length - a.length);
console.log(word[0]);

//24 Advanced Palindrome
let s024="A man, a plan, a canal, Panama!";
let check=s024.toLowerCase().replace(/[^\w]|_/g,'').split('').reverse().join('');
console.log(s024.toLowerCase().replace(/[^\w]|_/g, '')===check);

//25 Character Frequency
let s025="mississippi";
let charmap=new Map();
for(let char of s025){
    if(char.match(/[a-z0-9]/)){
        charmap.set(char,(charmap.get(char) || 0 )+ 1);
}
}
console.log(Object.fromEntries(charmap));

//26  Replace Vowels with Numbers
let s026="Hello World";
const vowels=[
    ["a","1"],
    ["e","2"],
    ["i","3"],
    ["o","4"],
    ["u","5"]
];
vowels.forEach(([find,replace]) => {
    s026=s026.replaceAll(find,replace);
});
console.log(s026);

//27 startsWith
let s027="JavaScript is fun";
console.log(s027.toLowerCase().startsWith("java"));

//28 endsWith
let s028="image.png";
console.log(s028.endsWith("png"));

//29 repeat
let s029="ha";
console.log(s029.repeat(3));

//30 indexOf
let s030="Hello World";
console.log(s030.indexOf("o"));

