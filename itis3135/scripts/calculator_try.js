let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function addDecimalPoint() {
    // Check if the display already contains a decimal point
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}