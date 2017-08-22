// The length property sets or returns the number of elements in that array.
// The value is an unsigned, 32-bit integer that is ALWAYS > the highest index in that array

let items = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(items.length);

// The value of the length property is an integer with a positve sign and a value < 2^32

let namelistA = new Array(4294967296); //2^32 = 4294967296
let namelistC = new Array(-100); //nagative sign

console.log(namelistA.length); //RangeError: Too long
console.log(namelistC.length); //RangeError: Negative integer

let namelistB = [];
namelistB.length = Math.pow(2,32)-1; //Set array length < 2^32
console.log(namelistB.length);

//4294967295

// Can set the length property to truncate an array at any time
// When array is extended by changing its length, the number of actual elements does not increase
//Therefore the length does not necessarily indicate the number of defined values in the array

//Property attributes of an array:
//Writable - If this attribute is set to false, the value of the property cannot be changed
//Configurable - If this attribute is set to false, any attempts to delete or change the property will fail
//Enumerable - If this attribute is set to true, the property will be iterated over during for (or for in) loops

let numbers = [1,2,3,4,5];
let length = numbers.length;
for (let i = 0; i < length; i++) {
	numbers[i] *= 2;
}

//Numbers is now [2,4,6,8,10]

let numbers = [1,2,3,4,5];
if (numbers.length > 3) {
	numnbers.length = 3;
}

console.log(numbers); //[1,2,3]
conosle.log(numbers.length); //3