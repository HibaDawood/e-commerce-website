"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      router.push("/");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError("Plaese Input ypur Email and Password");
      return;
    }
    // Here you would typically validate against a backend
    // For this example, we'll use a dummy check
    if (email === "abc@gmail.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      setError("Wrong Email or Password");
    }
  };

  return (
    <div
      style={{
        fontFamily: "Prompt",
      }}
      className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-gradient-to-br
     from-purple-400 via-blue-100 to-purple-500"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative py-3 sm:max-w-xl sm:mx-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-4xl text-gray-800 flex justify-center mb-8 font-bold">
                Login
              </h1>
            </div>
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  placeholder="abc@gmail.com"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-700 text-sm transition-all peer-placeholder-shown:text-base
                   peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 
                   peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-14 w-full border-b-2 border-gray-300 text-gray-900 
                  focus:outline-none focus:border-rose-600"
                  placeholder="123456"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-700 text-sm transition-all peer-placeholder-shown:text-base
                   peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5
                    peer-focus:text-gray-800 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-400 text-white font-semibold 
                  rounded-lg shadow-md hover:from-cyan-500 hover:to-blue-950 focus:outline-none focus:ring-2 
                  focus:ring-cyan-400 focus:ring-opacity-75"
                >
                  Login
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
