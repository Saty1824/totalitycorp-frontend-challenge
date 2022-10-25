const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('.menu').className = 'menu active';
}
const closeMenu = () => {
    document.querySelector('.backdrop.active').className = 'backdrop';
    document.querySelector('.menu.active').className = 'menu';
}

document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}
document.getElementById('close').onclick = e => {
    closeMenu();
}
document.getElementById('.backdrop').onclick = e => {
    closeMenu();
}