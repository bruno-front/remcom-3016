$(document).ready(function() {

  // Покрасили все .services-item в синий цвет
  $('.services-item').css({'color': 'blue'});

});

// Пример добавления слушатели по клику на бургер на чистом jS
let burger = document.querySelector('.header-burger');

burger.addEventListener('click', function() {
  // При нажатии на кнопку в консоль будет выводиться
  // строка 'click'
  console.log('click');
});
