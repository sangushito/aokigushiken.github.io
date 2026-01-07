// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// Menú mobile
const btn = document.querySelector(".menu");
const nav = document.querySelector(".nav");

btn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(isOpen));
});

// Cerrar menú al hacer click en un link (mobile)
nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
});
