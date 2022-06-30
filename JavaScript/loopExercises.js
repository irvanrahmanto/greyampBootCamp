// Number 1
function isLoop(n){
    for(let i=1; i<n; i++){
        if((i%3==0) && (i%5==0)){
            console.log("FizzBuzz");
        }else if(i % 3 ==0){
            console.log("Fizz");
        }else if(i%5==0){
            console.log("Buzz")
        }
        console.log(i);
    }
}

// Call the function to print!
isLoop(20);

// let isLoop = (n) => {
//     for(let i=1; i<n; i++){
//         if((i%3==0) && (i%5==0)){
//             console.log("FizzBuzz");
//         }else if(i % 3 ==0){
//             console.log("Fizz");
//         }else if(i%5==0){
//             console.log("Buzz")
//         }
//         console.log(i);
//     }
// }
// isLoop(20);

// Number 2
// inp = 5;


// function isPattern(inp){
//     let string = "";
//     for(let i=1; i<inp; i++){
//         for(let x=1; x<inp; x++){
//             string += "*";
//         }
//         string += "\n";
//     }
//     console.log();
// }

// isPattern(10);

let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
    // printing star
    for (let k = 0; k < n - i; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);

