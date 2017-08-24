$(document).ready(function(){
	localStorage.clear();
	if(!localStorage.getItem('planets')){
		$.ajax({
			type: 'GET',
			url: 'http://swapi.co/api/planets/',
		}).done(function(planets){
			let planetsObj = {
				planets : []
			}
			planets.results.forEach(function(p){
				$("#planets").append('<tr><td>'+ p.name + '</td></tr>')
				planetsObj.planets.push(p.name)
			})
			localStorage.setItem('planets', JSON.stringify(planetsObj))
		})
	}

	if(!localStorage.getItem('wookie')){
		$.ajax({
			type: 'GET',
			url: 'http://swapi.co/api/planets/?format=wookiee',
		}).done(function(planets){
			let planetsObj = {
				planets : []
			}
			planets.results.forEach(function(p){
				planetsObj.planets.push(p.name)
			})
		})
	}

	if(!localStorage.getItem('starships')){
		$.ajax({
			type: 'GET',
			url: 'https://swapi.co/api/starships/',
		}).done(function(starships){
			let shipsObj = {
				ships : []
			}
			starships.results.forEach(function(s){
				$("#starships").append('<tr><td>'+ s.name + '</td></tr>')
				shipsObj.ships.push(s.name);
			})
			localStorage.setItem('starships', JSON.stringify(shipsObj))
		})
	}

	if(!localStorage.getItem('movies')){
		let movieObj = {
			movies : []
		}
		$.ajax({
			type: 'GET',
			url: 'http://swapi.co/api/films/',
		}).done(function(films){
			films.results.forEach(function(p){
				movieObj.movies.push(p.title);
			})
			localStorage.setItem('movies', JSON.stringify(movieObj))
		})
	}

	if(!localStorage.getItem('wookiePlanets')){
		let wookieObj = {
			wookies : []
		}
		for(let i = 1; i < 11; i++){
			$.ajax({
				type: 'GET',
				url: 'http://swapi.co/api/planets/'+i+'/?format=wookiee'
			}).done(function(data){
				wookieObj.wookies.push(data.whrascwo)
				localStorage.setItem('wookies', JSON.stringify(wookieObj))
			})
		}
	}
	
	let clicker = false
	$(wookie).on('click',function(){
		clicker = !clicker
		$(wookie).val("Planet Name")
		$("#planets").html("")
		if(clicker){
			$(changer).html("Wookie Planets");
			let wookieObj = JSON.parse(localStorage.getItem('wookies'));
			wookieObj.wookies.forEach(function(w){
				$("#planets").append('<tr><td>'+ w + '</td></tr>')
			})
			
		} else {
			$(wookie).val("Wookie")
			$(changer).html("Planet Name")
			let planetsObj = JSON.parse(localStorage.getItem('planets'));
			planetsObj.planets.forEach(function(p){
				$("#planets").append('<tr><td>'+ p + '</td></tr>')
			})
		}
		
	})
	$(searchName).on('click', function(){

		let search = $(searchRes).val();
		$(searchRes).val("");
		$.ajax({
			type: 'GET',
			url: 'https://swapi.co/api/people/?search=' + search
		}).done(function(data){
			$("#searchResult").html("")
			for (let d in data.results[0]){
				if(d == "homeworld")
					break;
				let dataName ='<h3 class="searchRe">' + d +':</h3>'
				$(searchResult).append(dataName + "<p>" + data.results[0][d] + "</p>")
			}
		})
	})

	let clicked = false;
	$(moviebtn).on('click',function(){
		clicked = !clicked
		$(moviebtn).val("Show Ships")
		$("#starships").html("")
		if(clicked){
			$(changeName).html("StarWar Movies");
			let movieObj = JSON.parse(localStorage.getItem('movies'));
			movieObj.movies.forEach(function(m){
				$("#starships").append('<tr><td>'+ m + '</td></tr>')
			})
			
		} else {
			$(moviebtn).val("Show Movies")
			$(changeName).html("Starships Name")
			let shipsObj = JSON.parse(localStorage.getItem('starships'));
			shipsObj.ships.forEach(function(s){
				$("#starships").append('<tr><td>'+ s + '</td></tr>')
			})
		}
	})

})