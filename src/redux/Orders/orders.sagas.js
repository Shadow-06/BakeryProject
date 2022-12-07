import ordersTypes from './orders.types';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { handleSaveOrder, handleGetUserOrderHistory,
  handleGetOrder, handleGetAllUserOrderHistory, handleGetCustomUserOrderHistory } from './orders.helpers';
import { auth } from './../../firebase/utils';
import { clearCart } from './../Cart/cart.actions';
import { setUserOrderHistory, setOrderDetails } from './orders.actions';

export function* getUserOrderHistory({ payload }) {
  try {
    const history = yield handleGetUserOrderHistory(payload);
    yield put(
      setUserOrderHistory(history)
    );

  } catch (err) {
    console.log(err);
  }
}

export function* onGetUserOrderHistoryStart() {
  yield takeLatest(ordersTypes.GET_USER_ORDER_HISTORY_START, getUserOrderHistory);
};

export function* getAllUserOrderHistory({ payload }) {
  try {
    const history = yield handleGetAllUserOrderHistory(payload);
    yield put(
      setUserOrderHistory(history)
    );

  } catch (err) {
    console.log(err);
  }
}

export function* onGetAllUserOrderHistoryStart() {
  yield takeLatest(ordersTypes.GET_ALL_USER_ORDER_HISTORY_START, getCustomUserOrderHistory);
};


export function* getCustomUserOrderHistory({ payload }) {
  try {
    const history = yield handleGetCustomUserOrderHistory(payload);
    yield put(
      setUserOrderHistory(history)
    );

  } catch (err) {
    console.log(err);
  }
}

export function* onGetCustomUserOrderHistoryStart() {
  yield takeLatest(ordersTypes.GET_CUSTOMUSER_ORDER_HISTORY_START, getCustomUserOrderHistory);
};


export function* saveOrder({ payload }) {
  try {
    const timestamps = new Date();
    yield handleSaveOrder({
      ...payload,
      orderUserID: auth.currentUser.uid,
      orderCreatedDate: timestamps
    });
    yield put(
      clearCart()
    )

  } catch (err) {
    // console.log(err);
  }
};

export function* onSaveOrderHistoryStart() {
  debugger;
  yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder);
};

export function* getOrderDetails({ payload }) {
  try {
    const order = yield handleGetOrder(payload);
    console.log(order)
    yield put(
      setOrderDetails(order)
    )

  } catch (err) {
    // console.log(err);
  }
}

export function* onGetOrderDetailsStart() {
  yield takeLatest(ordersTypes.GET_ORDER_DETAILS_START, getOrderDetails);
};

export default function* ordersSagas() {
  yield all([
    call(onSaveOrderHistoryStart),
    call(onGetUserOrderHistoryStart),
    call(onGetAllUserOrderHistoryStart),
    call(onGetOrderDetailsStart),
  ])
}
