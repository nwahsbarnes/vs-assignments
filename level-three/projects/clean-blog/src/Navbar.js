import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="main-nav">
            <div className="nav-container">
                <a href="https://startbootstrap.github.io/startbootstrap-clean-blog/index.html">Start Bootstrap</a>
                <div className="nav-right-container">
                    <ul className="nav-right">
                        <li><a href="https://startbootstrap.github.io/startbootstrap-clean-blog/index.html">Home</a></li>
                        <li><a href="https://startbootstrap.github.io/startbootstrap-clean-blog/about.html">About</a></li>
                        <li><a href="https://startbootstrap.github.io/startbootstrap-clean-blog/post.html">Sample Post</a></li>
                        <li><a href="https://startbootstrap.github.io/startbootstrap-clean-blog/contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}