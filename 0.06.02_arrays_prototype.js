// Prototype represents the prototype for the array constructor and allows you to add new properties and methods to ALL arrays

//If JS doesn't provide a first() method natively, add a new method returning the first element of array
if (!Array.prototype.first) {
	Array.prototype.first = function() {
		return this[0];
	}
}

// Array instances inherit from prototype
// As with all constructors, you can change the construcotr's prototype object to make changes to all array instances

//FUN FACT - Array.prototype itself is an array

Array.isArray(Array.prototype); //true

// There are many method options that can be appended to an Array.prototype