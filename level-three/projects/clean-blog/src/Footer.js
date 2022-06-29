import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="social-media-container">
                <div className="social-media">
                    <a href="https://www.twitter.com"><i className="fa-brands fa-twitter-square fa-4x"></i></a>
                    <a href="https://www.facebook.com"><i className="fa-brands fa-facebook-square fa-4x"></i></a>
                    <a href="https://www.github.com"><i className="fa-brands fa-github-square fa-4x"></i></a>
                </div>
                <p className="copyright">Copyright © Your Website 2022</p>
            </div>

        </footer>
    );
}