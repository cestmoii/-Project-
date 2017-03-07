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
		$('.figs1,.figs2,.figs3,.figs4,.figs5,.figs6').addClass('animate3');
	});
});

$(document).ready(function() {
    $('.figs1, .figs2, .figs3, .figs4, .figs5, .figs6').each(function () {
        var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
        $(this).css("background-color", hue);
    });
});
