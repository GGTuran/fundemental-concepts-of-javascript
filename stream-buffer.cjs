const fs = require("fs");

// fs.readFile(__dirname + "/hello.txt", "utf-8", (err, data) =>{
//     if(err){
//         throw new Error("Error kha!!!");
//     }
//     fs.writeFile(__dirname + "/write-async.txt", data, (err) =>{
//         if(err){
//             throw new Error("Error");
//         }
//     }) ;
// });

// create a readable stream

const readableStream = fs.createReadStream(__dirname + "/hello.txt", "utf-8");

readableStream.on("data", (data) =>{
    // console.log(data)

    // create a writeable stream 
    const writeableStream = fs.createWriteStream(__dirname + "/hello-write.txt");
    writeableStream.write(data, (err) =>{
        if(err){
            throw new Error("Error");
        }
    }) 
})
