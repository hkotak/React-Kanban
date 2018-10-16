import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import { getCardsFromDB, deleteCardsFromDB } from '../db/inventory.jsx'

import InQueue from './InQueue.jsx';
import InProgress from './InProgress.jsx';
import Done from './Done.jsx';
import CardForm from './CardForm';

import { getAllCards } from '../actions/actions.js';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getAllCards());
  }

  //~~~~~~~~~RENDER PAGE~~~~~~~~~//
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div id="logoBox"><img src={logo} className="App-logo" alt="logo" /></div>
            <div id="titleBox"><h1 id="appName">Simplicity</h1></div>
            <div className="addCard"> <Link to="/addTask">+ Add Task</Link> </div>
            <Route path="/addTask" component={CardForm} />
          </header>

          <section className="container">
            <div className="column">
              <h1 className="colName">IN QUEUE</h1>
              <Route component={() => <InQueue />} />
            </div>

            <div className="column">
              <h1 className="colName">IN PROGRESS</h1>
              <Route component={() => <InProgress />} />
            </div>

            <div className="column">
              <h1 className="colName">DONE</h1>
              <Route component={() => <Done />} />
            </div>
          </section>
        </div>
      </Router>

    );
  }
}


export default connect()(App);




//THESE FUNCTIONS SHOULD NOW BE IMPORTED

// let InQueue = (props) => {
//   return props.cards.filter(card => card.Status === 'In Queue').map(card =>
//     <div id="cards" className="inQueue" key={card.Card_ID}>

//       <div className="f-col">
//         <div className="title"> {card.Title} </div>
//         <div className="priority">Priority: {card.Priority} </div>
//         <div className="createdBy">Assigned by: {card.Created_By} </div>
//         <div className="changes">
//           <span className="edit">Edit</span>
//           <span className="delete" onClick={() => props.deleteCardById(card.Card_ID)}>Delete</span>
//         </div>
//       </div>
//       <div className="f-row">
//         <div className="assignedTo"> {card.Assigned_To} </div>
//       </div>

//     </div>)
// }

// let InProgress = (props) => {
//   return props.cards.filter(card => card.Status === 'In Progress').map(card =>
//     <div id="cards" className="inProgress" key={card.Card_ID}>

//       <div className="f-col">
//         <div className="title"> {card.Title} </div>
//         <div className="priority">Priority: {card.Priority} </div>
//         <div className="createdBy">Assigned by: {card.Created_By} </div>
//         <div className="changes">
//           <span className="edit">Edit</span>
//           <span className="delete" onClick={() => props.deleteCardById(card.Card_ID)}>Delete</span>
//         </div>
//       </div>
//       <div className="f-row">
//         <div className="assignedTo"> {card.Assigned_To} </div>
//       </div>

//     </div>)
// }

// let Done = (props) => {
//   return props.cards.filter(card => card.Status === 'Done').map(card =>
//     <div id="cards" className="done" key={card.Card_ID}>

//       <div className="f-col">
//         <div className="title"> {card.Title} </div>
//         <div className="priority">Priority: {card.Priority} </div>
//         <div className="createdBy">Assigned by: {card.Created_By} </div>
//         <div className="changes">
//           <span className="edit">Edit</span>
//           <span className="delete" onClick={() => props.deleteCardById(card.Card_ID)}>Delete</span>
//         </div>
//       </div>
//       <div className="f-row">
//         <div className="assignedTo"> {card.Assigned_To} </div>
//       </div>

//     </div>)
// }





