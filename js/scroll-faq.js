/* ANIMACION FAQ */

$(document).ready(function () {

    $(".faq__h1").addClass('faq__h1--active')
    $(".faqBody__col1--animate").addClass('faqBody--animate--active')

})

/* ANIMACIONES FAQ BODY COL 2 */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".faqBody__col2--animate").offset().top) - (window.innerHeight / 1)) {

        $(".faqBody__col2--animate").addClass('faqBody--animate--active')

    }
})

/* ANIMACIONES FAQ BODY COL 3 */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".faqBody__col3--animate").offset().top) - (window.innerHeight / 1)) {

        $(".faqBody__col3--animate").addClass('faqBody--animate--active')

    }
})

/* ANIMACIONES FAQ BODY COL 4 */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".faqBody__col4--animate").offset().top) - (window.innerHeight / 1)) {

        $(".faqBody__col4--animate").addClass('faqBody--animate--active')

    }
})

/* ANIMACIONES FAQ BODY COL 5 */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".faqBody__col5--animate").offset().top) - (window.innerHeight / 1)) {

        $(".faqBody__col5--animate").addClass('faqBody--animate--active')

    }
})

/* ANIMACIONES FAQ BODY COL 6 */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".faqBody__col6--animate").offset().top) - (window.innerHeight / 1)) {

        $(".faqBody__col6--animate").addClass('faqBody--animate--active')

    }
})

/* ANIMACIONES NEWSLETTER */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".footer__h3").offset().top) - (window.innerHeight / 1)) {

        $(".footer__h3").addClass('footer__h3--active')
        $(".footer__p").addClass('footer__p--active')
        $(".newsletter__container").addClass('newsletter__container--active')

    }
})

/* ANIMACIONES SEGUINOS EN INSTAGRAM */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".footer_a--instagram").offset().top) - (window.innerHeight / 1.1)) {

        $(".footer_a--instagram").addClass('footer_a--instagram--active')
        $(".footer__email").addClass('footer__email--active')

    }
})

/* ANIMACIONES DESIGN BY */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".designBy__h4").offset().top) - (window.innerHeight / 1)) {

        $(".designBy__h4").addClass('designBy__h4--active')

    }
})