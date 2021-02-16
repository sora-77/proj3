$(function(){

    $("#search .search__nav").each(function(){

        let allAnchor = $(this).find("a");
        let allBox = $("#search").find(".search-box");
        let activeAnchor = allAnchor.find(".active");
        let activeBox = activeAnchor.attr("href");

        $(activeBox).show();

        $(".search__nav a").click(function(){
            event.preventDefault();
            let activeBox = $(this).attr("href");

            allBox.hide();
            $(activeBox).show();
            $(".search__nav a").removeClass("active");
            $(this).addClass("active");
        })
    }) 
/*
    $(window).scroll(function(){
      if ($(document).scrollTop() <= 679 && $(document).scrollTop() >= 100) {
        $("#header").css({backgroundColor: "rgba(225,225,225,.9)"});
      } else if ($(document).scrollTop() < 100) {
        $("#header").css({backgroundColor: "transparent"});
      }
    })*/


    $(window).scroll(function(){
      var findImg = $(".logo").find('img');
      var findsrc = findImg.attr('src');
      var src_dark = findsrc.replace("white", "dark");
      var src_white = src_dark.replace("dark", "white");

        if ($(document).scrollTop() >= 10 && $(document).scrollTop() <= $("#promotion").offset().top - 0) {
              findImg.attr("src", src_dark);
          $("#header").css({backgroundColor: "#fff"}).fadeIn();
        } else if ($(document).scrollTop() < 10) {
          $("#header").css({backgroundColor: "transparent"});
          findImg.attr("src", src_white);

        } else {
          $("#header").hide();
        }

        if ($(document).scrollTop() > $("#promotion").offset().top - 0) {
          $("#search").addClass("on");
        } else {
          $("#search").removeClass("on");

        }

        if($(document).scrollTop() >= 10) {
          $("#menu-box span").css({backgroundColor: "#000"});
        } else {
          $("#menu-box span").css({backgroundColor: "#fff"});
        }
      })

      $(".search-box .find__button").click(function(){
        $(".search__find-box").css({transform: "scale(1)"});
      })

      $(".search-box .find__button").blur(function(){
        $(".search__find-box").css({transform: "scale(0)"});
      })

      $(".search__destination input").focus(function(){
        $(".search__destination-box").css({transform: "scale(1)"});
        //$('.destination__input').focus();
      })

      $(".search__destination input").blur(function(){
        $(".search__destination-box").css({transform: "scale(0)"});
      })


      $("#ask .ask__button").click(function(){
        $("#ask .ask__background").css({transform: "scale(1)"});
      });

      $("#ask .close-btn").click(function(){
        $("#ask .ask__background").css({transform: "scale(0)"});
      });

      var navi = 1;
      $("#menu-box").click(function(){
        if ( navi == 1 ) { 
          $("#navigation").animate({left: "0"});
          $(".navigation__background").css({opacity: 1, visibility: "visible"}, 3000);
          
          $("#menu-box span").animate({backgroundColor: "var(--color-primary)"});
          $("#menu-box span:nth-child(1)").animate({width: "+=8px"});
          $("#menu-box span:nth-child(3)").animate({width: "+=8px"});
          $("#menu-box span:nth-child(2)").animate({width: "-=8px"});
          
          navi = 2;
        } else {
          $("#navigation").css({left: "-100%"});
          $(".navigation__background").css({opacity: 0, visibility: "hidden"}, 3000);
          $("#menu-box span").css({"background-color": "currentColor"});
          $("#menu-box span:nth-child(1)").animate({width: "-=8px"});
          $("#menu-box span:nth-child(3)").animate({width: "-=8px"});
          $("#menu-box span:nth-child(2)").animate({width: "+=8px"});
          navi = 1;
        }
      })


      $("#navigation .navi__depth1 > li").each(function(){
        let ul = $(this).find(".navi__depth2");
        let naviBack = $(this).find(".navi__back");

        $(this).hover(function(){
          naviBack.stop().fadeIn();
          ul.stop().fadeIn();
        }, function(){
          ul.stop().hide();
          naviBack.stop().fadeOut();
        })
      })     
})