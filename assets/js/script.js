// Mostra spans gerados automaticamente atraves de um temporizador
const roles = ["JavaScript", "TypeScript", "Node.js"];
let i = 0;
const span = document.querySelector(".typing");

setInterval(() => {
  span.textContent = roles[i];
  i = (i + 1) % roles.length;
}, 2000);


// abre/fecha o menu ao clicar no logo
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});