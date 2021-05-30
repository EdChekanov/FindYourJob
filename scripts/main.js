window.addEventListener('DOMContentLoaded', () => {
    let burgerMenuBtn = document.querySelector(".burger-menu");
    let closeBurgerMenuBtn = document.querySelector(".close-burger-menu");
    let popup = document.querySelector(".popup");

    burgerMenuBtn.addEventListener('click', openMenu);
    closeBurgerMenuBtn.addEventListener('click', closeMenu);

    function openMenu() {
        popup.classList.add("popup-active");
    }
    function closeMenu() {
        popup.classList.remove("popup-active");
    }
})