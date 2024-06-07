import * as DOM from "./generateElement.js"

export function finalStep() {
    const mainContainer = document.querySelector(".mainContainer")
    const sectionFour = document.querySelector(".section--stepFour")
    const divBtn = document.querySelector(".divBtn")

    sectionFour.remove()
    divBtn.remove()

    const finalStep = document.createElement("section")
    finalStep.classList.add("section--finalStep")
    mainContainer.appendChild(finalStep)

    DOM.generateImg("./assets/images/icon-thank-you.svg","Thank You",finalStep)
    DOM.generateElement("h1", "Thank you!", finalStep)
    const p = document.createElement("p")
    p.innerHTML="Thanks for confirming your subscription! We hope you fun using our<br> platform. If you ever need support,<br> please feel free to email us at support@loremgaming.com."
    finalStep.appendChild(p)
    
}