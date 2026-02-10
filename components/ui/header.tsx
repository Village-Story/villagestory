"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="relative z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-12 items-center justify-between rounded-xl bg-gray-900/90 px-4 border border-gray-800 backdrop-blur">
          
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#features" className="text-gray-300 hover:text-white">
              Features
            </Link>
            {/* <Link href="#pricing" className="text-gray-300 hover:text-white">
              Pricing
            </Link> */}

            {/* Primary CTA */}
            <Link
              href="#demo"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 transition"
            >
              Get Demo
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}
