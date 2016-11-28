import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

function* runAuthServer(action) {
  console.log('processeing action', action);
  yield put({
    type: 'MESSAGE_TO_SEND',
    payload: {
    },
  });
}

export function* authServer() {
  yield* takeEvery('NAME_OF_THE_MESSAGE', runAuthServer);
}
