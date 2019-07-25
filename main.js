var menu_box = document.getElementById('nav-box');
var menu_closer = document.getElementById('nav-closer');

menu_box.setAttribute('style','width: 0; ');
menu_closer.setAttribute('style','display: none;');

function opener(){
    menu_box.setAttribute('style','width: 400px; border-left: 30px solid #303040;');
    menu_closer.setAttribute('style','display: block;');
    document.body.style.marginRight = 400;
}

function close_menu(){
    menu_closer.setAttribute('style','display: none;');
    menu_box.setAttribute('style','width: 0; border-left: 10px solid #303040;');
}