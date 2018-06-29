const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
// const url = 'mongodb://lakhveer:lakhveer%401@ds117719.mlab.com:17719/inventory';
const url ='mongodb://lakhveer:lakhveer%401@ds263520.mlab.com:63520/fbnews';
// //connection
//


router.get('')
// router.get('/users',(req,res)=>{
//   console.log("user request")
// MongoClient.connect(url, (err, db) => {
//   if (err) {
//     return console.log(err);
//   }
//   db.collection('angularapp').insertOne(
//       {
//         title: 'Hello MongoDB',
//         text: 'Hopefully this works!'
//       },
//       function (err, res) {
//         if (err) {
//           db.close();
//           return console.log(err);
//         }
//         // Success
//         db.close();
//       }
//     )
//   });
// });
//
router.get('/status',(req,res)=>{
  console.log("user request")
//  res.send("user 11 request handled");
  MongoClient.connect(url, function(err, client) {
      // assert.equal(null, err);
      console.log("Connected correctly to server");

      const db = client.db('fbnews');
      //const collection = db.collection('users');
      // Find some documents
      db.collection('news').insertOne(({_id:10,item:"data"}),function(err,res){
        if(err)
        console.log("error while inserting");
        console.log("added");
      })
  });
 });
//
 module.exports = router;
