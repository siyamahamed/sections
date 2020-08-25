$(document).ready(function () {

	$('.slide-items').owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		autoplay: false,
		nav: false,


	});
	$('.logo-carousel-item').owlCarousel({
		items: 5,
		margin:30,
		dots: false,
		loop: true,
		autoplay: false,
		nav: false,

	});
	$(".header-menu-trigger").on("click", function () {

		$(".off-canvas-manu, .off-canvas-manu-overlay").addClass("active");
		return false;

	});
	$(".manu-close, .off-canvas-manu-overlay").on("click", function () {

		$(".off-canvas-manu, .off-canvas-manu-overlay").removeClass("active");


	});



	$('.products-list').masonry();



	var $grid = $('.product-tiem-wrap').isotope({
		// options
		itemSelector: '.col-md-4',
	});

	$(".section-filter li").on("click", function () {
		$(".section-filter li").removeClass("active");
		$(".this").addClass("active");

		var velue = $(this).attr('data-name');
		$grid.isotope({
			filter: velue
		});
	});

});
