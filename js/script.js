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
  });
});
