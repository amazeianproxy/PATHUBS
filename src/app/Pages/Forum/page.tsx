"use client";

import './forumpage.css';
import Header from "@/app/Component/header";
import React, { useState } from "react";
import ForumCard from '@/app/Component/forum_card';

function ForumPage() {
  const [search, setSearch] = useState("");
  return (
    <div className="forum-page">
      <Header />

      <div className="flex justify-end px-8 mt-4">
        <input
          type="text"
          placeholder="Search Forum..."
          className="rounded-full px-4 py-2 w-48 placeholder-gray-500 text-sm shadow-md focus:outline-none"
          style={{ backgroundColor: 'white' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br></br>
      <div className="post-list px-10">
        {[1, 2, 3].map((item) => (
          <ForumCard key={item} />
        ))}
      </div>
    </div>
  );
}

export default ForumPage;
