// JavaScript Document
var menuIcon = document.querySelector(".menu");

menuIcon.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}