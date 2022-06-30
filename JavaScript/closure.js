// Properly close to something

export function runMyFunction(fn) {
    const myNum = 3;
    fn(myNum);
}

const printHello = function () {
    console.log("Hello");
};

const printNumberSquare = function (number) {
    console.log(number ** 2);
}

// const printHello = 400;
// const start = 0;
// const end = 10;
// "wkwkwkwkwkwk".slice(start,end);

runMyFunction(printNumberSquare);
// First-class function

const printPow = function (pow) { //FIRST CLASS FUNCTION - Creating a func thats take power
    console.log("This printpow func value of pow is:-"+ pow);
    const outputFunc = function (base) { // This is a function that take base and raise base to power and console.log it
        // pow is from parent = printpow
        // base is from outFunc = 
        console.log("Pow is:-"+ pow);
        console.log("Base is:-"+ base);
        console.log(base ** pow); // this can be done as outputFunc is enclosed to printpow func and has access to pow variable
        console.log("============================================================================");
    }
    return outputFunc; // I am just returning
}

const power2 = printPow(2); // print pow is called .. returned
console.log("____________________________________________________________________________________");
// printPow();

// power2(2);
// power2(3);
power2(4);
