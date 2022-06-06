import React from "react";

const Button = ({children, color, onClick}) => {
    return (
        <button
            type="button"
            className={["btn", `btn-outline-${color}`].join(" ")}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;