(function ($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var sticky_header = $('.main-header .sticky-header, .header-style-five');
			var scrollLink = $('.scroll-to-top');
			if (windowpos > 100) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();

	//Submenu Dropdown Toggle
	if ($('.main-header li.dropdown ul').length) {
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('ul').slideToggle(500);
		});

		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function (e) {
			e.preventDefault();
		});
	}


	 //nice select
	 $(document).ready(function() {
		$('select:not(.ignore)').niceSelect();
	  });

	if ($('.slider-one__carousel').length) {
		var slideOneCarousel = $('.slider-one__carousel');
		var singleItem = $('.slider-one__slide');

		slideOneCarousel.owlCarousel({
			loop: true,
			items: 1,
			margin: 0,
			dots: false,
			nav: true,
			navText: [],
			animateOut: 'slideOutDown',
			animateIn: 'fadeIn',
			active: true,
			smartSpeed: 1000,
			autoplay: 7000
		});


		// making thumbnail to owl dots
		var thumbCount = slideOneCarousel.find('.owl-dot').length;
		for (var i = 0; i < thumbCount; i++) {
			var newIdx = i;
			var itemThumb = slideOneCarousel.find(singleItem).eq(newIdx).data('thumb');
			slideOneCarousel.find('.owl-dot').eq(i).find('span').css('background-image', 'url(' + itemThumb + ')');
		}
	}


	

	//Client Testimonial Carousel
	if ($('.client-thumbs-carousel').length) {

		var $sync4 = $(".client-thumbs-carousel"),
			flag = false,
			duration = 500;


			$sync4
				.owlCarousel({
					loop:true,
					margin:30,
					items: 1,
					nav: false,
					navText: [ '<span class="icon fa fa-long-arrow-left"></span>', '<span class="icon fa fa-long-arrow-right"></span>' ],
					dots: true,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:1,
				            autoWidth: false
				        },
				        400:{
				            items:1,
				            autoWidth: false
				        },
				        600:{
				            items:2,
				            autoWidth: false
				        },
				        1000:{
				            items:3,
				            autoWidth: false
				        },
						1200:{
				            items:3,
				            autoWidth: false
				        },
						1400:{
				            items:3,
				            autoWidth: false
				        }
				    },
				})
				.on('click', '.owl-item', function () {
					$sync4.trigger('to.owl.carousel', [$(this).index(), duration, true]);
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;		
						$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});
	}



	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			singleItem: true,
			smartSpeed: 700,
			autoHeight: false,
			autoplay: false,
			navText: ['<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1024: {
					items: 1
				},
			}
		});
	}

	// Featured Project Carousel
	if ($('.featured-project-carousel').length) {
		$('.featured-project-carousel').owlCarousel({
			animateOut: 'slideOutDown',
			animateIn: 'fadeInDown',
			loop: true,
			margin: 30,
			nav: true,
			singleItem: true,
			smartSpeed: 700,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 10000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1024: {
					items: 1
				},
			}
		});
	}

	// Two Item Carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: true,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				778: {
					items: 1
				},
				1024: {
					items: 2
				},
				1280: {
					items: 2
				}

			}
		});
	}


	// Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: true,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				778: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 3
				},
				1400: {
					items: 3
				}

			}
		});
	}

	//four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			active: true,
			smartSpeed: 1000,
			autoplay: false,
			navText: ['<span class="flaticon-right-arrow"></span>', '<span class="flaticon-left-arrow"></span>'],
			responsive: {
				0: {
					items: 1
				},
				400: {
					items: 1
				},
				600: {
					items: 1
				},
				991: {
					items: 2
				},
				1200: {
					items: 3
				},
				1400: {
					items: 4
				},
				1800: {
					items: 4
				},
			},
		});
	}

	 //five-item-carousel
	 if ($('.five-item-carousel').length) {
		$('.five-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:5
				}
			}
		});    		
	}

	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: true,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 3
				},
				1024: {
					items: 4
				},
				1200: {
					items: 5
				}

			}
		});
	}

	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.small-column'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();

	if ($('.thm__owl-carousel').length) {
		$('.thm__owl-carousel').each(function () {

			var Self = $(this);
			var carouselOptions = Self.data('options');
			var carouselPrevSelector = Self.data('carousel-prev-btn');
			var carouselNextSelector = Self.data('carousel-next-btn');
			var thmCarousel = Self.owlCarousel(carouselOptions);
			if (carouselPrevSelector !== undefined) {
				$(carouselPrevSelector).on('click', function () {
					thmCarousel.trigger('prev.owl.carousel');
					return false;
				});
			}
			if (carouselNextSelector !== undefined) {
				$(carouselNextSelector).on('click', function () {
					thmCarousel.trigger('next.owl.carousel');
					return false;
				});
			}
		});
	}


	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-2').length){
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-3').length){
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-4').length){
		var scene = $('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-5').length){
		var scene = $('.parallax-scene-5').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-6').length){
		var scene = $('.parallax-scene-6').get(0);
		var parallaxInstance = new Parallax(scene);
	}


	// Sponsors / Logos Carousel
	if ($('.factories-icons-carousel').length) {
		$('.factories-icons-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: true,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 3
				},
				1024: {
					items: 4
				},
				1200: {
					items: 5
				}

			}
		});
	}


	// News Carousel
	if ($('.news-carousel').length) {
		$('.news-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 700,
			autoHeight: true,
			autoplay: true,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				768: {
					items: 2
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 3
				},
				1400: {
					items: 4
				}

			}
		});
	}


	// Testimonials Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: true,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				764: {
					items: 1
				},
				800: {
					items: 2
				},
				1024: {
					items: 2
				},
				1200: {
					items: 3
				}

			}
		});
	}

	// Projects Carousel With thumbs
	if ($('.projects-carousel .image-carousel').length && $('.projects-carousel .thumbs-carousel').length) {

		var $sync1 = $(".projects-carousel .image-carousel"),
			$sync2 = $(".projects-carousel .thumbs-carousel"),
			flag = false,
			duration = 500;

		$sync1
			.owlCarousel({
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				loop: true,
				items: 1,
				margin: 30,
				nav: false,
				navText: ['<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>'],
				dots: false,
				autoplay: true,
				autoplayTimeout: 5000
			})
			.on('changed.owl.carousel', function (e) {
				if (!flag) {
					flag = false;
					$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
					flag = false;
				}
			});

		$sync2
			.owlCarousel({
				loop: true,
				margin: 15,
				items: 1,
				nav: true,
				navText: ['<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>'],
				dots: false,
				center: false,
				autoplay: true,
				autoplayTimeout: 5000,
				responsive: {
					0: {
						items: 2,
						autoWidth: false
					},
					400: {
						items: 2,
						autoWidth: false
					},
					600: {
						items: 4,
						autoWidth: false
					},
					900: {
						items: 5,
						autoWidth: false
					},
					1000: {
						items: 5,
						autoWidth: false
					}
				},
			})

			.on('click', '.owl-item', function () {
				$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
			})
			.on('changed.owl.carousel', function (e) {
				if (!flag) {
					flag = true;
					$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
					flag = false;
				}
			});
	}


	//Fact Counter + Text Count
	if ($('.count-box').length) {
		$('.count-box').appear(function () {

			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function () {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function () {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}

		}, { accY: 0 });
	}


	//Progress Bar
	if ($('.progress-line').length) {
		$('.progress-line').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, { accY: 0 });
	}


	//Custom Seclect Box
	if ($('.custom-select-box').length) {
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}

	if ($('.masonary-layout').length) {
		$('.masonary-layout').isotope({
			layoutMode: 'masonry',
			itemSelector: '.masonary-item',

		});
	}
	if ($('.masonary-layout-no-grid-width').length) {
		$('.masonary-layout-no-grid-width').isotope({
			layoutMode: 'masonry',
			itemSelector: '.masonary-item'
		});
	}
	$('.thumbnail').on('click', function (e) {
		e.preventDefault();
		console.log('ddd');
		var clicked = $(this);
		var newSelection = clicked.data('big');
		clicked.parent().parent().find('.primary img').attr("src", newSelection);
	});

	if ($('.post-filter').length) {
		var postFilterList = $('.post-filter li');
		// for first init
		$('.filter-layout').isotope({
			filter: '.filter-item',
			animationOptions: {
				duration: 500,
				easing: 'linear',
				queue: false
			}
		});
		// on click filter links
		postFilterList.children('span').on('click', function () {
			var Self = $(this);
			var selector = Self.parent().attr('data-filter');
			postFilterList.children('span').parent().removeClass('active');
			Self.parent().addClass('active');


			$('.filter-layout').isotope({
				filter: selector,
				animationOptions: {
					duration: 500,
					easing: 'linear',
					queue: false
				}
			});
			return false;
		});
	}

	//LightBox / Fancybox
	if ($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect: 'fade',
			closeEffect: 'fade',
			helpers: {
				media: {}
			}
		});
	}

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(0);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}


	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}


	

	// Scroll to a Specific Div
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1500);

		});
	}

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: false,       // trigger animations on mobile devices (default is true)
				live: true       // act on asynchronously loaded content (default is true)
			}
		);
		wow.init();
	}


	/* ==========================================================================
	   When document is Scrollig, do
	   ========================================================================== */

	$(window).on('scroll', function () {
		headerStyle();
	});

	/* ==========================================================================
	   When document is loading, do
	   ========================================================================== */

	$(window).on('load', function () {
		handlePreloader();
	});

})(window.jQuery);