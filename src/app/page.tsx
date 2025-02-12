"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter(); // Fix: useRouter instead of redirect

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Fix: Prevent default form submission

    try {
      const response = await fetch("http://3.111.196.92:8020/api/v1/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          phone_number: phoneNumber,
          input_code: 0,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok && response.message !== "Incorrect Username") {
        localStorage.setItem("token", data);
        router.push("/dashboard"); // Fix: Use router.push instead of redirect
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-[#E5DEFF] via-[#FFDEE2] to-[#FDE1D3]">
      <div className="w-full max-w-md">
        <div className="relative p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent rounded-2xl" />
          <div className="relative">
            <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Welcome back
                </h2>
                <p className="text-gray-700">Enter your details to login</p>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="Username"
                  name="username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-2 bg-white text-black"
                />

                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 bg-white text-black"
                />

                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 bg-white text-black"
                />

                <Input
                  placeholder="Phone Number"
                  name="phone_number"
                  type="tel"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-2 bg-white text-black"
                />
              </div>

              <Button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium text-white transition-all rounded-lg bg-theme-600 hover:bg-theme-700 focus:outline-none focus:ring-2 focus:ring-theme-400 focus:ring-offset-2 bg-black/90"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
