$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });

      $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });

    
})