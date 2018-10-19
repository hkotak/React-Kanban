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

//GET - gets all the cards stored into the database
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

//POST - will pose new cards created by the user
app.post('/addTask', (req, res) => {
  console.log('WHATTTT', req.body)

  const newCard = {
    title: req.body.title,
    body: req.body.body,
    priority_id: req.body.priority_id,
    status_id: req.body.status_id,
    created_by: req.body.created_by,
    assigned_to: req.body.assigned_to
  }

  Cards
    .forge(newCard)
    .save()
    .then(() => {
      return Cards.fetchAll()
    })
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