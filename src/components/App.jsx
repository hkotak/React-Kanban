import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { getCardsFromDB, deleteCardsFromDB } from '../db/inventory.jsx'

// REACT ROUTE COMPONENTS
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import CardForm from './CardForm';



class App extends Component {

  //~~~~~~~~~CALL FROM DATABASE.JS~~~~~~~~~//
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
    // this.addCards = this.addCards.bind(this);
    this.updateStateFromDb = this.updateStateFromDb.bind(this);
    this.deleteCardById = this.deleteCardById.bind(this);
  }

  componentDidMount() {
    this.updateStateFromDb()
  }

  // addCards = (card) => {
  //   addCardsFromDB(card)
  //     .then(cards => {
  //       if (cards) {
  //         this.setState({ cards })
  //       }
  //     })
  // }


  updateStateFromDb() {
    getCardsFromDB()
      .then(cards => {
        this.setState({ cards }, () => {
          console.log('this.state(updateState): ', this.state)
        })
      })
  }

  deleteCardById = (cardId) => {
    deleteCardsFromDB(cardId)
      .then(result => {
        this.updateStateFromDb()
      })
  }

  //~~~~~~~~~RENDER PAGE~~~~~~~~~//
  render() {
    const { cards } = this.state;
    console.log("this.state(duringRender): ", this.state)

    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <div id="logoBox"><img src={logo} className="App-logo" alt="logo" /></div>
            <div id="titleBox"><h1 id="appName">Simplicity</h1></div>
            <div className="addCard"> <Link to="/addTask">+ Add Task</Link> </div>
            <Route path="/addTask" component={CardForm} />
          </header>
        </Router>


        <section className="container">
          <div className="column">
            <h1 className="colName">IN QUEUE</h1>
            <InQueue deleteCardById={this.deleteCardById} cards={cards} />
          </div>

          <div className="column">
            <h1 className="colName">IN PROGRESS</h1>
            <InProgress deleteCardById={this.deleteCardById} cards={cards} />
          </div>

          <div className="column">
            <h1 className="colName">DONE</h1>
            <Done deleteCardById={this.deleteCardById} cards={cards} />
          </div>
        </section>

      </div>

    );
  }
}

let InQueue = (props) => {
  return props.cards.filter(card => card.Status === 'In Queue').map(card =>
    <div id="cards" className="inQueue" key={card.Card_ID}>

      <div className="f-col">
        <div className="title"> {card.Title} </div>
        <div className="priority">Priority: {card.Priority} </div>
        <div className="createdBy">Assigned by: {card.Created_By} </div>
        <div className="changes">
          <span className="edit">Edit</span>
          <span className="delete" onClick={() => props.deleteCardById(card.Card_ID)}>Delete</span>
        </div>
      </div>
      <div className="f-row">
        <div className="assignedTo"> {card.Assigned_To} </div>
      </div>

    </div>)
}

let InProgress = (props) => {
  return props.cards.filter(card => card.Status === 'In Progress').map(card =>
    <div id="cards" className="inProgress" key={card.Card_ID}>

      <div className="f-col">
        <div className="title"> {card.Title} </div>
        <div className="priority">Priority: {card.Priority} </div>
        <div className="createdBy">Assigned by: {card.Created_By} </div>
        <div className="changes">
          <span className="edit">Edit</span>
          <span className="delete" onClick={() => props.deleteCardById(card.Card_ID)}>Delete</span>
        </div>
      </div>
      <div className="f-row">
        <div className="assignedTo"> {card.Assigned_To} </div>
      </div>

    </div>)
}

let Done = (props) => {
  return props.cards.filter(card => card.Status === 'Done').map(card =>
    <div id="cards" className="done" key={card.Card_ID}>

      <div className="f-col">
        <div className="title"> {card.Title} </div>
        <div className="priority">Priority: {card.Priority} </div>
        <div className="createdBy">Assigned by: {card.Created_By} </div>
        <div className="changes">
          <span className="edit">Edit</span>
          <span className="delete" onClick={() => props.deleteCardById(card.Card_ID)}>Delete</span>
        </div>
      </div>
      <div className="f-row">
        <div className="assignedTo"> {card.Assigned_To} </div>
      </div>

    </div>)
}



export default App;



