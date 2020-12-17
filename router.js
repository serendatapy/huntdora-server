'use strict';

const router = require('express').Router();
const controller = require('./controllers/jobs.js');

router.get('/jobs', controller.getAll);
// router.get('/jobs', controller.getAll);
// router.post('/jobs', controller.post);

module.exports = {
  router,
};