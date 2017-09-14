//Shared Scope

function foo(){
	var bar = 0;

	setTimeout(function(){
		console.log(bar++);
	}, 100);
	setTimeout(function(){
		console.log(bar++);
	}, 200);
}

foo(); //0 1


//Within the lexical scope, two setTimeout()s are called and are shared in order to produce one two-answer result of foo()