"use client";

import React, { useState } from "react";
import Header from "@/app/Component/header";
import Link from "next/link";

// Tambahkan slug ke setiap post
const mockPosts = [
  {
    id: 1,
    title: "How to Train a dragon?",
    image: "/assets/random.jpg",
    slug: "post1",
  },
  {
    id: 2,
    title: "What is PawPetrol?",
    image: "/assets/random.jpg",
    slug: "post2",
  },
  {
    id: 3,
    title: "Why pet is an animal?",
    image: "/assets/random.jpg",
    slug: "post3",
  },
  {
    id: 4,
    title: "How to Train a dragon?",
    image: "/assets/random.jpg",
    slug: "post4",
  },
  {
    id: 5,
    title: "How to Train a dragon?",
    image: "/assets/random.jpg",
    slug: "post5",
  },
  {
    id: 6,
    title: "How to Train a dragon?",
    image: "/assets/random.jpg",
    slug: "post6",
  },
];

const Education = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = mockPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <main
        style={{
          backgroundColor: "#fccc60",
          minHeight: "100vh",
          padding: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Search Post..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            display: "block",
            width: "80%",
            maxWidth: 600,
            margin: "0 auto 1.5rem auto",
            padding: "0.75rem 1rem",
            borderRadius: "25px",
            border: "none",
            fontSize: "1rem",
            backgroundColor: "white",
            color: "black",
          }}
        />
        <style jsx>{`
          input::placeholder {
            color: black;
            opacity: 1;
          }

          .post-card {
            background-color: #fff;
            display: flex;
            align-items: center;
            padding: 1rem;
            border-radius: 20px;
            margin-bottom: 1rem;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
            color: black;
            transition: box-shadow 0.3s ease, transform 0.3s ease;
          }

          .post-card:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            transform: translateY(-6px);
          }

          .post-image {
            width: 100px;
            height: 100px;
            border-radius: 15px;
            object-fit: cover;
            margin-right: 1rem;
            flex-shrink: 0;
          }
        `}</style>

        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 pt-2 pb-10">
        {filteredPosts.map((post) => (
          <Link key={post.id} href={`/Pages/Education/${post.slug}`}>
            <div className="bg-[#FDF2D5] p-4 rounded-2xl flex flex-col items-center shadow cursor-pointer hover:scale-105 transition-transform">
              <img
                src={post.image}
                alt={post.title}
                className="w-24 h-24 rounded-lg"
              />
              <p className="text-center mt-2 font-medium text-[#3B2D04] text-sm">
                {post.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      </main>
    </>
  );
};

export default Education;
