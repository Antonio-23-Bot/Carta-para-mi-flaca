// scripts.js
document.getElementById("envelope").addEventListener("click", function() {
    this.style.opacity = "0"; // Oculta el sobre
    document.getElementById("card").style.opacity = "1"; // Muestra la carta
});
