/*
setTimeout(() => {
    console.log("Ronaldo is GOAT");
}, 3000);

console.log("Messi is GOAT");
*/

// To do list -> event queue
// move on
// go back to your to do list

// 20 % chance that Yogie will not wake up at 5!
// If he wakes up, Irvan: "Thank goodness"
// if not, Irvan "I knew it"

const yogieWakeUp = new Promise((fulfill, reject) => {
    const random = Math.random(); // will return a number between 0 and 1
    if (random < 0.8) { //20% chance
        // Yogie did not wake up
        fulfill("Dude I am up."); // success -> indicator which namely the success -> for storing
    } else { // 80% chance
        // Yogie wake up
        reject("Sorry buddy"); // failure -> for storing
    }
});

// const msgFromYogie =  yogieWakeUp;
// console.log(msgFromYogie);
// console.log(typeof yogieWakeUp);
// console.log(typeof msgFromYogie);

async function respondToYogie(){
    try{
        const msgFromYogie = await yogieWakeUp;
        console.log(msgFromYogie)
    } catch(err){
        console.log(err)
    }
}

respondToYogie();
console.log("Done. We can start our trip!");
// console.log("Brushing my teeth!");

// yogieWakeUp.then((result) => {
//     if (result) {
//         console.log("Thank goodness!");
//     } else {
//         console.log("I knew it...");
//     }
// });

yogieWakeUp
    .then((message) => { // is for receive
        console.log("Message Received: ", message);
        console.log("Thank godness");

        // return new Promise();

    })
    .catch((errorMsg) => { // is for reject
        console.log("Message Received: ", errorMsg);
        console.log("I knew it");

        // return new Promise();

    });
    // .catch((errorMsg) => {
    //     console.log("Message Received: ", errorMsg);
    //     console.log("I knew it");

    //     // return new Promise();

    // }).then((message) => {
    //     console.log("Message Received: ", message);
    //     console.log("Thank godness")

    //     // return new Promise();

    // })
    // .then()
    // .then()
    // .then()
    // .catch()
    // .then()
    // .catch()