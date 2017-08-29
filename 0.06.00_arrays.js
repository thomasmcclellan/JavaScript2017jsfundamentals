// Arrays

let students = ['Thomas', 'Madyson', 'Brandon', 'Leon', 23, true, ['Jakson', 'Perry']];

console.log(typeof(students));

console.log(students[2]);

// Challenge: grab the nested array out of the students array and grab 'Perry' then print to the console "Hello Perry"


console.log("Hello " + students[6][1]);
//OR
console.log("Hello" ,students[6][1], "the Platypus."); //Commas, here, only work within the console.log

let arrOfFood = ['Quesadilla', 'Pecan Pie', 'Potato', 'Cheesecake', 'Shrimp Pasta'];

for (let i in arrOfFood) {
	console.log(arrOfFood[i]);
} 
//OR
for (let i of arrOfFood) { //With 'of', it prints the values instead of the index number within the array
	console.log(i);
} 

arrOfFood.push('Ny Style Pizza'); //Push always goes to the end

arrOfFood.splice(1, 1, 'Blueberry Pie'); //(Index of item, How many to cut, What you want to replace it with)
arrOfFood.splice(2, 0, 'Sweet Potato'); //In position 2, it adds Sweet Potato, and doesn't remove anything
arrOfFood.splice(4, 2); //Starts at position 4, and removes two (starting with position 4)
arrOfFood.pop(); //Removes that last item in the array

for(let foodItem of arrOfFood) {
	console.log(foodItem);
}

//OR (for loop and forEach() are performing the same thing)

//Goes over each element and prints over each of them => this is more lightweight of what we are trying to do here
arrOfFood.forEach(function(foodItem) {
	console.log(foodItem);
})

//This gives index numbers, intermixed with the elements within the array => banana is giving the index
arrOfFood.forEach(function(foodItem, banana) {
	console.log(banana);
	console.log(foodItem);
})





