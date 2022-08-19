const numberField = document.getElementById("number-field");
const resultField = document.getElementById("result-field");

function factorial(num) 
{
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function button_click()
{
    num = parseInt(numberField.value);
    resultField.value = factorial(num).toString();
}
