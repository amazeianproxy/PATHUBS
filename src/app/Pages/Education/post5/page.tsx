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
        <div className="bg-[#FCD34D] px-10 py-4">

          <Link
            href="/Pages/Education"
            style={{
              position: "absolute",
              left: "3rem",
              top: "11rem",        // Geser ke bawah
              padding: "0.5rem 1rem",
              backgroundColor: "white",
              borderRadius: "50%",
              userSelect: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
            }}
          >
            <img
              src="/assets/back.png"
              alt="Back"
              style={{ width: "24px", height: "24px", objectFit: "contain" }}
            />
          </Link>

        </div>

      {/* Judul */}
      <div className="bg-[#FCD34D] py-2 text-center">
        <h1 className="bg-[#FDF2D5] text-5xl font-bold text-black text-center px-6 py-4 rounded-3xl inline-block mx-auto shadow">
            Why Pets Make Great Companions?
        </h1>
      </div>

      {/* Konten Utama */}
      <div className="bg-[#FCD34D] min-h-[calc(100vh-100px)] flex items-center justify-center px-6 pt-2 pb-12">
        <div className="bg-[#FDF2D5] flex flex-col md:flex-row items-center md:items-start rounded-3xl shadow-xl max-w-6xl w-full p-10 space-y-8 md:space-y-0 md:space-x-10">
          {/* Gambar */}
          <img
            src="/assets/5.jpg"
            alt="Post Thumbnail"
            className="w-80 h-80 rounded-3xl object-cover"
          />

          {/* Konten Deskripsi */}
          <div className="bg-white rounded-3xl p-10 flex-1">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-black">
              "Why Pets Make Great Companions?"
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed text-justify">
              Pets make wonderful companions by providing emotional support, reducing stress, 
              and encouraging a more active lifestyle. Caring for a pet also teaches 
              responsibility and helps build strong, loving bonds. With proper attention 
              and love, pets become loyal members of the family and bring joy for years to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideEdu;
