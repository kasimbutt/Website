var elementTop = $('.navbar').offset().top;

$(window).scroll(function() {
	if( $(window).scrollTop() >= elementTop) {
		$('body').addClass('nav_fixed');
	} else {
    $('body').removeClass('nav_fixed');
  }

});
