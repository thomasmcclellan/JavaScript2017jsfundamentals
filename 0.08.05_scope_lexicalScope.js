//Lexical scope = compile time scope
//At the time you wrote that code, the decisions of that scope were wrote in stone and no other decisions were made beyond that 

//Lexical scope is like looking for something within a building; if you don't find it on first story, you go up a level, etc. 
//=> if you get to the roof, you are at global scope where it is made if it doesn't already exist
//They are strictly nested within each other => fundamental for lexical scope (compile time (or author time) decisions)

//Exceptions
//Eval keyword => takes any string and treats it like code => makes code run slower!

var bar = 'bar';

function foo(str){
	eval(str); //cheating!
	console.log(bar); //42
}

foo('var bar = 42;');

//With keyword => treats a with statement like a lexical scope => creates auto global scope
//worse than eval because it is actually creating a new lexical scope

var obj = {
	a: 2,
	b: 3,
	c: 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with(obj){
	a = b + c;
	c = b - a;
	d = 3; // ??
}

obj.d; //undefined
d; //3 --- oops!