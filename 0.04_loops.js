// Loops

/* 
	for loop
	-------------

	while loop
	-------------

	for in loop 
	-------------

	do while loop
	-------------
	runs at least once 
*/

// initialize var; have boolean expression; 
for (var i = 0; i < 10; i++) {
	console.log(i);
}

//Challenge: using a for loop, count to 20, by 2's

for (var i = 0; i <= 20; i += 2) {
	console.log(i);
}

// best practice?

var name = "Kenn";

for (var i = 0; i < name.length; i++) {
	console.log(name[i]);
}


// initialize variable
var j = 0;

// // boolean expression
// while (j < 5) {
// 	step through the loop
// 	j++
// 	console.log(j); // 1 2 3 4 5

	// If the order is console.log(j) THEN j++ => 0 1 2 3 4
	//The natural is to start at the first category (0), then up to (but not including) the number in the expression (this case)
// }

while (true) {
	console.log("Runs once");
	return false;
}


// Challenge: create a while loop that counts to 100 by 10's

var k = 0;

while (k < 100) {
	k+=10;
	console.log(k);
}

//For in loop (or for each loop)
var studentName = "smita";
//		lcv		collection
for (var l in studentName) {
	//console.log(studentName[l]);
	console.log(studentName[0].toUpperCase() + studentName.slice(1));
	if (studentName[0].toUpperCase() == true) {
		return true;
	} else {
		return false;
	}
}

// OR (and the better way...)

var studentName = "smita";
var capSN = "";
for (var l in studentName) {
	//console.log(studentName[l]);
	if (l == 0) {
		capSN = studentName[l].toUpperCase();
	} else {
		capSN += studentName[l];
	}
}