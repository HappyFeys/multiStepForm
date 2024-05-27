import { stepOne } from "./stepOne.js";
import { stepTwo } from "./stepTwo.js";
import { Set, Get } from "./LocalStorage.js";


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
})