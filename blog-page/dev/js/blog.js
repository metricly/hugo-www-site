///sliders

const swiperMultipleOne = new Swiper('.swiper-multiple-one', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        767: {
            slidesPerView: 2
        },
        419: {
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: '.swiper-btn-m-one-next',
        prevEl: '.swiper-btn-m-one-prev',
    }
});

const swiperMultipleTwo = new Swiper('.swiper-multiple-two ', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        767: {
            slidesPerView: 2
        },
        419: {
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: '.swiper-btn-m-two-next',
        prevEl: '.swiper-btn-m-two-prev',
    }
});

const swiperMultipleThree = new Swiper('.swiper-multiple-three ', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        767: {
            slidesPerView: 2
        },
        419: {
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: '.swiper-btn-m-three-next',
        prevEl: '.swiper-btn-m-three-prev',
    }
});

const swiperSingleOne = new Swiper('.swiper-single-one', {
    spaceBetween: 11,
    navigation: {
        nextEl: '.swiper-btn-s-one-next',
        prevEl: '.swiper-btn-s-one-prev',
    }
});

const swiperSingleTwo = new Swiper('.swiper-single-two', {
    spaceBetween: 11,
    navigation: {
        nextEl: '.swiper-btn-s-two-next',
        prevEl: '.swiper-btn-s-two-prev',
    }
});


///// fixed header

const header = document.querySelector('.header');

if(header){

    document.addEventListener('scroll', () => {
        //console.log(window.pageYOffset)
        if(window.pageYOffset > 10){
            header.classList.add('scrolled');
        }else if (window.pageYOffset < 10){
            header.classList.remove('scrolled');
        }
    });
}

///// mobile menu

///open && close menu

const burger = document.querySelector('.burger');

if(burger){
    const aside = document.querySelector('.aside');
    const asideMenu = document.querySelector('.aside__menu');
    const closeMenu = document.querySelector('.close-menu');

    burger.addEventListener('click', () => {
        aside.classList.add('open');
        document.documentElement.style.overflowY = "hidden";
    });

    asideMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    closeMenu.addEventListener('click', () =>  closeAside(aside));

    aside.addEventListener('click', () =>  closeAside(aside));


    function closeAside (elem){
        elem.classList.remove('open');
        document.documentElement.style.overflowY = "";
    }
}


////mobile menu height

//resize height of login-page
window.addEventListener('load', function () {
    mobileMenuHeight();
});

window.addEventListener('resize', function () {
    mobileMenuHeight();
});

function mobileMenuHeight() {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
