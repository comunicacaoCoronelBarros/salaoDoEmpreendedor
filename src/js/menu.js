const menuHamburguer = document.getElementById('menu-hamburguer');

menuHamburguer.addEventListener('click',mostrar());

function mostrar(){
    let menuMobile = document.getElementById('menu-hamburguer');
    if (menuMobile.classList.contains('abrir')){
        menuMobile.classList.remove('abrir');
    }else{
        menuMobile.classList.add('abrir')
    }
}

