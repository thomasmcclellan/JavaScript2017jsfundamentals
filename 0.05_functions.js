// Functions

function greeting() {
	console.log("Good Morning!");
}

// Parenthese invoke our function so that it runs the code inside of it 
greeting();

// Challenge: create a function that says, "Day 4; feeling great!" then call that function

function day4() {
	console.log("Day 4; feeling great!");
}

day4();


// Void Functions

// Functions with Parameters

function greeting2(name) {
	console.log("Time to start coding, " + name + ".");
}

greeting2("Tom");

function sum(num1, num2) {
	console.log(num1 + num2);
}

sum(3, 4);

var fname = "AJ";

function hello(fname) {
	var lname = "Hephner"; //If var is not present, it is undefined through HOISTING
	console.log(fname + " " + lname); //UndefinedHephner => fname is tapping into the parameter within the function first,
										//sees that it is undefined, and then doesn't move any further 
}
// console.log(lname); //Error => it is trying to invoke a variable that is local only (can't reach it).

hello("AJ");


if (1 == 1) {
	let sum = 1 + 1; // Let (more than var) keeps the data within the codeblock => specificity
	console.log(sum);
}

console.log(sum);

// Challenge: create a function called capitalize() and use the for loop to capitalize names

function capitalize(capName) {
	
	for (var i in capName) {
		console.log(capName[0].toUpperCase() + capName.slice(1));
		if (capName[0].toUpperCase() == true) {
			return true;
		} else {
			return false;
		}
	}
}

capitalize("tom");

// OR (And better):

function capitalize(studentName) {
	var newName = "";
	for (var j in studentName) {
		if (j == 0) {
			newName = studentName[j].toUpperCase();
		} else {
			newName += studentName[j];
		}
	}
	return newName; //If this was a console.log, it would be undefined 
					//Need to have a return within a function (VOID FUNCTION)
					//Can't console.log a console.log
}

console.log(capitalize('tom'));





