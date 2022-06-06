import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const cursor = {
    cursor: "pointer"
};

const BoardListHeader = () => {
    return (
        <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>내용</th>
            </tr>
        </thead>
    );
};

const BoardListItem = ({board, onClick}) => {
    return (
        <tr style={cursor} onClick={() => onClick(board.idx)}>
            <td>{board.idx}</td>
            <td>{board.title}</td>
            <td>{board.content}</td>
        </tr>
    );
};

const BoardListTemplate = ({boardList, loading, err, onClick}) => {
    return (
        <div className={["container", "mt-3"].join(" ")}>
            <table className={["table", "table-dark", "table-striped"].join(" ")}>
                <BoardListHeader></BoardListHeader>
                <tbody>
                    {!loading && boardList && (boardList.map(board => (
                        <BoardListItem
                            key={board.idx}
                            board={board}
                            onClick={onClick}
                        >
                        </BoardListItem>
                    )))}
                    {loading && (<tr></tr>)}
                </tbody>
            </table>
            <Link to="/board/write">
                <Button color="primary">글쓰기</Button>
            </Link>
        </div>
    );
};

export default BoardListTemplate;