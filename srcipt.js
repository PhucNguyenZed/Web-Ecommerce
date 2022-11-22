
function copyMenu(){

    var dptCartegory =document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCartegory.innerHTML;

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML;

}
copyMenu();

const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
        addclass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})

const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

//slider
var swiper = new Swiper('.swiper', {
    loop:true,
    
    pagination: {
        el: '.swiper-pagination',
    },
   
});