require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
const { transformData } = require('./utils/middlewares');

const {
  homeRoutes,
  guitarRoutes,
  mobileRoutes,
  headphoneRoutes,
  signupRoutes,
  loginRoutes,
  userRoutes,
  tvRoutes,
  laptopRoutes,
} = require('./routes');
const { guitarModel, headphoneModel, mobileModel } = require('./models');
const Dump = require('./models/datadump.model');
const Tv = require('./models/tv.model');
const Laptop = require('./models/laptop.model');
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
// transformData(Dump, Laptop);

app.use('/', homeRoutes);
app.use('/mobile', mobileRoutes);
app.use('/headphone', headphoneRoutes);
app.use('/guitar', guitarRoutes);
app.use('/tv', tvRoutes);
app.use('/laptop', laptopRoutes);
app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
