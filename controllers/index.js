'use strict';

var parseUrl = require('parseurl');
const { reedAPI } = require('./apiService')
const users = require('../models/users.js');

exports.getUserFavorites = async (req, res) => {
  try {
    let { email } = req.params
    const userFav = await users.getUserFavorites(email);
    if(userFav) res.json(userFav.favorites);
    else return new Error('Error fetching from Database');
  } catch (error) {
    res.status(500).send('Failed to get Favorites');
  }
};

exports.updateUserFavorites = async (req, res) => {
  try {
    const userFav = await users.updateUserFavorites(req.body.email, req.body.favorites)
    if(userFav.result.ok) res.send('Content Updated Successfully');
    else return new Error('Error updating Database');
  } catch (error) {
    res.status(500).send('Failed to update Favorites');
  }
};


/************************
 * Proxy Functionality - connection with API
 ************************/

exports.searchJobs = async (req, res) => {
  try {
    const { data } = await reedAPI.get(`/search?${parseUrl(req).query}`);
    res.send(data);
  } catch (error) {
    res.status(500).send('Error communicating with API');
  }
};

exports.getOneJob = async (req, res) => {
  try {
    const { data } = await reedAPI.get(`${parseUrl(req).path}`);
    res.send(data);
  } catch (error) {
    res.status(500).send('Error communicating with API');
  }
};