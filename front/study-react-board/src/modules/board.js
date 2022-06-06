import { createAction, handleActions } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as boardApi from "../lib/api/board";

const [BOARD_LIST, BOARD_LIST_SUCCESS, BOARD_LIST_FAILURE] = createRequestActionTypes("board/LIST");
const [BOARD, BOARD_SUCCESS, BOARD_FAILURE] = createRequestActionTypes("board/ITEM");
const [BOARD_WRITE, BOARD_WRITE_SUCCESS, BOARD_WRITE_FAILURE] = createRequestActionTypes("board/WRITE");
const [BOARD_UPDATE, BOARD_UPDATE_SUCCESS, BOARD_UPDATE_FAILURE] = createRequestActionTypes("board/UPDATE");
const CHANGE_VALUE = "board/CHANGE_VALUE";
const INIT_FORM = "board/INIT_FORM";


export const boardListAction = createAction(BOARD_LIST);
export const boardItem = createAction(BOARD, ({idx}) => ({idx}));
export const changeValue = createAction(CHANGE_VALUE, ({key, value}) => ({key, value}));
export const initForm = createAction(INIT_FORM);
export const boardWrite = createAction(BOARD_WRITE, ({title, content}) => ({title, content}));
export const boardUpdate = createAction(BOARD_UPDATE, ({idx, title, content}) => ({idx, title, content}));

const initState = {
    boardList:"",
    board:{
        idx:0,
        title:"",
        content:"",
    },
    err: null,
    writeState: "",
};

const boardListSaga = createRequestSaga(BOARD_LIST, boardApi.boardList);
const boardItemSaga = createRequestSaga(BOARD, boardApi.boardSelect);
const boardWriteSaga = createRequestSaga(BOARD_WRITE, boardApi.boardWrite);
const boardUpdateSaga = createRequestSaga(BOARD_UPDATE, boardApi.boardUpdate);

export function* boardSaga() {
    yield takeLatest(BOARD_LIST, boardListSaga);
    yield takeLatest(BOARD, boardItemSaga);
    yield takeLatest(BOARD_WRITE, boardWriteSaga);
    yield takeLatest(BOARD_UPDATE, boardUpdateSaga);
};

const board = handleActions({
    [BOARD_LIST_SUCCESS]: (state, {payload: {board, code}}) => ({   
        ...state,
        boardList: board,
        err: code !== "200" ? true : null
    }),
    [BOARD_LIST_FAILURE]: (state, {payload: error}) => ({
        ...state,
        err: error,
    }),
    [BOARD_SUCCESS]: (state, {payload: {board}}) => ({
        ...state,
        board: {
            ...state.board,
            idx: board.idx,
            title: board.title,
            content: board.content,
        },
    }),
    [BOARD_FAILURE]: (state, {payload: error}) => ({
        ...state,
        err: error,
    }),
    [CHANGE_VALUE]: (state, {payload: {key, value}}) => ({
        ...state,
        board: {
            ...state.board,
            [key]: value
        },
    }),
    [INIT_FORM]: (state) => ({
        ...state,
        board: initState.board,
    }),
    [BOARD_WRITE_SUCCESS]: (state, {payload: {board}}) => ({
        ...state,
        board:{
            ...state.board,
            idx: board.idx,
            title: board.title,
            content: board.content,
        },
        writeState:"write",
    }),
    [BOARD_WRITE_FAILURE]: (state, {payload: error}) => ({
        ...state,
        err: error,
    }),
    [BOARD_UPDATE_SUCCESS]:  (state, {payload: {board}}) => ({
        ...state,
        board:{
            ...state.board,
            idx: board.idx,
            title: board.title,
            content: board.content,
        },
        writeState:"update",
    }),
    [BOARD_UPDATE_FAILURE]: (state, {payload: error}) => ({
        ...state,
        err: error,
    }),
}, initState);

export default board;
