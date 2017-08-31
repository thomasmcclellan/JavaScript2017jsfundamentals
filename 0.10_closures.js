// Has access to both inner and outer functions
// The nested function will have access to the variable functions of all 

// It is a function within a function

function init(){
	let name = 'Mozilla'; //name is a local variable created by init
	function displayName(){ //displayName() is the inner function, a CLOSURE
		alert(name); //use variable declared in the parent function
	}
	displayName();
}
init();


function makeFunc(){
	let name = 'Tom';
	function displayName(){
		alert(name);
	}
	return displayName;
}
let myFunc = makeFunc()
myFunc();


function makeAdder(x){
	return function(y){
		return x + y;
	};
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2)); //7
console.log(add10(2)); //12


let counter = (function(){
	let privateCounter = 0;
	function changeBy(val){
		privateCounter += val;
	}
	return {
		increment: function(){
			changeBy(1);
		}, 
		decrement: function(){
			changeBy(-1);
		}, 
		value: function(){
			return privateCounter;
		}
	};
})();

console.log(counter.value()); //logs 0
counter.increment();
counter.increment();
console.log(counter.value()); //logs 2
counter.decrement();
console.log(counter.value()); //logs 1