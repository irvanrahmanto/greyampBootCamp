/* 

create a function which validate whether the input email id is valid or not 
    ex - 1 
        Input. - sourabh@gmail.com
        output - true
    ex - input - Arif@gmail
        output - false
    ex - input - Arif#gmail.com
        output - false


*/

// Alternatif 1

function isMailCheck(inp) {
    let rgx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(rgx.test(inp)){
        console.log("True - Your email is valid!");
        return true;
    }else{
        console.log("False - Your email is not valid!");
        return false;
    }
}

isMailCheck("irvan@mail.com"); 

// Alternatif 2

function checkingEmail(inp){
    if(inp.includes("@") && (inp.includes(".com"))){
        console.log(`${inp} is valid mail! True!`);
    }else{
        console.log(`${inp} is not valid mail! False!`);
    }
}

checkingEmail("irvan@mail.com");
checkingEmail("irvan.com");
checkingEmail("@mail.com");