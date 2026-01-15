// Mostra spans gerados automaticamente atraves de um temporizador
const roles = ["JavaScript", "TypeScript", "C#"];
let i = 0;
const span = document.querySelector(".typing");

setInterval(() => {
  span.textContent = roles[i];
  i = (i + 1) % roles.length;
}, 2000);


// garante que o script só rode depois do HTML ser carregado, evitando erro de “null”
// pega alguns id's do html
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  function handleMenuToggle() {
    // Se a tela for menor que 480px, não faz nada (menu fixo)
    if (window.innerWidth < 480) return;

    // Entre 480px e 554px, ativa o toggle
    if (window.innerWidth <= 554) {
      menu.classList.toggle("active");
    }
  }

  menuToggle.addEventListener("click", handleMenuToggle);

  // Fecha o menu ao clicar em um link
  const links = document.querySelectorAll(".menu-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });

  // Garante que ao redimensionar o menu se ajuste
  window.addEventListener("resize", () => {
    if (window.innerWidth > 554) {
      menu.classList.remove("active");
      menu.style.display = "flex";
    } else {
      menu.style.display = "";
    }
  });
});