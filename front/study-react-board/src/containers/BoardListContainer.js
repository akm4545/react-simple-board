import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {boardListAction} from "../modules/board";
import BoardListTemplate from "../components/BoardListTemplate";

const boardClick = (idx) => {
    window.location.href = `/board/${idx}`;
};

const writeBtnClick = () => {
    window.location.href = `/board/write`;
};

const BoardListContainer = () => {
    const dispatch = useDispatch();
    const {boardList, loading, err} = useSelector(
        ({board, loading}) => {
            return {
                boardList: board.boardList,
                err: board.err,
                loading: loading["board/LIST"]
        }},
    );

    useEffect(() => {
        dispatch(boardListAction());
    }, [dispatch]);

    return (
        <BoardListTemplate
            boardList={boardList}
            loading={loading}
            err={err}
            onClick={boardClick}
            btnClick={writeBtnClick}
        >
        </BoardListTemplate>
    );
};

export default BoardListContainer;