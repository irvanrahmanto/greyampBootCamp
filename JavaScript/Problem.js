
export const starters = [
        {
            name: "Bulbasaur",
            level: 10,
        },
        {
            name: "Charmader",
            level: 8,
        },
        {
            name: "Squirtle",
            level: 12,
    }
]

export let sortByLevel = (x,y) => {
    return x.level - y.level
}


// Create a file called util.js
// in util.js export a function called 'sort by level'
// sort the 'starter' arrays in the ascending order of their level