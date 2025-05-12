"use client";

import Header from "@/app/Component/header";
import Link from "next/link";
import React, { useState } from 'react';

const PetProfile = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <div className="w-screen flex items-center justify-center">
        <div className="bg-white w-[700px] rounded-md shadow-md overflow-hidden">

          {/* Title */}
          <h1 className="text-4xl font-bold text-center py-6 bg-yellow-400">Pet Profile</h1>
          <br />
          {/* Image */}
          <div className="flex justify-center -mt-0">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="telur gulung"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
            />
          </div>

          {/* Info */}
          <div className="text-center mt-4 space-y-1">
            <h2 className="text-2xl font-bold">telur gulung</h2>
            <p className="text-gray-700">Ras: anjing</p>
            <p className="text-gray-700">Gender: iYa</p>
            <p className="text-gray-700">Usia: 60 detik</p>
          </div>

          {/* Description */}
          <div className="bg-yellow-200 mt-6 mx-6 rounded-lg p-4 text-sm text-gray-800">
            <p>
              tadinya mau dokumen2 apa tpi aku gatauu yang diliat apa.<br />
              paling vaksin
            </p>
            <p className="mt-2">
              ceritanya ini deksripsi singkat kayak, makannya bakso gulung,
              sangat tidak ramah bintang 1. hobinya bikin anak padahal{" "}
              <span className="bg-black text-black px-2">████</span> keriput.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 my-6 px-6">
            <button className="w-1/2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full shadow-md transition">
              Contact Shelter
            </button>
            <button className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full shadow-md transition">
              Contact Customer Service
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PetProfile;
