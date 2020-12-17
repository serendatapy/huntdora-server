'use strict';

var parseUrl = require('parseurl');
const {reedAPI} = require('./apiService')
const users = require('../models/users.js');

/**
 * This protected route takes email from the token, and
 * returns favorite jobs array {[]}
 */
exports.getUserFavorites = async (req, res) => {
  console.log('req:',req.params);  //get user id
  try {
    let email = 'alex@alex.com'; //for demo only
    const userFav = await users.getUserFavorites(email) // get back user with favorites
    res.json(userFav); //send back user + favorites
  } catch (error) {
    console.log('Error', error);
    res.send(error);
  }
};

exports.updateUserFavorites = async (req, res) => {
  console.log('req:',req.params, req.body);  //get user id
  try {
    const userFav = await users.updateUserFavorites(req.body.email, req.body.favorites) // get back user with favorites
    res.json(userFav); //send back user + favorites
  } catch (error) {
    console.log('Error', error);
    res.send(error);
  }
};


/************************
 * Proxy Functionality
 ************************/

exports.searchJobs = async (req, res) => {
  console.log(reedAPI)
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