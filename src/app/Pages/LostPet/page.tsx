"use client";

import React from "react";
import Link from "next/link";
import Header from "@/app/Component/header"; 

const LostAnimalPage = () => {
  return (
    <>
    <Header />
    <main style={{ backgroundColor: "#fccc52", minHeight: "100vh", padding: "1rem" }}>
      {/* Back Button */}
      <Link
        href="/home"
        style={{
          position: "absolute",
          top: "1vw",
          left: "1vw",
          fontSize: "1.5vw",
          textDecoration: "none",
          backgroundColor: "white",
          color: "black",
          borderRadius: "50px",
          width: "12.5vw",
          aspectRatio: "2 / 1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 5px rgba(0,0,0,0.2)",
          zIndex: 10,
        }}
      >
        ←
      </Link>

      {/* Animal Info */}
      <section
        style={{
          marginTop: "8vw",
          display: "flex",
          justifyContent: "center",
          padding: "0 2vw",
        }}
      >
        <div
          style={{
            width: "80vw",
            height: "24vw",
            display: "flex",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/73/Orangutan.jpg"
              alt="Lost Animal"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "10px 0 0 10px",
              }}
            />
          </div>
          <div
            style={{
              width: "60%",
              padding: "2vw",
              fontSize: "1.2vw",
              display: "flex",
              alignItems: "center",
            }}
          >
            Isinya nama, deskripsi, jenis, umur, ada kalung atau tidak.
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div style={{ textAlign: "center", fontSize: "2vw", fontWeight: "bold", marginTop: "3vw" }}>
        Last seen location:
      </div>
      <div
        style={{
          width: "80vw",
          height: "30vw",
          margin: "1vw auto",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3880141756345!2d106.6540412757415!3d-6.211544060845775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbe3833fc5b7%3A0xa801fa1f2f1346cb!2sBINUS%20@Alam%20Sutera!5e0!3m2!1sen!2sid!4v1685000000000!5m2!1sen!2sid"
          allowFullScreen
          loading="lazy"
          title="Map"
          style={{ width: "100%", height: "100%", border: "none" }}
        ></iframe>
      </div>

      {/* Footer */}
      <footer style={{ margin: "3vw 0", textAlign: "center" }}>
        <button
          style={{
            width: "12vw",
            aspectRatio: "2 / 1",
            backgroundColor: "#25d366",
            color: "white",
            border: "none",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1vw",
            gap: "0.6vw",
            padding: "0.5vw 1vw",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            cursor: "pointer",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            style={{ width: "1.5vw", height: "1.5vw" }}
          />
          Contact Owner
        </button>
      </footer>
    </main>
    </>
  );
};

export default LostAnimalPage;