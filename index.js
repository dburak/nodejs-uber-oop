const express = require('express');
const { passengerDatabase } = require('./database');
const flatted = require('flatted');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/passengers', async (req, res) => {
  const passengers = await passengerDatabase.load();
  // res.send(flatted.stringify(passengers));
  res.render('passengers', { passengers });
});

app.post('/passengers', async (req, res) => {
  const passenger = await passengerDatabase.insert(req.body);

  res.send(passenger);
});

app.delete('/passengers/:index', async (req, res) => {
  await passengerDatabase.remove('index', req.params.index);

  res.send('OK');
});

app.get('/passengers/:passengerId', async (req, res) => {
  const passenger = await passengerDatabase.find(req.params.passengerId);
  res.render('passenger', { passenger });
});

app.listen(3000, () => {
  console.log('started listening on 3000');
});
