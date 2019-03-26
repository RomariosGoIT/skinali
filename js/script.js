document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menu_active');
  });
});
