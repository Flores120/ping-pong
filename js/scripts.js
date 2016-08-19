var pingPong = function(numbers){
	debugger;
	var words = ['ping', 'pong', 'ping-pong']
	var input = [];
	for (i = 1; i <= numbers; i++){
		input += i;
		if (i < (numbers)){
			input += ', ';
	} else if (numbers % 3 === 0){
		numbers.splice(words(0));
	}
	}
	return input
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
