//1 Hoisting Trap
// console.log(a);
// var a=10;
//output=undefined

//2 Temporal Dead Zone (TDZ)
// console.log(a)
// let a=10
//output : Uncaught ReferenceError: Cannot access 'a' before initialization

//3   Function vs Block Scope
// var x=1
// function test() {
// if (true) {
// var x=2
//   }
// console.log(x);//2 in the inner function 
// }

// test()
// console.log(x);//1

//4 Shadowing + TDZ Trap
// let x=10;
// function test() {
// console.log(x);
// let x=20;
// }
// test();//scope&output.js:27 Uncaught ReferenceError: Cannot access 'x' before initialization

//5 Classic Closure Problem (var)
// for (var i=0;i<3;i++) {
// setTimeout(() =>console.log(i),0)
// }//3 

//6 Closure with let
// for (let i=0;i<3;i++) {
// setTimeout(() =>console.log(i),0)
// }//0 1 2

//7  Nested Scope (Closure)
// var a=1

// function outer() {
// var a=2

// function inner() {
// console.log(a)
//   }

// inner()
// }

// outer()//2


//8  Re-declaration Error
// var a=10;
// let a=20;
//Uncaught SyntaxError: Identifier 'a' has already been declared (at scope&output.js:59:5)Understand this error

//9 Function Hoisting vs Variable Hoisting
// console.log(foo)

// var foo=10

// function foo() {
// return 20
// }
// ƒ foo() {
// return 20
// }

//10 Scope + Mutation
// let a=10

// function test() {
// a=20
// }

// test()
// console.log(a)//20

//11 Block Scope Leakage (var)
// {
// var a=10
// }

// console.log(a)//10

//12 Block Scope (let)
// {
// let a=10
// }

// console.log(a)//Uncaught ReferenceError: a is not defined

//13 Parameter Shadowing
// let a=5

// function test(a) {
// console.log(a)
// }

// test(10)//10

//14  Closure + Async Trap
// function test() {
// for (var i=0;i<3;i++) {
// setTimeout(() =>console.log(i),100)
//   }
// }

// test()//3

//15 IIFE Fix (Advanced)
// for (var i=0;i<3;i++) {
//   (function(i) {
// setTimeout(() =>console.log(i),0)
//   })(i)
// }//0 1 2 