$(function(){
	$('.cassette').click(function(){
		e1 = $('.cassette');
        e1.addClass('animate');
				e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            e1.removeClass('animate');
        });
	});
});

$(function(){
	$('.cassette').click(function(){
		e1 = $('body');
        e1.addClass('animate1');
        e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            e1.removeClass('animate1');
        });
	});
});
