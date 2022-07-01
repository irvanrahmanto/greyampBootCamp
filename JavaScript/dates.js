// const date = new Date();

// console.log("date :-> ", date); // ISO FORMAT

// let date = new Date(0);
// console.log("date 1 : ", date);

// date = new Date(-1);
// console.log("date 2 : ", date);

// const d = new Date(2018, 11);
const day = new Date("December 13, 2012 10:33:00");
const d = new Date();
console.log(day);
console.log("My time zone : ", d.toString());
console.log("UTC : ", d.toUTCString());
console.log("ISO : ", d.toISOString());

// getFullYear()

console.log("Full year is ", d.getFullYear());

// getMonth()
console.log("Month ",d.getMonth());

// getDate()
console.log("Date ", d.getDate());

// getHours() -> 0-23
// getSecond() -> get the minute (0-59)
// getMiliseconds() -> get the millisecond (0-999)

// console.log(d.getTime());

console.log("day : ", d.getDay());

console.log(Date.now())

