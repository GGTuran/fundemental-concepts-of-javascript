const http = require("node:http");
const url = require("url");

const posts = [
    {
      "id" : 1,
      "name": "Alice",
      "age": 25,
      "email": "alice@example.com"
    },
    {
        "id" : 2, 
      "name": "Bob",
      "age": 30,
      "email": "bob@example.com"
    },
    {
        "id" : 3,
      "name": "Charlie",
      "age": 35,
      "email": "charlie@example.com"
    }
  ]

const server = http.createServer( (req, res) =>{
    console.log(req.url)
    // console.log(res)
    const parsedURL =  new URL(req.url , `http://${req.headers.host}`)

    const pathName = parsedURL.pathname

    if(pathName === "/home" && req.method === "GET"){
        res.end("Home sweet home")
    } else if (pathName === "/posts" && req.method === "GET"){

        const query = parsedURL.searchParams;
        const postId = query.get("id");
        const expectedPost = posts.find((post) => post.id == postId);

        res.writeHead(200 , {
            "Content-type" : "application/json",
        });
        res.end(JSON.stringify(expectedPost))
    }



    // res.end("Hello from backend");
}) ;

server.listen(5000, "127.0.0.1", () =>{
    console.log("Server should run");
})