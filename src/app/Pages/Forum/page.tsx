"use client";

import './forumpage.css';
import Header from "@/app/Component/header";
import React, { useState, useEffect } from "react";
import ForumCard from '@/app/Component/forum_card';
import { supabase } from "@/lib/supabase";

function ForumPage() {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [posts, setPosts] = useState<Post[]>([]);

  type Post = {
    forum_id: number;
    title: string;
    content: string;
  };
  
  
  const fetchPosts = async () => {
    const { data, error } = await supabase.from("forum_post").select("*");
    if (error) {
      console.error("Error fetching posts:", error.message);
    } else {
      setPosts(data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  
  useEffect(() => {
    const fetchUserId = async () => {
      const email = localStorage.getItem("email");
      if (!email) return;

      const { data, error } = await supabase
        .from("users") 
        .select("user_id") 
        .eq("email", email)
        .single();

      if (error) {
        console.error("Error fetching user ID:", error.message);
      } else {
        setUserId(data.user_id); 
      }
    };

    fetchUserId();
  }, []);

  const handleNewPost = async () => { 
    if (!title || !content) {
      alert("Please fill out all fields.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("forum_post").insert([
      { title, content, user_id: userId }
    ]);

    setLoading(false);

    if (error) {
      alert("Error creating post: " + error.message);
    } else {
      alert("Post created!");
      setTitle("");
      setContent("");
      fetchPosts();
    }
  };

  return (
    <div className="forum-page">
      <Header />

      {userId ? (
        <div className="flex flex-col px-8 mt-4 gap-2">
          <input
            type="text"
            placeholder="Post Title"
            className="rounded px-4 py-2 shadow bg-white text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Post Content"
            className="rounded px-4 py-2 shadow bg-white text-black"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            onClick={handleNewPost}
            disabled={loading}
            className="bg-blue-500 text-black rounded px-4 py-2 mt-2 hover:bg-blue-600 "
          >
            {loading ? "Posting..." : "Create Post"}
          </button>
        </div>
      ) : (
        <div className="text-center mt-6 text-gray-600">
          <p>Please log in to create a post.</p>
        </div>
      )}

      <div className="flex justify-end px-8 mt-6">
        <input
          type="text"
          placeholder="Search Forum..."
          className="rounded-full px-4 py-2 w-48 placeholder-gray-500 text-sm shadow-md focus:outline-none text-black"
          style={{ backgroundColor: 'white'  }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="post-list px-10 mt-4">
        {posts.map((post) => (
          <ForumCard
            key={post.forum_id}
            forum_id={post.forum_id}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default ForumPage;
