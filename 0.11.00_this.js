// This is the JS pronoun

// Why use it?
//Re-use functions if they are prevalent within any given code (use standard pronouns)

console.log(this === window); //true

a = 37;
console.log(window.a); /37

this.b = 'MDN';
console.log(window.b) //'MDN'
console.log(b) //'MDN'


function f1(){
	return this;
}
//In a browser:
f1() === window; //the window is the global object in browsers

//In Node:
f1() === global;

function f2(){
	'use strict'; //see strict mode
	return this;
}

f2() == undefined;