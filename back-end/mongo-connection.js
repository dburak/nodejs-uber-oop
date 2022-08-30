const mongoose = require('mongoose');

const connectionString =
  process.env.MONGODB_CONNECTION_STRING || 'mongodb://mongodb/test';

mongoose.connect(connectionString);

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error'));
db.once('open', function () {
  console.log('we are connected to mongodb!');
});
