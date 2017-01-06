console.log("asdsa");


// var greet = require('./greet1');
//
// greet();
//
// var greet2 = require('./greet2').greet;
//
// greet2();
//
// var greet3 = require('./greet3');
//
// greet3.greet();
//
// greet3.greeting = "CHAAAANGED";
//
// var greet3b= require('./greet3');
// greet3.greet();
//
//
// var Greet4 = require('./greet4');
//
// var grtr = new Greet4();
//
// grtr.greet();
//
// var greet5 = require('./greet5').greet;
// greet5();

// var greet = require('./greet');
//
// greet.english();
// greet.spanish();


// var g = G$("Jordan", "Mitchell");
// console.log(g);
// g.greet().greet(true);


//node alert.js
// var a = 1;
// var b = 2;
// var c = a + b;
//
// console.log(c);
//

//modules
//a reusable block of code that does not accidently impact other code

//common js modules
//an agreed upon standard for how code modules should be structured

//first class function
//everything you can do with other types you can do with functions - like strings, numbers etc.  like pass them around, set variables equal to them, put them in arrays and more.



//function expressions
//a block of code that results in a value-
//function expressions are possible because functions are first-class


//function statement-
//invoke/call same thing

// function greet(){
//   console.log("well hello there");
// }
//
// function logGreeting(fn){
//   fn();
// }
//
// //function expression -
// var greetMe = function(){
//   console.log("hi jordan");
// }
//
//
// logGreeting(function(){
//   console.log("immidiately!");
// });
//name value pairs- a name that maps to a value-
//name value pair -
// var address = "100 main st";

//objects = collection of name value pairs-
//objects sit in memory and point at other objects or other primitive prop, or functions or methods
//object literal -
// var room = {
//   street: "main",
//   number: 123,
//   apartment:{
//     floor:3,
//     number:301
//   }
// }

// var person = {
//   firstname: "jon",
//   lastname: "doe",
//   greet: function (){
//     console.log("hello " + this.firstname + " " + this.lastname);
//   }
// }
// person.greet();
// console.log(person['firstname']);
//interitance - one object gets access to the properties and methods of another object
//prototypeal inheritance

//function constructors - a normal functon used to construct objects
// function Person (firstname, lastname){
//   this.firstname = firstname;
//   this.lastname = lastname;
// };
//
// var jordan = new Person("Jordan", "Mitchell");
// console.log(jordan.firstname)
//
// Person.prototype.greet = function(){
//   console.log("Hello "+ this.firstname + "  " + this.lastname);
// };
// jordan.greet();
//
// var jane = new Person("Jane", "Doe");
// jane.greet();

//obects are passed by reference
//they are able to be changed, they dont look to the same data space and make a copy- they change the data in memory space.

//immediately invoked function expressions IIFE -

//scope -where shits at-  where at in code you have access to a particular variable or function

// (function (lastname){
//
//   var firstname = "jordan";
//   console.log(firstname);
//   console.log(lastname);
// }("Mitcell"));
//
// var firstname = "Jane";
//
// console.log(firstname);
