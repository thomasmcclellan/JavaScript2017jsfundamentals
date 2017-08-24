$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/planets/'
	}).done(function(planets) {
		// let planets = data.results
		// console.log(planets);

		// for (let i = 0; i < planets.length; i++) {
		// 	console.log(planets[i].name);

		planets.results.forEach(function(p) {
			console.log(p.name);

			console.log($("#pBody").append("<tr><td>" + p.name + "</tr></td>"));
		})

		

		//OR

		// for (let planet of plaents.results) {
		// 	console.log(planet.name);
		// }
	});
});

$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: 'https://swapi.co/api/starships/'
	}).done(function(ships) {

		ships.results.forEach(function(s) {
			console.log(s.startships);

			console.log($("#sBody").append("<tr><td>" + s.name + "</tr></td>"));
		})
	});
});


$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: 'https://swapi.co/api/people/?search=' + input.value
	}).done(function(people) {
		// $(searchButton).click(find);
		// $(input).keypress(function(e) {
		// 	if(e.keyCode == 13) {
		// 		find();
		// 	}
		// });
		// function find() {
		// 	let newName = '';
		// 		for (let n in input.value) {
		// 			if (n == people.characters) {
		// 				console.log(people.episode_id);
		// 			} 
		// 		}
		// 		input.value = "";
		// 		output.innerHTML = newName;
			
		console.log(people.results)
	})
});







