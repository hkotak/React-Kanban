import { GET_ALL_CARDS, ADD_CARD, EDIT_CARD, DELETE_CARD } from '../actions/actions.js'

const cardReducer = (state = [], action) => {

  switch (action.type) {
    case GET_ALL_CARDS:
      // console.log('Action.payload in GET_ALL_CARDS reducer: ', action.payload)
      return action.payload

    case ADD_CARD:
      return [...state, action.payload]

    case EDIT_CARD:
      return action.payload

    case DELETE_CARD:
      return [...action.payload]

    default:
      return state;
  }
}

export default cardReducer;






