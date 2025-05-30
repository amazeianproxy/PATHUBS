"use client";

import Header from "@/app/Component/header";
import Link from "next/link";
import React, { useState } from 'react';
import { supabase } from "@/lib/supabase"; // Ensure Supabase is initialized
import { useAuth } from "@/context/authContext"; // Import the Auth context
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const { setSignedUp } = useAuth(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page refresh

        if (!email || !password) {
            setErrorMessage("Please enter both email and password.");
            return;
        }

        const { data, error } = await supabase
            .from("users")
            .select("email, password, name")
            .eq("email", email)
            .eq("password", password)
            .single();

        if (error || !data) {
            setErrorMessage("Invalid email or password.");
            return;
        }

        // Check if password matches
        if (data.password !== password) {
            setErrorMessage("Invalid email or password.");
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

                    <div className="text-center font-medium text-gray-600 mt-4">Or</div>

                    <button className="flex items-center justify-center gap-3 bg-neutral-100 rounded-full py-2 px-4 w-full shadow-md hover:bg-neutral-200">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
                        <span className="text-black font-medium">Continue with Google</span>
                    </button>
                    </div>
            </div>
        </div>
    </div>
  );
};

export default Login;