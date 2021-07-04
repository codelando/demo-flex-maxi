let menu = document.querySelector('nav');
let botonCerrar = document.querySelector('.menu-cerrar');
let botonAbrir = document.querySelector('.menu-abrir');

let cerrarMenu = function() {
    menu.classList.remove('activo');
}

let abrirMenu = function() {
    menu.classList.add('activo');
}

botonCerrar.addEventListener('click', cerrarMenu);
botonAbrir.addEventListener('click', abrirMenu);