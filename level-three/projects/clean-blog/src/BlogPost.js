import React from "react";
import "./BlogPost.css";

export default function BlogPost(props) {
    const post = props.item;
    return (
        <div className="blog-post-card">
            <h1 className="post-title">{post.title}</h1>
            {post.subTitle != "" && <h3 className="post-subtitle">{post.subTitle}</h3>}
            <p className="post-meta">Posted by {post.author} on {post.date}</p>
            <hr className="my-4" />
        </div>
    );
}