// Function take value of n, n will be number, you have to print Monday until Sunday
// if n =1, it should be print monday
// if n=2 tuesday, and so on
// if n > 7 -> not a valid number

function isDayofWeek(n) {
    switch (n) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Not a valid number!");
    }
}

isDayofWeek(9);

n = 4;
switch (n) {
    case 5:
    case 15:
    case 78:
        console.log("Looks like 5");
        break;
    case 3:
    case 9:
    case 18:
        console.log("Looks like 3");
        break;
    case 2:
    case 8:
    case 12:
        console.log("Something ");
    
}