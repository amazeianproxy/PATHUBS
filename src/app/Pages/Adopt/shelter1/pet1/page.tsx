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
            fontSize: "1.5rem",
            textDecoration: "none",
            color: "black",
            padding: "0.5rem 1rem",
            backgroundColor: "white",
            borderRadius: "50%",
            userSelect: "none",
            cursor: "pointer",
          }}
        >
          ←
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
          src="/assets/kucing.jpg"
          alt="Keni"
          style={{ width: 200, height: 200, borderRadius: 15, objectFit: "cover" }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Keni</h2>
          <p style={{ fontSize: "1.2rem", margin: "0.3rem 0", lineHeight: 1.5 }}>
            Ras: kucing
          </p>
          <p style={{ fontSize: "1.2rem", margin: "0.3rem 0", lineHeight: 1.5 }}>
            Gender: iya
          </p>
          <p style={{ fontSize: "1.2rem", margin: "0.3rem 0", lineHeight: 1.5 }}>
            Usia: 60 detik
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
        tadinya mau dokumen2 apa tpi aku gatau yang diliat apa. paling vaksin
        ceritanya ini deskripsi singkat kayak, makannya bakso gulung, sangat tidak ramah bintang 1.
        hobinya bikin anak padahal keriput.
      </div>

      {/* Tombol kontak */}
      <button
        style={{
          backgroundColor: "#25d366",
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
          window.open("https://wa.me/6281234567890", "_blank");
        }}
        aria-label="Contact Shelter via WhatsApp"
      >
        {/* Icon WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"  // diperbesar sedikit
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326a7.95 7.95 0 0 0-11.197 0 7.968 7.968 0 0 0-2.378 5.65c0 1.427.371 2.851 1.07 4.092L.56 15.44l3.645-1.045a7.954 7.954 0 0 0 4.49 1.252c4.41 0 7.985-3.576 7.985-7.985a7.968 7.968 0 0 0-2.378-5.65zM8 13.69a6.657 6.657 0 0 1-3.417-.957l-.243-.145-2.162.62.62-2.168-.157-.25A6.671 6.671 0 0 1 1.312 8c0-3.682 2.995-6.678 6.678-6.678 1.785 0 3.458.696 4.713 1.95a6.656 6.656 0 0 1 1.95 4.713c0 3.683-2.995 6.678-6.678 6.678z" />
          <path d="M11.1 9.495c-.167-.084-.983-.485-1.136-.54-.152-.056-.263-.084-.374.083-.11.167-.427.54-.523.65-.096.11-.19.125-.357.042a2.653 2.653 0 0 1-.78-.48 2.955 2.955 0 0 1-.576-.714c-.11-.19-.012-.293.08-.38.083-.083.19-.216.285-.325.095-.11.127-.19.19-.317.063-.126.03-.237-.015-.32-.045-.083-.374-.9-.512-1.23-.135-.32-.273-.28-.374-.285a4.62 4.62 0 0 0-.47-.06c-.127 0-.32.045-.487.237-.167.19-.637.622-.637 1.52 0 .898.652 1.77.742 1.895.09.126 1.28 1.95 3.1 2.73.433.187.77.3 1.034.384.434.14.83.12 1.14.073.347-.054 1.06-.43 1.21-.848.15-.418.15-.776.105-.848-.045-.073-.166-.126-.34-.21z" />
        </svg>
        Contact Shelter
      </button>
    </main>
  );
};

export default Pet1Page;
