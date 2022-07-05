import React from "react";
import './App.css';

function App() {

  const [inputBox, setInputBox] = React.useState("");
  const [listItems, setListItems] = React.useState([]);

  function handleChange(event) {
    const {value} = event.target;
    setInputBox(value);
  }

  function addItem() {
    setListItems(prevItems => {
      const input = document.getElementById("input");
      console.log(input);
      return [...prevItems, input.value]
    })
  }

  const listElements = listItems.map(item => {
    return (
      <li key={Math.random()}>{item}</li>
    );
  })

  return (
    <div className="app">
      <div className="input-container">
        <input type="text" onChange={handleChange} name="input" id="input" />
        <span>
          <button onClick={addItem}>Submit</button>
        </span>
      </div>
      <h1>{inputBox}</h1>
      <ul>
        {listElements}
      </ul>
    </div>
  );
}

export default App;
