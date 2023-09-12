function mostrar() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('abrir')) {
        menuMobile.classList.remove('abrir');
    } else {
        menuMobile.classList.add('abrir');
    }
}

let botao = document.getElementById('menu-botao')
botao.addEventListener('click', mostrar);
