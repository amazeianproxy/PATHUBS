"use client";

import './forumpost.css';
import Header from "@/app/Component/header";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import ReplyCard from '@/app/Component/reply_card';

function ForumPost() {
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState(null);
  const [content, setContent] = useState("");
  const [replies, setReplies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | string | null>(null);
  const [newReply, setNewReply] = useState('');

  const email = typeof window !== "undefined" ? localStorage.getItem("email") : null;
  const forumId = typeof window !== "undefined" ? Number(localStorage.getItem('forum_id')) : null;

  const fetchReplies = async () => {
    if (!forumId) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('forum_reply')
      .select(`
        *,
        users (
          name
        )
      `)
      .eq('forum_id', forumId)
      .order('reply_id', { ascending: true });

    if (error) {
      console.error('Error fetching replies:', error);
      setReplies([]);
    } else {
      setReplies(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchPost = async () => {
      if (forumId) {
        const { data, error } = await supabase
          .from('forum_post')
          .select('title, content, image_url')
          .eq('forum_id', forumId)
          .single();

        if (error) {
          console.error('Error fetching post:', error);
        } else {
          setTitle(data.title);
          setContent(data.content);
          setImageFile(data.image_url);
        }
      } else {
        console.error('No forum_id found in local storage');
      }
    };

    fetchPost();
    fetchReplies();
  }, [forumId]);
  
  useEffect(() => {
      const fetchUserId = async () => {
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
  
    const handleNewReply = async () => {
      if (!content) {
        alert("Please fill out all fields.");
        return;
      }
  
      setLoading(true);
      const { error } = await supabase.from("forum_reply").insert([
        { content: newReply, forum_id: forumId, user_id: userId }
      ]);
  
      setLoading(false);
  
      if (error) {
        alert("Error creating reply: " + error.message);
      } else {
        alert("Reply created!");
        setNewReply("");
        fetchReplies();
      }
    };

  return (
    <div className="post-container">
      <Header />
      <br></br>
      <div className='px-8'>
        <Link href="/Pages/Forum" className="back-button">←</Link>
        <h1 className="post-title">{title}</h1>
        <img
          src={imageFile ? (typeof imageFile === "string" ? imageFile : URL.createObjectURL(imageFile)) : "/assets/shelter2.jpg"} // Default image
          alt="sprite"
          className="w-64 h-40 rounded mr-4 post-image"
        />

        <div className="post-content">
          {content}
        </div>

        <h2 className="comment-header">Comments</h2>

        <div>
          {replies.length === 0 ? (
            <div>No replies yet.</div>
          ) : (
            replies.map(reply => (
              <ReplyCard
                key={reply.reply_id}
                forum_id={reply.forum_id}
                reply_id={reply.reply_id}
                content={reply.content}
                name={reply.users?.name} // <-- updated line
                date={new Date(reply.date).toLocaleDateString()}
              />
            ))
          )}
        </div>

        {userId ? (
          <div className="flex flex-col px-8 mt-4 gap-2">
            <input
              type="text"
              placeholder="Reply To This Post"
              className="rounded px-4 py-2 shadow bg-white"
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
            />
            <button
              onClick={handleNewReply}
              disabled={loading}
              className="bg-blue-500 text-white rounded px-4 py-2 mt-2 hover:bg-blue-600"
            >
              {loading ? "Posting..." : "Create Reply"}
            </button>
          </div>
        ) : (
          <div className="text-center mt-6 text-gray-600">
            <p>Please log in to create a reply.</p>
          </div>
        )}
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default ForumPost;
// Ian Mulya Chiuandi membuat keseluruhan kode ini.