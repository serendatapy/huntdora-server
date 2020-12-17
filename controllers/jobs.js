'use strict';

const axios = require('axios');
var parseUrl = require('parseurl');

const API_KEY = process.env.API_KEY;
const BASEURL = process.env.BASE_URL;

const reedAPI = axios.create({
  auth: {
    username: API_KEY,
    password: ''
  },
  baseURL: BASEURL,
  responseType: "json",
})

const db = require('../models/index');

exports.getAll = async (req, res) => {
  console.log('QUERY:',parseUrl(req));
  try {
    const { data } = await reedAPI.get(`/search?${parseUrl(req).query}`);
    res.send(data);

  } catch (error) {
    console.log('Error fetching!', error);
    res.setStatus(500).send(error);
    return jobs;
  }
};

exports.getOne = async (req, res) => {
  //let jobs = [];
  let query = req.params
  console.log('REQUEST:',parseUrl(req));

  try {
    const { data } = await reedAPI.get(`${parseUrl(req).path}`);
    //should check if it receives a 404 and respond accordingly
    res.send(data);
  } catch (error) {
    console.log('Error fetching!', error);
    res.setStatus(500).send(error);
    return jobs;
  }
};

exports.getUser = async (req, res) => {
  // //let jobs = [];
  // let query = req.params
  // console.log('REQUEST:',query);
  // console.log('Databse is:',db);


  // try {
  //   const { data } = await reedAPI.get('/search?keywords=web%20developer&locationName=london&distanceFromLocation=20');
  //   /**
  //    * For each user, there needs to be just 1 saved list, so if a list exists,
  //    * that data needs to be updated
  //    * else it needs to be created
  //    */
  //   console.log('DATA:',data);
  //   const storedJobs = await db.conn.collection('jobs').insertOne(data);
  //   //if a call back is used, then await will not work (?)
  //   console.log(storedJobs);
  //   res.send(storedJobs);

  // } catch (error) {
  //   console.log('Error fetching!', error);
  //   res.sendStatus(500);
  //   return jobs;
  // }
};

exports.getFavorites = async (req, res) => {
  // //let jobs = [];
  // let query = req.params
  // console.log('REQUEST:',query);
  // console.log('Databse is:',db);


  // try {
  //   const { data } = await reedAPI.get('/search?keywords=web%20developer&locationName=london&distanceFromLocation=20');
  //   /**
  //    * For each user, there needs to be just 1 saved list, so if a list exists,
  //    * that data needs to be updated
  //    * else it needs to be created
  //    */
  //   console.log('DATA:',data);
  //   const storedJobs = await db.conn.collection('jobs').insertOne(data);
  //   //if a call back is used, then await will not work (?)
  //   console.log(storedJobs);
  //   res.send(storedJobs);

  // } catch (error) {
  //   console.log('Error fetching!', error);
  //   res.sendStatus(500);
  //   return jobs;
  // }
};