$(function () {
	$('.top__slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		fade: true,
		responsive: [
			{
				breakpoint: 1220,
				settings: {
					dots: false
				}
			}

			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.reviews__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000
	});
});

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});