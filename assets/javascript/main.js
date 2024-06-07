import { stepOne } from "./stepOne.js";
import { stepTwo } from "./stepTwo.js";
import { Set, Get } from "./LocalStorage.js";
import { stepThree } from "./stepThree.js";
import { stepFour } from "./stepFour.js";
import { finalStep } from "./finalStep.js";


stepOne()

const btnStepOne = document.querySelector(".btnStepOne")
btnStepOne.addEventListener("click", ()=>{
    stepTwo()
    const btnStepTwo = document.querySelector('.btnStepTwo')
    
    btnStepTwo.addEventListener("click", ()=>{
        const planChoice =[... document.querySelectorAll(".plan--choice")]
        const selectedOption = planChoice.find(el => el.parentNode.parentNode.classList.contains("isSelect"))
        const checkbox = document.querySelector(".checkbox")
        stepThree(checkbox.checked)

        const btnStepThree = document.querySelector(".btnStepThree")
        btnStepThree.addEventListener("click", ()=>{
            let addChoice = document.querySelectorAll('.isSelect')
            let selectedAddon = []
            for (const element of addChoice) {
                if (element.classList.contains("addonOne")) {
                    selectedAddon.push(element)
                } else if(element.classList.contains("addonTwo")){
                    selectedAddon.push(element)
                } else if(element.classList.contains("addonThree")){
                    selectedAddon.push(element)
                }
            }
            stepFour(checkbox.checked, selectedOption.innerText,selectedAddon)
            
            const confirm = document.querySelector(".confirm")
            confirm.addEventListener("click",()=>{
                finalStep()
            })
        })
    })
})
