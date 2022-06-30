import React from "react";
import "./Friend.css";
import Pet from "./Pet";

export default function Friend(props) {

    const friend = props.item;
    const pets = friend.pets.map(pet => {
        return (
            <Pet
                key={pet.name}
                item={pet}
            />
        );
    });

    return (
        <div className="friend-container">

            <div className="name-container">
                <h1 className="friend-name">{friend.name}</h1>
                <span className="friend-age">{friend.age}</span>
            </div>

            <div className="pet-list-container">
                <h3>Pets:</h3>
                <div className="pet-list">
                    {pets}
                </div>
            </div>
        </div>
    );
}