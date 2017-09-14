//Immediately Invoked Function Expressions

//Why would we use an IIFE instead of just creating a function and invoking it right afterwards?
//Privacy.  This creates a local scope
//In JS, variables are scoped to their containing functions
//THis means they can not be called outside of a function

let i = 4;
console.log(i);
(function() {
	var arraigh = [];

	arraigh.push(i, i + 1, i + 2);
		console.log(arraigh[0]);
		console.log(arraigh[1]);
		console.log(arraigh[2]);
})();
console.log(i);

// IIFEs call themselves!  No need to name or call the function manually