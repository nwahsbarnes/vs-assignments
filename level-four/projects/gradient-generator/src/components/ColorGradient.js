import React from "react";
import "../styles/ColorGradient.css";

export default function ColorGradient(props) {
    const styles = {
        "background": `linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2})`,
        "MozBackground": `linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2})`,
        "Webkit": `linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2})`
    }
    const cssStyles = `background: linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2});
-moz-background: linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2});
-web-kit: linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2})`

    return (
        <div className="gradient-container">
            <div style={styles} className="color-gradient">
            </div>
            <textarea readOnly className="css-gradient-text" value={cssStyles}></textarea>
        </div>
    );
}