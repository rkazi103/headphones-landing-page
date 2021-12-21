const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle)
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });

if (navClose)
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((element) =>
  element.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  })
);

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("header--scroll");
  else header.classList.remove("header--scroll");
});
