import React from "react";
import "./styles/App.css";
import ColorGradient from "./components/ColorGradient";

export default function App() {

  const [angle, setAngle] = React.useState(50);
  const [color1, setColor1] = React.useState("#000000");
  const [color2, setColor2] = React.useState("#FFFFFF");

  function updateAngle(e) {
    setAngle(prevAngle => e.target.value);
  }

  function updateColor1(e) {
    setColor1(prevColor => e.target.value);
  }

  function updateColor2(e) {
    setColor2(prevColor => e.target.value);
  }

  return (
    <div className="app">
      <h1>CSS Gradient Generator</h1>

      <div className="gradient-generator-container">
        <ColorGradient
          angle={angle}
          color1={color1}
          color2={color2}
        />

        <div className="options">
          <div className="input-container">
            <p>Angle:</p>
            <input
              type="number"
              value={angle}
              onChange={updateAngle}
              className="input-angle"
            />
          </div>

          <div className="input-container">
            <p>Color 1:</p>
            <p>{color1}</p>
            <input
              type="color"
              value={color1}
              onChange={updateColor1}
            />
          </div>

          <div className="input-container">
            <p>Color 2:</p>
            <p>{color2}</p>
            <input
              type="color"
              value={color2}
              onChange={updateColor2}
            />
          </div>
        </div>
      </div>

    </div>
  );
}