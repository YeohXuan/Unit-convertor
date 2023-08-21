const unitInput = document.getElementById("unit-input")
const convertBtn = document.getElementById("convert-btn")
const lengthConversion = document.getElementById("length-conversion")
const volumeConversion = document.getElementById("volume-conversion")
const massConversion = document.getElementById("mass-conversion")
const speedConversion = document.getElementById("speed-conversion")

convertBtn.addEventListener("click", () => {
    const input = unitInput.value 

    //Speed formula
    const kmToMiles = (input * 0.621371).toFixed(3)
    const milesToKm = (input * 1.60934).toFixed(3)
    //Display speed conversion
    speedConversion.textContent = `${input} km = ${kmToMiles} miles | ${input} miles = ${milesToKm} km`

    //Length formula
    const meterToFeet = (input * 3.28084).toFixed(3)
    const feetToMeter = (input * 0.3048).toFixed(3)
    //Display length conversion
    lengthConversion.textContent = `${input} meters = ${meterToFeet} feet | ${input} feet = ${feetToMeter} meters`

    //Mass formula
    const kiloToPound = (input * 2.20462).toFixed(3)
    const poundToKilo = (input * 0.453592).toFixed(3)
    //Display mass conversion
    massConversion.textContent = `${input} kilos = ${kiloToPound} pounds | ${input} pounds = ${poundToKilo} kilos`

    //Volume formula
    const literToGallon = (input * 0.264172).toFixed(3)
    const gallonToLiter = (input * 3.78541).toFixed(3)
    //Display volume conversion
    volumeConversion.textContent = `${input} liters = ${literToGallon} gallons | ${input} gallons = ${gallonToLiter} liters`
})

function lightMode() {
    const element = document.body
    element.classList.toggle("light-mode")
}