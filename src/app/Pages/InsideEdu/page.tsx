"use client";

import React from "react";
import Header from "@/app/Component/header";
import Link from "next/link";

const InsideEdu = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Tombol Back */}
      <div className="bg-[#FCD34D] px-6 py-4">
        <Link
          href="/education"
          className="inline-flex items-center bg-white text-black px-5 py-2 rounded-full shadow font-medium"
        >
          ← Back
        </Link>
      </div>

      {/* Judul */}
      <div className="bg-[#FCD34D] py-2 text-center">
        <h1 className="bg-[#FDF2D5] text-5xl font-bold text-black text-center px-6 py-4 rounded-3xl inline-block mx-auto shadow">
            How to Train a dragon?
        </h1>
      </div>

      {/* Konten Utama */}
      <div className="bg-[#FCD34D] min-h-[calc(100vh-100px)] flex items-center justify-center px-6 pt-2 pb-12">
        <div className="bg-[#FDF2D5] flex flex-col md:flex-row items-center md:items-start rounded-3xl shadow-xl max-w-6xl w-full p-10 space-y-8 md:space-y-0 md:space-x-10">
          {/* Gambar */}
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/e8/Pokemon_Red_English_box_art.png"
            alt="Post Thumbnail"
            className="w-80 h-80 rounded-3xl object-cover"
          />

          {/* Konten Deskripsi */}
          <div className="bg-white rounded-3xl p-10 flex-1">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-black">
              How to Train a dragon?
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideEdu;
