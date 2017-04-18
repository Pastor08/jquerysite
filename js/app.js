$(document).ready(function() {
  $('.homepage-wrapper').on('click','h2',function(){
  $("span").text("Jesteś TY SAM!!!");
      $(this).closest('.homepage-wrapper').find("span").show();
  });
    $('.tours').on('click','button',function(){
        
        var discount = $(this).closest('.tour').data('price');
        var amount = ('<p>For a $'+ discount +'</p>');
        var message = $('<h5>Cena $<p id="total"></p> za:<p id="nights-count"></p><br /></h5><h5><label for="nights">Za ilość miejsc:</label></h5><br/></h5><h5><input type="number" id="nights" value="1"></h5>'
                       );
        $(this).closest('.tour').after(message);
        $(this).closest('.tour').after(amount);
        $('#nights').on('keyup', function(event) {
    event.preventDefault();
    var nights = +$(this).val();
    var dailyprice = +discount;
    $('#total').text(nights * dailyprice);
    $('#nights-count').text($(this).val());
  });
  $('#nights').on('focus', function() {
    $('#nights').val(1);
  });
        $(this).remove();
        
    });
    
    $('#filters').on('click', '.on-sale', function() {
        $('.highlight').removeClass('highlight');
    $('.tour').filter('.on-sale').addClass('highlight');
  });

  $('#filters').on('click', '.featured', function() {
      $('.highlight').removeClass('highlight');
    $('.tour').filter('.featured').addClass('highlight');
  });
    function showdescription (){
    $(this).closest(".more").find('.photos').slideToggle(250);
    }
    function showds(){
      $(this).find('span').slideToggle(250);  
    }
     $(".more").on('click', 'button', showdescription);    
    $(".more").on('mouseenter', 'li',showds);     
    $(".more").on('mouseleave', 'li', showds);      
});