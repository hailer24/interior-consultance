let menu = document.querySelector(".menu");
let closebtn = document.querySelector(".closeMenu");
let openbtn = document.querySelector(".openMenu");

closebtn.addEventListener("click", () => (menu.style.top = "-100%"));

openbtn.addEventListener("click", () => (menu.style.top = "0%"));
