const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');
const Cards = require('./db/models/cards.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..build')));

app.get('/', (req, res) => {
  res.json('sanity check');
})

app.get('/cards', (req, res) => {
  Cards
    .fetchAll()
    .then(cards => {
      res.json(cards.serialize())
    })
    .catch(err => {
      console.log('error', err)
    })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})