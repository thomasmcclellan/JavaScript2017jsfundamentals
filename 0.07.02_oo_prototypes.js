//Object-Oriented Prototypes

//**Before everything, there is a built-in object prototype before any function is called**

//Primary function is created foo() and links with an object with a link called .prototype 
//The object also links with the function called .constructor
	//.constructor doesn't mean 'was constructed by' => it is an arbitrary name
function foo(){
	this.me = who;
}
//We arbitrarily add names to these arbitrarily named objects
//We call it .identify (directly on the object)
	//Doesn't matter that .identify is a method => it is just a property at the moment
Foo.prototype.identify = function(){ 
	return 'I am' + this.me;
};

//When we call a new function, four things happens:
//1) A new object is created
//2) Oject gets linked to .identify
//3) The object gets set to 'this' => gets .me property
//4) Returns 'this' and gets assigned a1
var a1 = new Foo('a1');
//Same as a1
var a2 = new Foo('a2');

//.speak property gets added to a2
a2.speak = function(){
	alert('Hello, ' + this.identify() + '.');
};

//There is no .constructor property on a1
	//When it doesn't have .constructor, it goes up the prototype chain => [[P]]
//Links up with .identify, and, thus, to Foo()
a1.constructor === Foo;
a1.constructor === a2.constructor;
//There is no __proto__ on a1
	//Likewise, it moves up the [[P]]s to find one
//There is a __proto__ in the built-in object prototype(line3)
	//The [[P]] will then have a __proto__ feature
a1.__proto__ === Foo.prototype;
a1.__proto__ == a2.__proto__;

//The links between all of these objects are called prototype links => [[Prototype]] => [[P]] for short
//__proto__ => Dunder proto => getter function => returns the internal prototype linkage 