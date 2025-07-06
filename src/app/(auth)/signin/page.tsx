"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#101010] flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-10 bg-[#101010]/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            InsightBolt
          </span>
        </Link>
      </nav>

      {/* Main Section */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 text-center gap-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Welcome back
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Please sign in to continue
          </p>
        </div>

        <form
          action={async () => {
            await signIn("google");
          }}
        >
          <Button
            type="submit"
            className="flex items-center gap-3 px-6 py-3 bg-white text-black hover:bg-neutral-200 transition-all rounded-xl shadow-lg"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-sm font-medium">Sign in with Google</span>
          </Button>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
