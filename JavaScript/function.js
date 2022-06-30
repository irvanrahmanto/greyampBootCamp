// Function EXPRESSION
// logHello();
function logHello(){
    let a = "Irvan "
    let b = "Rahmanto"
    console.log(`The name is ${a+b}`);
}

// Call the function, without using console.log!
logHello();

// Function DECLARATION
// How to assign function into variable
// varFunct();
let varFunct = function(){
    console.log("Bye!!");
}

varFunct();

// Other function defined
let anyFunc = () => {
    let a = "This is "
    let b = "Function"
    console.log(`result is = ${a+b}`);
}
anyFunc();

console.log();

const exp = 6;
let mySal;

if(exp > 5){
    mySal = function() {
        console.log("give 500rb");
    }
}else{
    mySal = function(){
        console.log("give 1000000");
    }
}
mySal();