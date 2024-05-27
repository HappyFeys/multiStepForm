import { resetHTML, generateElement, generateForm, generateLabelInput, createDiv } from "./generateElement.js";


const mainContainer = document.querySelector(".mainContainer")
const asideStepOne = document.querySelector(".aside--stepOne")

export function stepOne() {
    const sectionOne = document.createElement("section")
    sectionOne.classList.add("section--stepOne")
    mainContainer.appendChild(sectionOne)
    generateElement("h1", "Personal info", sectionOne);
    generateElement("p","Please provide your name, email adress, and phone number.", sectionOne);
    const form = generateForm(sectionOne, "form--stepOne")
    generateLabelInput("Name", "text", "name", "e.g. Stephen King", form)
    generateLabelInput("Email Address", "email", "email", "e.g. stephenking@lorem.com", form)
    generateLabelInput("Phone Number", "tel", "tel", "e.g 0412/345.678 ", form)
    const divBtn = createDiv(mainContainer, "divBtn")
    generateElement("button", "Next Step", divBtn, "btnStepOne")
    asideStepOne.classList.add("isActive")
}