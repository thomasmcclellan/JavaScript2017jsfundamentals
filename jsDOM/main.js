let input = document.getElementById("input");
let output = document.getElementById("output");
let ulist = document.getElementById('friendsList');

// console.log(input.value);

let newName = '';

function capitalize() {

	for (let n in input.value) {
		if (n == 0) {
			newName = input.value[n].toUpperCase();
		} else {
			newName += input.value[n].toLowerCase();
		}
	}
	
	input.value = ""; //Challenge two
	output.innerHTML = 'Capitalized Name: ' + newName;
	addItem();
}

// Challenge: find out how to do a conditional target the 'enter key' so that once it's pressed, it can submit the form

document.onkeypress = function(pie) {
	if(pie.keyCode == 13) {
		capitalize();
	}
}

// Challenge: clear the form after 'submit'

//Challenge: create an ul without bullet points that prints out each name that is capitalized

function addItem() {
	let li = document.createElement('li');
	let text = li.innerHTML = newName;

	ulist.appendChild(li);
}














