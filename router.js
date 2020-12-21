'use strict';

const router = require('express').Router();
const controller = require('./controllers/index.js');
const { checkJwt } = require("./authz/check-jwt");

router.get('/search/:search', controller.searchJobs);
router.get('/jobs/:job', controller.getOneJob);
router.get('/favorites/:email', checkJwt, controller.getUserFavorites);
router.post('/favorites/', checkJwt, controller.updateUserFavorites);

module.exports = {
  router,
};