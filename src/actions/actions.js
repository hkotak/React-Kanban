import axios from 'axios';

export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';


//REQUEST TO GET ALL YOUR CARDS
export const getAllCards = () => {
  return dispatch => {
    axios.get('/cards')
      .then(response => {
        dispatch({ type: GET_ALL_CARDS, payload: response.data })
        // console.log('******************')
        // console.log('actions.js dispatch payload***: ', response.data);
      })
      .catch(err => {
        dispatch({ type: 'DISPLAY_ERROR_NOTIFICATION' })
      })
  }
}


//REQUEST TO ADD A CARD
export const addCard = (card) => {
  // console.log('recieved?')
  // console.log('action card: ', card);
  return dispatch => {
    axios.post('/addTask', card)
      .then(response => {
        dispatch({ type: GET_ALL_CARDS, payload: response.data })
      })
      .catch(err => {
        console.log('ERROR in ACTION ADD CARD')
      })
  }
}

//DELETE A CARD BY ITS ID
export const deleteTask = (card) => {
  // console.log('ACTIONS.JS - DELETE CARD FIRING: ', { card });
  return dispatch => {
    axios.delete('/:id', { data: { card } }) //WHAT IS THIS???
      .then(response => {
        console.log('ACTION - DELETE DATA: ', response.data)
        console.log('ACTION.JS - DELETE RESPONSE')
        dispatch({ type: DELETE_CARD, payload: response.data })
      })
      .catch(err => {
        console.log('ERROR in ACTION DELETE CARD')
      })
  }
}

//EDIT SELECTED CARD BY ITS ID  
export const editTask = (card) => {
  console.log('ACTIONS.JS - EDIT CARD FIRING: ', card);
  return dispatch => {
    axios.put('/editTask', card)
      .then(response => {
        console.log('ACTION - EDIT DATA: ', response.data)
        console.log('ACTION.JS - EDIT RESPONSE')
        dispatch({ type: EDIT_CARD, payload: response.data })
      })
      .catch(err => {
        console.log('ERROR in ACTION EDIT CARD');
      })
  }
}
