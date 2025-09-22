// js/script.js
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();               // evita recarga
    // Redirige al feed sin validar nada
    window.location.href = "feed.html";
  });
});
