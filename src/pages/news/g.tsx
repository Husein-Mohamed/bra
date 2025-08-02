"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SecretLogin() {
  const router = useRouter();
  const [user, setUser]   = useState("");
  const [pass, setPass]   = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      user === process.env.NEXT_PUBLIC_ADMIN_USER &&
      pass === process.env.NEXT_PUBLIC_ADMIN_PASS
    ) {
      // mark as logged-in
      localStorage.setItem("isAdmin", "true");
      router.push("/news/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f6fafd] px-4">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-sm bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
          <Image
            src="/images/Logo/DPA LOGO-01.png"
            alt="DPA Logo"
            width={80}
            height={80}
          />
        </div>

        <div className="h-12" />

        <h2 className="text-center text-2xl font-bold text-[#080c2c] mb-6">
          Admin Login
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-center">
            {error}
          </div>
        )}

        <label className="block mb-4">
          <span className="text-sm text-gray-700">Username</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#47BDFF] outline-none"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Username"
          />
        </label>

        <label className="block mb-6">
          <span className="text-sm text-gray-700">Password</span>
          <input
            type="password"
            className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#47BDFF] outline-none"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="••••••••"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-[#47BDFF] hover:bg-[#3aa8e6] text-white font-semibold py-3 rounded-xl transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
