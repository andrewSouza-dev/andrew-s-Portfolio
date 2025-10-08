const roles = ["JavaScript", "TypeScript", "Node.js"];
let i = 0;
const span = document.querySelector(".typing");

setInterval(() => {
  span.textContent = roles[i];
  i = (i + 1) % roles.length;
}, 2000);