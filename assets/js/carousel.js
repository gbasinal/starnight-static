(function(app) { 
	'use strict'; 
	
	var Carousel = function() {};

	
	
	Carousel.prototype.init = function() {

		var _self = this;
		_self.createTestimonialSlider();
		_self.createSectionSlider();
		
	};
	Carousel.prototype.createTestimonialSlider = function(){
		
		$(".testimony-carousel").owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			dots: true,
			items: 1
		})

	}

	Carousel.prototype.createSectionSlider = function(){
		
		$(".two-col-carousel").owlCarousel({
			loop:true,
			margin: 20,
			nav: true,
			dots: false,
			items: 1
		})

		$(window).on("resize, load", function(){
			$(".slider-two-col-wrapper").find(".card-image-wrapper").each( function(){
				var _this = $(this);
				var w = _this.outerWidth();
	
				_this.height(w);
			})
		})


	}

	app.Carousel = Carousel;

	app.ready(function () {
		console.log('Carousel Ready');
		Carousel.prototype.init()
	})
    
})(window.app);