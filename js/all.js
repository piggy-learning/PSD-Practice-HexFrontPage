$(document).ready(function(){
  $('.menu-container').find('ul').find('li').siblings().hover(function(event){
    event.preventDefault();
    $(this).find('ul').stop().slideToggle(200);
  });
  $('.goTop').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 600);
  });
  
});

