import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BoardWriteTemplate from "../components/BoardWriteTemplate";
import { boardItem, boardWrite, changeValue, initForm, boardUpdate } from "../modules/board";

const BoardWriteContainer = () => {
    const dispatch = useDispatch();
    const index = useParams();

    const {idx, title, content, writeState} = useSelector(({board}) => ({
        idx: board.board.idx,
        title: board.board.title,
        content: board.board.content,
        writeState: board.writeState,
    }));

    const writeBtnClick = ({title, content, idx}) => {
        if(!title){
            alert("제목을 입력하세요.");
            return;
        }else if(!content){
            alert("내용을 입력하세요.");
            return;
        }
        
        if(idx){
            dispatch(boardUpdate({idx, title, content}));
        }else{
            dispatch(boardWrite({title, content}));
        }
    };

    const onChangeValue = (e) => {
        const {name, value} = e.target;
        console.log(name);
        console.log(value);

        dispatch(changeValue({key: name, value}));
    };

    useEffect(() => {
        dispatch(initForm());

        if(Object.keys(index).length !== 0){
            dispatch(boardItem({idx: index.idx}));
        }
    }, [dispatch, index]);

    useEffect(() => {
        if(writeState && idx !== 0){
            window.location.href = `/board/${idx}`;
        }
    },[writeState, idx]);

    return (
        <BoardWriteTemplate
            index={index}
            title={title}
            content={content}
            onChangeValue={onChangeValue}
            writeBtnClick={writeBtnClick}
        >
        </BoardWriteTemplate>
    );
};

export default BoardWriteContainer;