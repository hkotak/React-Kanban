import axios from 'axios';

export const GET_ALL_CARDS = 'GET_ALL_CARDS';
// export const ADD_CARD = 'ADD_CARD';

export const getAllCards = () => {
  return dispatch => {
    axios.get('/cards')
      .then(response => {
        dispatch({ type: GET_ALL_CARDS, payload: response.data })
        console.log('***actions.js dispatch payload***: ', response.data);
      })
      .catch(err => {
        dispatch({ type: 'DISPLAY_ERROR_NOTIFICATION' })
      })
  }
}


