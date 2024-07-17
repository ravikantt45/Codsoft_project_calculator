function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
