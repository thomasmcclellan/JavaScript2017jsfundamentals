//Nested Scope
function foo(){
	var bar = 0;

	setTimeout(function(){
		var baz = 1;
		console.log(bar++); //refers to bar (line74)

		setTimeout(function(){
			console.log(bar + baz); //also refers to bar (line74)
		}, 200);
	}, 100);
}

foo(); //0 2

//Essentially, everything is pulled up outside of their own scope to fit within the lexical scope of foo()