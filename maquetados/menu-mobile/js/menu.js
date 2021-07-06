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