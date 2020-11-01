/* ANIMACIONES DOCUMENT READY */

$(document).ready(function () {

    $(".hero__h1").addClass('hero__h1--active')
    $(".hero__h3").addClass('hero__h3--active')

})

/* ANIMACIONES KONZEPT PAD TITLES */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".deskPad__h2").offset().top) - (window.innerHeight / 1.1)) {

        $(".deskPad__h2").addClass('deskPad__h2--active')
        $(".deskPad__p").addClass('deskPad__p--active')
        $(".deskPad__p--medidas").addClass('deskPad__p--medidas--active')
        $(".deskPad__p--materiales").addClass('deskPad__p--materiales--active')
        $(".deskPad__btn").addClass('deskPad__btn--active')

    }
})

/* ANIMACIONES KONZEPT PAD IMG */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".deskPad__img").offset().top) - (window.innerHeight / 1)) {

        $(".deskPad__img").addClass('deskPad__img--active')

    }
})

/* ANIMACIONES QUOTE */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".quote__h4").offset().top) - (window.innerHeight / 1.1)) {

        $(".quote__h4").addClass('quote__h4--active')

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