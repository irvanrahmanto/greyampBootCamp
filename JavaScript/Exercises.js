// Create a function that take two numbers and find the minimum  of it

// EXERCISES

function isMinimum(num1, num2){
    if(num1 > num2){
        console.log(`Num1 with value is ${num1}, is the greater than num2 with the value of ${num2}`);
    }else{
        console.log(`Num2 with value is ${num2}, is the greater than num1 with the value of ${num1}`)
    }
}

isMinimum(25,100);

// console.log();
// Number 2
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function isPow(x,n){
    let result = 1;
	
	for(var i=1; i<=n; i++) {
		result = result * x;
	}
	return result;
}

console.log(isPow(5,2));
// isPow(2,3);




