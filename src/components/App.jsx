import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import InQueue from './InQueue.jsx';
import InProgress from './InProgress.jsx';
import Done from './Done.jsx';
import CardForm from './CardForm';

import { connect } from 'react-redux';
import { getAllCards, deleteTask } from '../actions/actions.js';



const mapStateToProps = state => {
  return {
    propsOfCards: state
  }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: []
    }

  }


  componentDidMount() {
    // console.log('COMPONENT PROPS: ', this.props);
    // console.log('******************')
    this.props.dispatch(getAllCards());
  }

  //ADD CARD FUNCTION 
  addCard = (newTask) => {
    axios
      .post('/newTask', newTask)
      .then(serverData => {
        this.setState({ cards: serverData.data })
      })
      .catch(err => {
        console.log("ERROR APP.JS POST:", err);
      })
  }

  //DELETE CARD FUNCTION
  deleteCard = (card) => {
    console.log('APP.JS DELETE IS FIRING')
    this.props.dispatch(deleteTask(card));
  }

  //~~~~~~~~~RENDER PAGE~~~~~~~~~//
  render() {
    const { propsOfCards } = this.props;
    // console.log('RENDER PROPS: ', propsOfCards);
    return (
      <div className="App">
        <header className="App-header">
          <div id="logoBox"><img src={logo} className="App-logo" alt="logo" /></div>
          <div id="titleBox"><h1 id="appName">Simplicity Redefined</h1></div>
          {/* <div className="addCard"> <Link to="/addTask">+ Add Task</Link> </div> */}
        </header>
        <Router>
          <div>
            <div className="addCard"> <Link to="/addTask">+ Add Task</Link> </div>

            <section className="container">
              <div className="column">
                <h1 className="colName">IN QUEUE</h1>
                <div><InQueue props={propsOfCards} deleteFunc={this.deleteCard} /></div>
              </div>

              <div className="column">
                <h1 className="colName">IN PROGRESS</h1>
                <div><InProgress props={propsOfCards} deleteFunc={this.deleteCard} /></div>
              </div>

              <div className="column">
                <h1 className="colName">DONE</h1>
                <div><Done props={propsOfCards} deleteFunc={this.deleteCard} /></div>
              </div>
            </section>

            <footer className="App-footer">

            </footer>
            <Route path="/addTask" component={() => <CardForm addCard={this.addCard} />} />

          </div>
        </Router>

      </div>

    );
  }
}


export default connect(mapStateToProps)(App);





