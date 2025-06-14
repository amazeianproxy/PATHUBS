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
            17 Fun Facts About Golden Retrievers
        </h1>
      </div>

      {/* Konten Utama */}
      <div className="bg-[#FCD34D] min-h-[calc(100vh-100px)] flex items-center justify-center px-6 pt-2 pb-12">
        <div className="bg-[#FDF2D5] flex flex-col md:flex-row items-center md:items-start rounded-3xl shadow-xl max-w-6xl w-full p-10 space-y-8 md:space-y-0 md:space-x-10">
          {/* Gambar */}
          <img
            src="/assets/2.jpg"
            alt="Post Thumbnail"
            className="w-80 h-80 rounded-3xl object-cover self-center md:self-start mt-15"
          />

          {/* Konten Deskripsi */}
          <div className="bg-white rounded-3xl p-10 flex-1">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-black">
              "17 Fun Facts About Golden Retrievers"
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed text-justify">
              Golden Retrievers are one of the most popular dog breeds in the United States, 
              known for their loyalty, intelligence, and playful nature. 
              Originally bred in Scotland in the late 19th century, 
              they resulted from a mix of a Tweed Water Spaniel and a Wavy-Coated Retriever 
              to create a skilled hunting dog. Over the years, they have gained fame 
              not only as family pets but also in television, movies, and service roles. 
              Their remarkable trainability makes them excellent guide dogs, search-and-rescue workers, 
              and even bomb-sniffing dogs. With their friendly demeanor and high energy, 
              they require regular exercise to maintain their health and happiness. 
              These qualities have cemented Golden Retrievers as one of the top dog breeds in the world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideEdu;
