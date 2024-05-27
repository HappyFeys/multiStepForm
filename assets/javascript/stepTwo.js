import { resetHTML, generateElement, generateForm, generateLabelInput, createDiv, generateImg, generateImgInsertAdjacentElement } from "./generateElement.js";


export function stepTwo() {

    const mainContainer = document.querySelector(".mainContainer")
    const sectionOne = document.querySelector(".section--stepOne")
    const asideStepTwo = document.querySelector('.aside--stepTwo')
    const asideStepOne = document.querySelector(".aside--stepOne")
    const divBtn = document.querySelector(".divBtn")
    const btnNextStep = document.querySelector(".btnStepOne")


    asideStepOne.classList.remove("isActive")
    asideStepTwo.classList.add("isActive")
    sectionOne.remove()
    const section = document.createElement("section")
    section.classList.add("section--stepTwo")
    mainContainer.insertBefore(section,divBtn)

    const sectionTwo = document.querySelector(".section--stepTwo")
    generateElement("h1", "Select your plan", sectionTwo)
    generateElement("p", "You have the option of monthly or yearly billing.", sectionTwo)
    
    const divCheckBox = document.createElement("div")
    divCheckBox.classList.add("divCheckbox")
    sectionTwo.insertAdjacentElement("beforeend", divCheckBox)
    generateElement("label", "Monthly", divCheckBox, "monthly")
    const input = document.createElement("input")
    input.type="checkbox"
    divCheckBox.appendChild(input)
    generateElement("label", "Yearly", divCheckBox,"yearly")

    //problème avec le appendchild, il faut trouver la méthode pour qu'il soit tjs en bas ou inserer les autres avant celle ci

    const divArcade = createDiv(sectionTwo, "arcade")
    generateImg("../assets/images/icon-arcade.svg", "arcade", divArcade,"icon--plan")
    const divArcadeText= createDiv(divArcade,"divArcade--text")
    generateElement("p", "Arcade", divArcadeText, "plan--choice")
    generateElement("p", input.checked? "$90/yr": "$9/mo", divArcadeText, "plan--price")
    if (input.checked) {
        generateElement("p","2 months free", divAdvancedText, "monthFree")
    }

    const divAdvanced = createDiv(sectionTwo, "advanced")
    generateImg("../assets/images/icon-advanced.svg", "advanced", divAdvanced, "icon--plan")
    const divAdvancedText = createDiv(divAdvanced, "divAdvanced--text")
    generateElement("p", "Advanced", divAdvancedText,"plan--choice")
    generateElement("p", input.checked? "$120/yr": "$12/mo", divAdvancedText, "plan--price")
    if (input.checked) {
        generateElement("p","2 months free", divAdvancedText, "monthFree")
    }

    const divPro = createDiv(sectionTwo,"pro")
    generateImg("../assets/images/icon-pro.svg", "pro", divPro, "icon--plan")
    const divProText = createDiv(divPro, "divPro--text")
    generateElement("p","Pro",divProText,"plan--choice")
    generateElement("p", input.checked? "$150/yr": "$15/mo", divProText, "plan--choice")
    if (input.checked) {
        generateElement("p","2 months free", divAdvancedText, "monthFree")
    }

    const btnGoback = document.createElement("button")
    btnGoback.innerText= "Go Back"
    divBtn.insertBefore(btnGoback, btnNextStep)
    btnNextStep.setAttribute("class", "btnStepTwo")
}

