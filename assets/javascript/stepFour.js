import * as DOM from "./generateElement.js";
import { stepThree } from "./stepThree.js";

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
    DOM.generateElement("p", "Change", planChoicetext, "linkStepTwo")
    DOM.generateElement("p", price(bool, selectedOption), divPlanChoice, "price")

    const hr = document.createElement("hr")
    recap.appendChild(hr)

    for (const element of selectedAddon) {
        console.log(element.children[1].children[0]);
        console.log(element.children[2].children[0]);
        const addon = DOM.createDiv(recap, "recap__addon")
        DOM.generateElement("p", element.children[1].children[0].innerText, addon,"recap__addon--name")
        DOM.generateElement("p",element.children[2].children[0].innerText,addon, "recap__addon--price" )
    }

    let total = DOM.createDiv(sectionFour, "total")
    DOM.generateElement("p", `Total (per ${bool? "year": "month"})`, total, "recap__total--name")
    DOM.generateElement("p","+$120/yr" ,total,"recap__total--price")

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