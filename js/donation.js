
const  donatedCard = document.getElementById('card-donate-from');
const donationBtn = document.getElementById('Donation-btn');
const historyCard = document.getElementById('history-from');
const historyBtn = document.getElementById('history-btn');


historyBtn.addEventListener('click', function(){
    donatedCard.classList.add('hidden');
    historyCard.classList.remove('hidden');
    historyBtn.classList.add('bg-lime-400', 'text-black');
    donationBtn.classList.remove('bg-lime-400')
})

donationBtn.addEventListener('click', function(){
    donatedCard.classList.remove('hidden');
    historyCard.classList.add('hidden');
    donationBtn.classList.add('bg-lime-400', 'text-black');
    historyBtn.classList.remove('bg-lime-400', 'text-black');
})


function updateBalanceBtn(cardId){
    // input
    const inputFieldValue = document.getElementById(cardId + '-text-Input');
    const inputFieldNumber = parseFloat(inputFieldValue.value)
    // donation total balance
    const donationBalanceTotal = document.getElementById(cardId + '-donation-amount')
    const donationBalance = parseFloat(donationBalanceTotal.innerText);
    // donation main balance
    const donationMainBalance = document.getElementById('main-balance')
    const mainBalance = parseFloat(donationMainBalance.innerText)


    if(isNaN(inputFieldNumber) || inputFieldNumber <= 0 || inputFieldNumber > mainBalance ){
        alert("Invalid Donation Amount");
        return;
    }

    const newDonationAmount = donationBalance + inputFieldNumber;
     donationBalanceTotal.innerText = newDonationAmount;


     const newMainAmount = mainBalance - inputFieldNumber;
     donationMainBalance.innerText = newMainAmount;


        // Empty input field
        inputFieldValue.value = '';

        // Successful Massage
        my_modal.showModal();

        const donatePlace = document.getElementById(cardId + '-donate-place').innerText;
        historyCard.innerHTML += `
            <div class="border rounded-xl mx-4 p-5 shadow-inner mb-5">
                <h3 class="text-xl font-semibold mb-2">${inputFieldNumber} Taka is ${donatePlace}</h3>
                <p class="text-gray-500">Date: ${Date()}</p>
            </div>  
        `;

}