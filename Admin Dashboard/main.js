let list = document.querySelectorAll('.nav li');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item) =>
item.addEventListener('mouseover', activeLink));


/* -------------------MENU TOGGLE--------------------- */
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.nav');
let main = document.querySelector('.main');