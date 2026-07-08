"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../lib/site";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/refund", label: "Refund" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="KiranaCart Home"
        >
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-[#FFD200] shadow-md">
            <Image
              src="/kiranacart-logo.png"
              alt="KiranaCart Logo"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-lg font-extrabold text-black">
              {siteConfig.name}
            </span>
            <span className="text-[11px] text-gray-500">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-2 md:flex"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-[#FFD200] hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open ? "true" : "false"}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 transition hover:bg-yellow-100 md:hidden"
        >
          {open ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-yellow-200 bg-white shadow-md md:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col p-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition hover:bg-[#FFD200]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
