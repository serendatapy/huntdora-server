'use strict';

const router = require('express').Router();
const controller = require('./controllers/index.js');
const { checkJwt } = require("./authz/check-jwt");

//router.get('/jobs', controller.getAll);
router.all('/*', (req, res, next) => {
  console.log('PRINTING HEADERS')
  console.log(req.headers);
  next();
})
router.get('/search/:search', controller.searchJobs);
router.get('/jobs/:job', controller.getOneJob);
router.get('/favorites/:email', controller.getUserFavorites);
router.post('/favorites/', checkJwt, controller.updateUserFavorites);
// router.get('/jobs', controller.getAll);
// router.post('/jobs', controller.post);

module.exports = {
  router,
};