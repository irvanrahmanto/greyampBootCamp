/*
write a function that takes fruit name as input and return a function to calculate price

input = {"orange"}
output = orangeFunc

input = {"apple"}
output = appleFunc

it returns function that take number of glasses as input and calculate price
for juice for total number of glasses based on quantitiy of fruits is required i.e price*quantitiy*glass

input = orangeFunc(2)
output = "the price of 2 orange juice will be 400"

input = appleFunc(1)
output = "the price of 1 apple juice will be 500"

*/

// Initialized the Fruit object

// Alternatif 1

const Fruit = {
    oranges: { price: 100, quantity: 2 },
    apple: { price: 100, quantity: 5 },
    kiwi: { price: 500, quantity: 10 },
    pineaplle: { price: 300, quantity: 1 },
    papaya: { price: 50, quantity: 1 }
}

// const isFruit = function (fruitName) {
//         const isCountFruit = function (quantity) {
//                 let calcBuy = Fruit[fruitName].price * Fruit[fruitName].quantity * quantity;
//                 console.log(`The price of ${quantity} ${fruitName} juice will be ${calcBuy} Rupiah`);
//         }
//         return isCountFruit;

// }



