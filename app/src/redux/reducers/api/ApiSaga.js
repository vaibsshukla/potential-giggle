import {takeEvery, call, put} from 'redux-saga/effects';
import {
  API_CALL,
  API_CALL_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
  COUNT,
} from '../../Actions';

export const apiWatcherSaga = [takeEvery(API_CALL, apiWorkerSaga)];

function* apiWorkerSaga(action) {
  try {
    const response = yield call(
      apiCall,
      action.data.api,
      action.data.requestType,
      action.data.reqObject,
    );
    console.log('res: ', JSON.stringify(response));
    const data = response;
    yield put({type: action.data.type, data});
  } catch (error) {
    console.log('error', JSON.stringify(error));
    yield put({type: API_CALL_FAILURE, error});
  }
}

function apiCall(api, request, data) {
  return {};
}

function addToCart(data) {
  return dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: data,
    });
  };
}

function removeFromCart(data) {
  return dispatch => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: data,
    });
  };
}
function increaseCounter(data) {
  return dispatch => {
    dispatch({
      type: INCREASE_COUNT,
      payload: data,
    });
  };
}
function decreaseCounter(data) {
  return dispatch => {
    dispatch({
      type: DECREASE_COUNT,
      payload: data,
    });
  };
}

function count(data) {
  return dispatch => {
    dispatch({
      type: COUNT,
      payload: data,
    });
  };
}
