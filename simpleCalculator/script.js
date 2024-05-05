const inputBox = document.getElementById('input_box');
const number_buttons = document.querySelectorAll('.grid-item');
const operator_buttons = document.querySelectorAll('.operator');
number_buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        inputBox.innerText += button.innerText;
    });
});
operator_buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        switch (button.innerText) {
            case '+':
            case '-':
            case '/':
            case '*':
            case '%': inputBox.innerText += button.innerText;
            break;
            case 'C': inputBox.innerText = '';
            break;
            case 'D': inputBox.innerText = inputBox.innerText.slice(0, -1);
            break;
            case '=': inputBox.innerText = calculate(inputBox.innerText);
        }
    });
});
function calculate(expression) {
    const result = eval(expression);

    if (!isNaN(result)) {
       return result;
    } else {
        alert("Wrong expression, Please check your input");
        return expression
    }
};
