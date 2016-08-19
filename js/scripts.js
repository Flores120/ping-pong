var pingPong = function(numbers){
var input = [];
var output = [];
for ( var i = 1; i <= numbers; i++){
if (i % 15 === 0){
			input.push('pin-pong');
} else if ( i % 5 === 0){
	input.push('pong');
} else if (i % 3 === 0){
	input.push('ping');
} else {
	input.push(i);
		}
	}	return input
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
