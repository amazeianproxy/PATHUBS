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
            Basic Pet Care Tips?
        </h1>
      </div>

      {/* Konten Utama */}
      <div className="bg-[#FCD34D] min-h-[calc(100vh-100px)] flex items-center justify-center px-6 pt-2 pb-12">
        <div className="bg-[#FDF2D5] flex flex-col md:flex-row items-center md:items-start rounded-3xl shadow-xl max-w-6xl w-full p-10 space-y-8 md:space-y-0 md:space-x-10">
          {/* Gambar */}
          <img
            src="/assets/1.jpeg"
            alt="Post Thumbnail"
            className="w-80 h-80 rounded-3xl object-cover self-center md:self-start mt-20"
          />

          {/* Konten Deskripsi */}
          <div className="bg-white rounded-3xl p-10 flex-1">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-black">
              "Basic Pet Care Tips!"
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed text-justify">
              Owning a pet is a joyful experience, but it comes with responsibility. 
              Here are key points to keep in mind:
              <br/>
              1.Choose the Right Pet: Match the pet to your lifestyle. Dogs need more time and space; cats are more independent.
              <br/>
              2.Health & Nutrition: Feed them a proper diet, provide clean water, and schedule regular vet visits.
              <br/>
              3.Training & Socialization: Teach good behavior and help them get comfortable with people and other animals.
              <br/>
              4.Exercise & Enrichment: Keep pets active and mentally engaged with toys, walks, or playtime.
              <br/>
              5.Long-Term Commitment: Pets depend on you for their entire lives—be ready for the journey.
              <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideEdu;
