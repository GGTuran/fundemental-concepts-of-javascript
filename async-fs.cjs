const fs = require("fs");

fs.readFile(__dirname + "/hello.txt", "utf-8", (err, data) =>{
    if(err){
        throw new Error("Error kha!!!");
    }
    console.log(data)
});

fs.writeFile(__dirname + "/write-async.txt", "HI Error!!", (err) =>{
    if(err){
        throw new Error("Error");
    }
}) ;