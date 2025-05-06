/*
 User Story:

  This is a homepage built with modern tools like Next.js, Tailwind CSS, TypeScript, and shadcn/ui,
  So that I can learn about the project and easily access the GitHub repository.

 Tech Stack:
  Next.js (React Framework)
   TypeScript (type safety)
   Tailwind CSS (utility-first styling)
   shadcn/ui (reusable UI components like Card,CardConten, and Button)
   styled-jsx (for scoped custom animation)
*/

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  type LinkInfo = {
    url: string;
    label: string;
  };

  const githubLink: LinkInfo = {
    url: "https://github.com/ruma/my-project",
    label: "View on GitHub",
  };

  useEffect(() => {
    if (clicked) {
      alert("Thanks for clicking!");
      setClicked(false);
    }
  }, [clicked]);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-8 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images (2).jpeg')",
      }}
    >
      <Card className="w-full max-w-md rounded-2xl shadow-2xl transition-transform hover:scale-105 animate-fade-in">
        <CardContent className="p-6">
          <div className="flex items-center justify-center gap-2 mb-4 ">
            <Image
              src="/nextjs-icon.svg"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
              Welcome to My Project
            </h1>
          </div>
          <p className="text-gray-600 text-center mb-6">
            Built with
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">Tailwind CSS</span>,{" "}
            <span className="font-semibold">TypeScript</span>, and{" "}
            <span className="font-semibold">shadcn/ui</span>.
          </p>
          <div className="flex justify-center mb-4">
            <Button
              variant={"destructive"}
              className="cursor-pointer"
              onClick={() => setClicked(true)}
            >
              Click Me
            </Button>
          </div>
          <div className="text-sm text-center text-gray-500">
            Designed with love and built for speed
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://github.com/ruma/my-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              {/* Applied the typed data  */}
              {githubLink.label}
            </a>
          </div>

          {/* New Login Link */}
          <div className="mt-4 flex justify-center">
            <Link href="/login">
              <Button className="mt-2 cursor-pointer" variant={"default"}>
                Go to Login
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* using custom styling */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            // It's invisible (opacity: 0) and moved down a little (10px)
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            // It's fully visible (opacity: 1) and back to normal position
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </main>
  );
}

// fade-in: name of the animation

// 0.6s: animation duration (how long it takes)

// ease-out: animation style (starts fast, ends slow)
