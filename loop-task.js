//Create a script that displays numbers from 1 to 10 on one line separated by a dash (-).

for(let i=0;i<=10;i++){
    document.writeln(i+'-');
}
document.writeln("<br>");


//Create a script using a for loop to add all integers between 0 and 30 and display the total.
let total2=0;
for(let i=0;i<=30;i++){
    total2=total2+i;
}
document.writeln(`<p>total2 = ${total2}</p>`);
document.writeln("<br>");

//Write a program that prints all even numbers from 1 to 50 using a loop.
for(let i=1;i<=50;i++){
    if(i%2==0){
        document.writeln(i+" ");
    }
}

document.writeln("<br><br>");

//Write a program that prints numbers from 10 down to 1 using a loop.
for(let i=10;i>=1;i--){
    document.writeln(i+" ");
}

document.writeln("<br><br>");

//Create a script to generate the following pattern using nested for loops.
const size1=5;
for(let row=0;row<size1;row++){
let line="";
    for(let column=0;column<size1;column++){
        if(column<size1-row-1){
            line+="A";
        }else{
            let char=String.fromCharCode(65+row);
            line+=char+" ";
        }
    }
    document.writeln(line +"<br>");
    
}
document.writeln("<br><br>");

//6
const size2=5;
for(let row=1;row<=size1;row++){
let line="";
    for(let column=1;column<=size1;column++){
        if(column<=size1-row){
            line+="1";
        }else{
           
            line+=row+" ";
        }
    }
    document.writeln(line +"<br>");
    
}
document.writeln("<br><br>");

//7

const size3=5;
for(let row=1;row<=size1;row++){
let line="";
    for(let column=1;column<=size1;column++){
        if(row==column){
            line+=row;
        }else{
            line+="0";
        }
    }
    document.writeln(line +"<br>");
    
}
document.writeln("<br><br>");

//8
let factorialnum=1;
for(let i=1;i<=5;i++){
    factorialnum =factorialnum*i;
}
document.writeln(factorialnum);

document.writeln("<br><br>");

//9Write a program to print the Fibonacci sequence using a loop.
let num1=0;
let num2=1;
let fnum=9;
let Fibonacci=0;
for(let i=0;i<fnum;i++){
    document.writeln(num1+" ");
    factorialnum=num1+num2;
    num1=num2;
    num2=factorialnum;
}
document.writeln("<br><br>");

//10 Write a program that counts the number of "c" characters in the following 
const text="Orange Coding School";
const charToCount='c';
let charcount=0;
for(let i=0;i<=text.length-1;i++){
    if(text[i].toLowerCase()===charToCount)
    charcount++;
}
document.writeln("count of c in Orange Coding School="+charcount);
document.writeln("<br><br>");

//11Write a program that prints the multiplication table from 1 to 5 using nested loops.
let multiplication=1;
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        multiplication=i*j;
        document.writeln(i +" * "+j+" = "+multiplication+"     " );

    }
    document.writeln("<br><br>");
}

//12Write a program to generate and display the Floyd Triangle.
let FloydTriangle=1;
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.writeln(FloydTriangle +" ");
        FloydTriangle++;
    }
    document.writeln("<br>");
}
   document.writeln("<br><br>");

//13 Write a program that prints all numbers between 1 and 100 that are divisible by 7.
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        document.writeln(i);
    }
}
 document.writeln("<br><br>");

//14Write a program that prints the sum of all odd numbers between 1 and 100 using a loop.
let sumOffOod=0;
for(let i=1;i<=100;i++){
    if(i%2!=0){
        sumOffOod+=i;
    }
}document.writeln(sumOffOod);
 document.writeln("<br><br>");

 //15Write a program that prints the square of numbers from 1 to 10 using a loop.
 for(let i=1;i<=10;i++){
    document.writeln((i*i));
 }
  document.writeln("<br><br>");

  //16Write a program that prints numbers from **1 to 30**, but:
// print **"Fizz"** for multiples of 3
//print **"Buzz"** for multiples of 5
//print **"FizzBuzz"** for multiples of both
 for(let i=1;i<=30;i++){
    if(i%3==0){
        document.writeln("Fizz");
    }else if (i%5==0){
        document.writeln("Buzz");
    }else if (i%3==0 && i%5==0){
        document.writeln("FizzBuzz");
    }else{
        document.writeln(i);
    }
 }
   document.writeln("<br><br>");


 //17
 //*
// **
// ***
// ****
// *****
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.writeln("*");
    }
    document.writeln("<br>");
}
  document.writeln("<br><br>");

//18
// *****
// ****
// ***
// **
// *
for(let i=5;i>=1;i--){
    for(let j=1;j<=i;j++){
        document.writeln("*");
    }
    document.writeln("<br>");
}
  document.writeln("<br><br>");

  //19
// 1
// 12
// 123
// 1234
// 12345
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.writeln(j);
    }
    document.writeln("<br>");
}
  document.writeln("<br><br>");

 //20
