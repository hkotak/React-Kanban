// npm install react-router-dom

import React, { Component } from 'react';
import { addCardsFromDB } from '../db/inventory.jsx'
import '../App.css';


class CardForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Title: null,
      Body: null,
      Priority: null,
      Status: null,
      Created_By: null,
      Assigned_To: null,
    }
    this.addCards = this.addCards.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addCards = (card) => {
    addCardsFromDB(card)
      .then(cards => {
        if (cards) {
          this.setState({ cards })
        }
      })
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const Title = target.Title;
    const Body = target.Body;
    const Priority = target.Priority;
    const Status = target.Status;
    const Created_By = target.Created_By;
    const Assigned_To = target.Assigned_To;

    this.setState({
      [Title]: value,
      [Body]: value,
      [Priority]: value,
      [Status]: value,
      [Created_By]: value,
      [Assigned_To]: value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.addCards(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Title:
          <input onChange={this.handleChange} name="Title" type="text" />
          </label>
          <label> Body:
          <input onChange={this.handleChange} name="Body" type="text" />
          </label>
          <label> Priority:
          <select onChange={this.handleChange} name="Priority">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="one">High</option>
            </select>
          </label>
          <label> Status:
          <select onChange={this.handleChange} name="Status">
              <option value="In Queue">In Queue</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </label>
          <label> Created By:
          <input onChange={this.handleChange} name="Created_By" type="text" />
          </label>
          <label> Assigned To:
          <input onChange={this.handleChange} name="Assigned_To" type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default CardForm