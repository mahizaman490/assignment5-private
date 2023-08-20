
// card er jinish er naam ta pabar jonno
function handleClickCard() {
    var cards = document.querySelectorAll('.card');

    for (var i = 0; i < cards.length; i++) {
        cards[i].onclick = function() {
            var h2 = this.querySelector('h2');
            if (h2) {
                alert(h2.innerText);
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