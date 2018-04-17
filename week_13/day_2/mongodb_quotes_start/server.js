const express = require('express');
const parser = require('body-parser');
const server = express();

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;       // This is for our object _id

// connect to mongo database server: protocol://IPaddress:PORT
MongoClient.connect("mongodb://localhost:27017", function(err, client){
  if(err){
    console.log(err);
    return;
  }
  // 'client' is our connection to db server, "star_wars" is our db:
  const db = client.db("star_wars");

  console.log("Connected to database");

  // If we get a post request:
  server.post("/api/quotes", function(req, res){
    const quotesCollection = db.collection("quotes");   // create/get quotes collection in db
    const quoteToSave = req.body;

    // Save the quote in our quotes collection in our db:
    quotesCollection.save(quoteToSave, function(err, result){
      if(err){
        console.log(err);
        res.status(500);    // send an error number as a response to browser
        res.send();
      }

      console.log("Saved to DB!");
      res.status(201);      // 201 code means request has been created
      res.json(quoteToSave);     // logs the details out too..
    });
  });

  // If we get a get request:
  server.get("/api/quotes", function(req, res){
    const quotesCollection = db.collection("quotes");

    quotesCollection.find().toArray(function(err, allQuotes){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.json(allQuotes);  // logs all quotes..
    });
  });

  // If we get a delete request:
  server.delete("/api/quotes", function(req, res){
    const quotesCollection = db.collection("quotes");
    const filterObject = {};

    quotesCollection.deleteMany(filterObject,function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.status(204);
      res.send();
    });
  });

  // If we get an update (put) request:
  server.put("/api/quotes/:id", function(req, res){
    const quotesCollection = db.collection("quotes");
    const objectID = ObjectID(req.params.id);     // converts string :id to mongo object ID
    const filterObject = { _id: objectID };
    const updatedData = req.body;

    quotesCollection.update(filterObject, updatedData, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.status(204);
      res.send();
    });

  });

  // Only fire up our web server if we can connect to db ok:
  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});
