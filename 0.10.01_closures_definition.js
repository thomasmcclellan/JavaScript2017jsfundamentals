// Closures:
//What you need to know:
//Closure is when a function 'remembers' its lexical scope even when the function is executed outside that lexical scope

function foo(){
	var bar = 'bar';

	function baz(){
		console.log(bar);
	}

	bam(baz); //Here, bam is calling baz within the lexical scope of foo()
}

function bam(baz){ //Here bam is calling baz and getting 'bar' => even though it is outside of foo() scope, it still has access to it
	baz(); //'bar'
}

foo();

//More examples: 
function foo(){
	var bar = 'bar';

	return function(){
		console.log(bar);
	};
}

function bam(){
	foo()(); //'bar'
}

bam();


function foo(){
	var bar = 'bar';

	setTimeout(function(){
		console.log(bar);
	}, 1000);
}

foo();


function foo(){
	var bar = 'bar';

	$('#btn').click(function(evt){
		console.log(bar);
	});
}

foo();







