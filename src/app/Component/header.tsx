"use client"; // Only if you have client-side interactivity (e.g., event handlers)

import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from "react";

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { label: 'Lost Pet', href: '/Pages/LostPet' },
        { label: 'Adopt', href: '/Pages/Adopt' },
        { label: 'Education', href: '/Pages/Education' },
        { label: 'Forum', href: '/Pages/Forum' },
    ];

    return (
        <header className="w-full">
            {/* Top Bar */}
            <div className="bg-[#FCD34D] text-black flex items-center justify-between px-6 py-4">
                <Link href="/" className="cursor-pointer text-2xl font-bold">Home</Link>
                <div className="text-2xl font-bold">PATHUBS</div>
                <Link href="/Pages/Register" className="cursor-pointer text-2xl font-bold">Account</Link>
            </div>

            {/* Bottom Bar */}
            <nav className="bg-[#F78B3B] text-black flex justify-around text-xl font-medium items-center h-[60px]">
                {navItems.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                    <Link key={href} href={href} className={`px-4 py-2 rounded-full ${
                            isActive ? 'bg-[#343030] text-white' : 'cursor-pointer'
                        }`}
                    >
                    {label}
                    </Link>
                );
                })}
            </nav>
        </header>
    );
}