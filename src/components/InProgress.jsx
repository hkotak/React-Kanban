import React from 'react';
import Card from './Cards.jsx'
import { connect } from 'react-redux';

const InProgress = (props) => {
  return (
    <>
      {/* {props.cards.filter(card => card.status === 'in progress').map(card => */}
      {props.cards.map(card =>
        <Card
          key={card.id}
          title={card.title}
        // priority_id={card.priority_id}
        // created_by={card.created_by}
        />)}
    </>
  )

  // return props.cards.filter(card => card.status === 'in progress').map(card =>
  //   <div id="cards" className="inProgress" key={card.Card_ID}>
  //     <div className="f-col">
  //       <div className="title"> {card.Title} </div>
  //       <div className="priority">Priority: {card.Priority} </div>
  //       <div className="createdBy">Assigned by: {card.Created_By} </div>
  //       <div className="changes">
  //         <span className="edit">Edit</span>
  //         <span className="delete" onClick={() => props.deleteCardById(card.Card_ID)}>Delete</span>
  //       </div>
  //     </div>
  //     <div className="f-row">
  //       <div className="assignedTo"> {card.Assigned_To} </div>
  //     </div>

  //   </div>)
}

export default connect(InProgress);
