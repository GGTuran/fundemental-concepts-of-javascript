const express = require('express');
const { MongoClient, ServerApiVersion, } = require('mongodb');

// routes
const postRouter = require("./src/routes/post.route.cjs")


const uri = "mongodb+srv://:@cluster0.vddbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// creating an express instance
const app = express();

app.use(express.json());

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();

    //   create db collections
     const database = client.db('postDB'); 
   
    app.get('/home', (req,res) =>{
      res.sendFile(__dirname + "/index.html")
  });

    // app.post("/create-post" ,)
    app.use("/posts", postRouter(database));



      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //   await client.close();
    }
  }
  run().catch(console.dir);













app.listen(5000, () =>{
    console.log("Server is running on port 5000 ")
})