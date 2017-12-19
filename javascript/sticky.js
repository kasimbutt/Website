$(function () {

		$(window).scroll(function(event) {
			if($(this).scrollTop() > 150) {
			$("#navbar").fadeIn();
			$("#navbar").addClass('fixed',1000,'linear');
		}
		else {
			$("#navbar").removeClass('fixed')
		}
		});

	});
