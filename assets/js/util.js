function scrollDiv(element) {
  $("html, body").delay(250).animate({ scrollTop: $(element).offset().top }, 750);
};

$(document).ready(function(){
  $('body').vegas({
    delay: 3500,
    timer: false,
    shuffle: true,
    transition: ['fade', 'zoomOut', 'fade2'],
    slides: [
    { src: 'assets/img/background-2.jpg' },
    { src: 'assets/img/background-3.jpg' },
    { src: 'assets/img/background-4.jpg' },
    { src: 'assets/img/background.jpg' }
    ]
  });

  $("a[href*=#]").click(function(e){
    e.preventDefault();
    scrollDiv($(this).attr("href"));
  });

  var offset = 250;
  var duration = 300;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });

});