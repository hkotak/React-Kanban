// import React from 'react';
// // import Card from './Cards.jsx'

// let InQueue = (props) => {
//   return props.cards.filter(card => card.status === 'in queue').map(card =>
//     <div id="cards" className="inQueue" key={card.id}>

//       <div className="f-col">
//         <div className="title"> {card.Title} </div>
//         <div className="priority_id">Priority: {card.Priority} </div>
//         <div className="created_by">Assigned by: {card.Created_By} </div>
//         <div className="changes">
//           <span className="edit">Edit</span>
//           <span className="delete" onClick={() => props.deleteCardById(card.Card_ID)}>Delete</span>
//         </div>
//       </div>
//       <div className="f-row">
//         <div className="assigned_to"> {card.Assigned_To} </div>
//       </div>

//     </div>)
// }

// export default InQueue;