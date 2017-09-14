//Function Declarations vs. Function Expressions
//Difference = whether or not 'function' is first thing in the statement

//this is an expression => bar is within a local scope from lines 5-14, so when it is called (line 17) is throws an error
var foo = function bar(){
	var foo = 'baz';

	//this is a declaration
	function baz(foo){
		foo = bar;
		foo; //function...
	}
	baz();
};

foo();
bar(); //Error!

//Function expressions DO NOT get declared in a global scope
//Expressions are often annonymous functions
	//Negatives to annonymous functions:
		//No way to refer to that specific function (recursion)
		//Don't play well with debugging  => when named, easy to see when debugging
		//Problems with self-identification (function with name of 'handler' tells us that it handles something)

