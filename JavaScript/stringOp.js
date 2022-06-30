// String operations

let hero = "Ronaldo is the best player in the world!";

hero = "Messi"

// console.log(hero.concat(" and the best player in the world! ".length));
// console.log(hero);

// hero = "Messi"
// console.log(hero);

// console.log(hero.split(" "));
// console.log(hero);

// const words = hero.split(" ");

// console.log(words.join("_"));

// console.log(hero.endsWith());

//repeat the string
function pyramid(levels){
    for(let i = levels; i > 0; i--){
        console.log("*".repeat(i));
    }
}
pyramid(5);