"use client";

import React from "react";
import Link from "next/link";

const Shelter2 = () => {
  const animals = [
    { id: 1, name: "Rico Coco", image: "/assets/kucing2.jpg" },
    { id: 2, name: "Milo", image: "/assets/anjing2.jpg" },
  ];

  return (
    <main style={{ backgroundColor: "#fccc60", minHeight: "100vh", padding: "5rem" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", position: "relative" }}>
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
        <h1 style={{ backgroundColor: "white", padding: "0.5rem 1.5rem", borderRadius: "15px", fontSize: "2.5rem", margin: 0, color: "black" }}>
          Animal Shelter Alam Sutera
        </h1>
      </header>

      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" , marginTop: "5rem",}}>
        {animals.map((animal) => (
          <Link key={animal.id} href={`/Pages/Adopt/shelter2/pet${animal.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ backgroundColor: "white", borderRadius: "20px", overflow: "hidden", width: 400, cursor: "pointer", boxShadow: "0 0 8px rgba(0,0,0,0.1)", transition: "box-shadow 0.3s ease, transform 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)"; e.currentTarget.style.transform = "translateY(-10px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 8px rgba(0,0,0,0.1)"; e.currentTarget.style.transform = "none"; }}
            >
              <img src={animal.image} alt={animal.name} style={{ width: "100%", height: 400, objectFit: "cover" }} />
              <h2 style={{ margin: "1rem 0", textAlign: "center", fontStyle: "italic", fontWeight: "600", fontSize: "2rem", color: "#000000" }}>
                {animal.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Shelter2;