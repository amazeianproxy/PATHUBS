"use client";


import Header from "@/app/Component/header";
import React, { useState } from 'react';
import './Forum.css';

const Forum = () => {
    const [posts, setPosts] = useState([
        { title: "How to have a pet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", user: "Reina" },
    ]);
    const [comment, setComment] = useState("");

    // const handleCommentChange = (e) => {
    //     setComment(e.target.value);
    // };

    const handleCommentSubmit = () => {
        setComment("");
    };

    return (
        <div>
            {/* <div className="header">
                <h1>Forum</h1>
                <div className="nav">
                    <button>Lost Pet</button>
                    <button>Adopt</button>
                    <button>Rescue</button>
                </div>
            </div> */}
            <Header/>

            <div className="forum-container">
                {posts.map((post, index) => (
                    <div className="post" key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <div className="comment-section">
                            <h4>Comment</h4>
                            <div className="comment-box">
                                <textarea 
                                    value={comment} 
                                    // onChange={handleCommentChange} 
                                    placeholder="Add a comment..."
                                />
                                <button onClick={handleCommentSubmit}>Reply</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forum;