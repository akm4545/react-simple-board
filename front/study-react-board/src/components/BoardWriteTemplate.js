import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const BoardWriteTemplate = ({index, title, content, onChangeValue, writeBtnClick}) => {
    const {idx} = index;

    return (
        <div className={["container", "mt-3"].join(" ")}>
            <h2>글 작성</h2>
            <form>
                <input 
                    type="text"
                    className={["form-control", "mt-3"].join(" ")}
                    placeholder="제목을 입력하세요."
                    value={title}
                    name="title"
                    onChange={(e) => onChangeValue(e)}
                >
                </input>
                <label htmlFor="content">내용:</label>
                <textarea
                    className="form-control"
                    rows="5"
                    id="content"
                    value={content}
                    name="content"
                    onChange={(e) => onChangeValue(e)}
                >
                </textarea>
            </form>
            <Button color="primary" onClick={() => writeBtnClick({title, content, idx})}>
                {idx ? "수정하기" : "글쓰기"}
            </Button>
            <Link to="/">
                <Button color="primary">뒤로가기</Button>
            </Link>
        </div>
    );
};

export default BoardWriteTemplate;