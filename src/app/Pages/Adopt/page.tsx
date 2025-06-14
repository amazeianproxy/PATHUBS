"use client";

import Header from "@/app/Component/header";
import React, { useState } from "react";
import Link from "next/link";

const shelters = [
  {
    id: 1,
    name: "Animal Shelter Bintaro",
    description: "Di dominasi binatang anjing dan kucing dari newborn sampai dewasa",
    image: "/assets/shelter1.jpg",
    linkAdop: "/adop",
    linkShelter: "/shelter1",
  },
  {
    id: 2,
    name: "Animal Shelter Alam sutera",
    description: "Memiliki beragam jenis binatang yang sehat dan siap dirawat",
    image: "/assets/shelter2.png",
    linkAdop: "/adop",
    linkShelter: "/shelter2",
  },
  {
    id: 3,
    name: "Animal Shelter Gading Serpong",
    description: "Baru dibuka animal shelter baru pertama di Gading Serpong",
    image: "/assets/shelter3.png",
    linkAdop: "/adop",
    linkShelter: "/shelter3",
  },
  {
    id: 4,
    name: "Animal Shelter BSD",
    description: "Animal Shelter baru di BSD",
    image: "/assets/shelter4.png",
    linkAdop: "/adop",
    linkShelter: "/shelter4",
  },
];

const Adopt: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredShelters = shelters.filter((shelter) =>
    shelter.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <main
        style={{
          backgroundColor: "#FCD34D",
          minHeight: "100vh",
          padding: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Search Shelter..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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

          .shelter-card {
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

          .shelter-card:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            transform: translateY(-6px);
          }

          .shelter-image {
            width: 150px;
            height: 100px;
            border-radius: 15px;
            object-fit: cover;
            margin-right: 1rem;
            flex-shrink: 0;
          }
        `}</style>

        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {filteredShelters.map((shelter) => {
            const cardContent = (
              <div className="shelter-card">
                <img
                  src={shelter.image}
                  alt={shelter.name}
                  className="shelter-image"
                />
                <div>
                  <h2 style={{ margin: 0, fontSize: "1.5rem" }}>{shelter.name}</h2>
                  <p style={{ marginTop: "0.25rem" }}>{shelter.description}</p>
                </div>
              </div>
            );

            if (shelter.linkShelter) {
  return (
    <Link
      key={shelter.id}
      href={`/Pages/Adopt${shelter.linkShelter}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
        cursor: "pointer",
      }}
    >
      {cardContent}
    </Link>
  );
}

            return <div key={shelter.id}>{cardContent}</div>;
          })}
        </div>
      </main>
    </>
  );
};

export default Adopt;
