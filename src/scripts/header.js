
window.addEventListener('scroll', function(){
    var nav = document.querySelector('.main-nav')
    nav.classList.toggle('main-scroll-down',window.scrollY > 0);
})