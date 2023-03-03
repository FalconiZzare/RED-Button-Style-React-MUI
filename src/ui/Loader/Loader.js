import React from 'react';
import "./LoaderStyle.css"

const Loader = ({onClick}) => {
    return (
        <div className={"wave"} onClick={onClick}>
            <div className={"rect rect-1"}></div>
            <div className={"rect rect-2"}></div>
            <div className={"rect rect-3"}></div>
            <div className={"rect rect-4"}></div>
            <div className={"rect rect-5"}></div>
        </div>
    );
};

export default Loader;