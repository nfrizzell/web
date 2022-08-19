const totalDisplay = document.getElementById("count");
let total = 0;

function count()
{
    total++;
    totalDisplay.textContent = total;
}

function button_click()
{
    count();
}
