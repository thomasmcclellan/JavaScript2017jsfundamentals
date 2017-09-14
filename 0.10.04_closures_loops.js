//Closures with loops:

for (var i = 1; i < 5; i++){
	setTimeout(function(){
		console.log('i: ' + i);
	}, i * 1000);
} // 6 6 6 6 6 => what's wrong with this closure?

//What's missing from this example that's preventing it from working?
//Why don't we have five different i values?

//They are five different functions that are giving the same value over the same loop

//So, what can I do?

//IIFE!

for (var i = 1; i < 5; i++){
	(function(i){
		setTimeout(function(){
			console.log('i: ' + i);
		}, i * 1000);
	})(i);
} // 1 2 3 4 5

//We now have a whole different scope created for each itte
//Each function is closing over an itteration scope rather than just over the global scope 