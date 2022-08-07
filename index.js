require('dotenv').config();
const path = require('path');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
const { transformData } = require('./utils/middlewares');
const Mobile = require('./models/mobile.model.js');
const Dump = require('./models/datadump.model.js');
const Headphone = require('./models/headphone.model.js');
const Guitar = require('./models/guitar.model.js');
const Catalog = require('./models/catalog.model.js');

const home = require('./routes/home.routes.js');
const mobile = require('./routes/mobile.routes.js');
const headphone = require('./routes/headphone.routes.js');
const guitar = require('./routes/guitar.routes.js');
mongoose
  .connect(process.env.DB_CONNECTION, {
    dbName: 'FlipKartData',
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to database ');
  })
  .catch(err => {
    console.error(`Error connecting to the database. \n${err}`);
  });

app.use('/', home);
app.use('/mobile', mobile);
app.use('/headphone', headphone);
app.use('/guitar', guitar);
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
