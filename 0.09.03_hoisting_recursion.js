//Recursion = a function that calls itself until it is proven false

//Example:

a(1); //???

function a(foo){
	if (foo > 20) return foo;
	return b(foo + 2);
}
function b(foo){
	return c(foo) + 1;
}
function c(foo){
	return a(foo * 2);
}

// ===

function a(1){
	if (1 > 20) return foo //it's not
	return b(1 + 2); //3
}
function b(3){
	return c(3) +1 //add 1 to the stack (do not add yet)
}
function c(3){
	return a(3 * 2); //6
}
//again...
function a(6){
	if (6 > 20) return foo //it's not
	return b(6 + 2); //8
}
function b(8){
	return c(8) +1 //add 1 (now 2) to the stack (do not add yet)
}
function c(8){
	return a(8 * 2); //16
//again...
function a(16){
	if (16 > 20) return foo //it's not
	return b(16 + 2); //18
}
function b(18){
	return c(18) +1 //add 1 (now 3) to the stack (do not add yet)
}
function c(18){
	return a(18 * 2); //36
//again...
function a(36){
	if (36 > 20) return foo //IT IS!
	return 30 + 3 //the 3 from the stack

//39











