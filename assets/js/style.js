$(function(){

  $('.memory-img img').addClass('move');

  $('.memory-img').on('click',function(){
    imgExpanted($(this));
  })

  $(window).scroll(function() {
    scrollAndFadeIn($(".memory-img"));

    displayModal();
  });

  $('.js-modal-close').on('click',function(){
    $('.js-modal').fadeOut();
    $(window).stop().scrollTop(0);
    return false;
  });

  $('#modal01 .modal__content a').on('click',function(){
    $('.js-modal').fadeOut();
    $('#modal02').fadeIn();
    return false;
  });

})



function scrollAndFadeIn(selector){
  selector.each(function(){
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();

    if(scrollPos > elemOffset -  windowHeight  + ( windowHeight  / 5) ){
      $(this).find("img").removeClass('move');
      } else {
        $(this).find("img").addClass('move');
      }
    });
}

function imgExpanted(selector){

  if(selector.hasClass('expansion')){
    selector.removeClass('expansion');
  } else {
    selector.hide();
    selector.addClass('expansion');
    selector.fadeIn('fast');
  }
}

function displayModal(){
  var scrollPos = $(window).scrollTop();
  var docHeight = $(document).innerHeight();
  var windowHeight = $(window).innerHeight();
  var bottom = (docHeight - windowHeight)*19/20;

  if(bottom <= scrollPos){
    $('#modal01').fadeIn();
  }
}
