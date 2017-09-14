//Classic Module Patterns

var foo = (function(){
	var o = { bar: 'bar' };

	return {
		bar: function(){
			console.log(o.bar);
		}
	};
})();

foo.bar(); //'bar'

//Two characteristics:
//1) There has to be an outer wrapping function that gets executed (doesn't have to be an IIFE)
//2) There must be one or more inner functions that have closure over the private scope

//Variation:
var foo = (function(){
	var publicAPI = {
		bar: function(){
			publicAPI.baz();
		},
		baz: function(){
			console.log('baz');
		}
	};
	return publicAPI;
})();

foo.bar(); //'baz'

//Here we can call both foo and publicAPI and it will reference the same thing; it is all a matter of privacy