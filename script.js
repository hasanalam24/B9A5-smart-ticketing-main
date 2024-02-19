const cards = document.getElementsByClassName('cards');

let count = 0;
let available = 40;


for (const card of cards) {

    card.addEventListener('click', function () {

        if (count >= 4) {
            alert('Cannot purchase more than 4')
            card.classList.setAttribute('disabled', true)
        }
        card.style.backgroundColor = '#1DD100'
        card.style.color = 'white'

        const seatCount = document.getElementById('seatCount');

        count++
        seatCount.innerText = count;

        const availableSeats = document.getElementById('available-seats');

        available--
        availableSeats.innerText = available;

        // console.log(availableSeats)


        const totalPrice = document.getElementById('total-price');


        const Price = count * 550;
        totalPrice.innerText = Price;
        console.log(Price)
        if (count >= 1) {
            card.setAttribute("disabled", true);
        }
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = Price


    })
}


const applyBtn = document.getElementById('apply-btn').addEventListener('click', function () {

    const Price = count * 550;
    const inputField = document.getElementById('input-field').value;
    if (inputField === 'NEW15') {
        const discount = Price * 15 / 100;
        const afterDiscountPrice = Price - discount;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = afterDiscountPrice;
    }
    if (inputField === 'Couple 20') {
        const discount = Price * 20 / 100;
        const afterDiscountPrice = Price - discount;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = afterDiscountPrice;
    }
})

// Apply Button
document.getElementById('input-field').addEventListener('keyup', function (event) {
    const inputField = event.target.value;
    const applyBtn = document.getElementById('apply-btn')
    if (inputField === "NEW15" || inputField === "Couple 20") {
        applyBtn.removeAttribute('disabled');
    }

    else {
        applyBtn.setAttribute('disabled', true)
    }
})

