function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


/*const iconMenu = document.querySelector('.menu-burger__header');
if (iconMenu) {
    const headerMenu = document.querySelector('header__menu _container');
    iconMenu.addEventListener("click", function(e) {
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });

}*/

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);
hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("popup_open");
    hamb.classList.toggle("active");
    renderPopup();
}

function renderPopup() {
    const hasChild = popup.childNodes.length > 0;

    if (hasChild) {
        popup.innerHTML = '';
    } else {
        popup.appendChild(menu);
    }
}