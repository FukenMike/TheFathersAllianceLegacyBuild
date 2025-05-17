
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('menu-toggle');
  const menuList = document.querySelector('nav.menu-list');

  if (toggleButton && menuList) {
    toggleButton.addEventListener('click', () => {
      menuList.classList.toggle('visible');
    });
  }
});
