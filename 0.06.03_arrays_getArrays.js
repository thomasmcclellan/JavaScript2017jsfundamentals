// The Array [@@species] accessor returns the array constructor => Array[Symbol.species]

//The species accessor returns the default constructor for array objects
//Subclass constructors may over-ride it to change the constructor assignment

Array[Symbol.species] //function Array()

class MyArray extends Array {
	//Overwrite MyArray species to the parent Array constructor
	static get [Sybol.species]() {return Array;}
}