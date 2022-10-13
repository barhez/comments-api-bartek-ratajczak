import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes/index';

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = require("./models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// Importing routes from dir ./routes
app.use('/', routes);
console.log(`Listening: http://localhost:${process.env.APP_PORT || '3000'}/`);

module.exports = app;