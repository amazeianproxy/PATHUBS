"use client";

import './forumpage.css';
import Header from "@/app/Component/header";
import React, { useState, useEffect } from "react";
import ForumCard from '@/app/Component/forum_card';
import { supabase } from "@/lib/supabase"; // Ensure Supabase is initialized

function ForumPage() {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);

  type Post = {
    forum_id: number;
    title: string;
    content: string;
    image_url?: string | null;
    // add other fields if needed
  };
  
  // Move fetchPosts outside so it can be reused
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
        .from("users") // your users table
        .select("user_id")  // or "user_id" if that’s your column name
        .eq("email", email)
        .single();

      if (error) {
        console.error("Error fetching user ID:", error.message);
      } else {
        setUserId(data.user_id); // or data.user_id
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

    let imageUrl = null;
    if (imageFile) {
      const { data, error } = await supabase.storage
        .from("forum-images")
        .upload(`public/${Date.now()}_${imageFile.name}`, imageFile);

      if (error) {
        alert("Image upload failed: " + error.message);
        setLoading(false);
        return;
      }
      imageUrl = supabase.storage.from("forum-images").getPublicUrl(data.path).data.publicUrl;
    }

    const { error } = await supabase.from("forum_post").insert([
      { title, content, user_id: userId, image_url: imageUrl }
    ]);

    setLoading(false);

    if (error) {
      alert("Error creating post: " + error.message);
    } else {
      alert("Post created!");
      setTitle("");
      setContent("");
      setImageFile(null);
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
            className="rounded px-4 py-2 shadow bg-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Post Content"
            className="rounded px-4 py-2 shadow bg-white"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="relative inline-block">
            <button
              type="button"
              className="bg-red-500 text-white rounded px-4 py-2 mt-2 hover:bg-red-800 transition"
              onClick={() => document.getElementById('image-upload')?.click()}
            >
              {imageFile ? "Image Selected" : "Choose Image"}
            </button>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
              style={{ display: 'none' }}
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            />
          </div>
          <button
            onClick={handleNewPost}
            disabled={loading}
            className="bg-blue-500 text-white rounded px-4 py-2 mt-2 hover:bg-blue-600"
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
          className="rounded-full px-4 py-2 w-48 placeholder-gray-500 text-sm shadow-md focus:outline-none"
          style={{ backgroundColor: 'white' }}
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
            image_url={post.image_url ?? undefined}
          />
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default ForumPage;
