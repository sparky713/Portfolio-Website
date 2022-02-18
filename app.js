const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

let moon = document.getElementById("moon");
let bg = document.getElementById("background");

window.addEventListener("scroll", function () {
  const value = window.scrollY;

  moon.style.left = -value * 0.5 + "px";
  moon.style.top = value * 0.8 + "px";
//   bg.style.top = -value * 0.5 + "px";
});
