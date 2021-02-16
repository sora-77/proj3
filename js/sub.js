$(function(){

  var stepper = function () {
    var stepperNumber,
        stepperNumberAdult,
        minusButton;
    
    return {
      
      allSteppers: $( '.input-stepper' ),
    
      // check to see if the input is at '1'...
      checkStepperNumber: function ( thisStepper ) {
        stepperInput = $( thisStepper ).find( 'input' );
        stepperInputAdult = $( thisStepper ).find( 'input.adult__input-box' );
        stepperNumber = stepperInput.val();
        stepperNumberAdult = stepperInputAdult.val();
        decrementButton = $( thisStepper ).find( 'button.minus' );
  
        if ( stepperNumber === '0' || stepperNumber <= 0 ) {
          // if so, disable the minus button. 
          decrementButton.prop( 'disabled', true );
          stepperInput.val( 0 );
        } else if ( stepperNumberAdult === '1' || stepperNumberAdult <= 1  ) {
          decrementButton.prop( 'disabled', true );
          stepperInputAdult.val( 1 );
        }
        else {
          // if number is positive, enable the minus button
          decrementButton.prop( 'disabled', false );
        }
  
      },
  
      init: function () {
        stepper.allSteppers.each( function ( index, element ) {
          var thisStepperInput = $( element ).find( 'input' );
          var thisStepperInputAdult = $( element ).find( 'input.adult__input-box' );
          var thisMinusButton = $( element ).find( 'button.minus' );
  
          if ( thisStepperInput.val() === '0' || thisStepperInput.val() <= 0 ) {
            thisMinusButton.prop( 'disabled', true );
            thisStepperInput.val( 0 );
          } else if (  thisStepperInputAdult.val() === '1' || thisStepperInputAdult.val() <= 1  ) {
            thisMinusButton.prop( 'disabled', true );
            thisStepperInputAdult.val( 1 );
          } else {
            // if number is positive, enable the minus button
            thisMinusButton.prop( 'disabled', false );
          }
        });
      }
      
    }

    
  }();
  
  // on button.plus click ...
  $( '.input-stepper button.plus' ).on( 'click', function ( e ) {
    thisStepper = $( e.target ).closest( '.input-stepper' );
    stepperInput = thisStepper.find( 'input' );
    
    // check the input value
    stepperNumber = stepperInput.val();
    
    // increment the input value
    stepperNumber++;
    stepperInput.val( stepperNumber );
    
    // then check the stepper number
    stepper.checkStepperNumber( thisStepper );
  });
  
  // on button.minus click ...
  $( '.input-stepper button.minus' ).on( 'click', function ( e ) {
    thisStepper = $( e.target ).closest( '.input-stepper' );
    stepperInput = thisStepper.find( 'input' );
    
    // check the input value
    stepperNumber = stepperInput.val();
    
    // decrement the input value
    stepperNumber--;
    stepperInput.val( stepperNumber );
    
    // then check the stepper number
    stepper.checkStepperNumber( thisStepper );
  });
  
  // on input field blur ...
  $( '.input-stepper input' ).on( 'blur', function ( e ) {
    thisStepper = $( e.target ).closest( '.input-stepper' );
    // check the stepper number
    stepper.checkStepperNumber( thisStepper );
  });
  
  // check the stepper number on load
  if ( $( '.input-stepper' ).length ) {
    stepper.init();
   }

   //GUEST SELECT 
   $(".guest__input").click(function(){
     $(".guest__select-box").show();
   })


   // GUEST ACCEPT BUTTON
   $(".accept-button").click(function(){
     $(".guest__select-box").hide();
   })


   // ASK POPUP
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
  });


  // GUEST STEPPER INPUT
  
})