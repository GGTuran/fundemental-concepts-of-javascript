const http = require("node:http");

const server = http.createServer( (req, res) =>{
    // console.log(req)
    // console.log(res)
    res.end("Hello from backend");
}) ;

server.listen(5000, "127.0.0.1", () =>{
    console.log("Server should run");
})