import React from "react";
import "./Header.css"
import Navbar from "./Navbar";

export default function Header() {

    return (
        <header className="header">
            <div className="header-layer">
                <Navbar />
                <h1 className="header-title">Clean Blog</h1>
                <p className="header-title-description">A Blog Theme by Start Bootstrap</p>
            </div>
        </header>
    );
}