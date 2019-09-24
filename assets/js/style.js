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
    initExpand();
    selector.hide();
    selector.addClass('expansion');
    selector.fadeIn('fast');
  }
}

function initExpand(){
  $('.memory-img').each(function(){
    if($(this).hasClass('expansion')){
      $(this).removeClass('expansion')
    }
  });
}

function displayModal(){
  var scrollPos = $(window).scrollTop();
  var docHeight = $(document).innerHeight();
  var windowHeight = $(window).innerHeight();
  var bottom = (docHeight - windowHeight)*24/25;

  if(bottom <= scrollPos){
    $('#modal01').fadeIn();
  }
}
