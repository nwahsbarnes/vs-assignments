
import React from "react";
import './App.css';
import "./Square";
import Square from "./Square";

function App() {

  const [colors, setColors] = React.useState(["#FFF", "#000", "#FFF", "#FFF"]);
  const squares = colors.map(color => {
    return (
      <Square key={Math.random()} color={color} />
    );
  })

  function djSmall() {
    setColors(prevColors => {
      // Generate a new array of random black and white colors
      const newColors = [];
      for (let i = 0; i < prevColors.length; i++) {
        if (Math.random() < 0.5) {
          newColors.push("#FFF");
        } else {
          newColors.push("#000");
        }
      }
      return newColors;
    })
  }

  function partyDJ() {
    setColors(["#8e7cc3", "#8e7cc3", `${Math.random() < 0.5 ? "#FFF" : "#000"}`, `${Math.random() < 0.5 ? "#FFF" : "#000"}`]);
  }

  function leftBlue() {
    setColors(["#2469A7", `${Math.random() < 0.5 ? "#FFF" : "#000"}`, "#2469A7", `${Math.random() < 0.5 ? "#FFF" : "#000"}`])
  }

  function rightBlue() {
    setColors([`${Math.random() < 0.5 ? "#FFF" : "#000"}`, "#2469A7", `${Math.random() < 0.5 ? "#FFF" : "#000"}`, "#2469A7"])
  }

  function bigDJOne() {
    setColors([`${Math.random() < 0.5 ? "#FFF" : "#00FFFF"}`, `${Math.random() < 0.5 ? "#FFF" : "#00FFFF"}`, `${Math.random() < 0.5 ? "#FFF" : "#00FFFF"}`, `${Math.random() < 0.5 ? "#FFF" : "#00FFFF"}`])
  }

  function bigDJTwo() {

  }

  function bigDJThree() {

  }

  function bigDJFour() {

  }

  const audio = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3");

  function makeNoise() {
    audio.play();
  }

  return (
    <div className="app">
      {squares}
      <button onClick={djSmall}>DJ Small</button>
      <button onClick={partyDJ}>Party DJ</button>
      <button onClick={leftBlue}>Left Blue</button>
      <button onClick={rightBlue}>Right Blue</button>
      <button onClick={bigDJOne}>Big DJ one</button>
      <button onClick={bigDJTwo}>Big DJ two</button>
      <button onClick={bigDJThree}>Big DJ three</button>
      <button onClick={bigDJFour}>Big DJ four</button>
      <button onClick={makeNoise}>Make Noise</button>
    </div>
  );
}

export default App;
