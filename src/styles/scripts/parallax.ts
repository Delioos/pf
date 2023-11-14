window.addEventListener('scroll', function () {
    var parallax = document.querySelector('.parallax-image');
    var fixedElement = document.querySelector('.fixed-content');
    var scrollPosition = window.pageYOffset;
    var navBtn = document.querySelector('.nav-button');


    fixedElement.style.transform = 'translateY(' + scrollPosition * 0.8 + 'px)';
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    navBtn.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    // set global scroll speed slow

});