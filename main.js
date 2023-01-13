const mobileNav = document.querySelector(".btn-mobile-nav");
const headerMain = document.querySelector("#header-section");

mobileNav.addEventListener("click", function () {
  console.log("hello");
  headerMain.classList.toggle("nav-open");
  if (headerMain.classList.contains("nav-open")) {
    document.documentElement.style.overflowY = "hidden";
  } else {
    document.documentElement.style.overflowY = "visible";
  }
});

const navLinks = document.querySelectorAll(".main-nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (headerMain.classList.contains("nav-open")) {
      headerMain.classList.remove("nav-open");
    }
  });
});

// Sticky menu
const sectHero = document.querySelector("#section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      headerMain.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      headerMain.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-64px",
  }
);
observer.observe(sectHero);
