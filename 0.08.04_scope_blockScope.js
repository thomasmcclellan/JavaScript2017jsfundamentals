//Block scope

var foo; 

try {
	foo.length;
}
catch(err){
	console.log(err); //TypeError
}

console.log(err); //ReferenceError

//Linters will have problems that catch try/catch when you have console.logs of same names (err) 
//=> either id then as err1, err2, etc., or turn off that linter rule

function foo(){
	var bar = 'bar';
	for (let i = 0; i < bar.length; i++){
		console.log(bar.charAt(i));
	}
	console.log(i); //ReferenceError
}

foo();

//Let allows you to keep within your block scope => let and var could be used together

function foo(bar){
	if (bar){
		let baz = bar;
		if (baz){
			let bam = baz;
		}
		console.log(bam); //Error
	}
	console.log(baz); //Error
}

foo('bar');

//Let keyword does not hoist => causes you to have to write your lets up at the top 


//https://github.com/getify/let-er