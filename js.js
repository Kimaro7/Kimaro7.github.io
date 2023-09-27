/*========== scroll reveal ==========*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home, .navbar, .icons, .logo", {
  origin: "top",
});

ScrollReveal().reveal(".footer", {
  origin: "bottom",
});

ScrollReveal().reveal(".contact, .about, .welcome1", {
  origin: "left",
});

ScrollReveal().reveal(".welcome, .main-content", {
  origin: "right",
});

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
