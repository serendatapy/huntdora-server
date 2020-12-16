'use strict';

const MongoClient = require('mongodb').MongoClient;
const dbName = process.env.DB_NAME;
const dbUrl = process.env.DB_URL;

const db = {};

db.MongoClient = new MongoClient(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });
db.MongoClient.connect(err => {
  if (err) throw new Error(err);
  db.conn = db.MongoClient.db(dbName)
  console.log(`Connected to the database '${dbName}'`);
  // perform actions on the collection object
  //client.close();
});



db.MongoClient = new MongoClient(dbUrl);



db.MongoClient.connect((err) => {
  if (err) throw new Error(err);
  db.conn = db.MongoClient.db(dbName)
  console.log(`Connected to the database '${dbName}'`);
});

module.exports = db;