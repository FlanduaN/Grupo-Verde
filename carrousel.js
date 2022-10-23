
const carrousel = document.querySelector('.carrousel')
const selector = document.querySelectorAll('.selector')

selector.forEach( (cadaSelector , i ) => {
    selector[i].addEventListener('click',()=>{

        let posicion = i
        let operacion = posicion * -33.333

        carrousel.style.transform = `translateX(${ operacion }%)`

        selector.forEach(( cadaSelector , i )=>{
            selector[i].classList.remove('activo')
        })
        selector[i].classList.add('activo')
        
    })
});