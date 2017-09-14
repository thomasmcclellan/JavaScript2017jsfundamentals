//Hoisting

a; //???
b; //???
var a = b; //compiled first
var b = 2; //compiled first
b; //2
a; //???

//JS doesn't read line by line, but compiles vars and functions and THEN executes the lines consecutively 
//Because of this, JS compiles first (moves them to the top) and we call that HOISTING 

var a = b();
var c = d();
a; //???
c; //???

function b(){
	return c;
}

var d = function(){
	return b();
};

//should look like: 

function b(){
	return c;
}

var a;
var c;
var d;
a = b();
c = d();
a; //???
c; //???
d = function(){
	return b();
}; 

//d does not get hoisted because it is a function expression rather than a declaration
//the compiler pulls out the declarations and variables, effectively putting them on top
