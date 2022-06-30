/* 

Question

1. Given a string with a schema "my name is alan" create a function that will output the as "hi alan"

ex - 1 
input - my name is alan
output - hi alan

ex -2 

input mu name is Shafira
output - hi shafira

*/

// Alternatif 1

// let x = "My name is Irvan";

function isName(name){
        console.log(name.replace("My name is ", "Hi "));
}

isName("My name is Irvan");

// Alternatif 2

function isNameCheck(name){
    if(name.includes("My name")){
        let name1 = name.split("My name is");
        console.log(`Hi ${name1[1]}`); 
    }else{
        console.log("Wrong wrong name!");
    }
}

isNameCheck("My name is Irvan");