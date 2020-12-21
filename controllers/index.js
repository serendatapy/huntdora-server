'use strict';

var parseUrl = require('parseurl');
const { reedAPI } = require('./apiService')
const users = require('../models/users.js');

exports.getUserFavorites = async (req, res) => {
  try {
    let { email } = req.params
    const userFav = await users.getUserFavorites(email)
    res.json(userFav);
  } catch (error) {
    console.log('Error', error);
    res.send(error);
  }
};

exports.updateUserFavorites = async (req, res) => {
  try {
    const userFav = await users.updateUserFavorites(req.body.email, req.body.favorites)
    res.json(userFav);
  } catch (error) {
    console.log('Error', error);
    res.send(error);
  }
};


/************************
 * Proxy Functionality - connection with API
 ************************/

exports.searchJobs = async (req, res) => {
  console.log('QUERY:', parseUrl(req));
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
    res.send(data);
  } catch (error) {
    console.log('Error fetching!', error);
    res.send(error);
  }
};