import * as a from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, abv, pints, id } = action;
  switch(action.type) {
    case a.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          abv: abv,
          pints: pints,
          id: id,
        }
      });
    case a.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;  
    default:
      return state;
  }

};