//  1
// 22
// 333
// 4444
// 55555

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.writeln(i);
    }
    document.writeln("<br>");
}
  document.writeln("<br><br>");


  //21Write a program that prints numbers between 1 and 200 whose digit sum equals 5.

  for (let i=1;i<=200;i++){
    let sum=0;
    let numToString=String(i);
    for(let j=0;j<numToString.length;j++){
        sum+=parseInt(numToString[j]);
    }
    if(sum===5){
        document.writeln(i);
    }

  } document.writeln("<br><br>");

  //22Write a program that prints numbers between 1 and 100 where the first digit is greater than the last digit.

 for (let i=1;i<=100;i++){
    let numToString=String(i);
    let firstdigit=parseInt(numToString[0]);
    let lastdigit=parseInt(numToString[numToString.length-1]);
    if(firstdigit>lastdigit){
        document.writeln(i);
    }

  } document.writeln("<br><br>");

  //23Write a program that prints numbers from 1 to 100 whose digits are the same.
  for (let i=1;i<=100;i++){
    let numToString=String(i);
    let firstdigit=parseInt(numToString[0]);
    let lastdigit=parseInt(numToString[1]);
    if(firstdigit==lastdigit ){
        document.writeln(i);
    }

  } document.writeln("<br><br>");

  //24Write a program that prints numbers from 1 to 300 that are divisible by the product of their digits.
  for (let i=1;i<=300;i++){
    let numToString=String(i);
    let  digitalproduct=1;
    for(let j=0;j<=numToString.length-1;j++){
        digitalproduct*=parseInt(numToString[j]);
  }
  if(parseInt(numToString)%digitalproduct==0){
    document.writeln(numToString);
  }

  } document.writeln("<br><br>");

  //25Write a program that prints numbers between 1 and 100 where the digit sum equals the digit product.
   for (let i=1;i<=300;i++){
    let numToString=String(i);
    let  digitalproduct=1;
    let digitsum=0;
    for(let j=0;j<=numToString.length-1;j++){
        digitalproduct*=parseInt(numToString[j]);
         digitsum+=parseInt(numToString[j]);
        
  }
  if(digitalproduct==digitsum){
    document.writeln(numToString);
  }

  } document.writeln("<br><br>");

  //26 Write a program that prints numbers between 1 and 500 where the reverse of the number is also divisible by 3.
    for (let i=1;i<=500;i++){
    let reversenum=String(i).split('').reverse().join('');
   
  if(parseInt(reversenum)%3==0){
    document.writeln(reversenum);
  }

  } document.writeln("<br><br>");

  //27Write a program that prints numbers between 1 and 500 where the reverse of the number is also divisible by 3.
  for (let i=1;i<=100;i++){
    let numToString=String(i);
    let firstdigit=parseInt(numToString[0]);
    let lastdigit=parseInt(numToString[1]);
    if(lastdigit-firstdigit==2 ){
        document.writeln(i);
    }

  } document.writeln("<br><br>");

  //28 Write a program that prints numbers between 1 and 500 whose digits are in ascending order.
   for (let i=1;i<=500;i++){
    let numToString=String(i);
    let firstdigit=parseInt(numToString[0]);
    let lastdigit=parseInt(numToString[2]);
    let secondedigit=parseInt(numToString[1]);
    if(numToString.length==2 && firstdigit==(secondedigit-1)){
        document.writeln(numToString);
    }
    else if(numToString.length==3&&(firstdigit+2)==(secondedigit+1)&&(secondedigit)==(lastdigit-1)){
             document.writeln(i);
  
    }

  } document.writeln("<br><br>");

  //29 Write a program that prints numbers between 1 and 500 whose digits are in descending order.
 for (let i=1;i<=500;i++){
    let numToString=String(i);
    let firstdigit=parseInt(numToString[0]);
    let lastdigit=parseInt(numToString[2]);
    let secondedigit=parseInt(numToString[1]);
    if(numToString.length==2 && firstdigit-1==(secondedigit)){
        document.writeln(numToString);
    }
    else if(numToString.length==3&&(firstdigit-2)==(secondedigit-1)&&(secondedigit-1)==(lastdigit)){
             document.writeln(i);
  
    }

  } document.writeln("<br><br>");

  //30 Write a program that prints numbers between 1 and 300 where the last digit equals the sum of the other digits.
for (let i=1;i<=500;i++){
    let numToString=String(i);
    let firstdigit=parseInt(numToString[0]);
    let lastdigit=parseInt(numToString[2]);
    let secondedigit=parseInt(numToString[1]);
    let sumtwodigit=firstdigit+secondedigit;

    if(numToString.length==3 && sumtwodigit==lastdigit){
        document.writeln(i);
    }
}document.writeln("<br><br>");

//31 Write a program that prints numbers between 1 and 500 whose digit sum is a prime number.
for (let i=1;i<=500;i++){
    let numToString=String(i);
    let isPrime=true;
    let sumofdigit=0;
   for(let char of numToString){
    sumofdigit +=parseInt(char);
   }
   if(sumofdigit<2){
    isPrime=false;
   }else{
    for(let j=2;j<=Math.sqrt(sumofdigit);j++){
        if(sumofdigit%j===0){
            isPrime=false;
            break;
        }
    }
    }
    if(isPrime){
    document.writeln("the number "+sumofdigit+"is prime <br>");}
   
}document.writeln("<br><br>");

