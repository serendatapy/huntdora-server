'use strict';



var parseUrl = require('parseurl');
const reedAPI = require('./apiService')
/************************
 * Proxy Functionality
 ************************/

exports.searchJobs = async (req, res) => {
  console.log('QUERY:',parseUrl(req));
  try {
    const { data } = await reedAPI.get(`/search?${parseUrl(req).query}`);
    res.send(data);

  } catch (error) {
    console.log('Error fetching!', error);
    res.send(error);
  }
};

exports.getOneJob = async (req, res) => {

  try {
    const { data } = await reedAPI.get(`${parseUrl(req).path}`);
    //should check if it receives a 404 and respond accordingly
    res.send(data);
  } catch (error) {
    console.log('Error fetching!', error);
    res.send(error);
  }
};