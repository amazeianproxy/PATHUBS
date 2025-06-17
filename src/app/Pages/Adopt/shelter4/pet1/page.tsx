"use client";

import React from "react";
import Link from "next/link";

const Pet1Page = () => {
  return (
    <main style={{ backgroundColor: "#fccc60", minHeight: "100vh", padding: "1rem" }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          position: "relative",
        }}
      >
        {/* Tombol kembali */}
        <Link
  href="/Pages/Adopt"
  style={{
    position: "absolute",
    left: 0,
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

        {/* Judul */}
        <h1
          style={{
            backgroundColor: "white",
            padding: "0.5rem 1.5rem",
            borderRadius: "15px",
            fontSize: "2.5rem",
            margin: 0,
            color: "black",
          }}
        >
          Pet Profile
        </h1>
      </header>

      {/* Informasi pet */}
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "1.5rem",
          gap: "2rem",
          marginBottom: "1rem",
          color: "black",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/kura.jpg"
          alt="Keni"
          style={{ width: 200, height: 200, borderRadius: 15, objectFit: "cover" }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Fajar</h2>
          <p style={{ fontSize: "1.2rem", margin: "0.3rem 0", lineHeight: 1.5 }}>
            Ras: Kura-Kura Darat
          </p>
          <p style={{ fontSize: "1.2rem", margin: "0.3rem 0", lineHeight: 1.5 }}>
            Gender: Laki - Laki
          </p>
          <p style={{ fontSize: "1.2rem", margin: "0.3rem 0", lineHeight: 1.5 }}>
            Usia: 4 Tahun 11 Bulan
          </p>
        </div>
      </div>

      {/* Deskripsi */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "1.5rem",
          whiteSpace: "pre-wrap",
          color: "black",
          marginBottom: "2rem",
          fontSize: "1.1rem",
          lineHeight: 1.6,
        }}
      >
        Kura-Kura darat yang energik. Hobinya berjemur dan suka di ajak jalan-jalan.
        Catatan : Vaksin sudah lengkap, tidak ada riwayat penyakit, dan direkomendasikan lingkungan yang memiliki halaman.
      </div>

      {/* Tombol kontak */}
      <button
        style={{
          backgroundColor: "#2ca41c",
          color: "white",
          border: "none",
          borderRadius: "25px",
          padding: "0.75rem 2rem",
          fontSize: "1.2rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          margin: "0 auto",
        }}
        onClick={() => {
          window.open("https://wa.me/6282124600350", "_blank");
        }}
        aria-label="Contact Shelter via WhatsApp"
      >
        {/* Icon WhatsApp */}
        <img
            src="/assets/whatsapp.png"
            alt="WhatsApp"
            style={{ width: "24px", height: "24px" }}
         />
        Contact Shelter
      </button>
    </main>
  );
};

export default Pet1Page;
