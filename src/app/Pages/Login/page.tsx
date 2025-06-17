"use client";

import Header from "@/app/Component/header";
import Link from "next/link";
import React, { useState } from 'react';
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const { setSignedUp } = useAuth(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page refresh

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        const { data, error } = await supabase
            .from("users")
            .select("email, password, name")
            .eq("email", email)
            .eq("password", password)
            .single();

        if (error || !data) {
            alert("Invalid email or password.");
            return;
        }

        // Check if password matches
        if (data.password !== password) {
            alert("Password does not match.");
            return;
        }

        // Successful login
        setSignedUp(true);
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        router.push("/");
    };    

    return (
        <div className="bg-[#FCD34D] min-h-screen">
            <Header/>
            <br></br>
            <br></br>
            <div className="w-screen flex items-center justify-center">
                <div className="bg-white w-[600px] rounded-md shadow-md overflow-hidden">
                    {/* Tabs */}
                    <div className="flex">
                    <button className="w-1/2 bg-[#FF8400] text-white text-center font-semibold py-3">Login</button>
                    <Link href="/Pages/Register" className="w-1/2 bg-[#FFAD6E] text-white text-center font-semibold py-3 hover:bg-orange-600 transition">Register</Link>
                    </div>

                    {/* Form */}
                    <div className="p-6 space-y-4">
                    <form onSubmit={handleLogin} className="p-6 space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-full bg-[#423534] text-white placeholder-white shadow-md outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-full bg-[#423534] text-white placeholder-white shadow-md outline-none"
                        />
                        <button className="w-full bg-[#FF8400] text-white font-medium py-3 rounded-full shadow-md hover:bg-orange-600 transition">
                            Login
                        </button>
                    </form>
                    </div>
            </div>
        </div>
    </div>
  );
};

export default Login;

// Ian Mulya Chiuandi membuat keseluruhan kode ini.