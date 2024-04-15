const EventEmitter = require('node:events');

class MyBirthday extends EventEmitter{} 

const myBirthday1 = new MyBirthday();

// creating an event listener

myBirthday1.on("birthday", () => {
    console.log("Happy Birthday!!!");
});

myBirthday1.on("birthday", (cake) =>{
    console.log(`Here is your piece of ${cake}`)
})

// emitting an event

myBirthday1.emit("birthday", "cake");