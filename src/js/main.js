let menuANCHOR = document.querySelector(`.menu-toggle`)
let menuDIVS = document.querySelectorAll(`.menu-toggle div`)

var menuActive = false

let menuP = document.createElement(`p`)
menuP.textContent = `X`
menuP.style.color = `white`
menuP.style.fontSize = `2rem`
menuP.style.fontWeight = `bold`

let menuSECTION = document.createElement(`section`)
menuSECTION.style.position = `absolute`
menuSECTION.style.right = `0px`
menuSECTION.style.top = `102%`
menuSECTION.style.width = `200px`
menuSECTION.style.height = `170px`
menuSECTION.style.background = `black`
menuSECTION.style.color = `white`
menuSECTION.style.opacity = `0.8`

let toggleMenuLIS = document.querySelectorAll(`nav li`)

let toggleMenuUL = document.createElement(`ul`)


menuANCHOR.addEventListener(`click`, function(event){
    event.preventDefault()
    if(menuActive === false) {
        menuActive = true
        for(let i=0; i<menuDIVS.length;i++){
            menuDIVS[i].style.display = `none`
        }
        menuANCHOR.appendChild(menuP)
        menuANCHOR.style.border = `1px solid white`
        menuANCHOR.appendChild(menuSECTION)
        menuSECTION.appendChild(toggleMenuUL)
        for (let j = 0; j<toggleMenuLIS.length;j++){
            let newLI = document.createElement(`li`)
            newLI.textContent = toggleMenuLIS[j].textContent
            console.log(toggleMenuLIS[j].textContent)
            newLI.style.color = `white`
            newLI.style.fontWeight = `bold`
            newLI.style.textAlign = `center`
            newLI.style.margin = `15px`
            toggleMenuUL.appendChild(newLI)
        }
        
    }
    else {
        menuActive = false
        menuP.remove()
        for(let i=0; i<menuDIVS.length;i++){
            menuDIVS[i].style.display = `block`
        }
        menuANCHOR.style.border = `none`
        let toggleMenuLIALL = document.querySelectorAll(`.menu-toggle li`)
        for (let j = 0; j<toggleMenuLIS.length;j++){
            toggleMenuLIALL[j].remove()
        }
        toggleMenuUL.remove()
        menuSECTION.remove()
    }
    
    
    


})