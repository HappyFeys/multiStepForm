import { stepOne } from "./stepOne.js";
import { stepTwo } from "./stepTwo.js";
import { Set, Get } from "./LocalStorage.js";
import { stepThree } from "./stepThree.js";
import { stepFour } from "./stepFour.js";


stepOne()

const btnStepOne = document.querySelector(".btnStepOne")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const phoneNumber = document.querySelector("#tel")

btnStepOne.addEventListener("click", ()=>{
    let personChoice = {
        name: name.value,
        email: email.value,
        phoneNumber : phoneNumber.value,
    }
    Set('personChoice', personChoice)
    stepTwo()
    const btnStepTwo = document.querySelector('.btnStepTwo')
    
    btnStepTwo.addEventListener("click", ()=>{
        const planChoice =[... document.querySelectorAll(".plan--choice")]
        const selectedOption = planChoice.find(el => el.parentNode.parentNode.classList.contains("isSelect"))
        const checkbox = document.querySelector(".checkbox")
        stepThree(checkbox.checked)
        const btnStepThree = document.querySelector(".btnStepThree")
        console.log(btnStepThree);
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
                console.log(selectedAddon);
            }
            stepFour(checkbox.checked, selectedOption.innerText,selectedAddon )
        })
    })
})
