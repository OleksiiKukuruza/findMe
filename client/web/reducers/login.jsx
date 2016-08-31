import { LOGIN } from './../constants/ActionTypes';

export default function login(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        login: action.payload
      });
    default:
      return state;
  }
}
