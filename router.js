'use strict';

const router = require('express').Router();
const controller = require('./controllers/index.js');

//router.get('/jobs', controller.getAll);
router.get('/search/:search', controller.searchJobs);
router.get('/jobs/:job', controller.getOneJob);
// router.get('/jobs', controller.getAll);
// router.post('/jobs', controller.post);

module.exports = {
  router,
};