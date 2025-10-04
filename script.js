const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const cancelHamburger = document.getElementById("cancel-hamburger")
const overlayBackground = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-links");

hamburger.addEventListener("click", () =>{
  sidebar.classList.add("side");
  overlayBackground.classList.add("overlayed");
})

cancelHamburger.addEventListener("click", () =>{
  sidebar.classList.remove("side");
  overlayBackground.classList.remove("overlayed");
});


navLinks.forEach(links =>{
  links.addEventListener("click", ()=>{
  sidebar.classList.remove("side");
  overlayBackground.classList.remove("overlayed");
  console.log("clicked")
});
})



const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});