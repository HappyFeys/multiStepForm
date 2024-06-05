import * as DOM from "./generateElement.js";
import { stepTwo } from "./stepTwo.js";


export function stepThree(bool) {
    const mainContainer = document.querySelector(".mainContainer")
    const sectionTwo = document.querySelector(".section--stepTwo")
    const asideStepTwo = document.querySelector('.aside--stepTwo')
    const asideStepThree = document.querySelector('.aside--stepThree')
    const divBtn = document.querySelector(".divBtn")
    
    asideStepTwo.classList.remove("isActive")
    asideStepThree.classList.add("isActive")
    sectionTwo.remove()
    const sectionThree = document.createElement("section")
    sectionThree.classList.add("section--stepThree")
    mainContainer.insertBefore(sectionThree, divBtn)

    DOM.generateElement("h1", "Pick add-ons", sectionThree)
    DOM.generateElement("p", "Add-ons help enhance your gaming experience", sectionThree)

    const addonOne = DOM.createDiv(sectionThree,"addonOne")
    createCheckbox(addonOne)
    const divAddOne = DOM.createDiv(addonOne, "divAddOne")
    DOM.generateElement("p", "Online service",divAddOne, "add--choice")
    DOM.generateElement("p", "Access to multiplayer games", divAddOne, "add--description")
    const divAddOnePrice = DOM.createDiv(addonOne, "divAdd--price")
    DOM.generateElement("p", "+$1/mo", divAddOnePrice, "add--price")

    const addonTwo = DOM.createDiv(sectionThree, "addonTwo")
    createCheckbox(addonTwo)
    const divAddTwo = DOM.createDiv(addonTwo, "divAddTwo")
    DOM.generateElement("p", "Larger storage", divAddTwo, "add--choice")
    DOM.generateElement("p", "Extra 1TB of cloud save", divAddTwo, "add--description")
    const divAddTwoPrice = DOM.createDiv(addonTwo, "divAdd--price")
    DOM.generateElement("p", "+$2/mo",divAddTwoPrice, "add--price")

    const addonThree = DOM.createDiv(sectionThree, "addonThree")
    createCheckbox(addonThree)
    const divAddThree = DOM.createDiv(addonThree, "divAddThree")
    DOM.generateElement("p", "Customizable profile", divAddThree, "add--choice")
    DOM.generateElement("p", "Custom theme on your profile", divAddThree, "add--description")
    const divAddThreePrice = DOM.createDiv(addonThree, "divAdd--price")
    DOM.generateElement("p","+$2/mo", divAddThreePrice, "add--price")

    const btnNextStep = document.querySelector(".btnStepTwo")
    btnNextStep.setAttribute("class", "btnStepThree")

    const addPrice = document.querySelectorAll(".add--price")
    if(bool){
        for (let i = 0; i < addPrice.length; i++) {
            if(addPrice[i].parentNode.parentNode.classList.contains("addonOne")) {
                addPrice[i].innerText = "+$10/yr"
            }
            else if(addPrice[i].parentNode.parentNode.classList.contains("addonTwo") || addPrice[i].parentNode.parentNode.classList.contains("addonThree")){
                addPrice[i].innerText = "+$20/yr"
            } 
        }
    }

    const inputCheck = document.querySelectorAll("input")
    for (const element of inputCheck) {
        element.addEventListener("change", ()=>{
            (element.checked)? element.parentNode.classList.add("isSelect") :element.parentNode.classList.remove("isSelect")
        })
    }

    const btnGoback = document.querySelector(".btn--back")
    btnGoback.addEventListener("click", ()=> {
        sectionThree.remove()
        divBtn.remove()
        stepTwo()
        asideStepThree.classList.remove("isActive")
    })
}

function createCheckbox(section, className) {
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    if(className) checkbox.classList.add(className)
    section.appendChild(checkbox)
}