const isPromise = new Promise((fulfill, reject)=>{
    setTimeout(() => {
        fulfill("Success")
    }, 5000);
});

isPromise
    .then((myMsg)=>{
        console.log("Message Received: ", myMsg);
        console.log("Success, thank you!");
    })

    .catch((errMsg) => {
        console.log("Message Recived ", errMsg);
        // console.log("Failure!");
    })