/**
 * ARCHIVO: js/script.js
 * ----------------------------------------------------
 * Lógica del Front-end para Pumbas Store
 * ----------------------------------------------------
 */

// =========================================================================
// 1. FUNCIONALIDAD DEL BOTÓN FLOTANTE (FAB) Y POPUP SOCIAL
// =========================================================================

// Seleccionamos los elementos clave: el popup y el botón redondo flotante (FAB).
const popupOverlay = document.getElementById('social-popup');
const btnToggleSocial = document.getElementById('fab-social'); 

/**
 * Maneja el evento de clic en el FAB para mostrar/ocultar el popup.
 * Utiliza .classList.toggle('active') para alternar la clase.
 */
function manejarTogglePopup() {
    // Si la clase 'active' existe, la quita (oculta). Si no existe, la añade (muestra).
    popupOverlay.classList.toggle('active');
    
    const estado = popupOverlay.classList.contains('active') ? "Abierto" : "Cerrado";
    console.log(`Popup Social: ${estado}`);
}

// Vinculamos la función al evento 'click' del botón flotante.
btnToggleSocial.addEventListener('click', manejarTogglePopup);


// Opcional: Cerrar el popup si se hace clic fuera de él
document.addEventListener('click', (evento) => {
    // Verificamos si el popup está abierto Y si el clic no fue en el FAB Y no fue dentro del popup
    const isClickInsideFab = btnToggleSocial.contains(evento.target);
    const isClickInsidePopup = popupOverlay.contains(evento.target);
    
    if (popupOverlay.classList.contains('active') && !isClickInsideFab && !isClickInsidePopup) {
        popupOverlay.classList.remove('active');
        console.log("Popup Social: Cerrado por clic externo");
    }
});


// =========================================================================
// 2. FUNCIONALIDAD DE BOTÓN DE COMPRAR EN PROMO BAR (ejemplo simple)
// =========================================================================
const promoButton = document.querySelector('.welcome-discount button');
if (promoButton) {
    promoButton.addEventListener('click', () => {
        alert("¡Grandes ofertas te esperan! Redirigiendo a la sección de productos...");
    });
}


// =========================================================================
// 3. FUNCIONALIDAD DE BUSCADOR (ejemplo de manejo de formulario)
// =========================================================================
const searchForm = document.querySelector('.search-form');
if (searchForm) {
    searchForm.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Evita que la página se recargue
        const searchTerm = searchForm.querySelector('.search-input').value.trim();
        
        if (searchTerm) {
            alert(`Buscando: "${searchTerm}".`);
            // Aquí iría la lógica real de búsqueda (redirigir o filtrar productos)
        } else {
            alert("Por favor, introduce un término de búsqueda.");
        }
    });
}
