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

})