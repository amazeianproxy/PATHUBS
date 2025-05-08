"use client"; // Only if you have client-side interactivity (e.g., event handlers)

import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="w-auto bg-[#29361A] text-[#FCFAE1] flex items-center justify-between px-4 py-2">
            <div className="w-[40%] flex items-center justify-between">
                <Link href="/">
                    <div className="cursor-pointer">Logo</div>
                </Link>
                <Link href="/Pages/LostPet">
                    <div className="cursor-pointer">Lost Pet</div>
                </Link>
                <Link href="/Pages/Adopt">
                    <div className="cursor-pointer">Adopt</div>
                </Link>
            </div>
            <div className="w-15 h-15 bg-red-500 text-white flex items-center justify-center rounded-full ">
                Hi
            </div>
        </header>
    );
}