"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="/assets/images/chat_gpt.png"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn('google')}
        className="text-white font-bold text-3x animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
