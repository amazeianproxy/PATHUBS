"use client";

import Header from "@/app/Component/header";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const lostAnimals = [
  {
    id: 1,
    name: "Schera The Cat",
    description: "Warna Coklat, sangat Pintar dan memakai kalung berlian biru",
    notes: "Dia sangat menyukai makanan mewah, biasa didekat restoran mewah",
    location: "Eiffel Tower, Paris, France",
    image: "/assets/schera.png",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9991206816497!2d2.293508915674528!3d48.8588449792878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fddf987ec61%3A0x9b0b9b9e1fa8d4f5!2sEiffel%20Tower!5e0!3m2!1sen!2sid!4v1685000000000!5m2!1sen!2sid",
    mapsLink: "https://www.google.com/maps/place/Eiffel+Tower",
  },
  {
    id: 2,
    name: "Megatron The Hamster",
    description: "Hamster bola bulat, tidak memakai kalung, terakhir terlihat malam hari",
    notes: "Megatron takut suara keras, mungkin bersembunyi di dalam kantong belanja majikannya.",
    location: "Times Square, New York, USA",
    image: "/assets/megatron.png",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.903108727696!2d-73.98715558459483!3d40.75889627932615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d9e26e2d%3A0x288b6b78b34cb507!2sTimes%20Square!5e0!3m2!1sen!2sid!4v1685000000000!5m2!1sen!2sid",
    mapsLink: "https://www.google.com/maps/place/Times+Square",
  },
  {
    id: 3,
    name: "Cupcake The Python",
    description: "Ular putih lonjong, terakhir terlihat dekat PC yang terbuka VSCODE",
    notes: "Cupcake suka tempat yang banyak hamster dan sering berlindung di belakang java IDE.",
    location: "Ueno Park, Tokyo, Japan",
    image: "/assets/cupcake.png",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.753283783693!2d139.77095921525646!3d35.714765880188795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec2c0d21db3%3A0x2733f2a61dd16c2c!2sUeno%20Park!5e0!3m2!1sen!2sid!4v1685000000000!5m2!1sen!2sid",
    mapsLink: "https://www.google.com/maps/place/Ueno+Park",
  },
  {
    id: 4,
    name: "Luigi The Hedgehog",
    description: "Warnanya Ijo, memakai topi hijau, larinya lambat, tidurnya cepat, berbeda dari saudaranya",
    notes: "Karena suka tidur, bisa ditemukan di sofa BINUS University depan GOR",
    location: "Sofa GOR Bina Nusantara University",
    image: "/assets/luigi.png",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020.6323093089081!2d106.64836048351755!3d-6.223113164824601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb20a9906e13%3A0xf75c5296d0a385e4!2sBINUS%20%40Alam%20Sutera!5e0!3m2!1sen!2sid!4v1749489219451!5m2!1sen!2sid",
    mapsLink: "https://maps.app.goo.gl/wN5FztwuxN9hUWD39",
  },
];

const LostAnimalPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAnimals = lostAnimals.filter((animal) =>
    animal.name.toLowerCase().includes(searchQuery.toLowerCase())
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
          placeholder="Search Animal..."
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

          .animal-card {
            background-color: #fff;
            padding: 1rem;
            border-radius: 20px;
            margin-bottom: 1.5rem;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
            color: black;
            transition: box-shadow 0.3s ease, transform 0.3s ease;
          }

          .animal-card:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            transform: translateY(-6px);
          }

          .media-box {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 1rem;
          }

          .map-container,
          .image-container {
            flex: 1 1 45%;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .image-container {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f3f4f6;
          }

          .map-container iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
        `}</style>

        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {filteredAnimals.map((animal) => (
            <div className="animal-card" key={animal.id}>
              <h2 style={{ margin: 0, fontSize: "1.5rem" }}>{animal.name}</h2>
              <p style={{ marginTop: "0.25rem" }}>{animal.description}</p>
              <p style={{ marginTop: "0.5rem", fontStyle: "italic" }}>{animal.notes}</p>
              <p style={{ marginTop: "0.25rem", fontWeight: "bold" }}>
                Last seen: {animal.location}
              </p>
              <a
                href={animal.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1D4ED8",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                View on Google Maps
              </a>
              

              <div className="media-box">
                <div className="image-container">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    width={300}
                    height={300}
                    objectFit="contain"
                  />
                </div>
                <div className="map-container">
                  <iframe
                    title={`Map of ${animal.name}`}
                    src={animal.mapEmbed}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default LostAnimalPage;
