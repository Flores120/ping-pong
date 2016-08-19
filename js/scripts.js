var pingPong = function(numbers){
	// debugger;
	var words = ['ping', 'pong', 'ping-pong']
	var input = [];
	for (var i = 0; i <= input.length; i ++){
		if (numbers % 3){
			return words['ping']
		}
	}
		return numbers
}
// -------------->front end work<---------------
$(document).ready(function(){
	$('form#ping').submit(function(event){
		var userInput = parseInt($('input#number').val());
		var results = pingPong(userInput);
		$('.results').append('<div>' + results + '</div>');
		event.preventDefault();

	});
});
