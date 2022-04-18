console.log('123');
new Swiper('.partners-slider',{
    loop: true,
    navigation: {
        nextEl: '.partners-next',
        prevEl: '.partners-prev',
    },
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1190: {
            slidesPerView: 5,
        }
    }
});

new Swiper('.revievs-slider',{
    loop: true,
    navigation: {
        nextEl: '.revievs-next',
        prevEl: '.revievs-prev',
    },
    slidesPerView: 1, //кол-во слайдов
    watchOverflow: true, //если количество меньше slidesPerView, слайдер отключается
    spaceBetween: 10, //отслупы между слайдами
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1190: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});

//btn__choice переключение цены
const btnsChoice = document.querySelectorAll('.btn__choice');
const priceMonth = document.querySelectorAll('.price-elem__price--mo');
const priceYear = document.querySelectorAll('.price-elem__price--ye');

btnsChoice.forEach((btn) =>{
    btn.addEventListener('click', (event) =>{

        btnsChoice.forEach((btn) => {
            btn.classList.toggle('active');
        });

        priceMonth.forEach((price_m) => {
            price_m.classList.toggle('active');
        });

        priceYear.forEach((price_y) => {
            price_y.classList.toggle('active');
        });

    });
});

//burger
const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.nav-mobile');

burger.addEventListener('click', (event) =>{
    navMobile.classList.toggle('open');
    burger.classList.toggle('open');
});