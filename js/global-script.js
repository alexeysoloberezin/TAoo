
$(document).ready(function(){  
  $('.products__line').click(function(){
    $('.products__category-list').toggleClass('products__category-list-active');
    $('.products__line').toggleClass('products__line-active')
    if (this.classList.contains('products__line-active')){
      $('.products__openclose').text('Свернуть');
    } else {
      $('.products__openclose').text('Развернуть');

    }
  });
  const navOffset = $('.header__nav').offset().top;
  $(window).scroll(function(){
    
    const scrolled = $(this).scrollTop();

    if (scrolled > navOffset){
      $('#wrapper').addClass('nav-fixed');
    } else if (scrolled < navOffset){
      $('#wrapper').removeClass('nav-fixed');
    }
  });
  $('.header__link-drp').click(function(){
    $('.header__list-drop').toggleClass('drop-active');
    $('.header__link-drp').toggleClass('dropItem-active')
  });
  $('.burger').click(function(){
    $('.header__nav').addClass('header__nav-active');
    $('.body__window').addClass('body__window-active');
  
    
  });
  $('.header__burger-close').click(function(){
    $('.header__nav').removeClass('header__nav-active');
    $('.body__window').removeClass('body__window-active');

  });  

  $('.bell__btn').click(function(){
    $('.popup').addClass('popup-active');  
  });

  $('.popup__close').click(function(){
    $('.popup').removeClass('popup-active');    
  });

  $('.header__user-inner').click(function(){
    $('.header__account').toggleClass('header__account-active');
  });
  $(document.body).on('click', function(e){
    if(!$(e.target).closest('.header__user-inner').length){
      $('.header__account').removeClass('header__account-active');
    }
  })
});