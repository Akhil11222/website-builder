"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight,
  ShieldCheck, 
  Lock,
  LayoutTemplate,
  CreditCard,
  Globe,
  ExternalLink,
  ShoppingBag,
  Eye,
  Send,
  Clock,
  Check,
  X,
  Tag,
  Mail,
  Sparkles
} from "lucide-react";

export default function Home() {
  const [selectedHeroCategory, setSelectedHeroCategory] = useState<"Agency" | "Ecommerce" | "Clinic">("Agency");
  const [catalogFilter, setCatalogFilter] = useState<string>("All");
  
  // Custom Quote Form State
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "Online Payments",
    "Mobile Responsive"
  ]);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // Email Lead Popup State
  const [showPopup, setShowPopup] = useState(false);
  const [popupEmail, setPopupEmail] = useState("");
  const [popupCaptured, setPopupCaptured] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handlePopupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (popupEmail.trim()) {
      setPopupCaptured(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2500);
    }
  };

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  // Interactive Mouse / Touch Position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      });
      setIsHovered(true);
    }
  };

  // Website Catalog Data
  const catalogWebsites = [
    {
      id: "template-1",
      title: "Luxe Minimalist Store",
      category: "E-Commerce",
      description: "High-speed apparel & product store with clean cart and checkout system.",
      fullPrice: "₹9,999",
      tokenPrice: "₹999",
      pages: 6
    },
    {
      id: "template-2",
      title: "Aura Creative Agency",
      category: "Agency",
      description: "Editorial aesthetic for marketing agencies, consultants, and creative studios.",
      fullPrice: "₹12,499",
      tokenPrice: "₹1,249",
      pages: 5
    },
    {
      id: "template-3",
      title: "Bistro & Artisan Cafe",
      category: "Restaurant",
      description: "Digital menu, table reservation booking, and location showcase.",
      fullPrice: "₹8,999",
      tokenPrice: "₹899",
      pages: 4
    },
    {
      id: "template-4",
      title: "Apex Urban Properties",
      category: "Real Estate",
      description: "Modern luxury property listings, filterable search, and agent contact leads.",
      fullPrice: "₹14,999",
      tokenPrice: "₹1,499",
      pages: 7
    },
    {
      id: "template-5",
      title: "Prime Health & Clinic",
      category: "Healthcare",
      description: "Patient appointment scheduling, doctor profiles, and service menus.",
      fullPrice: "₹10,999",
      tokenPrice: "₹1,099",
      pages: 5
    },
    {
      id: "template-6",
      title: "Personal Executive Portfolio",
      category: "Portfolio",
      description: "Showcase case studies, publications, and professional background.",
      fullPrice: "₹7,999",
      tokenPrice: "₹799",
      pages: 4
    }
  ];

  const filteredWebsites = catalogFilter === "All" 
    ? catalogWebsites 
    : catalogWebsites.filter(w => w.category === catalogFilter);

  return (
    <main 
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={() => setIsHovered(false)}
      className="min-h-screen bg-[#fafafa] text-zinc-900 relative overflow-x-hidden selection:bg-zinc-200"
    >
      
      {/* Interactive Background Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0.6,
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 0.03), transparent 70%)`
        }}
      />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[900px] h-[600px] lg:h-[900px] rounded-full border border-zinc-200/40 pointer-events-none" />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 pb-16 relative z-10">
        
        {/* Top Trust Pill (Clean Charcoal Tone - No Green) */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs text-xs font-medium text-zinc-800">
            <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
            <span className="font-semibold">Ready Websites</span>
            <span className="text-zinc-300">•</span>
            <span className="text-zinc-600">10% Reservation Token</span>
          </div>
        </div>

        {/* Headline - Fully Responsive */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.18] sm:leading-[1.15]">
            Websites Built for Your Business. <br />
            <span className="text-zinc-600 font-semibold">Delivered Live on Your Domain.</span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed px-2">
            Choose from hand-crafted business websites. Pay a simple 10% reservation token, and our team connects your domain, hosts your site, and hands over complete access.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 px-4 sm:px-0">
            <Link
              href="#websites"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-zinc-950 text-white hover:bg-zinc-800 transition-all shadow-sm active:scale-95"
            >
              <span>Browse Websites</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              href="#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm active:scale-95"
            >
              <span>Custom Requirements</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </Link>
          </div>
        </div>

        {/* Browser Showcase - 100% Responsive */}
        <div className="mt-10 sm:mt-14 max-w-5xl mx-auto">
          
          {/* Category Switcher Tabs */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 px-2">
            {(["Agency", "Ecommerce", "Clinic"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedHeroCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedHeroCategory === cat
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50"
                }`}
              >
                {cat === "Agency" && "Agency"}
                {cat === "Ecommerce" && "E-Commerce"}
                {cat === "Clinic" && "Clinic"}
              </button>
            ))}
          </div>

          {/* Browser Window Frame */}
          <div className="rounded-xl sm:rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
            
            {/* Top Control Bar */}
            <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
              </div>
              
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-zinc-200 rounded-md text-[11px] font-mono text-zinc-600 max-w-xs w-full justify-center truncate">
                <Lock className="w-3 h-3 text-zinc-700 shrink-0" />
                <span className="truncate">
                  preview.websitebuilder.com/{selectedHeroCategory.toLowerCase()}
                </span>
              </div>

              <div className="w-8 hidden sm:block"></div>
            </div>

            {/* Inner Content - Clean Monochrome / Charcoal Layout */}
            <div className="p-4 sm:p-8 bg-white">
              <div className="rounded-xl border border-zinc-200 p-4 sm:p-6 bg-[#fafafa]">
                
                {/* Mock Nav */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-zinc-200">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-zinc-950 text-white flex items-center justify-center text-[10px] font-bold">
                      W
                    </div>
                    <span className="font-bold text-xs text-zinc-900">
                      {selectedHeroCategory === "Agency" && "Aura Studio"}
                      {selectedHeroCategory === "Ecommerce" && "Luxe Apparel"}
                      {selectedHeroCategory === "Clinic" && "Apex Health"}
                    </span>
                  </div>
                  <div className="flex gap-3 text-[11px] font-medium text-zinc-500">
                    <span>Home</span>
                    <span>Services</span>
                  </div>
                </div>

                {/* Mock Body */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2.5">
                    <div className="inline-block px-2 py-0.5 rounded bg-zinc-200/80 text-[10px] font-semibold text-zinc-800 uppercase tracking-wider">
                      Ready Website
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-950 leading-snug">
                      {selectedHeroCategory === "Agency" && "Award-winning design & marketing presence."}
                      {selectedHeroCategory === "Ecommerce" && "High-converting online store with seamless checkout."}
                      {selectedHeroCategory === "Clinic" && "Professional patient booking & health practice."}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Optimized for speed, SEO, and 100% responsiveness on all mobile screens.
                    </p>
                  </div>

                  {/* Clean Pricing Card (ZERO GREEN - Clean Dark Accent) */}
                  <div className="bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                        Pricing Breakdown
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-900 border border-zinc-200">
                        10% Token
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between text-zinc-600">
                        <span>Total Price:</span>
                        <span className="font-semibold text-zinc-900 font-mono">₹9,999</span>
                      </div>
                      <div className="flex justify-between text-zinc-600">
                        <span>Due after launch:</span>
                        <span className="font-semibold text-zinc-900 font-mono">₹9,000</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm font-bold text-zinc-950 pt-2 border-t border-zinc-100">
                        <span>Pay to Reserve:</span>
                        <span className="bg-zinc-950 text-white px-2.5 py-0.5 rounded font-mono">₹999</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-zinc-500 flex items-center gap-1.5 border-t border-zinc-100">
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-800 shrink-0" />
                      <span>100% money-back guarantee before delivery.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: HOW IT WORKS (CLEAN ICONS, ZERO GREEN) */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="py-16 sm:py-20 bg-white border-y border-zinc-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              How It Works
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950">
              A Transparent 3-Step Delivery Model
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 px-4">
              No endless meetings or complex contracts. Choose your site, lock your token, and we handle the technical delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Step 1 */}
            <div className="bg-[#fafafa] border border-zinc-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 text-white flex items-center justify-center">
                    <LayoutTemplate className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-500 bg-white border border-zinc-200 px-2.5 py-1 rounded-md">
                    01
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                  Select Your Website
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Browse our catalog of modern websites. Open full interactive previews on your mobile or laptop to inspect every page before deciding.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-zinc-200 flex items-center gap-2 text-xs font-semibold text-zinc-900">
                <Eye className="w-3.5 h-3.5 text-zinc-700" />
                <span>Live Interactive Previews</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#fafafa] border border-zinc-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 text-white flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-500 bg-white border border-zinc-200 px-2.5 py-1 rounded-md">
                    02
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                  Lock with 10% Token
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Pay only a 10% to 15% token deposit to reserve the website exclusively for your business. Zero full-payment risk up-front.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-zinc-200 flex items-center gap-2 text-xs font-semibold text-zinc-900">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-700" />
                <span>90% Balance Due on Delivery</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#fafafa] border border-zinc-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-300 transition-all">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 text-white flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-500 bg-white border border-zinc-200 px-2.5 py-1 rounded-md">
                    03
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                  Domain Setup & Delivery
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Our team connects your domain, configures secure cloud hosting, uploads your branding, and delivers the live website in 48 hours.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-zinc-200 flex items-center gap-2 text-xs font-semibold text-zinc-900">
                <Globe className="w-3.5 h-3.5 text-zinc-700" />
                <span>Domain & Hosting Delivered</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WEBSITES CATALOG (CLEAN MONOCHROME CARDS - ZERO GREEN) */}
      {/* ========================================================================= */}
      <section id="websites" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5">
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-block px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              Website Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950">
              Hand-Crafted Business Websites
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-xl">
              Inspect full-page previews, explore page structures, and book your chosen design with a 10% token.
            </p>
          </div>

          {/* Filter Pills - Mobile Horizontal Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {["All", "E-Commerce", "Agency", "Restaurant", "Real Estate", "Healthcare", "Portfolio"].map((category) => (
              <button
                key={category}
                onClick={() => setCatalogFilter(category)}
                className={`whitespace-nowrap px-3 sm:px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0 ${
                  catalogFilter === category
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid - 100% Mobile/Desktop Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredWebsites.map((site) => (
            <div
              key={site.id}
              className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Code-Rendered Preview */}
                <div className="bg-zinc-100/70 p-3 border-b border-zinc-200">
                  <div className="rounded-xl border border-zinc-200 bg-white p-3.5 h-40 flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-zinc-300"></span>
                        <span className="w-2 h-2 rounded-full bg-zinc-300"></span>
                        <span className="w-2 h-2 rounded-full bg-zinc-300"></span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {site.pages} Pages
                      </span>
                    </div>

                    <div className="space-y-1.5 my-auto">
                      <div className="h-4 w-3/4 bg-zinc-950 rounded font-bold text-[10px] text-white flex items-center px-2">
                        {site.title}
                      </div>
                      <div className="h-2 w-full bg-zinc-100 rounded"></div>
                      <div className="h-2 w-2/3 bg-zinc-100 rounded"></div>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-zinc-400 pt-1 border-t border-zinc-100">
                      <span>Responsive</span>
                      <span className="text-zinc-800 font-semibold">Ready to Ship</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-[11px] font-semibold text-zinc-700">
                      {site.category}
                    </span>
                    <span className="text-xs font-mono font-medium text-zinc-500">
                      Total: {site.fullPrice}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-950">
                      {site.title}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-1 leading-relaxed line-clamp-2">
                      {site.description}
                    </p>
                  </div>

                  {/* Clean Token Box (ZERO GREEN - Elegant Charcoal/Zinc) */}
                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider block">
                        Reserve Today (10% Token)
                      </span>
                      <span className="text-base font-bold text-zinc-950 font-mono">
                        {site.tokenPrice}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-zinc-200 text-zinc-800">
                      90% on Launch
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => alert(`Opening live preview for ${site.title}`)}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-50 transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Live Preview</span>
                </button>

                <button
                  onClick={() => alert(`Booking ${site.title} with 10% token (${site.tokenPrice}).`)}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-zinc-950 text-white hover:bg-zinc-800 transition-all shadow-xs active:scale-95"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Book (10%)</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: GET A QUOTE (100% RESPONSIVE FORM) */}
      {/* ========================================================================= */}
      <section id="quote" className="py-16 sm:py-24 bg-white border-t border-zinc-200 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              Custom Requirements
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950">
              Need Something Custom? Get a Quote.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 px-2">
              Have unique specifications beyond our ready-made catalog? Tell us what you need and our technical team will prepare a structured proposal within 4 hours.
            </p>
          </div>

          <div className="bg-[#fafafa] border border-zinc-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xs">
            {quoteSubmitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-zinc-950 text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950">
                  Quote Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto">
                  Our technical team is reviewing your specifications. We will send a detailed timeline and milestone pricing to your email within 4 hours.
                </p>
                <button
                  onClick={() => setQuoteSubmitted(false)}
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-zinc-950 text-white mt-4"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteSubmitted(true);
                }} 
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-2.5">
                    1. Select Features You Need
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Online Payments",
                      "User Accounts / Login",
                      "Mobile Responsive",
                      "Admin CMS Dashboard",
                      "Table / Appointment Booking",
                      "Live Chat Support Integration",
                      "Multi-Language Support",
                      "Custom CRM / API Integration"
                    ].map((feature) => {
                      const isSelected = selectedFeatures.includes(feature);
                      return (
                        <button
                          type="button"
                          key={feature}
                          onClick={() => toggleFeature(feature)}
                          className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border ${
                            isSelected
                              ? "bg-zinc-950 text-white border-zinc-950 shadow-xs"
                              : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-100"
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-zinc-300"}`}></span>
                          <span>{feature}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                      2. Estimated Budget Range
                    </label>
                    <select className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 focus:outline-none focus:border-zinc-900">
                      <option>₹10,000 – ₹25,000</option>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000+ (Enterprise Custom)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                      3. Target Delivery Timeline
                    </label>
                    <select className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 focus:outline-none focus:border-zinc-900">
                      <option>Standard (3 - 5 Days)</option>
                      <option>Urgent Priority (24 - 48 Hours)</option>
                      <option>Flexible / Planning Phase</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Akhil Tiwari"
                      className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 focus:outline-none focus:border-zinc-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                      Business Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="akhil@company.com"
                      className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 focus:outline-none focus:border-zinc-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 focus:outline-none focus:border-zinc-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                    4. Project Requirements
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your business, required pages, reference websites..."
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 focus:outline-none focus:border-zinc-900 resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-zinc-200">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Clock className="w-4 h-4 text-zinc-700 shrink-0" />
                    <span>Guaranteed reply within 4 business hours.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-950 text-white hover:bg-zinc-800 transition-all shadow-xs active:scale-95"
                  >
                    <span>Submit Quote Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: LEAD CAPTURE BANNER */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#fafafa] border-t border-zinc-200 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700">
            <Mail className="w-3.5 h-3.5 text-zinc-900" />
            <span>Weekly Releases</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-950">
            Get Notified When New Business Templates Drop
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-lg mx-auto px-2">
            Join over 1,200+ founders receiving early access to ready-made websites and launch discounts.
          </p>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! You'll receive our newest templates.");
            }} 
            className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto pt-1"
          >
            <input
              type="email"
              required
              placeholder="Enter your email..."
              className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm font-medium text-zinc-800 focus:outline-none focus:border-zinc-950"
            />
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-950 text-white hover:bg-zinc-800 transition-all shadow-xs active:scale-95"
            >
              Get Updates
            </button>
          </form>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FLOATING LEAD CAPTURE POPUP - MOBILE DOCKED & RESPONSIVE */}
      {/* ========================================================================= */}
      {showPopup && (
        <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-80 z-50 bg-white border border-zinc-200 rounded-2xl p-4 sm:p-5 shadow-xl">
          
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-3 right-3 p-1 text-zinc-400 hover:text-zinc-900 rounded-md transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {popupCaptured ? (
            <div className="py-3 text-center space-y-1.5">
              <div className="w-9 h-9 rounded-full bg-zinc-950 text-white flex items-center justify-center mx-auto">
                <Check className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-zinc-950">Discount Code Sent!</h4>
              <p className="text-[11px] text-zinc-500">Check your inbox for ₹1,000 off your first website token.</p>
            </div>
          ) : (
            <form onSubmit={handlePopupSubmit} className="space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-zinc-950 text-white flex items-center justify-center">
                  <Tag className="w-3 h-3 text-white" />
                </div>
                <span className="text-[11px] font-bold text-zinc-950 uppercase tracking-wider">
                  Limited Offer
                </span>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-zinc-950">
                  Claim ₹1,000 Off Your Website Token
                </h4>
                <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed">
                  Enter your email to receive an instant coupon code for booking today.
                </p>
              </div>

              <div className="pt-1 flex flex-col gap-2">
                <input
                  type="email"
                  required
                  value={popupEmail}
                  onChange={(e) => setPopupEmail(e.target.value)}
                  placeholder="name@business.com"
                  className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-xs font-medium text-zinc-800 focus:outline-none focus:bg-white focus:border-zinc-950"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg text-xs font-bold bg-zinc-950 text-white hover:bg-zinc-800 transition-all shadow-xs active:scale-95"
                >
                  Claim Discount
                </button>
              </div>
            </form>
          )}

        </div>
      )}

    </main>
  );
}