$(document).ready(function(){ 
  var   stap2 = document.querySelector('.stap2');
  var   stap3 = document.querySelector('.stap3');
  $('.stap__btn-1').click(function(){    
    $('.stap1').removeClass('stap-active');
    $('.stap2').addClass('stap-active');
   
  });
  
  $('.stap__btn-2').click(function(){    
    $('.stap2').removeClass('stap-active');
    $('.stap3').addClass('stap-active');
   
  });
 $('.stap__btn').click(function(){
  if (stap2.classList.contains('stap-active')){    
    $('.stap__indecator-wrapper').addClass('stap__indecator-wrapper-2');
    $('.stap__indecator-inner-2').addClass('stap__indecator-inner-active');
  }
  if (stap3.classList.contains('stap-active')){    
    $('.stap__indecator-wrapper').addClass('stap__indecator-wrapper-2');
    $('.stap__indecator-inner-3').addClass('stap__indecator-inner-active');
  }
 });
 $('.stap1__add').click(function(){
  $('.addproduct').addClass('addproduct-active');
  $('.window3').addClass('window3-active');
  
 });
 $('.addproduct__close').click(function(){
  $('.addproduct').removeClass('addproduct-active');
  $('.window3').removeClass('window3-active');
 });

});