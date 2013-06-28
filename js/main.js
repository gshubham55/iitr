jQuery(window).ready(function($) {
  var height = $(window).height();
  var width = $(window).width();

  $('section').css('min-height', height);

  var x = height *.5 - $('.home .nav').height();
  var y = width - 512;
  $('.home .nav').css('padding-top', x/2);
  $('.home .nav').css('margin-left', y/2);
  $('.vitaminimage').height(height-50);
  $('.tonyimage').height(height-50);
  $('.placementimage').height(height-50);
  var curht=0;
  var scroll_count = 0;
  function upArrowPressed() {
   // Your stuff here
   if (scroll_count!=0)
   {
   var scrollto = curht-height;
       // scrollto = 0;
       scroll_count-=1;
   $('html, body').animate({scrollTop: scrollto}, 500);
   curht-=height;
   }
  }

  function downArrowPressed() {
     // Your stuff here
     if(scroll_count<13)
     { 
         var scrollto = curht+height;
         $('html, body').animate({scrollTop: scrollto}, 500);
         curht+=height;
         scroll_count+=1;
     }
  }

  document.onkeydown = function(evt) {
      evt = evt || window.event;
      switch (evt.keyCode) {
          case 38:
              upArrowPressed();
              break;
          case 40:
              downArrowPressed();
              break;
      }
  };
});
