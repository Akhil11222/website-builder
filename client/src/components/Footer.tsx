import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 text-zinc-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-zinc-950 flex items-center justify-center text-white shadow-sm">
                <svg
                  className="w-4 h-4 text-white"
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
              <span className="text-lg font-bold text-zinc-950 tracking-tight">
                WebsiteBuilder
              </span>
            </Link>
            
            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
              Curated, production-grade business websites deployed directly to your domain. Book with a 10% advance token and take your business online without technical friction.
            </p>

            <div className="flex items-center gap-3 text-xs text-zinc-500 pt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-950"></span>
                <span className="text-zinc-800 font-medium">Deployments Active</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-800" />
                <span className="text-zinc-800 font-medium">SSL Encrypted</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#websites" className="hover:text-zinc-950 transition-colors">
                  Websites Catalog
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-zinc-950 transition-colors">
                  How It Works (10% Model)
                </Link>
              </li>
              <li>
                <Link href="#quote" className="hover:text-zinc-950 transition-colors">
                  Custom Quote
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-zinc-950 transition-colors">
                  About the Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">
              Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#websites" className="hover:text-zinc-950 transition-colors">
                  E-Commerce Stores
                </Link>
              </li>
              <li>
                <Link href="#websites" className="hover:text-zinc-950 transition-colors">
                  Agency & Studio
                </Link>
              </li>
              <li>
                <Link href="#websites" className="hover:text-zinc-950 transition-colors">
                  Restaurant & Cafe
                </Link>
              </li>
              <li>
                <Link href="#websites" className="hover:text-zinc-950 transition-colors">
                  Real Estate Listings
                </Link>
              </li>
              <li>
                <Link href="#websites" className="hover:text-zinc-950 transition-colors">
                  Clinic & Healthcare
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">
              Trust & Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-zinc-600">contact@websitebuilder.com</span>
              </li>
              <li>
                <span className="text-zinc-600">+91 98765 43210</span>
              </li>
              <li className="pt-2">
                <Link href="/terms" className="hover:text-zinc-950 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-zinc-950 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-zinc-950 transition-colors">
                  Token Refund Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} WebsiteBuilder Hub. All rights reserved.</p>
          <p>Built with modern Next.js architecture. Delivered worldwide.</p>
        </div>
      </div>
    </footer>
  );
}