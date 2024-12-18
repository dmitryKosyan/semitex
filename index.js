// mask input
jQuery(function ($) {
    $("#phone").mask("+7(999) 999-9999", { placeholder: "-" });
});
// slider
$(".single-item").slick({

    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1668,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1360,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
            }
        }
    ]

});



// tubs
function openAndCloseTub() {
    const questionsBlock = document.querySelectorAll('.questions__item-tub')

    questionsBlock.forEach(el => {
        const buttonTub = el.querySelector('.questions__button-tub');
        const answerText = el.querySelector('.questions__text');
        const questionBlock = el.querySelector('.questions__header');
        el.addEventListener('click', () => {

            answerText.classList.toggle('active')
            questionBlock.classList.toggle('active')
            buttonTub.classList.toggle('active')

        })
    })
}
openAndCloseTub()
// Mobile nav menu
function mobileNav() {

    const navBtn = document.querySelector('.mobile-nav-btn');
    const nav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.nav-icon');

    navBtn.onclick = function () {
        nav.classList.toggle('mobile-nav--open');
        menuIcon.classList.toggle('nav-icon--active');
        document.body.classList.toggle('no-scroll');
    };
}
mobileNav() 