"use client";

import Header from "@/app/Component/header";
import Link from "next/link";
import React, { useState } from 'react';
import { supabase } from "@/lib/supabase"; // Ensure Supabase is initialized
import { useAuth } from "@/context/authContext"; // Import the Auth context
import { useRouter } from "next/navigation";

const Register = () => {
    const router = useRouter();
    const { setSignedUp } = useAuth(); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page refresh

        if (!name || !email || !password) {
            alert("Please fill in all required fields.");
            return;
        }

        const { data, error } = await supabase.from("users").insert([
            { name, email, password}
        ]);

        if (error) {
            console.error("Error inserting data:", error);
        } else {
            console.log("Data inserted:", data);
            setName("");
            setEmail("");
            setPassword("");
            setSignedUp(true);

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            
            router.push("/");
        }
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
                    <Link href="/Pages/Login" className="w-1/2 bg-[#FFAD6E] text-white text-center font-semibold py-3 hover:bg-orange-600 transition">Login</Link>
                    <button className="w-1/2 bg-[#FF8400] text-white text-center font-semibold py-3">Register</button>
                    </div>

                    {/* Form */}
                    <div className="p-6 space-y-4">
                    <form onSubmit={handleRegister} className="p-6 space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-full bg-[#423534] text-white placeholder-white shadow-md outline-none"
                        />
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
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-full bg-[#423534] text-white placeholder-white shadow-md outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#FF8400] text-white font-medium py-3 rounded-full shadow-md hover:bg-orange-600 transition"
                        >
                            Register
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

export default Register;