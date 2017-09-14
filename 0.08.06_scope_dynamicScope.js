//Dynamic scope

//theoretical dynamic scoping
function foo(){
	console.log(bar); //dynamic!
}

function baz(){
	var bar = 'bar';
	foo();
}

baz();

//The dicision is a run-time decision, whereas the lexical scoping is an author-time decision