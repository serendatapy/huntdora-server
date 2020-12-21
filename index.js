require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT;
const clientOrigins = process.env.CLIENT_ORIGIN_URL;
const cors = require('cors');
const {router} = require('./router');
const connectDB = require('./models/');
const morgan = require('morgan')

app.use(cors({ origin: clientOrigins }));
app.use(morgan('dev'))
app.use(express.json());
app.use(router);

(async () => {
  await connectDB;
  app.listen(PORT, ()=> {
    console.log(`Express Server listening On http://localhost:${PORT}`); // eslint-disable-line no-console
  });
})();
