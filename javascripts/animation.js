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

$(function(){
	$('.cassette').click(function(){
		$('div').remove(".tap");
	});
});

$(function(){
	$('.cassette').click(function() {
	  $('.tap').hide();
	});
});
