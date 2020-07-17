


		$('.home-page-slider').owlCarousel({
			items:1,
			dots:false,
			loop:true,
			autoplay:false,
			nav:true,
			navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"]
			
			
		});
		$('.product-promotion').owlCarousel({
			items:1,
			dots:true,
			loop:true,
			autoplay:false,
			nav:false,
			
		});
		$(".header-menu-triger").on("click", function() {
			
			$(".off-canvas-manu, .off-canvas-manu-overlay").addClass("active");
			return false;
			
		});
		$(".manu-close, .off-canvas-manu-overlay").on("click", function() {
			
			$(".off-canvas-manu, .off-canvas-manu-overlay").removeClass("active");
			
			
		});
		
		
		
		$('.product-list').masonry();
		
 