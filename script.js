

function handleClickCard() {
    var cards = document.querySelectorAll('.card');
    var selectedItemsCount = 0;
    var selectItemContainer = document.getElementById("selected-items");

    for (var i = 0; i < cards.length; i++) {
        cards[i].onclick = function() {
            var h2 = this.querySelector('h2');
            if (h2) {
                selectedItemsCount++;
                const li = document.createElement("li");
                li.innerText = selectedItemsCount + ". " + h2.innerText;
                selectItemContainer.appendChild(li);
            }
        };
    }
}
// button enable er jonno
function enableButton() {
    var input = document.getElementById('couponInput');
    var button = document.getElementById('applyButton');

    input.addEventListener('input', function() {
        if (input.value === 'SELL200') {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
}

enableButton();


let selectedItemsCount = 0;
let totalPrice = 0;
let discount = 0;
const cards = document.querySelectorAll('.card');
const selectItemContainer = document.getElementById('selected-items');
const totalSpan = document.querySelector('.font-medium.text-gray-500 > span');
const discountSpan = document.querySelectorAll('.font-medium.text-gray-500 > span')[1];
const finalTotalSpan = document.querySelectorAll('.font-medium.text-gray-500 > span')[2];
const makePurchaseButton = document.querySelector('a.btn');

// Function to update total prices
function updateTotalPrices() {
    totalSpan.innerText = totalPrice.toFixed(2) ;
    discountSpan.innerText = discount.toFixed(2) ;
    finalTotalSpan.innerText = (totalPrice - discount).toFixed(2) ;
    
    if (totalPrice > 0) {
        makePurchaseButton.removeAttribute('disabled');
    } else {
        makePurchaseButton.setAttribute('disabled', 'true');
    }
}

// Function to handle card click
document.addEventListener('DOMContentLoaded', function() {
    function handleClickCard(event) {
        var h2 = this.querySelector('h2');
        var price = this.querySelector('p span');

        if (h2 && price) {
            selectedItemsCount++;
            const li = document.createElement("li");
            li.innerText = selectedItemsCount + ". " + h2.innerText;
            selectItemContainer.appendChild(li);
            totalPrice += parseFloat(price.innerText);
            updateTotalPrices();
        }
    }

    cards.forEach(function(card) {
        card.addEventListener('click', handleClickCard);
    });

    function applyDiscount() {
        const applyButton = document.getElementById('applyButton');
        const couponInput = document.getElementById('couponInput');

        applyButton.addEventListener('click', function() {
            if (couponInput.value === 'SELL200') {
                discount = totalPrice * 0.2;
                updateTotalPrices();
            }
        });
    }

    applyDiscount();

    function resetPage() {
        selectedItemsCount = 0;
        totalPrice = 0;
        discount = 0;
        selectItemContainer.innerHTML = '';
        updateTotalPrices();
        document.getElementById('couponInput').value = '';
        document.getElementById('applyButton').disabled = true;
        makePurchaseButton.setAttribute('disabled', 'true');
    }

    // Attach reset event to modal button
    document.getElementById('my_modal_8').addEventListener('click', resetPage);
});
   