// Array iteration

// 1 theory
// For each

let sarr_num = [40, 100, 1, 2, 45, 20];

// Parameterized function - 1
// const multiple3 = elm => console.log(elm*3);

// 2
const multiple3_3 = function (val, idx, arr) {
    console.log(idx * val, arr);
}

// declaration function - 3
// function multiple3_2(elm){
//     console.log(elm*3);
// }

// sarr_num.forEach(multiple3_3);


// Classic method for loop
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = ["a", "b", "c", "d", "e"];
let arrIseng = ["irvan", "naufali", "rahmanto", "hana", "bank"];
let arr3 = [...arr].reverse();

// for (let i = 0; i < arr.length; i++) {
//     console.log("Index of array is = ", arr[i]);
// }

// 2nd theory
// FOR OF

// for (let elm of arr3) {
//     console.log("From for of", elm);
// }

// for (let elem of arr3) {
//     if (elem === 1) {
//         console.log("Yes")
//     }
// }

// 3nd theory technic
// FOR IN -> it will be print the index of your array

let arrX = ['a', 'b', 'c', 'd', 'e']
// for (let elm in arrX) {
//     console.log(elm);
// }

// Map
let arrZ = ['a', 'b', 'c', 'd', 'e', 'z'];
let arrZnum = [1,2,3,4,5,6,7,8,9,10];

const mapFunc = function (elm) {
    // return elm.toUpperCase();
    if(elm % 2 == 0){
        return "even";
    }else{
        return "odd";
    }
}

// const mapFunc = function (elm) {
//     return elm;
// }

// const outputArr = arrZnum.map(mapFunc);
// console.log(outputArr);
// console.log(mapFunc("a"));

// Filter
let arrY = [1,2,3,4,5,6,7,8,9];

const filterFunc = function(elm){
    if(elm % 2 === 0){
        return 56;
    }
    return false;
}

console.log(filterFunc(3));

const filterOutput = arrY.filter(filterFunc);
console.log(filterOutput);
// filterFunc(22);