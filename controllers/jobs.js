'use strict';

//const jobs = require('../models/jobs.js');

exports.getAll = async (req, res) => {
  try {
    //const allJobs = await jobs.find();
    //res.send(evs);
    console.log('Path Called')
  } catch (e) {
    res.sendStatus(500)
    // Further handle your error on the back-end
  }
};