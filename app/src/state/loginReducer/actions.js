import {
  AUTH_USER,
} from '../action-types';

export function authUser() {
  console.log("auth user")
  return {
    type: AUTH_USER,
  };
}
