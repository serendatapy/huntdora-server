'use strict';

const axios = require('axios');

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
  //let jobs = [];
  console.log('Databse is:',db)

  try {
    const { data } = await reedAPI.get('/search?keywords=web%20developer&locationName=london&distanceFromLocation=20');
    //console.log("Fetched", data);
    //let dataParsed = JSON.parse(data);

    const storedJobs = await db.conn.collection('jobs').insertOne(data);

    console.log(storedJobs);



    // if (data.results) {
    //   jobs = data.results.map((job) => Job.parse(job))
    // } else {
    //   jobs = Job.parse(data);
    // }
    // console.log("Data has been transformed!", jobs)
    // return jobs;
  } catch (error) {
    console.log('Error fetching!', error);
    return jobs;
  }
};