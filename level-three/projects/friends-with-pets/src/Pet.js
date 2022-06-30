import React from "react";
import "./Pet.css";

export default function Pet(props) {

    const pet = props.item;

    return (
        <div className="pet-container">
            <h3 className="pet-name">{pet.name}</h3>
            <p className="pet-breed">{pet.breed}</p>
        </div>
    );

}