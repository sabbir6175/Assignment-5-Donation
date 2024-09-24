
function getInputFieldValue(id){
    const inputFieldValue = document.querySelector(id).value;
    const inputFieldNumber = parseFloat(inputFieldValue)
    return inputFieldNumber;
}

function getTotalAmount(id){
    const amountValue = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amountValue);
    return amountNumber;
}