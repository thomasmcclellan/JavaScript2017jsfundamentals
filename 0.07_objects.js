// Objects

let food = {
	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'],
	pieNames: [],
	getPies: function() {
		return this.pies; //this = food
	}, 
	
	addPie: function() {
		return this.pies.forEach(function(newP) {
			console.log(newP + " pie");
		})
	},

	getPieNames: function() {
		this.pies.forEach(function(yum) {
			// console.log(yum);
			food.pieNames.push(yum + ' pie');
		})
		return this.pieNames;
	}


console.log(food.pies[0] + ' pie');

//Challenge: iterate over the pie array and print out each pie, and add 'pie' to them 
//using the forEach() method

food.pies.forEach(function(flavor) {
	console.log(flavor, 'pie');
})

console.log(food.getPies());
console.log(food.addPie());
console.log(food.getPieNames());

//Challenge: create a method inside of the object 'food' that appends ' pie' to the list
//Challenge: create a method that adds the pies to a new array in the food object

