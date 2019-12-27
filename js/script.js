// burger menu


function showMenu () {
  document.querySelector('.nav-list').classList.toggle('nav-list--show');
}

document.querySelector('.burger-menu').addEventListener('click', showMenu);

function showModal() {
   document.querySelector(this.getAttribute('data-target')).classList.toggle('modal--show');
}

var footerLi  = document.querySelectorAll('.footer-list__item');
var list =  Array.from(footerLi);
list.forEach(function (item) {
  item.addEventListener('click', showModal)
});

var close = Array.from(document.querySelectorAll('.popup__close'));
close.forEach(function (item) {
  item.addEventListener('click', function () {
    document.querySelector('#' + item.getAttribute('data-dismiss')).classList.toggle('modal--show');
  })
});
