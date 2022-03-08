

const burgerMenuButton = document.querySelector(".burger-menu-button");
const mobileMenu = document.querySelector(".mobile-nav-menu")

let menuOpen = false;
burgerMenuButton.addEventListener('click', () => {
    console.log("click");
    menuOpen = !menuOpen;
    menuOpen === true ? mobileMenu.style.display = "block" : mobileMenu.style.display = "none";
})