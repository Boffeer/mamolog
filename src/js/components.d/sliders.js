import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    if (document.querySelector('[data-swiper]')) {
        new Swiper('[data-swiper]', {
            // Подключаем модули слайдера
            // для конкретного случая
            //modules: [Navigation, Pagination],
            /*
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            */
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // Arrows
            navigation: {
                nextEl: '.swiper__more .swiper__more--next',
                prevEl: '.swiper__more .swiper__more--prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                },
            },
            on: {}
        });
    }

    if (document.querySelector('[data-docs]')) {
        new Swiper('[data-docs]', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            spaceBetween: 0,
            autoHeight: true,
            speed: 600,
            loop: false,
            // Arrows
            navigation: {
                nextEl: '[data-docs-next]',
                prevEl: '[data-docs-prev]',
            },
            on: {}
        });
    }

    if (document.querySelector('[data-works]')) {
        new Swiper('[data-works]', {
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 2,
            spaceBetween: 0,
            autoHeight: true,
            speed: 600,
            loop: false,
            pagination: {
                el: '[data-works-pagination]',
                clickable: true,
            },
            // Arrows
            navigation: {
                nextEl: '[data-works-next]',
                prevEl: '[data-works-prev]',
            },
            on: {}
        });
    }
}





window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
});
