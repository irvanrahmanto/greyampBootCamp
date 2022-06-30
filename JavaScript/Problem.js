// import { sortByLevel } from "./util.js";


// Create a file called util.js
// in util.js export a function called 'sort by level'
// sort the 'starter' arrays in the ascending order of their level

export const starters = [
    {
        name: "Bulbasaur",
        level: 2,
    },
    {
        name: "Charmader",
        level: 8,
    },
    {
        name: "Squirtle",
        level: 12,
    }
];

// Number 1
// console.log(starters.sort(sortByLevel));

// exercises

/*
let isCheckLevel = function(x){
    if(x.level > 6){
        console.log("name is ", x.level);
    }else{
        console.log("invalid!");
    }
}

const isCheckLevel_2 = (pokemon) => {
    return pokemon.level >= 6;
};

const getPokemonName = (pokemon) => {
    return pokemon.name;
}

let result = starters.filter(isCheckLevel_2);

result.map(getPokemonName);

console.log(result.map(getPokemonName));

// isCheckLevel(20);

// Object.values(starters)
*/

// Every
let myAr = [12, 26, 18, 22, 23, 43, 100, 87, 43];

// const everyFunc = function(elm){
//     if(elm>=18){
//         return true;
//     }
// }

// console.log(myAr.every(everyFunc));

// Some
// const someFunc = function(elm){
//     if(elm>=18){
//         return true;
//     }
// }

// console.log(myAr.some(someFunc));

// Find
// const findFunc = function(elm){
//     if(elm>=18){
//         return true;
//     }
// }

// console.log(myAr.find(findFunc));

// Find Index
const findIdxFunc = function (elm) {
    if (elm >= 18) {
        return true;
    }
}

console.log(myAr.findIndex(findIdxFunc));