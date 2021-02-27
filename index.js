// ___________________Меню__________________________________

// const menu = document.getElementById('menuhaed');
const menu = document.querySelector(".menu");
const btnMenu = document.querySelector('.btn-menu');
const btnMenuX = document.querySelector('.btn-menu-x');
const menuText = document.querySelector('.menu_text');
/*
btnMenu.onclick = function () {
    btnMenu.style.top = "310px";
    // btnMenu.style.display = "none";
    btnMenuX.style.display = "block";
    btnMenuX.style.top = "310px";
    menu.style.top = "0px";
}
btnMenuX.onclick = function () {
    // btnMenuX.style.top = "0px";
    btnMenuX.style.display = "none";
    // btnMenu.style.display = "block";
    btnMenu.style.top = "0px";
    menu.style.top = "-310px";
}*/
btnMenu.document.write("Меню");

btnMenu.onclick = function () {
    if (btnMenu.style.top == "0px") {
        btnMenu.style.top = "310px"
        menu.style.top = "0px";
        btnMenu.document.write("Назад");
    } else {
        btnMenu.style.top = "0px";
        menu.style.top = "-310px";
        btnMenu.document.write("Меню");
    }
}
