import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
    case c.DELETE_SURVEY:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};