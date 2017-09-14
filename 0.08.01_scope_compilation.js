// What are we looking for? What variables?
// Who's doing the looking?
	//JS IS compiled, but it is compiled when it is running => it reads it line by line and doesn't worry about what is going on below what it is focusing on

//JS has function scope (most-often)

//This is not one statement; rather it is really TWO operations, declaration (var foo) and initialization (foo = 'bar')
//JS: I see var of foo and it is in global scope
var foo = 'bar';

//JS: I see function of bar and it is in global scope, but it has operators so I am going to look in...
function bar(){
	//JS: I see var of foo and it is in local scope of bar()
	var foo = 'baz';
}

//JS: I see function of baz and it is in global scope
//JS: But function baz has a parameter of foo and it is in local scope of baz
function baz(foo){
	foo = 'bam';
	bam = 'yay';
}


//LHS = Left Hand Side (target)
//RHS = Right Hand Side (source)
//Each of these are around the = operator