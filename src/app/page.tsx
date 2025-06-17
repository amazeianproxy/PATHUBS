"use client";

import Header from './Component/header';
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  type Post = {
    forum_id: number;
    title: string;
    content: string;
    image_url?: string;
  };

  const fetchPosts = async () => {
    const { data, error } = await supabase.from("forum_post")
      .select("*")
      .order("forum_id", { ascending: false }); // Order by newest first
    if (error) {
      console.error("Error fetching posts:", error.message);
    } else {
      setPosts(data);
    }
  };
  
    useEffect(() => {
      fetchPosts();
    }, []);

  return (
    <div className="w-screen h-screen overflow-y-hidden bg-[#FCD34D] text-black">
      <Header/>
      <br></br>
      <br></br>
      {/* Recommended Section */}
      <section className="mb-10 px-20 py-4">
        <h2 className="text-2xl font-semibold mb-4">Recommended</h2>
        <div className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
          <img
            src={
              posts.length > 0 && posts[0].image_url
                ? posts[0].image_url
                : "/assets/shelter2.jpg"
            }
            alt="post"
            className="w-64 h-40 rounded"
          />
          <div>
            <h2 className="text-xl font-bold mb-2">
              {posts.length > 0 ? posts[0].title : "No posts available."}
            </h2>
            <p className="text-lg font-medium">
              {posts.length > 0 ? posts[0].content : ""}
            </p>
          </div>
        </div>
      </section>

      {/* Urgent Posts Section */}
      <h2 className="text-2xl font-semibold mb-4 px-20 text-black">Urgent Posts</h2>
      <section className="bg-[#473939] text-white min-h-[calc(100vh-300px)]">
        <div className="flex flex-wrap gap-10 px-20 py-8 justify-center">
          {posts.slice(1, 5).map((post) => (
            <div
              key={post.forum_id}
              className="bg-neutral-100 text-black w-64 p-5 rounded-2xl flex flex-col gap-3"
            >
              {/* <img
                src={post.image_url ? post.image_url : "/assets/shelter2.jpg"}
                alt="post"
                className="w-full h-40 object-cover rounded mb-2"
              /> */}
              <div className="flex flex-col">
                <h2 className="font-semibold text-lg">{post.title}</h2>
                <p className="text-sm">
                  {post.content.length > 100 ? post.content.slice(0, 100) + "..." : post.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <br></br>
      <br></br>
    </div>
  );
}

// Ian Mulya Chiuandi membuat keseluruhan kode ini.