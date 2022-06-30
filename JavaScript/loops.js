// For loop
for (let i=0; i<10; i++){
    if(i == 5){
        continue;
    } else if (i == 8){
        break;
    }
    console.log(`For loop index ${i}`);
}

// While loop
let i=10;
while(i>0){
    console.log(i);
    i--;
}

// Do While
let y = 0;
do {
    console.log("This do while -> ", "using js : "+ y);
    y++;
} while(y<5)