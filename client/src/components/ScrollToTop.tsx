"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Check if user is scrolled past 300px AND not at the very bottom (footer area)
      const isPastHero = scrollY > 300;
      const isNearFooter = scrollY + windowHeight >= docHeight - 200;

      // Show only when scrolled, but auto-hide at footer
      if (isPastHero && !isNearFooter) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-zinc-950 text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.2)] border border-zinc-800 transition-all duration-300 hover:bg-zinc-800 hover:scale-105 active:scale-95 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </button>
  );
}