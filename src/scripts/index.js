const burgerMenuButton = document.querySelector(".burger-menu-button")
const mobileMenu = document.querySelector(".mobile-nav-menu")

// Open mobile menu
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

const addGradientEffect = (button) => {
  button.addEventListener("mouseenter", () => {
    animatedGradient.style.opacity = "1"
  })
  button.addEventListener("mouseleave", () => {
    animatedGradient.style.opacity = "0"
  })
}

// Nav underline bar
const navUnderline = document.querySelector(".nav-underline")
const navButtons = document.querySelectorAll(".nav-btn")

let barPosition = {}

navButtons.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    barPosition = element.getBoundingClientRect()
    console.log(barPosition)
    navUnderline.style.opacity = 1
    navUnderline.style.left = `${barPosition.x}px`
    navUnderline.style.width = `${barPosition.width}px`
  })
  element.addEventListener("mouseleave", () => {
    navUnderline.style.opacity = 0
  })
})