//Lets don't hoist

function foo(bar){
	if (bar){
		console.log(baz); //ReferenceError
//The space between function and console.log (before let) is called:
//THE TEMPORAL DEADZONE
		let baz = bar;
	}
}

foo('bar');