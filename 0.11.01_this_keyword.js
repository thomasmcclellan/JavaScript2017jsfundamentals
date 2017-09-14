//Every function, while executing, has a reference to its current execution context called 'this'

//There are 4 rules for how the 'this' keyword gets bound (callsight)
	
	//4) Default Binding Rule
	function foo(){
		console.log(this.bar);
	}

	var bar = 'bar1';
	var o2 = { bar: 'bar2', foo: foo };
	var o3 = { bar: 'bar3', foo: foo };

	foo(); //'bar1'
	o2.foo(); //'bar2'
	o3.foo(); //'bar3'

	//'this' (line 7) is pointing to something and has a value of bar
	//So, when you call foo() (line 14), it comes back with this default rule


	//3) Implicit Binding Rule
	function foo(){
		console.log(this.bar);
	}

	var bar = 'bar1';
	var o2 = { bar: 'bar2', foo: foo };
	var o3 = { bar: 'bar3', foo: foo };

	foo(); //'bar1' => DBR
	o2.foo(); //'bar2' => IBR
	o3.foo(); //'bar3' => IBR

	//When a function foo() is called, it has the value of foo
	//So, when o2 gives an object with a value of foo,
	//This clings to o2.foo out of the similarity of both having the value of foo
	//Exact same thing with o3


	//2) Explicit Binding Rule
	function foo(){
		console.log(this.bar);
	}

	var bar = 'bar1';
	var obj = { bar: 'bar2' };

	foo(); //'bar1' => DBR
	foo.call(obj); //'bar2' =>EBR

	//At the call sight, if there is something that is explicitly calling for this, then use it

	//1) New
	function foo(){
		this.baz = 'baz'; //undefined
		console.log(this.bar + " " + baz); //undefined
	}

	var bar = 'bar'; 
	bar baz = new foo(); //???

	//You can put the new keyword infront of a function, it is then read like a constructor call (allows hoisting)
	//4 things with new:
		//1) Brand new object is created out of thin air
		//2) That object gets linked to a new object
		//3) Brand new object gets bound to this keyword
		//4) If that function doesn't return anything, then it will implicitly insert a return this
	//Essentially becomes a side-object

// 4 Questions to ask for this:
	//1) Was the function called with 'new'?
	//2) Was the function called with 'call or 'apply' specifying an explicit this? (The new keyword can override hard binding as well!)
	//3) Was the function called via a containing/owning object (context)?
	//4) DEFAULT: global object (except strict mode)

















