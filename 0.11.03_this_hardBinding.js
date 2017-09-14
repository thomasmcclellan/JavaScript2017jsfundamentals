//Hard Binding

function foo(){
	console.log(this.bar);
}

var obj = { bar: 'bar' };
var obj2 = { bar: 'bar2' };

var orig = foo; 
foo = function(){ orig.call(obj); };

foo(); //'bar'
foo.call(obj2); //still 'bar', but why?

//With hard binding, when you call a function (line11),
//you are always locked with this referring to that function

//So, when you attempt to change this to obj2, 
//this is still linked with obj and will give you the value of 'bar'

//Bind Utility:

function bind(fn, o){
	return function(){
		fn.call(o);
	};
}
function foo(){
	console.log(this.bar);
}

var obj = { bar: 'bar' };
var obj2 = { bar: 'bar2' };

foo = bind(foo, obj);

foo(); //'bar'
foo.call(obj2); //???

//The call function is now no longer down (line36), but it is wrapped within the function (line26)

//Bind Utility (Option 2) => Pass Through Option

if (!Function.prototype.bind2){
	Function.prototype.bind2 = function(o){
		var fn = this; //the function!
		return function(){
			return fn.apply(o, arguments);
		};
	};
}

function foo(baz){
	console.log(this.bar + " " + baz);
}

var obj = { bar: 'bar' };
foo = foo.bind2(obj); //IBR

foo('baz'); //'bar baz'

//.bind Option!!
//ES6 now offers a .bind utility
//(Found on MDN), the polyfill is found: 

if (!Function.prototype.bind){
	Function.prototype.bind = function(oThis){
		if (typeof this !== 'function'){
			//closest thing possible to the ECMAScript internal IsCallable function
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		}

		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			fNOP = function(){},
			fBound = function(){
				return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
			};
		fNOP.prototype = this.prototype;
		fBound.prototype = fNOP();

		return fBound;
	};
}












