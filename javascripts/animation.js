$(function(){
	$('.cassette').click(function() {
	  $('body').toggleClass('animate1');
	});
});

$(function(){
	$('.cassette').click(function() {
	  $('.cassette').toggleClass('animate');
	});
});

$(function(){
	e1 = $('body');
	e1.addClass('animate2');
	$('.cassette').click(function(){
		e1.removeClass('animate2');
	});
});

$(function(){
	$('.cassette').click(function(){
		$('.figs').addClass('animate3');
	});
});
