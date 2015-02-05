$(document).ready(function() {

	// Tab area 1
	
	$('.tab-area-box-1 p').hover(function(){
		
		if ( $(this).hasClass('tab-area-tab-active') ) {
			return;
		} else {
			$('.tab-area-box-1 p').removeClass('tab-area-tab-active');
			$(this).addClass('tab-area-tab-active');
		}
	
	});

	$('.tab-area-1-first-tab').hover(function(){
		$('.tab-chooser').removeClass().addClass('tab-chooser').animate({left: '83px'}, 100);
	});
	$('.tab-area-1-second-tab').hover(function(){
		$('.tab-chooser').removeClass().addClass('tab-chooser').animate({left: '245px'}, 100);
	});
	$('.tab-area-1-third-tab').hover(function(){
		$('.tab-chooser').removeClass().addClass('tab-chooser').animate({left: '400px'}, 100);
	});

	// Tab area 2
	
	$('.tab-area-box-2 p').hover(function(){
		
		if ( $(this).hasClass('tab-area-tab-active') ) {
			return;
		} else {
			$('.tab-area-box-2 p').removeClass('tab-area-tab-active');
			$(this).addClass('tab-area-tab-active');
		}
	
	});

	$('.tab-area-2-first-tab').hover(function(){
		$('.tab-area-image-box-2').children('img').attr('src', 'img/tabs-img-2-02.jpg');
	});
	$('.tab-area-2-second-tab').hover(function(){
		var imageSrc = $('.tab-area-image-box-2').children('img').attr('src', 'img/tabs-img-2.jpg');
	});
	$('.tab-area-2-third-tab').hover(function(){
		var imageSrc = $('.tab-area-image-box-2').children('img').attr('src', 'img/tabs-img-2-03.jpg');
	});
})