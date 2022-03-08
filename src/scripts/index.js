const burgerMenuButton = document.querySelector(".burger-menu-button")
const mobileMenu = document.querySelector(".mobile-nav-menu")

let menuOpen = false
burgerMenuButton.addEventListener("click", () => {
  console.log("click")
  menuOpen = !menuOpen
  menuOpen === true
    ? (mobileMenu.style.display = "block")
    : (mobileMenu.style.display = "none")
})

const animatedGradient = document.querySelector(".gradient-anim")
const contactButton = document.querySelector(".contact-btns")
contactButton.childNodes.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    animatedGradient.style.opacity = ".2"   
  })
  button.addEventListener("mouseleave", () => {
    animatedGradient.style.opacity = "1"
  })
})
