import React from "react";
import data from "./data"
import Friend from "./Friend";
import "./FriendList.css";

export default function FriendList() {

    const friendList = data.map(friend => {
        return (
            <Friend
                key={friend.name}
                item={friend}
            />
        );
    });

    return (
        <div>
            {friendList}
        </div>
    );
}