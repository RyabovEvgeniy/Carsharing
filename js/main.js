$(function () {
	$('.top__slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		fade: true
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