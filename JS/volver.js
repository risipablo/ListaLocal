// Función para mostrar u ocultar el botón de volver arriba
function toggleBotonVolverArriba() {
    let botonVolverArriba = document.getElementById("btnVolverArriba");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botonVolverArriba.style.display = "block";
    } else {
        botonVolverArriba.style.display = "none";
    }
}


// Función para desplazar la página al principio con animación suave
function scrollToTop() {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(function(){
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    },15);
}

// Event listener para detectar el scroll del usuario
window.onscroll = function() {
    toggleBotonVolverArriba();
};
