
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


// function enablePurchaseButton() {
//     var totalPriceSpan = document.querySelector('.font-medium.text-gray-500 span');
//     var purchaseButton = document.querySelector('.btn.ml-2.bg-pink-500.text-white.md:w-3/4.mx-auto');

//     function updateButtonState() {
//         purchaseButton.disabled = parseFloat(totalPriceSpan.textContent.trim()) <= 0;
//     }

//     updateButtonState();
//     totalPriceSpan.addEventListener('DOMSubtreeModified', updateButtonState);
// }

// enablePurchaseButton();
