// It can be using const, var, or let also when we want to use the variable for create new object in js

// STRING ARE IMMUTABLE! it means its value cannot be change, alias ga bakal bisa diganti, kalo digantipun, value yg lama nya tetep bakalan ada, disimpen di memory nya
// Object are mutable

// if we want to re-assign the value inside the bracket in object, which is the key & value, we the object type must be let, if we use const, if the opposite
const ironMan = {
    number: 1,
    level: 5,
    type: 'Iron Suite',
    secondaryType: 'poison',
    moves: [{
                name: "Stranger Things",
                type: "grass"
            },
            {
                name: "Prison Break",
                type: "People"
            }],
    levelUp(countNum) {
        this.level += countNum;
    }
};
// change one of value from the object
// ironMan.moves.secondMove = "Leaf storm!";

// ironMan = {}

// Print all object value
// console.log(ironMan);

// print spesific value
// console.log(`Ironman has type ${ironMan.type} and also ${ironMan.secondaryType} and also have move that is ${ironMan.moves.firstMove} & ${ironMan.moves.secondMove} also have ${ironMan.moves.othersObj.anotherKey}`);

// ironMan.levelUp(3);
// console.log(ironMan.level);

// in js, array is collection of any type of datatype, it can be string, int, bool , etc

// {Property: value} <- object literal
// [ elements ], <- array literal

const charmander = {
    trainer: "Blue"
}

const squirtle = {}

const trainer = "Red";

export const starters = [
    ironMan, 
    charmander, 
    ["HALO","IRVAN"], 
    trainer, 
    true, 
    false, 
    NaN, 
    ["Irvan","Naufali","Rahmanto"]
];

// const parts = "somestring".split("s");

// console.log(ironMan.moves[0].name);
// console.log(ironMan.moves.map(move => move.name))

console.log(starters[2].length);