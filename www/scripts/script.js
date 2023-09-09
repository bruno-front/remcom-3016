$(document).ready(function () {

  // let isOpen = false;

  $('.header-burger').on('click', function () {

    // if (isOpen) {
    //   функция колбек, которая удалит атрибут style,
    //   когда завершится анимация закрытия меню
    //                               |
    //   $('.menu').slideUp(400, function () {
    //     $('.menu').removeAttr('style');
    //   })
    //   isOpen = false;
    // } else {
    //   $('.menu').slideDown();
    //   isOpen = true;
    // }

    $('.menu').slideToggle();

  });


  // Табы в контактах!
  $('.js-tab-link').on('click', function (event) {
    event.preventDefault();

    $('.js-tab-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.js-tab-link');

    $('.js-contacts-info').removeClass('visible');
    $('.js-contacts-info').eq(index).addClass('visible');
  });


  // Это не трож!!!!
});
