let iconText = document.querySelectorAll('.icon-text')
let sideBarMenu = document.querySelector('.side-bar-menu')
let arrowIcon = document.querySelector('.arrow-icon')
let hiddenProperty = document.querySelector('.hidden-property')
let sideBarUl = document.querySelector('.side-bar-ul')


// Side bar hover mouseover and mouseout
sideBarMenu.addEventListener('mouseover',function(){
    for(let i=0; i<iconText.length; i++){
        iconText[i].style.display='flex'
        if(window.innerWidth <= 700){
            iconText[i].style.display ='none'
            sideBarUl.style.alignItems = 'center'
        }else{
            sideBarUl.style.alignItems = 'flex-start'
        }
    }
})
sideBarMenu.addEventListener('mouseout',()=>{
    for(let i=0; i<iconText.length; i++){
        iconText[i].style.display='none'
    }
    sideBarUl.style.alignItems='center'
})

arrowIcon.addEventListener('click',()=>{
    arrowIcon.classList.toggle('arrow-icon-toggle')
    hiddenProperty.classList.toggle('hidden-property-toggle')
})