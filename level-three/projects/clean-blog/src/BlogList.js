import React from "react";
import data from "./data";
import "./BlogList.css"
import BlogPost from "./BlogPost";

export default function BlogList() {

    const blogPosts = data.map(entry => {
        return (
            <BlogPost key={entry.title} item={entry} />
        );
    });

    return (
        <section className="blog-list">
            {blogPosts}
        </section>
    );
}