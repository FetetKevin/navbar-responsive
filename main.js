const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
        toggle.querySelector('a').innerHTML = "<i class='fa fa-bars fa-2x'></i>";
    }
    else {
        menu.classList.add('active');
        toggle.querySelector('a').innerHTML = "<i class='fa fa-times fa-2x'></i>";
    }
}

toggle.addEventListener('click', toggleMenu, false);