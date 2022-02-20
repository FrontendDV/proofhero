let createCampaignButton = document.querySelector('.create-campaign')
let campaignDiv = document.querySelector('.campaigns-div')
let noDataDiv = document.querySelector('.if-no-data')
let newDiv = document.querySelector('.new-div')
let popUp = document.querySelector('.pop-up')
let closeButton = document.querySelector('.close-icon')
let createButton = document.querySelector('.create-button')
let nameInput = document.querySelector('#name-input')
let domainInput = document.querySelector('#domain-input')
let arrowIcon = document.querySelector('.arrow-icon')
let hiddenProperty = document.querySelector('.hidden-property')
let sideBarUl = document.querySelector('.side-bar-ul')
let iconText = document.querySelectorAll('.icon-text')
let sideBarMenu = document.querySelector('.side-bar-menu')
let renewUpdateDiv = document.querySelector('.renew-update-div')
let boxIcon = document.querySelector('.box-icon')
let selectButton = document.querySelector('.select-button')
let selectButtonBackground = document.querySelector('.select-button-background')
let slec = document.querySelectorAll('.select-button-status')
let counter = 1



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

// profile arrow to see more settings
arrowIcon.addEventListener('click',()=>{
    arrowIcon.classList.toggle('arrow-icon-toggle')
    hiddenProperty.classList.toggle('hidden-property-toggle')
})

// click for pop up appearence
createCampaignButton.addEventListener('click', ()=>{
    popUp.style.display = 'flex'
    document.body.style.overflowY = 'hidden'
})

// Pop up close button
closeButton.addEventListener('click',()=>{
    popUp.style.display = 'none'
    document.body.style.overflowY = 'auto'
})

let selectBtnArray = [];
// this event creates new campgaings 
createButton.addEventListener('click',()=>{
    noDataDiv.style.display ='none'
    newDiv.style.display = 'flex'
    let createNewCampaign = document.createElement('div')
    createNewCampaign.setAttribute('class','new-campaign')
    newDiv.appendChild(createNewCampaign)
    // this is a campaing title div
    let titleDiv = document.createElement('a')
    titleDiv.setAttribute('class','div')
    titleDiv.setAttribute('href','campaign.html')
    let icon = document.createElement('span')
    icon.setAttribute('class','campaign-icon')
    icon.innerHTML = `<i class="fa-solid fa-image"></i>`
    titleDiv.appendChild(icon)
    let domainTitleDiv = document.createElement('div')
    domainTitleDiv.setAttribute('class','domain-title-div')
    titleDiv.appendChild(domainTitleDiv)
    let title = document.createElement('h3')
    title.setAttribute('class','new-campaign-subtitle')
    title.innerText = `Campaign ` + `${counter++}`
    domainTitleDiv.append(title)
    createNewCampaign.appendChild(titleDiv)
    let domain = document.createElement('span')
    domain.setAttribute('class','domain-span')
    domain.innerText = 'domain.com'
    domainTitleDiv.appendChild(domain)
    // this is a campaign status div
    let statusDiv = document.createElement('div')
    statusDiv.setAttribute('class','div')
    let status = document.createElement('div')
    status.setAttribute('class','select-button-background-status')
    statusDiv.appendChild(status)
    createNewCampaign.appendChild(statusDiv)
    let createwhiteCircle = document.createElement('div')
    createwhiteCircle.setAttribute('class','select-button-status')
    status.appendChild(createwhiteCircle)
    // this is a launched date
    let dateDiv = document.createElement('div')
    statusDiv.setAttribute('class','ddiv')
    let date = document.createElement('div')
    date.setAttribute('class','date')
    date.innerText = '9 ,February , 2022'
    dateDiv.appendChild(date)
    createNewCampaign.appendChild(dateDiv)
    // Icon
    let iconSetting = document.createElement('p')
    iconSetting.setAttribute('class','setting-icon')
    iconSetting.innerHTML = `<i class="fa-solid fa-gear"></i>`
    createNewCampaign.appendChild(iconSetting)
    popUp.style.display = 'none'
    document.body.style.overflowY = 'auto'

})







selectButton.addEventListener('click',()=>{
    selectButton.classList.toggle('select-button-toggle')
    selectButtonBackground.classList.toggle('select-button-background-toggle')
})


// selectButton.forEach(el => {
//     el.addEventListener('click',()=>{
//         el.classList.toggle('select-button-toggle')
//         selectButtonBackground.forEach(el => el.classList.toggle('select-button-background-toggle'))
//     })
// })


 