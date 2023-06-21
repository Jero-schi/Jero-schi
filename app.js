const barraHTML = document.getElementById('html')
const barraCSS = document.getElementById('css')
const barraJS = document.getElementById('javascript')
const porcentajeHTML = document.getElementById('porcentaje-html')
const parrafo1 = document.getElementById('parrafo1')
const parrafo2 = document.getElementById('parrafo2')


const animarElemento = (entradas, observador) => {    
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.remove('move')
        }
    });
}

const observador  = new IntersectionObserver(animarElemento, {
    root: null,
    rootMargin: '16px',
    threshold: 0.5,
});

observador.observe(barraHTML)
observador.observe(barraCSS)
observador.observe(barraJS)

const maquinaEscribir1 = () => {
    let text = 'Me  gradue de la secundaria, con especialización en ciencias naturales'
    let time = 100;
    let etiqueta = parrafo1
    const arrayCaracteres = text.split('')
    etiqueta.innerHTML = '';
    let cont = 0;

    const escribir = setInterval(() => {
        etiqueta.innerHTML += arrayCaracteres[cont]
        cont++

        if (cont === arrayCaracteres.length) {
            clearInterval(escribir)
        }
    }, time)
}

const maquinaEscribir2 = () => {
    let text = 'Estudiando para ser Frontend Developer'
    let time = 100;
    let etiqueta = parrafo2
    const arrayCaracteres = text.split('')
    etiqueta.innerHTML = '';
    let cont = 0;

    const escribir = setInterval(() => {
        etiqueta.innerHTML += arrayCaracteres[cont]
        cont++

        if (cont === arrayCaracteres.length) {
            clearInterval(escribir)
        }
    }, time)
}
// maquinaEscribir('Estudiando para ser Frontend Developer', 100, parrafo2)
// maquinaEscribir('Me  gradue de la secundaria, con especialización en ciencias naturales', 100, parrafo1)

const maquinaEscribir = (entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            maquinaEscribir1()
            maquinaEscribir2()
        }
    })
}

const obsInfo = new IntersectionObserver(maquinaEscribir, {
    root: null,
    rootMargin: '16px',
    threshold: 0.5,
})

obsInfo.observe(parrafo1)