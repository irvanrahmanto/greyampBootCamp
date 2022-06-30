let age = 6;

// First Tips
if(age > 21){
    console.log("I can Drive!");
}else if(age> 25){
    console.log("I can Drive with caution!");
}else{
    console.log("I can't drive!");
}

// Second Tips

let canIDrive = (age>21 && age>85) ? "I can Drive" : age>85 ? "I can Drive with caution!" : "i can't drive!";
console.log(canIDrive);