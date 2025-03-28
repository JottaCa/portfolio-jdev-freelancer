const openCloseMenu = document.getElementById('open-close-menu');
const menuIcon = document.querySelector('.fas');
const menu = document.querySelector('.menu');

openCloseMenu.addEventListener('click', () => {
    toggleMenuIcon();

    menu.classList.toggle('menu');
    menu.classList.toggle('menu-humburguer');
});

function toggleMenuIcon() {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
}
