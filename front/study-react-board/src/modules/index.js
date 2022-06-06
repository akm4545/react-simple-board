import { combineReducers } from "redux";
import {all} from 'redux-saga/effects';
import board, {boardSaga} from "./board";
import loading from "./loading";

const rootReducer = combineReducers({
    board,
    loading,
});

export function* rootSaga() {
    yield all([boardSaga()]);
};

export default rootReducer;