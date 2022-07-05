import React from "react";
import "./Badge.css";

export default function Badge(props) {

    const badge = props.badge;

    return (
        <div className="badge">
            <li>
                <div className="badge-header">Badge:</div>
                <div className="badge-content">
                    <span>Name: {badge.firstName} {badge.lastName}</span>
                    <span>Phone: {badge.phoneNumber}</span>
                    <span>Place of Birth: {badge.birthPlace}</span>
                    <span>Favorite Food: {badge.favoriteFood}</span>
                    <span>Email: {badge.email}</span>
                    <div className="about">
                        <span>{badge.about}</span>
                    </div>
                </div>
            </li>
        </div>

    );
}