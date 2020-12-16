'use strict';
const MongoClient = require('mongodb').MongoClient;
const conf = require('../config/config.js');
const db = {};

db.MongoClient = new MongoClient(conf.dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });
db.MongoClient.connect(err => {
  if (err) throw new Error(err);
  db.conn = db.MongoClient.db(conf.dbName)
  console.log(`Connected to the database '${conf.dbName}'`);
  // perform actions on the collection object
  //client.close();
});



db.MongoClient = new MongoClient(conf.dbUrl);



db.MongoClient.connect((err) => {
  if (err) throw new Error(err);
  db.conn = db.MongoClient.db(conf.dbName)
  console.log(`Connected to the database '${conf.dbName}'`);
});

module.exports = db;