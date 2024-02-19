// const cards = document.querySelectorAll(".cards");

// let count = 0;
// let allCount = 40;
// // let totalCount = 1000;

// for (const card of cards) {
//     card.addEventListener('click', function () {
//         card.style.backgroundColor = '#1DD100'
//         card.style.color = 'white'

//         // seat count
//         const seatCount = document.getElementById('seatCount');
//         count++
//         seatCount.innerText = count;


//         // Available seat

//         const availableseat = document.getElementById('available-seats');
//         allCount--
//         availableseat.innerText = allCount;


//         // total price
//         const totalPrice = document.getElementById('total-price');
//         totalPrice.innerText = count * 550;

//         // totalCount = totalPrice.innerText + totalCount
//         // console.log(totalPrices)

//         if (count >= 1) {
//             card.setAttribute("disabled", true);
//         }


//     })
// }




// // const btnApply = document.getElementById('apply-btn');

// // btnApply.addEventListener('click', function () {
// //     const inputField = document.getElementById('input-field').value;
// //     // console.log(inputField)

// //     const discountPrice = document.getElementById('grand-total-price');

// //     if (inputField === 'SELL200') {

// //         discountPrice.innerText = count * 550 * 20 / 100;
// //     }
// //     else {
// //         alert('Invalid Coupon Code')
// //     }

// //     // total before discount

// //     const afterDiscountPrice = document.getElementById('total')
// //     afterDiscountPrice.innerText = sumTotal - discountPrice.innerText;

// // })


// // document.getElementById('input-field').addEventListener('keyup', function (event) {
// //     const inputField = event.target.value;
// //     const applyBtn = document.getElementById('apply-btn')
// //     if (inputField === "NEW15" || inputField === "Couple 20") {
// //         applyBtn.removeAttribute('disabled');
// //     }

// //     // else {
// //     //     applyBtn.setAttribute('disabled', true)
// //     // }
// //     document.getElementById('apply-btn').addEventListener('click', function () {
// //         const grandTotal = document.getElementById('grand-total-price');

// //         const discount = total2 * 15 / 100;
// //         grandTotal.innerText = total2 - discount;
// //     })
// // })



// // const availableseat = document.getElementById('available-seats');
// // allCount--
// // availableseat.innerText = allCount;