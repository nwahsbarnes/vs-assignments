import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {

  // const [color, setColor] = React.useState("blue");

  // function changeColor() {
  //   setColor(prevColor => prevColor === "blue" ? "pink" : "blue");
  // }

  // const [people, setPeople] = React.useState([
  //   {
  //     firstName: "John",
  //     lastName: "Smith"
  //   }
  // ])

  // console.log("People before: " + JSON.stringify(people));

  // // setPeople(prevPeople => {
  // //   const newPerson = [{
  // //     firstName: "Shawn",
  // //     lastName: "Barnes"
  // //   }]
  // //   return [...prevPeople, newPerson];
  // // });

  // console.log("People after: " + JSON.stringify(people));

  // const [colors, setColors] = React.useState(["pink", "blue"]);

  // function changeColor() {
  //   setColors(prevColors => [...prevColors, "green"]);
  // }

  const [person, setPerson] = React.useState({
    firstName: "John",
    lastName: "Smith"
  })

  function updatePerson() {
    setPerson(prevPersonObj => {
      let prevPerson = { ...prevPersonObj };
      prevPerson.age = 30;
      return prevPerson;
    });
  }

  return (
    <div className="App" onClick={updatePerson}>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
}

export default App;
