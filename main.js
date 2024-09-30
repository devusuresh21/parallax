const sky = document.querySelector('.sky')
const title = document.querySelector('.title')
const build = document.querySelector('.build')
const bird = document.querySelector('.bird')
const grass = document.querySelector('.grass')
const dubai = document.querySelector('.dubai')
const bali = document.querySelector('.bali')
const maldives = document.querySelector('.maldives')

document.addEventListener('scroll', function(){
    let value = window.scrollY
    // console.log(value);
    title.style.marginTop = value * 1.1 + 'px'
    bird.style.marginLeft = -value + 'px'

    build.style.marginBottom = -value + 'px'

    // grass.style.marginBottom = -value   + 'px'
    
      
    
})
