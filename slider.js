let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
let swiper;
let init = false;

let brandsSection = document.querySelector('.brands-section');
let brandsContainer = document.querySelector('.brands-container');

let swiperMode = function() {
    if(mobile.matches) {
        if (!init) {
            init = true;
            brandsSection.style.height = '320px';
            brandsContainer.style.height = '154px';

            swiper = new Swiper('.swiper', {
                direction: 'horizontal',
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                slidesPerView: 'auto',
            });
        }
    }
    else {
        swiper.destroy(true, true);
        init = false;
    }
}
window.addEventListener("load", swiperMode);
window.addEventListener("resize", swiperMode);

let showMore = function(){
    let button = document.querySelector('.read-more-button');
    let buttonStyles = document.querySelector('.brands-section__button');
    let showMore = button.classList.contains('read-more-button_closed');

    if(showMore){
        if (window.innerWidth > 1120) {
            brandsSection.style.height = '412px';
            brandsContainer.style.height = '288px';
        }
        else {
            brandsSection.style.height = '500px';
            brandsContainer.style.height = '376px';
        }

        brandsContainer.style.transition = '0.7s ease';
        button.textContent = 'Скрыть';
        buttonStyles.style.margin = '22px 0 14px 57px';
        button.classList.remove('read-more-button_closed');
        button.classList.add('read-more-button_opened');
    }
    else if(!showMore) {
        brandsSection.style.height = '322px';
        brandsContainer.style.height = '200px';
        button.textContent = 'Показать все';
        buttonStyles.style.margin = '8px 0 34px 57px';
        button.classList.remove('read-more-button_opened');
        button.classList.add('read-more-button_closed');
    }
}
