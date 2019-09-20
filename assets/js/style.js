$(function(){

  $('.memory-img img').addClass('move');

  $(window).scroll(function() {
    scrollAndFadeIn($(".memory-img"));
  });
})



function scrollAndFadeIn(selector){
  selector.each(function(){
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();

    if(scrollPos > elemOffset -  windowHeight  + ( windowHeight  / 2) ){
      $(this).find("img").removeClass('move');
      } else {
        $(this).find("img").addClass('move');
      }
    });
}
