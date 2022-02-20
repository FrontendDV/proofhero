let hamburgerMenu = document.querySelector('.hamburger')
let topLine = document.querySelector('.top-line')
let middleLine = document.querySelector('.middle-line')
let bottomLine = document.querySelector('.bottom-line')
let hamburgerMenuContent = document.querySelector('.hamburger-menu-content')
hamburgerMenu.addEventListener('click',()=>{
    topLine.classList.toggle('top-line-toggle')
    middleLine.classList.toggle('middle-line-toggle')
    bottomLine.classList.toggle('bottom-line-toggle')
    hamburgerMenuContent.classList.toggle('hambruger-menu-content-toggle')
})