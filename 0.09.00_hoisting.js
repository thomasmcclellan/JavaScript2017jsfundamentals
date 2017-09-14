// Important when you declare functions and variables

// Whenever you declare a function, it takes any declarations and put it up at the top
// It doesn't run it, but remembers it so it knows what to do with it

// With variables, it also puts it up at the top, but does not bring the = 2, 
// It will remember var i; but apply = 2 when it gets to it at the point where var i = 2 is placed.

function catName(name){
	console.log("My cat's name is " + name);
}

catName('Bear'); //"My cat's name is Bear"



wifeName('Tara');

function wifeName(name){
	console.log("My wife's name is " + name);
}

//"My wife's name is Tara"