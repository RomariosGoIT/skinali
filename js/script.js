document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.menu-button').addEventListener('click', el => {
    document.querySelector('.menu').classList.toggle('menu_active');
    document.querySelector('.menu-button').classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    if (pageYOffset > 0) {
      document.querySelector('.navbar').classList.add('navbar__scroll');
    } else {
      document.querySelector('.navbar').classList.remove('navbar__scroll');
    }

    if (pageYOffset > 600) {
      document.querySelector('.top').classList.add('active');
    } else {
      document.querySelector('.top').classList.remove('active');
    }
  });
});

// +++++  PRELOADER  ++++++

window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  setTimeout(() => {
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
});

$(document).ready(function() {
  $('.before-after').twentytwenty({
    before_label: 'Cо скинали',
    after_label: 'Без скинали',
  });
  $('.before-slider').slick({
    draggable: false,
    touchMove: false,
    nextArrow: '<i class="fas fa-angle-right"></i>',
    prevArrow: '<i class="fas fa-angle-left"></i>',
    dots: true,
  });
});
