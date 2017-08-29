
let $friends = $('#friends');
let $name = $('#name ');
let $age = $('#age');

let friendTemplate = '' + 
	'<li>' + 
	'<p><strong>Name:</strong> {{name}}</p>' + 
	'<p><strong>Age:</strong> {{age}}</p>' + 
	'<button id="{{id}}" class="remove">X</button>' + 
	'</li>';

function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));
};

$(document).ready(function(){
	
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall', 
		success: function(friends){
			$.each(friends, function(i, friend){
				addFriend(friend);
			});
		},

		error: function(){
			alert('error loading friends');
		}
	});

	$('#add-friend').on('click', function(){

		let friend = {
				name: $name.val(),
				age: $age.val()
		};
		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/friends',
			data: friend,
			success: function(newFriend){
				addFriend(newFriend);
			}, 
			error: function(){
				alert('error saving order');
			}
		});
	});

	//delegate allows you to remove items that were loaded by other students
	$friends.delegate('.remove', 'click', function(){

		//Here, we have to add 'var', not 'let'
		var $li = $(this).closest('li');
		//AJAX DELETE Function - click the .remove class button and the id identifies what to delet
		$.ajax({
			type: 'DELETE',
			url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
			success: function(){
				$li.fadeOut(300, function(){
					$(this).remove();
				});
			}
		});
	});
});
