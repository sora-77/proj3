$(function(){

  $("#ask .ask__button").click(function(){
    $("#ask .ask__background").css({transform: "scale(1)"});
  });

  $("#ask .close-btn").click(function(){
    $("#ask .ask__background").css({transform: "scale(0)"});
  });

  $(".search .find__button").focus(function(){
    $(".search__find-box").css({transform: "scale(1)"});
    $(".search .search__find__input").focus();
  })

  $(".search .find__button").blur(function(){
    $(".search__find-box").css({transform: "scale(0)"});
  })

  //SORT

  var show = 1;
  $("#list .sort").click(function(){
    if ( show === 1 ) {
      $("#list .sort-box").show();
      $("#list .sort span").text("▴");
      show = 2;
    } else {
      $("#list .sort-box").hide();
      $("#list .sort span").text("▾");
      show = 1;
    }
  })

  $("#favorite-cart .close-btn").click(function(){
    $("#favorite-cart").animate({right: "-100%"}, "8000");
  })

$("#list .hotel__list").each(function(){
  var findListArrow = $(this).find(".slider .slick-arrow")

  $(this).hover(function(){
    findListArrow.css({opacity: 1});
  }, function(){
    findListArrow.css({opacity: 0});
  })
})


//FAVORITE

 $(".favorite").each(function(){

  var findSvg = $(this).find(".favorite__icon");
  var findUse = findSvg.find("use");
  var findHeart = findUse.attr("xlink:href");
  var href_full = findHeart.replace("favorite_outline", "favorite");
  var href_blank = href_full.replace("favorite", "favorite_outline");

  var fav = 1;
  $(this).click(function(){
  
    if ( fav === 1 ) {
    findUse.attr("xlink:href", href_full);
    $("#favorite-cart").animate({right: "2rem"});
    fav = 2;
     } else {
    findUse.attr("xlink:href", href_blank);
    alert("상품이 관심 목록에서 제거되었습니다.")
    fav = 1;
    }
  })
})


//FAVORITE ADD BUTTON
$(".add-btn").click(function(){
  $("#favorite-cart").animate({right: "-100%"}, alert("상품이 관심 목록에 추가되었습니다."));
})

//ARROW SHOW & HIDE

$("#hotel-view .slider").each(function(){
  var findHotelArrow = $(this).find(".slick-arrow")

  $(this).hover(function(){
    findHotelArrow.css({opacity: 1});
  }, function(){
    findHotelArrow.css({opacity: 0});
  })
})


// HOTEL ROOM INFO MORE
$("#hotel__products .product").each(function(){
  var findTit = $(this).find(".product__info--title");
  var findCont = $(this).find(".content-box");
  var findSpan = $(this).find(".product__info--title span");
  var open = 1;
  findTit.click(function(){
    if (open === 1 ) {
      findCont.stop().show();
  findSpan.text("–");

      open = 2;
  } else {
    findCont.stop().hide();
    findSpan.text("+");

    open = 1;
    }
    })
  })

  var guest = 1;
  $(".checkbox-form .checkbox-label").click(function(){
    if ( guest === 1 ) {
      $(".form__guest").show();

      guest = 2;
    } else { 
      $(".form__guest").hide();

      guest = 1;
    }
  })
})