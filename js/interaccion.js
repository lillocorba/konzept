medidas = document.querySelector('.deskPad__p--medidas')
materiales = document.querySelector('.deskPad__p--materiales')
textoMedidas = document.querySelector('.deskPad__p--medidas--texto')
textoMateriales = document.querySelector('.deskPad__p--materiales--texto')

medidas.addEventListener('click', function () {
    textoMedidas.classList.toggle('deskPad__p--medidas--texto--active')
})

materiales.addEventListener('click', function () {
    textoMateriales.classList.toggle('deskPad__p--materiales--texto--active')
})

