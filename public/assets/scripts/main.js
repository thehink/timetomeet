$(document).ready(function(){
$.datepicker.setDefaults($.datepicker.regional["sv"]);
var isElementInViewport = function(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

mapVsFooterHeight=function(){

swidth=$('#search_map').width();

$(".search_map #map").css("max-width",swidth);

if(isElementInViewport($('footer')))
	{


		var rect = $('footer')[0].getBoundingClientRect();
		b=$(window).height()-rect.top;


		   if(b>0)$(".search_map #map").css("height", $(window).height()-b);

	}else
	{
		$(".search_map #map").css("height", $(window).height());
	}

}


$(window).scroll(mapVsFooterHeight);
$(window).resize(mapVsFooterHeight);
mapVsFooterHeight();




function paintStars(star,current){
  var end = star.data('star');
  var mainContainer = star.parent().parent();
  if(current){
  	mainContainer.children().children().removeClass('current');
  	star.addClass('current');
  }

  var painted = mainContainer.children().children('.current').data('star');
  mainContainer.children().children().each(function(){
  	if($(this).data('star')<=end){
  		$(this).addClass('filled');
  	} else {
  		if(!(painted && $(this).data('star')<=painted)){
  			$(this).removeClass('filled');
  		}
  	}
  })
}
    $('.review_slider .bxslider').bxSlider({
		slideWidth: 670,
		slideMargin: 0,
		speed: 500,
		pager: true,
		controls: true,
		randomStart: false,
		preloadImages: 'all',
		adaptiveHeight:true,
		responsive:true,
		nextText:'',
		prevText:'',
		onSliderLoad: function(currentIndex){}
		});



		$('.appearance .bxslider').bxSlider({
		slideMargin: 0,
		speed: 500,
		pager: false,
		controls: true,
		randomStart: false,
		preloadImages: 'all',
		adaptiveHeight:true,
		responsive:true,
		nextText:'',
		prevText:'',
		onSliderLoad: function(currentIndex){}
		});

	$('.faq_nav ul li a[href^="#"]').click(function(){
	var target = $(this).attr('href');
	$(".faq_nav ul li a.active").removeClass('active');
	$('html, body').animate({scrollTop: $(target).offset().top}, 800);
	$(this).addClass('active');
	return false;
	});


	$(".header_menu .navbar-toggle").click(function(){
	if($(this).hasClass('collapsed')){
		$('body').addClass("ov_hidden");
		$('.cart_wrapper').fadeOut(300);
		$(".header_menu .cart_icon").removeClass('active');
		$(".content").removeClass("darker");
	}else{
		$('body').removeClass("ov_hidden");
	}
	});

$(".header_menu .cart_icon").click(function(){
	if($(this).hasClass('active')){
		$('.cart_wrapper').fadeOut(300);
		$(this).removeClass('active');
		$(".content").removeClass("darker");
	}else{
		$('.cart_wrapper').fadeIn(300);
		$(this).addClass('active');
		$(".content").addClass("darker");
	}
	return false;
});


$(".mobile_filters .filter_toggle").click(function(){
	if($(this).hasClass('active')){
		$('.search_container').fadeOut(300);
		$(this).removeClass('active');
		$(".content").removeClass("darker");
	}else{
		$('.search_container').fadeIn(300);
		$(this).addClass('active');
		$(".content").addClass("darker");
	}
	return false;
});


$(".policy").click(function(){
	$(this).parent().find(".policy_details").toggle(200);
	return false;
});


$('.venue_review.add .rating li a').on({
	'click': function(){
		paintStars($(this),true);
	},

	'mouseover': function(){
		paintStars($(this));
	}

});

  $(".search_results .more_filters a").click(function (e) {
  $(".search_results .more_filters").hide();
  $(".search_container .filters .additional").fadeIn(300);
  $(".search_container .filters .filters_buttons").fadeIn(300);
  $(".search_container .filters .filters_group:not(.additional)").removeClass("noborder");
   e.preventDefault();
});
 $(".search_container .filters .filters_buttons .cancel").click(function (e) {
  		$(".search_container .filters .additional").fadeOut(200);
 		 $(this).parent().fadeOut(200);
 		 $(".search_results .more_filters").show();
 		 $(".search_container .filters .filters_group:nth-of-type(3)").addClass("noborder");
   e.preventDefault();
});



//$(window).resize(resizeContentHeight);


	/*dropdown function*/
	$( ".header_lower .search .venue input" ).focusin(function() {
		$(this).parent().parent().find('.place_drop').fadeIn(200);
	});
	$( ".header_lower .search .venue input" ).focusout(function() {
		$(this).parent().parent().find('.place_drop').fadeOut(200);
	});

	$( ".header_upper.white .venue input" ).focusin(function() {
		$(this).parent().parent().find('.place_drop').fadeIn(200);
	});
	$( ".header_upper.white .venue input" ).focusout(function() {
		$(this).parent().parent().find('.place_drop').fadeOut(200);
	});
});
