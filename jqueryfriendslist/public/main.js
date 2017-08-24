$(document).ready(function() {
	// let names;
	
	// $.ajax({
	// 	type: 'GET',
	// 	url: 'http://rest.learncode.academy/api/learncode/javascriptfall'
	// }).done(function(data) {
	// 	names = data;
	// 	console.log(data);
	// 	console.log(names);
	// })

	// console.log("Hello");
	// console.log(names);

	// let person = {
	// 	name: 'Tom',
	// 	email: 'thomasmcclellan87@gmail.com'
	// }

	// $.ajax({
	// 	type: 'POST',
	// 	url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
	// 	data: person
	// }).done(function(info){
	// 	console.log(info);
	// })

	

	$(submit).click(signUp);

	function signUp() {
		let person = {
			name: $(name).val(),
			email: $(email).val()
		}

		
			$.ajax({
				type: 'POST',
				url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
				data: person
			}).done(function(data){
				console.log(person);
				console.log(data);
			})
		
	}


});


