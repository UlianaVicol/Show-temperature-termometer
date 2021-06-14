let temp_input = document.getElementById("temperature-input")
let termIndicator = document.getElementById("termometer-indicator")
let tempSelected = document.getElementById("temp-diff")
let termometer_digits = document.getElementById("termometer-digits").children

let value_tempHeight = parseInt(termIndicator.style.width)

function calculateTemp() {
  for (let t = 0; t < termometer_digits.length; t++) {
    tempSelected.value == "°F" ?  termometer_digits[t].innerText = -4 + (t * 18) : termometer_digits[t].innerText = -20 + (t*10)
  }
  updateTermometer()
}

function updateTermometer() {
  if (temp_input.value >= -20 && temp_input.value <= 50 && tempSelected .value == "°C") {
    termIndicator.style.width = value_tempHeight + temp_input.value * 3 + "px"
  } else if (temp_input.value >= -4 && temp_input.value <= 122 && tempSelected .value == "°F") {
    termIndicator.style.width = value_tempHeight + ((temp_input.value - 32) * 5/9) * 3 + "px"
  } 
  else {
    termIndicator.style.width = value_tempHeight + "px"
  }
}
temp_input.onkeyup = updateTermometer
tempSelected .onchange = calculateTemp