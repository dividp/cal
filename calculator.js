document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded before attaching event listeners
    attachEventListeners();
});

function attachEventListeners() {
    // Get the calculator buttons
    var buttons = document.querySelectorAll('.buttons button');

    // Attach click event listener to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            handleButtonClick(button.innerText);
        });
    });
}

function handleButtonClick(value) {
    var display = document.getElementById('display');

    switch (value) {
        case '=':
            calculateResult();
            break;
        case 'C':
            clearDisplay();
            break;
        default:
            appendToDisplay(value);
    }
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
