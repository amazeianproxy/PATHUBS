"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      setUserName(null);
      setLoading(false);
      return;
    }

    const fetchUserName = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("users")
        .select("name")
        .eq("email", email)
        .single();

      if (error || !data) {
        console.error("Failed to fetch user name:", error?.message);
        setUserName(null);
      } else {
        setUserName(data.name);
      }
      setLoading(false);
    };

    fetchUserName();
  }, []);

  const handleSignOut = () => {
    // Clear all relevant localStorage keys on sign out
    localStorage.removeItem("email");
    localStorage.removeItem("name");

    setUserName(null);
    router.push("/Pages/Login");
  };

  const navItems = [
    { label: "Lost Pet", href: "/Pages/LostPet" },
    { label: "Adopt", href: "/Pages/Adopt" },
    { label: "Education", href: "/Pages/Education" },
    { label: "Forum", href: "/Pages/Forum" },
  ];

  return (
    <header className="w-full">
      <div className="bg-[#FCD34D] text-black flex items-center justify-between px-6 py-4">
        <Link href="/" className="cursor-pointer text-2xl font-bold transition-colors duration-200 hover:text-[#eb3434]">
          Home
        </Link>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold pointer-events-none select-none">
            PATHUBS
        </div>
        <div className="flex items-center gap-4">
          {!loading && userName ? (
            <>
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-800 transition"
              >
                Log off
              </button>
              <span className="text-2xl font-bold cursor-default">{userName}</span>
            </>
          ) : (
            <Link href="/Pages/Register" className="cursor-pointer text-2xl font-bold transition-colors duration-200 hover:text-[#eb3434]">
              Account
            </Link>
          )}
        </div>
      </div>

      <nav className="bg-[#F78B3B] text-black flex justify-around text-xl font-medium items-center h-[60px]">
        {navItems.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-full ${
                isActive ? "bg-[#343030] text-white" : "cursor-pointer"
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

// Ian Mulya Chiuandi membuat keseluruhan kode ini.