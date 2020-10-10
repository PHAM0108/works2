document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper-container');
    hero.start();

    const mobile = document.querySelector('.header__mobile');
    const inner = document.querySelector('.header__inner');

    mobile.addEventListener('click', () => {
        inner.classList.toggle('active')
    })

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.footer__li > a', cb);
    
});

