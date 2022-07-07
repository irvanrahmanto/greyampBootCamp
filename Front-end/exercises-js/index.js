let sumNum = function(num1, num2){
    let res = 3 * (num1+num2)
    if(num1 == num2){
        console.log(`The result is: ${res}`)
    }else{
        console.log(`Different value: ${num1+num2}`);
    }
}

// Print
sumNum(2,5);