/*

create a function that take a number 'Multiplier'
it returns a function that also takes a number
the output of the returned function should be the multiplication of those two numbers

example:
const triple = multipler(3)
triple(7) should return 21

*/

// Alternatif 1

// const isNumberMultipier = function(x){
//     const calcFunc = function(y){
//         console.log("The result is : "+ y*x);
//     };
//     return calcFunc;
// }

// export const triple = isNumberMultipier(3);
// triple(7);

// Alternatif 2

let isNumberMultipier = (x) =>
    (y) => {
        console.log("")
        console.log("The result is : " + y * x);
    }

export const triple = isNumberMultipier(3);
triple(7);

// Adding new line of code of this exercises