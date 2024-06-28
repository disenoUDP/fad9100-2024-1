// Selecciona todos los enlaces dentro del nav y agrega un evento de clic a cada uno
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Previene el comportamiento predeterminado del enlace
        e.preventDefault();
        // Obtiene el destino del enlace a través del atributo href
        const target = document.querySelector(this.getAttribute('href'));
        // Desplaza suavemente hasta el destino
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
