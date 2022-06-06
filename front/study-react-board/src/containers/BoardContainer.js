import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BoardTemplate from "../components/BoardTemplate";
import { boardItem } from "../modules/board";
import { boardDelete } from "../lib/api/board";

const BoardContainer = () => {
    const dispatch = useDispatch();

    let {idx} = useParams();
    const {index, title, content} = useSelector(
        ({board}) => ({
            index: board.board.idx,
            title: board.board.title,
            content: board.board.content,
        })
    );

    useEffect(() => {
        dispatch(boardItem({idx}));
    }, [dispatch, idx]);

    const onRemove = async ({idx}) => {
        await boardDelete({idx});

        window.location.href = "/";
    };

    return (
        <BoardTemplate
            idx={index}
            title={title}
            content={content}
            onRemove={onRemove}
        >
        </BoardTemplate>
    );
};

export default BoardContainer;