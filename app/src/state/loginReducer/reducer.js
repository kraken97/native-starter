import { AUTH_USER } from '../action-types';

function loginReducer(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return Object.assign({},state,{name:state.name+'1'});
    default:
      return state;
  }
}

export default loginReducer;

export function selectLoginReducer(state) {
  return state['loginReducer'];
}
