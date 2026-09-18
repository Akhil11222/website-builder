"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Search, ChevronDown, Layers } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    "E-Commerce & Store",
    "Agency & Corporate",
    "Portfolio & Resume",
    "Restaurant & Cafe",
    "Real Estate",
    "Healthcare & Clinic",
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* Real Brand Logo - Represents Website Building */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white shadow-sm hover:scale-105 transition-transform">
            {/* Architectural Web Layout Icon */}
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            WebsiteBuilder
          </span>
        </Link>

        {/* Center: Category Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-6 relative">
          <div className="relative w-full flex items-center">
            <Search className="w-4 h-4 absolute left-3 text-gray-400 pointer-events-none" />
            <input
              type="text"
              readOnly
              onClick={() => setSearchOpen(!searchOpen)}
              value={selectedCategory}
              placeholder="Search by category..."
              className="w-full pl-9 pr-8 py-2 text-sm bg-gray-50 hover:bg-gray-100/80 border border-gray-200 rounded-lg text-gray-800 font-medium cursor-pointer transition-all focus:outline-none focus:border-black"
            />
            <ChevronDown className="w-4 h-4 absolute right-3 text-gray-400 pointer-events-none" />
          </div>

          {/* Category Dropdown Menu */}
          {searchOpen && (
            <div className="absolute top-11 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
              <div className="px-3 py-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                Select Website Category
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSearchOpen(false);
                  }}
                  className="w-full text-left px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition-colors flex items-center justify-between"
                >
                  <span>{cat}</span>
                  {selectedCategory === cat && (
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#websites"
            className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors"
          >
            Websites
          </Link>
          <Link
            href="#how-it-works"
            className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#about"
            className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#blogs"
            className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors"
          >
            Blogs
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <Link
            href="/login"
            className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="#quote"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-all shadow-sm"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-6 pt-3 pb-6 space-y-3">
          {/* Mobile Category Selector */}
          <div className="py-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2 px-3 text-sm bg-gray-50 border border-gray-200 rounded-lg text-gray-800 font-medium"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <Link
            href="#websites"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-800 hover:text-black"
          >
            Websites
          </Link>
          <Link
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-800 hover:text-black"
          >
            How It Works
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-800 hover:text-black"
          >
            About Us
          </Link>
          <Link
            href="#blogs"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-800 hover:text-black"
          >
            Blogs
          </Link>
          <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-medium text-gray-700"
            >
              Sign In
            </Link>
            <Link
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-black text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}