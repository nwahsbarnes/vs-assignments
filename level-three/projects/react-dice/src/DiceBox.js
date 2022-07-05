import React from "react";
import Die from "./Die";
import "./DiceBox.css";

export default function DiceBox() {

    const [randomNumbers, setRandomNumbers] = React.useState(getRandomNumberArray(5));

    function setNewNumbers() {
        setRandomNumbers(getRandomNumberArray(5));
    }

    /**
     * Returns an array of size length containing integers in the range 1-6 inclusive
     * @param {*} length 
     */
    function getRandomNumberArray(length) {
        const randomNumbers = [];
        for (let i = 0; i < length; i++) {
            randomNumbers.push(Math.floor(Math.random() * 6) + 1);
        }
        return randomNumbers;
    }

    const dieElements = randomNumbers.map(number => {
        return (
            <Die key={Math.random()} randomNumber={number} />
        );
    })

    return (
        <div>
            {dieElements}
            <button onClick={setNewNumbers}>Roll die</button>
        </div>
    );
}