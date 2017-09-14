//Redeclarations become problems
//JS will hoist function foo(){console.log('bar')}
//Then it will hoist function foo(){console.log('foo')}
//BUT, because these two functions are the same and the local value is the only thing different
//console.log('foo') OVERRIDES console.log('bar')

//THEN JS hoists var foo, but the function foo is already declared, so it gets ignored
//Therefore, foo() = 'foo'

foo(); //'foo'

var foo = 2;

function foo(){
	console.log('bar');
}

function foo(){
	console.log('foo');
}

//Rule of thumb = don't redeclare things!!!