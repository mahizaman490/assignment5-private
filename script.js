// card er jinish er naam ta pabar jonno


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
// function enableButton() {
//     var input = document.getElementById('couponInput');
//     var button = document.getElementById('applyButton');

//     input.addEventListener('input', function() {
//         if (input.value === 'SELL200') {
//             button.disabled = false;
//         } else {
//             button.disabled = true;
//         }
//     });
// }

// enableButton();

        function enableButton() {
            var totalPriceSpan = document.querySelector(".pl-2 span.text-gray-500");
            var applyButton = document.getElementById("applyButton");

            applyButton.disabled = true; // Initially disable the button

            // Listen for changes in total price
            totalPriceSpan.addEventListener("DOMSubtreeModified", function () {
                var totalPrice = parseFloat(totalPriceSpan.textContent);
                if (totalPrice >= 200) {
                    applyButton.disabled = false; // Enable the button
                } else {
                    applyButton.disabled = true; // Disable the button
                }
            });
        }

        function handleClickCard() {
            // ... (existing code for handleClickCard function)
        }

        // Call the enableButton function to set up the button's initial state and interaction
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

// Attach card click event listeners
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', handleClickCard);
}

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


document.getElementById('my_modal_8').addEventListener('click', resetPage);
 