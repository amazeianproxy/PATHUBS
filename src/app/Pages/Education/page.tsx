"use client";

import React, { useState } from "react";
import Header from "@/app/Component/header";
import Link from "next/link";

const mockPosts = [
  { id: 1, title: 'How to Train a dragon?', image: '/assets/random.jpg' },
  { id: 2, title: 'What is PawPetrol?', image: '/assets/random.jpg' },
  { id: 3, title: 'Why pet is an animal?', image: '/assets/random.jpg' },
  { id: 4, title: 'How to Train a dragon?', image: '/assets/random.jpg' },
  { id: 5, title: 'How to Train a dragon?', image: '/assets/random.jpg' },
  { id: 6, title: 'How to Train a dragon?', image: '/assets/random.jpg' },
];

const Education = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = mockPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#FCD34D] min-h-screen"> 
      <Header />
      <div className="flex justify-end px-8 mt-4">
        <input
          type="text"
          placeholder="Search Post..."
          className="rounded-full px-4 py-2 w-48 placeholder-gray-500 text-sm shadow-md focus:outline-none"
          style={{ backgroundColor: 'white' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 py-10">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-[#FDF2D5] p-4 rounded-2xl flex flex-col items-center shadow"
          >
            <img src={post.image} alt={post.title} className="w-24 h-24 rounded-lg" />
            <p className="text-center mt-2 font-medium text-[#3B2D04] text-sm">
              {post.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
