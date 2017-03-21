$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fijo');
            $('#logo-img').attr("src","img/logo3.png");
		} else {
			$('.menu').removeClass('menu-fijo');
            $('#logo-img').attr("src","img/logo4.png");
		}
	});
 
});