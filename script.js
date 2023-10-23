var burgerMenuButton = document.getElementById('burger-menu-button');
var burgerMenu = document.getElementById('burger-menu');

burgerMenuButton.addEventListener('click', function() {
    if (burgerMenu.classList.contains('hidden')) {
        burgerMenu.classList.remove('hidden');
    } else {
        burgerMenu.classList.add('hidden');
    }
});
