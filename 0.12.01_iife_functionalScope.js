//Wrapping the function declaration with parenthese creates a function expression => simply makes function not the first word
//This keeps it from leaking into global scope

var foo = 'foo';

(function(){
	var foo = 'foo2';
	console.log(foo); //'foo2'
})(); //adding parenthese at the end calls the function IMMEDIATELY

console.log(foo); //'foo'

//Variations:
//IIFE is just function call => can pass values into it

var foo = 'foo';

(function(bar){
	var foo = 'foo2';
	console.log(foo); //'foo'
})(foo); 

console.log(foo); //'foo'



//http://benalman.com/news/2010/11/immediately-invoked-function-expression/