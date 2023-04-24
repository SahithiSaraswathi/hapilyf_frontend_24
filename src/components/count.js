var MongoClient = require('mongodb').MongoClient;
var dbName = "test";
var port = "27017";
var host = "localhost";



function getNumOfUsers ( host, port, dbName) {
    MongoClient.connect("mongodb://" + host + ":" + port + "/" + dbName, function (error, db){
        if(error) return console.log(error);
        //console.log("connected");
        var dbo = db.db(dbName);
        dbo.collection("users").count({}, function(error, numOfDocs){
            if(error) return console.log(error);
            console.log("users count :"+numOfDocs);
            db.close();
            // callback(null, numOfDocs);
        });
    }); 
} 
function getNumOfDoctors ( host, port, dbName) {
    MongoClient.connect("mongodb://" + host + ":" + port + "/" + dbName, function (error, db){
        if(error) return console.log(error);
        //console.log("connected");
        var dbo = db.db(dbName);
        dbo.collection("doctors").count({}, function(error, numOfDocs){
            if(error) return console.log(error);
            console.log("doctors count :"+numOfDocs);
            // const dc =  numOfDocs ;
             //setDc(numOfDocs)
            db.close();
            // callback(null, numOfDocs);
        });
    }); 
} 
function getNumOfAppointments ( host, port, dbName) {
    MongoClient.connect("mongodb://" + host + ":" + port + "/" + dbName, function (error, db){
        if(error) return console.log(error);
        var dbo = db.db(dbName);
        dbo.collection("appointments").count({}, function(error, numOfDocs){
            if(error) return console.log(error);
            console.log("appointments count :"+numOfDocs);
            //const ac =  numOfDocs ;
            //setAc(numOfDocs)
            db.close();
            // callback(null, numOfDocs);
        });
    }); 
} 
getNumOfUsers ("localhost", "27017", "test");
 getNumOfDoctors ("localhost", "27017", "test");
 getNumOfAppointments ("localhost", "27017", "test");


//  const queryLogCollection = db.collection("users");
// const slowQueries =queryLogCollection.find({ execution_time: { $gt: 1 } }).toArray();
// console.log(slowQueries);

//  module.exports = ucount 
//  return (
//     <>
//     <Dashboard/>
//     </>
// )
//}
// console.log("ee is " + ee)
