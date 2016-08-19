var pingPong = function(numbers){
	// debugger;
	var input = [];
	for ( var i = 1; i <= numbers; i++){
		input += i
		if (i % 3 === 0){
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
