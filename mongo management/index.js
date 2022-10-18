//comand line for installing mongodb on folder:
//npm install mongodb
//import module
//var mongo = require('mongodb');

// create a connection

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydbs";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

//create collection
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydbs");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

//insert one document
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydbs");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

//insert many documents (rows)
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url,function(err,db){
//     if(err) throw err;
//     var dbo=db.db("mydbs");
//     var myobj=[
//         { name: 'John', address: 'Highway 71'},
//         { name: 'Peter', address: 'Lowstreet 4'},
//         { name: 'Amy', address: 'Apple st 652'},
//         { name: 'Hannah', address: 'Mountain 21'},
//         { name: 'Michael', address: 'Valley 345'},
//         { name: 'Sandy', address: 'Ocean blvd 2'},
//         { name: 'Betty', address: 'Green Grass 1'},
//         { name: 'Richard', address: 'Sky st 331'},
//         { name: 'Susan', address: 'One way 98'},
//         { name: 'Vicky', address: 'Yellow Garden 2'},
//         { name: 'Ben', address: 'Park Lane 38'},
//         { name: 'William', address: 'Central st 954'},
//         { name: 'Chuck', address: 'Main Road 989'},
//         { name: 'Viola', address: 'Sideway 1633'}
//     ];
//   dbo.collection("customers").insertMany(myobj,function(err,res){
//     if(err) throw err;
//     console.log("number of documents inserted: "+res.insertedCount);
//     db.close();
//   })  
// })

//Note: If you try to insert documents in a 
//collection that do not exist, 
//MongoDB will create the collection automatically.

//insert three records in products

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydbs");
//   var myobj = [
//     { _id: 154, name: 'Chocolate Heaven'},
//     { _id: 155, name: 'Tasty Lemon'},
//     { _id: 156, name: 'Vanilla Dream'}
//   ];
//   dbo.collection("products").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     db.close();
//   });
// });

//find (similar to select in mysql) in 
//the first document in customers collection using findone query

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydbs");
//   dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });

// find all data using find() same as select * from

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydbs");
//   dbo.collection("customers").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

//find some (find projection), specify the name using binary 1s and 0s

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydbs");
//   dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

//same example but address is 0

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydbs");
//   dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


//same example but id is 0 and shows name.

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydbs");
//   dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

//find but no id
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydbs");
//   dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
