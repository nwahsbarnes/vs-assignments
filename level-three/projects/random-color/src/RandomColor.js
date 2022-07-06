import React from "react";
import axios from "axios";

export default function RandomColor() {

    const [color, setColor] = React.useState("#FFFFFF");


    function getRandomColor() {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime}`)
        .then(res => res.data)
        .then(data => setColor(`#${data.colors[0].hex}`));
    }

    const styles = {
        backgroundColor: `${color}`
    }


    return (
        <div className="random-color-container" style={styles}>
            <button onClick={getRandomColor}>Get Color</button>
        </div>
    );
}