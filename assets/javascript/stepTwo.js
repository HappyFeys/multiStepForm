import { resetHTML, generateElement, generateForm, generateLabelInput, createDiv, generateImg, generateImgInsertAdjacentElement } from "./generateElement.js";
import { stepOne } from "./stepOne.js";


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

    const divArcade = createDiv(sectionTwo, "arcade")
    generateImg("../assets/images/icon-arcade.svg", "arcade", divArcade,"icon--plan")
    const divArcadeText= createDiv(divArcade,"divArcade--text")
    generateElement("p", "Arcade", divArcadeText, "plan--choice")
    generateElement("p", `$9/mo`, divArcadeText, "plan--price")

    const divAdvanced = createDiv(sectionTwo, "advanced")
    generateImg("../assets/images/icon-advanced.svg", "advanced", divAdvanced, "icon--plan")
    const divAdvancedText = createDiv(divAdvanced, "divAdvanced--text")
    generateElement("p", "Advanced", divAdvancedText,"plan--choice")
    generateElement("p", `$12/mo`, divAdvancedText, "plan--price")

    const divPro = createDiv(sectionTwo,"pro")
    generateImg("../assets/images/icon-pro.svg", "pro", divPro, "icon--plan")
    const divProText = createDiv(divPro, "divPro--text")
    generateElement("p","Pro",divProText,"plan--choice")
    generateElement("p", `$15/mo`, divProText, "plan--price")

    const divCheckBox = document.createElement("div")
    divCheckBox.classList.add("divCheckbox")
    sectionTwo.insertAdjacentElement("beforeend", divCheckBox)
    generateElement("label", "Monthly", divCheckBox, "monthly")
    const input = document.createElement("input")
    input.type="checkbox"
    input.classList.add("checkbox")
    divCheckBox.appendChild(input)
    generateElement("label", "Yearly", divCheckBox,"yearly")

    const btnGoback = document.createElement("button")
    btnGoback.innerText= "Go Back"
    btnGoback.classList.add("btn--back")
    divBtn.insertBefore(btnGoback, btnNextStep)
    btnNextStep.setAttribute("class", "btnStepTwo")    

    input.addEventListener("change", ()=>{
        const planPrice = document.querySelectorAll(".plan--price")
        if (input.checked) {
            for (let i = 0; i < planPrice.length; i++) {
                if (planPrice[i].parentNode.classList.contains("divArcade--text")) {
                    planPrice[i].innerText="$90/yr"
                } else if(planPrice[i].parentNode.classList.contains("divAdvanced--text")){
                    planPrice[i].innerText="$120/yr"
                }
                else if(planPrice[i].parentNode.classList.contains("divPro--text")){
                    planPrice[i].innerText="$150/yr"
                }
               generateElement("p","2 months free", planPrice[i].parentNode, "monthFree")                
            } 
        }
        else{
            for (let i = 0; i < planPrice.length; i++) {
                if (planPrice[i].parentNode.classList.contains("divArcade--text")) {
                    planPrice[i].innerText="$9/mo"
                } else if(planPrice[i].parentNode.classList.contains("divAdvanced--text")){
                    planPrice[i].innerText="$12/mo"
                }
                else if(planPrice[i].parentNode.classList.contains("divPro--text")){
                    planPrice[i].innerText="$15/mo"
                }
                const monthFree= document.querySelectorAll(".monthFree")
                monthFree.forEach(element=> element.remove())
            }
        }
    })

    const arcade = document.querySelector(".arcade")
    const advanced = document.querySelector(".advanced")
    const pro = document.querySelector(".pro")

    let arrayDiv = [arcade, advanced, pro]
    for (const element of arrayDiv) {
        element.addEventListener("click", ()=>{
            arrayDiv.forEach(el => el.classList.remove("isSelect"))
            element.classList.add("isSelect")
            const selectedElement = arrayDiv.find(el => el.classList.contains("isSelect"))
            console.log(selectedElement);
        })
    }

    btnGoback.addEventListener("click", ()=> {
        sectionTwo.remove()
        divBtn.remove()
        stepOne()
        asideStepTwo.classList.remove("isActive")
    })
}

