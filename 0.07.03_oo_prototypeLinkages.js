//Object-Oriented Prototype Linkages


function foo(){
	this.me = who;
}

Foo.prototype.identify = function(){ 
	//If we call the function through a1, this will allude to a1, etc.
	//This is great for prototypes because it will pick up the [[P]]s and point to the object you are calling from 
	return 'I am' + this.me;
};


var a1 = new Foo('a1');
var a2 = new Foo('a2');

a2.speak = function(){
	alert('Hello, ' + this.identify() + '.');
};

a1.constructor === Foo;
a1.constructor === a2.constructor;
a1.__proto__ === Foo.prototype;
a1.__proto__ == a2.__proto__;

//We have the ability to delegate to another object to handle a method call or property reference


function Foo(who){
	this.me = who;
}
Foo.prototype.identify = function(){
	return 'I am ' + this.me;
};

var a1 = new Foo('a1');
a1.identify(); //'I am a1'

a1.identify = function(){ //<= Shadowing
	//Because a1.identify is then pointing to the a1 object, you need this function to get to .identify (if they have the same name)
	alert('Hello, ' + Foo.prototype.identify.call(this) + '.');
};

a1.identify(); //alerts: 'Hello, I am a1.'

//Properties within [[P]]s shadow each other


function Foo(who){
	this.me = who;
}

Foo.prototype.identify = function(){
	return 'I am' + this.me;
};

Foo.prototype.speak = function(){
	alert('Hello, ' + this.identify() + '.'); //Super magic!!
};

var a1 = new Foo('a1');
a1.speak(); //alerts: 'Hello, I am a1'

//It's your choice to use shadowing.  If you don't you can use this super magic method.
