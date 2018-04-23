//JavaScript for Shopping Cart counter
$(function(){
    var i = 0;
    $('button') .on('click', function(event) {
        event.preventDefault();
        i++;
        $("#counter").empty();
        $("#counter").append(i);
    })
})
//JQuery for Carousel
$(document).ready(function(){
    $('.scroll').slick({
      arrows: false,
      autoplay: true,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                arrows: false,
                autoplay: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                infinite: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                arrows: false,
                autoplay: true,  
                slidesToShow: 1,
                slidesToScroll: 1
              }
          }
      ]
    });
  });

