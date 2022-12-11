let menu = document.querySelector('nav');
let botonAbrir = document.querySelector('.menu-abrir');
let botonCerrar = document.querySelector('.menu-cerrar');

function abrirMenu () {
	menu.classList.add('activo');
}

function cerrarMenu () {
	menu.classList.remove('activo');
}

botonAbrir.addEventListener('click', abrirMenu);
botonCerrar.addEventListener('click', cerrarMenu);

// Detectamos cuando estamos en versión de escritorio
let mediaqueryList = window.matchMedia("(min-width: 1024px)");

$(document).ready(function(){
	$('.sub-btn').click(function() {
        // Si no estamos en versión de escritorio, activamos la función del submenú
		if(!mediaqueryList.matches) {
			$(this).next('.sub-menu').slideToggle();
		} else {
            $('.sub-menu').stop();
        };
	});
});
