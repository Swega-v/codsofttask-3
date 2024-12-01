
const display = document.getElementById("display");

function appendInput(value) {
    if (display.value === "0") {
        display.value = value; 
    } else {
        display.value += value; 
    }
}


function clearDisplay() {
    display.value = "0"; 
}

function calculateResult() {
    try {
        const result = eval(display.value);
        display.value = result; 
    } catch (error) {
        display.value = "Error"; 
    }
}
