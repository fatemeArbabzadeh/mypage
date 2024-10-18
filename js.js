const menu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".close");
const navbar = document.querySelector(".navbar-div");

menu.addEventListener("click", () => {
  navbar.style.display = "inline";
});

closeMenu.addEventListener("click", () => {
  navbar.style.display = "none";
});
