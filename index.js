require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const clientOrigins = process.env.CLIENT_ORIGIN_URL;
const cors = require('cors');
const {router} = require('./router');
const connectDB = require('./models/');

app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(router);

(async () => {
  await connectDB;
  app.listen(PORT, ()=> {
    console.log(`Server Online...`); // eslint-disable-line no-console
  });
})();
