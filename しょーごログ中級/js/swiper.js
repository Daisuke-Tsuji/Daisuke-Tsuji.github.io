var mySwiper = new Swiper('.swiper-container', {
	spaceBetween: 20,
	slidesPerView: 1.6,
	centeredSlides: true,
	initialSlide: 1,
	loop: true,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	breakpoints: {
		590: {
		  slidesPerView: 2.4,
		  spaceBetween: 56,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 56,
		  },
		1024: {
			slidesPerView: 4,
			spaceBetween: 70,
		  }
	}
});