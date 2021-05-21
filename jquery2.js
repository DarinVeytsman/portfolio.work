

$('.menu-btn').on('click', function(el) {
    el.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.nav__list_link').toggleClass('nav__list_link_active');
    
    });
    
       
    