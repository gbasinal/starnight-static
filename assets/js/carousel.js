(function(app) { 
	'use strict'; 
	
	var Carousel = function() {};

	
	
	Carousel.prototype.init = function() {

		var _self = this;
		_self.createTestimonialSlider();
		
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

	app.Carousel = Carousel;

	app.ready(function () {
		console.log('Carousel Ready');
		Carousel.prototype.init()
	})
    
})(window.app);