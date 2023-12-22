//Database
//C:\Users\Korisnik\Documents\GitHub\online_shop_ex\startbootstrap-shop-item-gh-pages\database.js

var fe;
var ioopmpo;
var odod;
//["C:/Program Files/MongoDB/Server/7.0/bin/mongod", "<", "$file"] 
//        "mongo", "<", "$file"
         //   za mongo db postavke

var MongoClient = require('mongodb').MongoClient;
// specify a connection URL with the correct ip address and the name of the 
//`database you want to create.
//var url = "mongodb://localhost:27017/mydb";
var url = "mongodb://localhost:27017/shopping";
//moj ko[iran iz mongo compass: mongodb://localhost:27017
//moje: mongodb://localhost:27017 da li je ovo ime clustera, to vidim kad se konekt
// na bazu

//ovo nis ni ne izvrsi, mozda je greska ipak kod build-a
MongoClient.connect(url, function(err, db) {
  console.log("STARTING");
  if (err) throw err;
  console.log("DATABASE CREATED!");
  db.close();
  else console.log("YOU DID IT RIGHT");
});