import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const BoardTemplate = ({idx, title, content, onRemove}) => {
    return (
        <>
            <div className={["container", "p-5", "my-5", "bg-dark", "text-white"].join(" ")}>
                <h1>
                    {idx} : {title}
                </h1>
                <p>
                    {content}
                </p>
                <Link to={`/board/update/${idx}`}>
                    <Button color="primary">수정하기</Button>
                </Link>
                <Button color="primary" onClick={() => onRemove({idx})}>삭제하기</Button>
                <Link to="/">
                    <Button color="primary">뒤로가기</Button>
                </Link>
            </div>
        </>
    );
};

export default BoardTemplate;