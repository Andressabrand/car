let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let item = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicadores')
let dots = indicator.querySelectorAll('ul li')


let active = 0
let firstPosition = 0
let lastPosition = item.length - 1

function setSlider(){
 let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')


}




nextButton.onclick = () => {
 active = active + 1 > lastPosition ? 0 : active + 1
  setSlider()
    item[active].classList.add('active')


    let dotsOld = indicator.querySelector('ul li.ativo')
    dotsOld.classList.remove('ativo')
    dots[active].classList.add('ativo')


indicator.querySelector('.number').innerText = active + 1

}

prevButton.onclick = () => {
   
    active = active - 1 < firstPosition ? lastPosition : active - 1
     setSlider()
    item[active].classList.add('active')

    
    let dotsOld = indicator.querySelector('ul li.ativo')
    dotsOld.classList.remove('ativo')
    dots[active].classList.add('ativo')

    indicator.querySelector('.number').innerText = active + 1


  
}