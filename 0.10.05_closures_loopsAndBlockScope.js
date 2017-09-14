//What if we use the let keyword?

for (let i = 1; i < 5; i++){
	setTimeout(function(){
		console.log('i: ' + i);
	}, i * 1000);
}

//The let keyword is actually not only binding the i for the for loop, but also for each itteration for the for loop
//For if we started using let i, it will work without having to create an IIFE

//This would effectively look like this:

for (var i = 1; i < 5; i++){
	let j = i;
	setTimeout(function(){
		console.log('i: ' + j);
	}, j * 1000);
}

//Essentially, we are creating j for each iteration of the loop => it is calling that new j, rather than just i once

//But we have let (lines3-7) that makes this nice and clean 