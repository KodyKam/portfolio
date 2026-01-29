// server.js
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import app from './server/express.js';
import config from './server/config/config.js';

// Optional home route
app.get('/', (req, res) => {
  res.send('API running...');
});

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {})
  .then(() => {
    console.log("Mongo DB name:", mongoose.connection.name);
    console.log(`Connected to the database! ${new Date().toLocaleString()}`);
  })
  .catch((err) => {
    console.error(`Unable to connect to database: ${config.mongoUri}`, err);
    process.exit(1);
  });

// Start server
app.listen(config.port, (err) => {
  if (err) console.error(err);
  else console.info(`Server started on port ${config.port} at ${new Date().toLocaleString()}`);
});