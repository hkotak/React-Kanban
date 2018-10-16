// import React from 'react';
// // import Card from './Cards.jsx'

// let Done = (props) => {
//   return props.cards.filter(card => card.status === 'done').map(card =>
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

// export default Done;