//32Write a program that prints numbers between 1 and 200 where the sum of digits is greater than 10.
for (let i=1;i<=200;i++){
    let numToString=String(i);
    let isPrime=true;
    let sumofdigit=0;
   for(let char of numToString){
    sumofdigit +=parseInt(char);
   }

if(sumofdigit>10){
    document.writeln(sumofdigit+"is grater than 10 <br>");
}
}document.writeln("<br><br>");

//33Write a program that prints numbers between 1 and 300 that contain exactly two digits equal to each other.
for (let i=1;i<300;i++){
    let numToString=String(i);
    let firstdigit=parseInt(numToString[0]);
    let lastdigit=parseInt(numToString[2]);
    let secondedigit=parseInt(numToString[1]);
    if(firstdigit==secondedigit || firstdigit==lastdigit || secondedigit==lastdigit){
        document.writeln(i);
    }
}document.writeln("<br><br>");

//34 Write a program that prints numbers between 1 and 200 where the reverse of the number is greater than the original number.
for(let i=1;i<=200;i++){
     let numToString=String(i);
    let firstdigit=numToString[0];
    let lastdigit=numToString[2];
    let secondedigit=numToString[1];
    let reverseNum;
    if(numToString.length==2){
        let temp=firstdigit;
        firstdigit=secondedigit;
        secondedigit=temp;
        reverseNum=parseInt(firstdigit+secondedigit);

    }else if(numToString.length==3){
          let temp=firstdigit;
        firstdigit=secondedigit;
        secondedigit=lastdigit;
        lastdigit=temp
        reverseNum=parseInt(firstdigit+secondedigit+lastdigit);
    }
    if(reverseNum>i){
        document.writeln(reverseNum+" is greater than the orignal number "+i+"<br>");
    }
}document.writeln("<br><br>");
//for(let i=1;i<=100;i++){
//let revrseNum = parseInt(i.toString().split('').reverse().join(''));
//  if(reverseNum>i){
    //    document.writeln(reverseNum+" is greater than the orignal number "+i+"<br>");
   // }
//}

//35 Write a program that prints numbers between 1 and 500 whose digit product is divisible by 5.
for (let i=1;i<=200;i++){
    let numToString=String(i);
    
    let productofdigit=1;
   for(let char of numToString){
    productofdigit *=parseInt(char);
   }

if(productofdigit!==0 && productofdigit%5==0){
    document.writeln(productofdigit+"is divisible by 5 <br>");
}
}document.writeln("<br><br>");
//36Write a program that prints numbers between 1 and 300 where the sum of digits equals the number of digits multiplied by 5.
for (let i=1;i<=200;i++){
    let numToString=String(i);
    let sumofdigit=0;
   for(let char of numToString){
    sumofdigit +=parseInt(char);
   }

if((numToString.length*5)==sumofdigit){
    document.writeln(sumofdigit+"is equal to the "+(numToString.length*5)+"<br>");
}
}document.writeln("<br><br>");

//37Write a program that prints numbers between 1 and 500 whose reverse number is even.
for(let i=1;i<=500;i++){
     let numToString=String(i);
    let firstdigit=numToString[0];
    let lastdigit=numToString[numToString.length-1];
    let secondedigit=numToString[1];
    let reverseNum;
    if(numToString.length==2){
        let temp=firstdigit;
        firstdigit=secondedigit;
        secondedigit=temp;
        reverseNum=parseInt(firstdigit+secondedigit);

    }else if(numToString.length==3){
          let temp=firstdigit;
        firstdigit=lastdigit;
        lastdigit=temp;
        reverseNum=parseInt(firstdigit+secondedigit+lastdigit);
    }
    if(reverseNum%2==0){
        document.writeln(reverseNum+" is even number <br>");
    }
}document.writeln("<br><br>");

//38Write a program that prints numbers between 1 and 300 where the square of the last digit equals the first digit.
for(let i=1;i<=500;i++){
     let numToString=String(i);
     let firstDigit=numToString[0];
     let lastdigit=numToString[numToString.length-1];

     if(lastdigit*lastdigit==firstDigit){
        document.writeln(numToString+"the  the square of the last digit equals the first digit. <br>");
     }


    }document.writeln("<br><br>");

    //39Write a program that prints numbers between 1 and 500 whose digit sum is divisible by the number of digits.
    for (let i=1;i<=200;i++){
    let numToString=String(i);
    let sumofdigit=0;
   for(let char of numToString){
    sumofdigit +=parseInt(char);
   }

if(sumofdigit%numToString.length==0){
    document.writeln(numToString+"  digit sum "+sumofdigit+"is divisible by the number of digits.<br>");
}
}document.writeln("<br><br>");

//40Write a program that prints numbers between 1 and 1000 where the sum of digits equals 15.
