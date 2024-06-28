// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todas las miniaturas
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Agrega un evento de clic a cada miniatura
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Obtiene la fuente de la imagen desde el atributo data-src
            const imageSrc = this.getAttribute('data-src');
            // Cambia la imagen principal a la fuente de la miniatura seleccionada
            document.getElementById('mainImg').src = imageSrc;
        });
    });
});
