// JavaScript Document
var menuIcon = document.querySelector(".menu");
var deNav = document.querySelector("header nav ul");
console.log (menuIcon);

menuIcon.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav.classList.toggle("toonMenu");
}