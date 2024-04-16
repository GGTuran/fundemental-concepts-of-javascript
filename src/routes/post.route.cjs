const express = require('express');
const router = express.Router();

const postRouter = (database) =>{
  const postCollection = database.collection('posts');
  router.post("/create-post",  async(req,res) =>{
    // console.log(req.body)
    const postData = req.body;
    const result = await postCollection.insertOne(postData);
    res.json({
      message: "Post Created",
    //   data: result,
    });
  })

  return router
}




  module.exports = postRouter;