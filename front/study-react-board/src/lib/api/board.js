import asyncRequestBase from "./asyncRequstBase"

export const boardList = () => {
    return asyncRequestBase("GET", "http://127.0.0.1:8080/api/board/");
};

export const boardSelect = ({idx}) => {
    return asyncRequestBase("GET", `http://127.0.0.1:8080/api/board/${idx}`);
};

export const boardUpdate = ({idx, title, content}) => {
    return asyncRequestBase("PUT", `http://127.0.0.1:8080/api/board/${idx}`, {title, content});
};

export const boardDelete = ({idx}) => {
    return asyncRequestBase("DELETE", `http://127.0.0.1:8080/api/board/${idx}`);
};

export const boardWrite = ({title, content}) => {
    return asyncRequestBase("POST", `http://127.0.0.1:8080/api/board/`, {title, content});
};

