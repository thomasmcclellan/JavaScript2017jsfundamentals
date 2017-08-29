// The Array.from() method creates a new array instance from an array-like or iterable object

const bar = ['a', 'b', 'c'];
Array.from(bar);
// ['a', 'b', 'c']

Array.from('foo');
//['f', 'o', 'o']


Array.from(arrayLike[, mapFn[, thisArg]])

//Array.from() lets you create Arrays from:
//array-like objects (objects with a length property and indexed elements) or
//iterable obejcts (objects where you can get its elements, such as Map or Set)

//Array.from() has an optional parameter mapFn, which allows you to execute a map function on each element of the array that is being created
//Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg), except that it does not create an intermediate array.
//This is especially important for certain array subclasses, like TYPED ARRAYS, since the intermediate array would necessarily have values truncated to fit into the appropriate type

let s = new Set(['foo', window]);
Array.from(s);
//['foo', window]

let m = new Map([[1,2], [2,4], [4,8]]);
Array.from(m);
//[[1,2], [2,4], [4,8]]

function f(){
	return Array.from(arguments);
}

f(1,2,3);
//[1,2,3]

//Using an arrow function as the map function to manipulate the elements
Array.from([1,2,3], x => x + x);
//[2,4,6]

//Generate a sequence of numbers
//Since the array is initialized with 'undefined' on each position, the value of 'v' below will be 'undefined'
Array.from({length: 5}, (v, i) => i);
//[0,1,2,3,4]

//POLYFILL
//Array.from() was added to the ECMA-262 stand in the 6th edition (ES2015);
//It may not present in other implementations of the standard

//You can work around this by inserting the following code at the beginning of yoru scripts, allowing use of Array.from()

//Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from){
	Array.from = (function(){
		var toStr = Object.prototype.toString;
		var isCallable = function(fn) {
			return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
		};
		var toInteger = function(value){
			var number = Number(value);
				if (isNaN(number)){ return 0; }
				if (number === 0 || !isFinite(number)){ return number; }
				return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
		};
		var maxSafeInteger = Math.pow(2, 53) - 1;
		var toLength = function(value){
			var len = toInteger(value);
			return Math.min(Math.max(len, 0), maxSafeInteger);
		};

		//The length property of the from method is 1.
		return function from(arrayLike /*, mapFn, thisArg */){
			//1. Let C be the 'this' value
			var C = this;

			//2. Let items be toObject(arrayLike)
			var items = Obejct(arrayLike);

			//3. ReturnIfAbrupt(items)
			if (arrayLike == null){
				throw new TypeError('Array.from requires an array-like object - not null or undefined');
			}

			//4. If mapfn is undefined, then let mapping be false
			var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
			var T;
			if (typeof mapFn !== 'undefined'){
				//5. else
				//5. a If IsCallable(mapfn) is false, throw a TypeError exception
				if (!isCallable(mapfn)){
					throw new TypeError('Array.from: when provided, the second arguemnt must be a function');
				}

				//5. b. If thisArg was supplied, let T be thisArg; else let T be undefined
				if (arguments.length > 2){
					T = arguments[2];
				}
			}

			//10. Let lenValue be Get(items, "length")
			//11. Let len be ToLength(lenValue)
			var len = toLength(items.length);

			//13. If IsConstructor(C) is true, then:
			//13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len
			//14. a. Else, let A be ArrayCreate(len)
			var A = isCallable(C) ? Object(new C(len)) : new Array(len);

			//16. Let k be 0
			var k = 0;
			//17. Repeat, while k < len (also steps a-h)
			var kValue;
			while (k < len){
				kValue = items[k];
				if (mapFn){
					A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
				} else {
					A[k] = kValue;
				}
				k += 1;
			}
			//18. Let putStatus be Put(A, "length", len, true)
			A.length = len;
			//20. Return A
			return A;
		};
	}());
}