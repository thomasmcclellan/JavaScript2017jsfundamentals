//Binding confusion
//Trying to make this reference a local context

function foo(){
	var bar = 'bar1';
	baz();
}
function baz(){
	console.log(this.bar);
}

var bar = 'bar2';
foo(); //???

//For this example, the goal is to make this refer to the local context
//The attempted fix looks like this:

function foo(){
	var bar = 'bar1';
	this.baz = baz;
	this.baz();
}
function baz(){
	console.log(this.bar);
}

var bar = 'bar2';
foo(); //???

//So, what's the problem?

//According to the Default Binding Rule, when not in strict mode (which we aren't in), 
//The DBR points to global context

//So, when foo() is called, the DBR is initiated and it reads globally, NOT LOCALLY

//With the Implicit Binding Rule, we look for the method similarity
//So, when foo() is called, JS looks for this.bar
//The problem is that this too is global, NOT LOCAL

//So the problem is that you can't just fudge code to make this into what you want it to
//YOU HAVE TO OBEY THE RULES OF THIS!!!