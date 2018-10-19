import React from 'react';
// import Card from './Cards.jsx'

const InQueue = (props) => {
  return props.props.filter(card => card.status_id === 'in queue').map(card =>
    <div id="cards" className="inQueue" key={card.id}>

      <div className="f-col">
        <div className="title"> {card.title} </div>
        <div className="priority">Priority: {card.priority_id} </div>
        <div className="createdBy">Assigned by: {card.created_by} </div>
        <div className="changes">
          <span className="edit">Edit</span>
          <span className="delete" onClick={() => props.deleteFunc(card.id)}>Delete</span>
        </div>
      </div>
      <div className="f-row">
        <div className="assignedTo"> {card.assigned_to} </div>
      </div>

    </div>)
}
export default InQueue;