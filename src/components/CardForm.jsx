import React, { Component } from 'react';
import { addCard } from '../actions/actions.js';
import { connect } from 'react-redux';


class CardForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      body: null,
      priority_id: 'low',
      status_id: 'in queue',
      created_by: null,
      assigned_to: null,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(addCard(this.state))
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Title:
          <input onChange={this.handleChange} name="title" type="text" />
          </label>
          <label> Body:
          <input onChange={this.handleChange} name="body" type="text" />
          </label>
          <label> Priority:
          <select onChange={this.handleChange} name="priority_id">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <label> Status:
          <select onChange={this.handleChange} name="status_id">
              <option value="in queue">In Queue</option>
              <option value="in progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </label>
          <label> Created By:
          <input onChange={this.handleChange} name="created_by" type="text" />
          </label>
          <label> Assigned To:
          <input onChange={this.handleChange} name="assigned_to" type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default connect()(CardForm)