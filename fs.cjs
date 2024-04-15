// read file sync

const fs = require('fs')

const output = fs.readFileSync(__dirname + "/hello.txt", "utf-8");

console.log(output);

// write file sync

const text = "Hello Error ";
fs.writeFileSync("./write.txt", text)