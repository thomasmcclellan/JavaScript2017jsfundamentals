// the AsyncFunction constructor creates a new async function object.
// In JS, every asynchronous function is actually an AsyncFunction object.

// Note that AsyncFunction is NOT GLOBAL.  It can be obtained by evaluating the following code:
Object.getPrototypeOf(async function(){}).constructor;
// new AsyncFunction([arg1[, arg2[...argN]],] functionBody)

//Parameters:
// arg1, arg2, ...argN => Names to be used by the function as formal argument names.  Each must be a string that corresponds to a valid JS identifier
// functionBody => A string containing the JS statemsnt comrpising the function definition

function resolveAfter2Seconds(x){
	return new Promise (resolve => {
		setTimeout(() => {
			resolve(x);
		}, 2000);
	});
}

let AsyncFunction = Object.getPrototypeOf(async function(){}).constructor

let a = new AsyncFunction('a', 'b', 'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');

a(10, 20).then(v => {
	console.log(v); // prints 30 after 4 seconds
});