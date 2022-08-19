const numberField = document.getElementById("number-field");
const resultField = document.getElementById("result-field");

function prime_check(num)
{
    if (num <= 1) {
        return "N/A";
    }
    result = "Prime";
    // TODO: sieve of eratosthenes
    for (let i = 2; (i * i) <= num; i++) {
        if (num % i == 0) {
            result = "Composite";
	    break;
	}
    }
    return result;
}

function button_click()
{
    num = parseInt(numberField.value);
    resultField.value = prime_check(num);
}
