import React from "react";

export default function Die(props) {

    return (
        <div className="die">
            <h1>{props.randomNumber}</h1>
        </div>
    );
}