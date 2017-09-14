//Execute: 

//declaration (var foo) doesn't exist anymore because it has already been logged into the operators
//now, I am going to look at the initialization (foo = 'bar')
var foo = 'bar';

//function bar() doesn't exist anymore, so to var foo
//JS: I have an LHS of variable of foo and he is in the scope of bar (always ask local scope before we go elsewhere)
function bar(){
	var foo = 'baz';
}

//JS: I have an LHS reference of variable of foo and it's in my parameter (foo)
function baz(foo){
	foo = 'bam';
	//If JS is asked about bam, JS: never hear of him (in local scope), then I look at global scope
	//Then, in global scope, JS: every heard of bam? Yes, I just created him for you (in global variable) => leakeage of global scope
	bam = 'yay';
}

//undefined should be better known as "uninitialized" => it is looking at a variable that is currently nothing (not 'undeclared')

//JS: I have an RHS for a var called bar in global scope (it is an RHS because it's not an LHS) => recalls it to line 9
bar();
foo; //'bar'
bam; //'yay'
baz(); //Error!