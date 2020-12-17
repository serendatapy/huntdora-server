
const axios = require('axios');


const API_KEY = process.env.API_KEY;
const BASEURL = process.env.BASE_URL;

exports.reedAPI = axios.create({
  auth: {
    username: API_KEY,
    password: ''
  },
  baseURL: BASEURL,
  responseType: "json",
})