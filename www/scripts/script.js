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

  // FAQ - аккордеоны
  let prevAccordionBtn;

  $('.js-accoridon-btn').on('click', function () {
    if (this == prevAccordionBtn) {
      // $(this).find('i').что-то начальное про изменение иконок +/-
      $(this).next().slideToggle();
    } else {
      $(prevAccordionBtn).next().slideUp();
      $(this).next().slideDown();
      prevAccordionBtn = this;
    }
  });

  // Фильтрация в выполненных работах
  $('.js-filter-link').on('click', function (event) {
    event.preventDefault();

    $('.js-filter-link').removeClass('active');
    $(this).addClass('active');

    let dataFilter = $(this).data('filter');

    if (dataFilter == 'all') {
      $('.js-works-item').show();
      return;
    }

    $('.js-works-item').each(function () {
      let dataType = $(this).data('type');

      if (dataType == dataFilter) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // Это не трож!!!!
});
