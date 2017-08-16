// Conditionals

var name = "kenn";

if ("Kenn" == name) {
	console.log("Hey your name is " + name);
} else {
	console.log("What is your name?");
};


// Conditional to capitalize the first letter of the name ONLY
var name = "tom";

// Basic rule of thumb, if you are comparing numbers, use ===; if a string, it can often work with just ==
if (name[0] == name[0].toUpperCase()) {
	console.log(name);
} else {
	console.log(name = name.charAt(0).toUpperCase() + name.slice(1));
}

var age = 16;

//Order matters!  If it works with one, JS will not move on to check the next option.
//In this case, create in descending order.
if (age >= 25) {
	console.log("Yay! You can rent a car!");
} else if (age >= 21) {
	console.log("Yay! You can drink!");
} else if (age >= 25) {
	console.log("Yay! You can vote!");
} else {
	console.log("Sorry, you're too young to do anything fun.");
}




