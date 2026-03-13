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

