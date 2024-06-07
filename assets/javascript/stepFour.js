import * as DOM from "./generateElement.js";
import { stepThree } from "./stepThree.js";
import { stepTwo } from "./stepTwo.js";

export function stepFour(bool, selectedOption, selectedAddon){
    const mainContainer = document.querySelector(".mainContainer")
    const sectionThree = document.querySelector(".section--stepThree")
    const asideStepFour = document.querySelector('.aside--stepFour')
    const asideStepThree = document.querySelector('.aside--stepThree')  
    const asideStepTwo = document.querySelector('.aside--stepTwo')
    const divBtn = document.querySelector(".divBtn")


    asideStepTwo.classList.remove("isActive")
    asideStepThree.classList.remove("isActive")
    asideStepFour.classList.add("isActive")
    sectionThree.remove()

    const sectionFour = document.createElement("section")
    sectionFour.classList.add("section--stepFour")
    mainContainer.insertBefore(sectionFour, divBtn)

    DOM.generateElement("h1", "Finishing up", sectionFour)
    DOM.generateElement("p", "Double-check everything looks OK before confirming.", sectionFour)

    const recap = DOM.createDiv(sectionFour, "recap")
    const divPlanChoice = DOM.createDiv(recap, "divPlanChoice")
    const planChoicetext = DOM.createDiv(divPlanChoice, "planChoiceText")
    DOM.generateElement("p", `${selectedOption} (${bool ? "Yearly": "Monthly"})`, planChoicetext, "planChoice")
    let linkStepTwo = DOM.generateElement("p", "Change", planChoicetext, "linkStepTwo")
    DOM.generateElement("p", price(bool, selectedOption), divPlanChoice, "price")

    const hr = document.createElement("hr")
    recap.appendChild(hr)

    for (const element of selectedAddon) {
        console.log(element.classList.contains("addonOne"));
        const addon = DOM.createDiv(recap, "recap__addon")
        DOM.generateElement("p", element.children[1].children[0].innerText, addon,"recap__addon--name")
        DOM.generateElement("p",element.children[2].children[0].innerText,addon, "recap__addon--price" )
    }

    let total = DOM.createDiv(sectionFour, "total")
    DOM.generateElement("p", `Total (per ${bool? "year": "month"})`, total, "recap__total--name")
    DOM.generateElement("p",`+$${getTotal(bool,selectedOption,selectedAddon)}/${bool?"yr":"mo"}` ,total,"recap__total--price")

    linkStepTwo.addEventListener("click",()=>{
        sectionFour.remove()
        asideStepFour.classList.remove("isActive")
        asideStepTwo.classList.add("isActive")
        stepTwo()
    })

    const confirm  = document.querySelector(".btnStepThree")
    confirm.setAttribute("class", "confirm")
    confirm.innerText="Confirm"

    const btnBack = document.querySelector(".btn--back")
    btnBack.addEventListener("click", ()=>{
        sectionFour.remove()
        divBtn.remove()
        stepThree()
        asideStepFour.classList.remove("isActive")
    })
}

function price(bool, selectedOption){
    let pricePlan
    if (bool) {
        switch (selectedOption) {
            case "Arcade":
                pricePlan = "$90/yr"
                break;
            case "Advanced":
                pricePlan = "$120/yr"
                break;
            default:
                pricePlan = "$150/yr"
                break;
        }
    } else {
        switch (selectedOption) {
            case "Arcade":
                pricePlan = "$9/mo"
                break;
            case "Advanced":
                pricePlan = "$12/mo"
                break;
            default:
                pricePlan = "$15/mo"
                break;
        }
    }
    return pricePlan
}


function getTotal(bool, selectedOption, selectedAddon) {
    let total;
    if (bool) {
        switch (selectedOption) {
            case "Arcade":
                total = 90
                break;
            case "Advanced":
                total = 120
                break;
            default:
                total = 150
                break;
        }
    } else {
        switch (selectedOption) {
            case "Arcade":
                total = 9
                break;
            case "Advanced":
                total = 12
                break;
            default:
                total = 15
                break;
        }
    }
    for (const element of selectedAddon) {
        if(bool){
            if (element.classList.contains("addonOne")) {
                total+= 10
            }else if(element.classList.contains("addonTwo")){
                total+= 20
            } else if(element.classList.contains("addonThree")){
                total+= 20
            }
        }
        else{
            if (element.classList.contains("addonOne")) {
                total+= 1
            }else if(element.classList.contains("addonTwo")){
                total+= 2
            } else if(element.classList.contains("addonThree")){
                total+= 2
            }
        }
    }
    return total
}