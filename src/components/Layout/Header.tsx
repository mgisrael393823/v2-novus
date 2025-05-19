
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  
  return (
    <header className="py-6 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-semibold tracking-tight">
              The Novus
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
