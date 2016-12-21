/*----------------------------------------------------*/
/*  Back Top Link
/*----------------------------------------------------*/

var offset = 200;
var duration = 500;
$(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
    } else {
        $('.back-to-top').fadeOut(400);
    }
});
$('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
    return false;
})

new WOW().init();

/*--------------------------------------------------*/
/* Counter
/*--------------------------------------------------*/   
    
// $('.timer').countTo();
// $('.counter-item').appear(function() {
//     $('.timer').countTo();
// },{
//   accY: -100
// }); 

/*----------------------------------------------------*/
/*  Css3 Transition
/*----------------------------------------------------*/

// $('*').each(function(){
//   if($(this).attr('data-animation')) {
//     var $animationName = $(this).attr('data-animation'),
//       $animationDelay = "delay-"+$(this).attr('data-animation-delay');
//     $(this).appear(function() {
//       $(this).addClass('animated').addClass($animationName);
//       $(this).addClass('animated').addClass($animationDelay);
//     });
//   }
// });

/*----------------------------------------------------*/
/*  Nivo Lightbox
/*----------------------------------------------------*/

/*$('.lightbox').nivoLightbox({
  effect: 'fadeScale',
  keyboardNav: true,
  errorMessage: 'The requested content cannot be loaded. Please try again later.'
}); */



/*----------------------------------------------------*/
/*  Portfolio Isotope
/*----------------------------------------------------*/

/*jQuery(window).load(function(){
  
  var $container = $('#portfolio');
  $container.isotope({
    layoutMode : 'masonry',
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false,
    }
  });

  $('.portfolio-filter ul a').click(function(){
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      }
    });
    return false;
  });

  var $optionSets = $('.portfolio-filter ul'),
      $optionLinks = $optionSets.find('a');
  $optionLinks.click(function(){
    var $this = $(this);
    if ( $this.hasClass('selected') ) { return false; }
    var $optionSet = $this.parents('.portfolio-filter ul');
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected'); 
  });
  
});*/