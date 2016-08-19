var pingPong = function(numbers){
	// debugger;
	var words = ['ping', 'pong', 'ping-pong']
	var input = [];
	for (var i = 0; i <= numbers; i ++){
		if (number % 3 === 0){
			alert(words);
		}
	}
	return numbers
}
// -------------->front end work<---------------
$(document).ready(function(){
	$('form#ping').submit(function(event){
		var userInput = parseInt($('input#number').val());
		var results = pingPong(userInput);
		$('.results').append('<p>' + results + '</p>');
		event.preventDefault();

	});
});
