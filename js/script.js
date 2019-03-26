document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.menu-button').addEventListener('click', el => {
    document.querySelector('.menu').classList.toggle('menu_active');
    document.querySelector('.menu-button').classList.toggle('active');
  });
});
