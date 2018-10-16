import { GET_ALL_CARDS } from '../actions/actions.js'

const cardReducer = (state = [], action) => {
  console.log('**reducer.js Action: ', action);
  console.log("*****CURRENT STATE: ", state);
  switch (action.type) {
    case GET_ALL_CARDS:
      console.log('Action.payload in GET_ALL_CARDS reducer: ', action.payload)
      return action.payload
    // case ADD_ITEM:
    //   return [...state, action.payload]
    default:
      return state;
  }
}

export default cardReducer;






