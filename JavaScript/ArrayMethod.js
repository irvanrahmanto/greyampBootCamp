const bohemianRaoshody = [
    "Freddie",
    "Mercury",
    "Is", "this the real life?",
    "Is this just fantasy?"
];

const bohemianRaoshody2 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

// console.log("Type of array is " + typeof(bohemianRaoshody), bohemianRaoshody);

/*
// Convert array into string
const lyrics = bohemianRaoshody.toString();
console.log("Type of lyrics is "+ typeof(lyrics), lyrics);

// Join
const join = bohemianRaoshody.join(" ");
console.log("join "+ join);

console.log(bohemianRaoshody);
*/

/*
// pop - hapus dari belakang
console.log("Original Array data : "+bohemianRaoshody2);
bohemianRaoshody2.pop();
console.log("After pop:  "+bohemianRaoshody2);

// Push - tambah
bohemianRaoshody2.push(77);
console.log("After push : "+bohemianRaoshody2)

// Shift - hapus dari depan
bohemianRaoshody2.shift();
console.log("After the shift : "+bohemianRaoshody2);

// Unshift
bohemianRaoshody2.unshift(0);
console.log("After unshift : "+bohemianRaoshody2);
*/

// 5th element of arry
// console.log(bohemianRaoshody2.length);

// merged / menggabungkan
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14, 15];

// const res = arr1.concat(arr2,arr3);
// // const res = [...arr1,...arr2];

// console.log(res);

// slice
// console.log(arr1.slice(2,4));
// console.log(arr1);

// Splice param1 = index, param2 = number of element
// console.log(arr1.splice(1,3));
// console.log(arr1);

// Delete 3rd index of arr1
// arr1.splice(3,1);
// console.log(arr1);

// add element in array
// arr1.splice(3,2,"irvan", "rahmanto");
// console.log(arr1);

// Sort
// const sarr = ['z', 'c', 'a', 'd', 'b', 'e'];
// sarr.sort();
// console.log('Original: ',sarr);
// sarr.reverse();
// console.log('Reverse: ',sarr);

// const mysort = (a,b) => {
//     return a-b;
// }
// // negative, positive, zero

// let sarr_num = [33, 78, 12, 43, 22, 100, 11];
// sarr_num.sort(mysort);
// console.log('the output: ',sarr_num);

const fruits = [
    {name: "orange", price: 500},
    {name: "apple", price: 200},
    {name: "kiwi", price: 1000},
    {name: "papaya", price: 20},
    {name: "banana", price: 80},
    {name: "salak",price:  230},
    {name: "gomu", price: 500000}
]

// let mySortASc = (a,b) => {return a.price - b.price}

// console.log(fruits.sort(mySortASc));

const fruits2 = {
    orange: 500,
    apple: 200,
    kiwi: 1000,
    papaya: 20,
    banana: 80,
    salak: 230,
    gomu: 500000
}

// console.log(Array.isArray(fruits2));
const keys = Object.keys(fruits2);
// console.log(Array.isArray(keys));


const val = Object.values(fruits2);
const etr = Object.entries(fruits2);
// const val = Object.values(fruits);
// console.log(val);

console.log("Keys", keys);
console.log("values", val);
console.log("enteries", x);

// for (let i=0; i<Object.keys(fruits2).length-1; i++){
//     console.log(fruits2[i]);
// }

// console.log(Object.values(fruits2));
// console.log(fruits2.length);
