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

window.addEventListener("scroll", () => {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
});

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    else
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
  });
});

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__header, .section__title`, { delay: 600 });
sr.reveal(`.home__footer`, { delay: 700 });
sr.reveal(`.home__img`, { delay: 900, origin: "top" });

sr.reveal(
  `.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,
  { origin: "top", interval: 100 }
);
sr.reveal(`.specs__data, .discount__animate`, {
  origin: "left",
  interval: 100,
});
sr.reveal(`.specs__img, .discount__img`, { origin: "right" });
sr.reveal(`.case__img`, { origin: "top" });
sr.reveal(`.case__data`);
