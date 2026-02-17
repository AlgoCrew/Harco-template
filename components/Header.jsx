"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// Importing more icons for random selection
import { Search, ChevronDown, Phone, Mail, ExternalLink, Zap, Factory, Menu, X, FileText, Settings, Database, Briefcase } from "lucide-react";

export default function Header() {
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // ... (menuData remains the same) ...
    const menuData = {
        solutions: {
            title: "Industrial Pipe Solutions",
            description: "Engineered PVC & CPVC for high-pressure systems.",
            items: [
                { name: "Industrial PVC", image: "/images/pvc.jpg", href: "/products/pvc" },
                { name: "High-Temp CPVC", image: "/images/cpvc.jpg", href: "/products/cpvc" },
                { name: "Flow Control Systems", image: "/images/flow.jpg", href: "/products/flow" },
                { name: "Custom Fabrication", image: "/images/fab.jpg", href: "/products/fab" },
            ],
            materials: [
                { name: "Industrial PVC", href: "/products/pvc" },
                { name: "High-Temp CPVC", href: "/products/cpvc" },
                { name: "Flow Control Systems", href: "/products/flow" },
                { name: "Custom Fabrication", href: "/products/fab" },
            ],
            applications: [
                { name: "Chemical Processing", href: "/markets/chemical" },
                { name: "Water Treatment", href: "/markets/water" },
                { name: "Power Generation", href: "/markets/power" },
                { name: "HVAC Systems", href: "/markets/hvac" },
            ]
        },
        allProducts: [
            { name: "Schedule 80 PVC Pipe", category: "Solutions", href: "/products/pvc" },
            { name: "CPVC Ball Valve", category: "Solutions", href: "/products/cpvc" },
            { name: "Butterfly Valve", category: "Solutions", href: "/products/flow" },
            { name: "PVC Tee Fitting", category: "Solutions", href: "/products/pvc" },
            { name: "Engineering Data Sheet - PVC", category: "Technical", href: "/resources/data" },
            { name: "BIM Model - CPVC", category: "Technical", href: "/resources/bim" },
        ],
        markets: {
            title: "Application Sectors",
            description: "Tailored solutions for demanding industries.",
            items: [
                { name: "Chemical Processing", icon: Factory, href: "/markets/chemical" },
                { name: "Water Treatment", icon: Zap, href: "/markets/water" },
                { name: "Power Generation", icon: Factory, href: "/markets/power" },
                { name: "HVAC Systems", icon: Zap, href: "/markets/hvac" },
            ]
        },
        engineering: {
            title: "Technical Resources",
            description: "Data sheets, CAD files, and compliance documentation.",
            items: [
                { name: "Data Sheets", href: "/resources/data" },
                { name: "BIM Library", href: "/resources/bim" },
                { name: "Certifications", href: "/resources/certs" },
                { name: "White Papers", href: "/resources/whitepapers" },
            ]
        }
    };

    // FILTERING LOGIC
    const filteredResults = searchQuery.length > 0
        ? menuData.allProducts.filter(item => 
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [];

    // Helper to get a semi-random icon based on item name
    const getResultIcon = (name) => {
        const icons = [FileText, Settings, Database, Briefcase, Zap];
        // Use string length to pick an icon consistently for the same name
        return icons[name.length % icons.length];
    };

    const renderMegaMenuContent = () => {
        if (!activeSubmenu || !menuData[activeSubmenu]) return null;
        const data = menuData[activeSubmenu];

        if (activeSubmenu === "solutions") {
            return (
                <div className="flex gap-6">
                    <div className="w-1/5 flex-shrink-0 border-r border-[#e5e7eb] pr-6">
                        <h3 className="text-lg font-semibold text-[#111827] mb-2">{data.title}</h3>
                        <p className="text-sm text-[#4b5563] mb-4">{data.description}</p>
                        <Link href="/products" className="text-sm font-semibold text-[#f97316] hover:text-[#111827] flex items-center gap-1.5 group">
                            View All Products
                            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="w-4/5 flex gap-4 overflow-x-auto pb-4 -mb-2 scrollbar-thin scrollbar-thumb-[#d1d5db] scrollbar-track-transparent">
                        {data.items.map((item, index) => (
                            <Link href={item.href} key={index} className="group flex-shrink-0 w-64 block p-3 rounded-lg border border-[#e5e7eb] hover:border-[#f97316] hover:bg-[#e0f2fe] bg-[#b2d6fc] shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="relative h-32 w-full mb-3 overflow-hidden rounded-md bg-[#f5f5f5]">
                                    <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <span className="text-sm font-semibold text-[#111827] group-hover:text-[#f97316] transition-colors">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            );
        }

        if (activeSubmenu === "markets") {
            return (
                <div className="grid grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <h3 className="text-lg font-semibold text-[#111827] mb-2">{data.title}</h3>
                        <p className="text-sm text-[#4b5563] mb-6">{data.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                            {data.items.map((item) => (
                                <Link href={item.href} key={item.name} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-[#e5e7eb] hover:border-[#f97316] hover:bg-[#e0f2fe] group transition-all duration-300 hover:shadow-sm">
                                    <item.icon className="w-8 h-8 text-[#f97316] group-hover:scale-125 transition-transform duration-300" />
                                    <span className="text-sm font-semibold text-[#111827] group-hover:text-[#f97316] transition-colors">{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2 bg-white p-6 rounded-lg border border-[#e5e7eb]">
                        <h3 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-3">Case Study</h3>
                        <p className="text-sm text-[#4b5563] mb-4 font-normal">How Harco solutions reduced installation time by 40% in a major municipal project.</p>
                        <Link href="#" className="text-sm font-semibold text-[#f97316] hover:text-[#111827] transition-colors flex items-center gap-1.5 group">
                            Read Study <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            );
        }

        return (
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
                {[
                    { title: "By Product", links: menuData.solutions.materials },
                    { title: "By Application", links: menuData.solutions.applications },
                ].map(section => (
                    <div key={section.title}>
                        <h3 className="text-xs font-bold text-[#f97316] uppercase tracking-wider mb-5">{section.title}</h3>
                        <ul className="space-y-4">
                            {section.links.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-[#4b5563] hover:text-[#111827] flex items-center gap-0 group relative font-medium">
                                        <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-[#f97316] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" aria-hidden="true"></span>
                                        <span className="group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="col-span-2 bg-white p-6 rounded-lg border border-[#e5e7eb] shadow-sm hover:border-[#f97316] transition-colors duration-300">
                    <h3 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-3">Featured Solution</h3>
                    <p className="text-sm text-[#4b5563] mb-4 font-normal">Next-gen CPVC for high-pressure industrial environments.</p>
                    <Link href="#" className="text-sm font-semibold text-[#f97316] hover:text-[#111827] transition-colors flex items-center gap-1.5 group">
                        Explore Features <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        );
    };

    const toggleMobileSubmenu = (menu) => {
        setMobileSubmenu(mobileSubmenu === menu ? null : menu);
    };

    return (
        <header className="w-full bg-white text-[#111827] sticky top-0 z-50 font-sans border-b border-[#e5e7eb] relative">
            {/* Top Bar */}
            <div className="bg-[#004496] text-xs py-2 px-4 md:px-8" style={{ display: isDesktop ? 'block' : 'none' }}>
                <div className="max-w-7xl mx-auto flex justify-between items-center text-[#d1d5db] font-medium">
                    <div className="flex items-center gap-5">
                        <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                            <Mail className="w-3.5 h-3.5 text-[#f97316]" /> sales@harcofittings.com
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                            <Phone className="w-3.5 h-3.5 text-[#f97316]" /> 1-800-HARCO-01
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Resources</Link>
                        <Link href="#" className="hover:text-white transition-colors">Support</Link>
                        <Link href="#" className="flex items-center gap-1.5 font-semibold text-white transition-colors bg-[#f97316] px-3 py-1 rounded-full hover:bg-[#ea580c] hover:scale-105 transition-transform">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            Portal
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 bg-white">
                <div className="flex justify-between items-center h-20 lg:h-24">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        <Image src="/images/logo.png" alt="Harco Fittings Logo" width={160} height={40} className="h-8 lg:h-10 w-auto object-contain transition-transform hover:scale-105" priority />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="space-x-1 h-full items-center" style={{ display: isDesktop ? 'flex' : 'none' }}>
                        {["Solutions", "Markets", "Engineering", "Company"].map(item => (
                            <div key={item} className="group h-full flex items-center relative"
                                onMouseEnter={() => setActiveSubmenu(item.toLowerCase())}
                                onMouseLeave={() => setActiveSubmenu(null)}
                            >
                                <button className={`relative text-[#4b5563] hover:text-[#111827] font-semibold text-sm uppercase tracking-wider h-full flex items-center gap-1.5 border-b-4 transition-all duration-300 px-4 ${activeSubmenu === item.toLowerCase() ? "border-[#f97316]" : "border-transparent"}`}>
                                    {item}
                                    <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${activeSubmenu === item.toLowerCase() ? "rotate-180" : ""}`} />
                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#f97316] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </button>
                            </div>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Search Bar */}
                        <div className="relative group" style={{ display: isDesktop ? 'block' : 'none' }}>
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af] group-focus-within:text-[#f97316] transition-colors" />
                            <input
                                type="search"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-[#f5f5f5] text-[#111827] text-sm rounded-full pl-10 pr-4 py-2.5 w-32 md:w-48 focus:w-64 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#f97316] border border-[#e5e7eb] placeholder:text-[#9ca3af] shadow-inner"
                            />
                            
                            {/* Desktop Search Results Dropdown with Icons & Hover */}
                            {searchQuery.length > 0 && (
                                <div className="absolute top-full mt-2 right-0 w-80 bg-white rounded-lg shadow-xl border border-[#e5e7eb] z-50 p-2 max-h-96 overflow-y-auto">
                                    {filteredResults.length > 0 ? (
                                        filteredResults.map(item => {
                                            const Icon = getResultIcon(item.name);
                                            return (
                                                <Link href={item.href} key={item.name} className="flex items-center gap-3 p-3 rounded-md hover:bg-[#e0f2fe] text-sm text-[#111827] group transition-all duration-300 hover:scale-[1.02]">
                                                    <div className="p-2 rounded-full bg-[#f5f5f5] group-hover:bg-[#f97316] group-hover:text-white transition-colors">
                                                        <Icon className="w-5 h-5 text-[#f97316] group-hover:text-white" />
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold group-hover:text-[#004496] transition-colors">{item.name}</span>
                                                        <span className="block text-xs text-[#4b5563]">{item.category}</span>
                                                    </div>
                                                </Link>
                                            );
                                        })
                                    ) : (
                                        <div className="p-3 text-sm text-[#4b5563]">No results found.</div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* CTA Button */}
                        <Link href="#" className="group relative items-center gap-2 bg-[#004496] text-white px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:bg-[#111827]" style={{ display: isDesktop ? 'inline-flex' : 'none' }}>
                            <span className="absolute inset-0 bg-[#f97316] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                            <span className="relative z-10 text-white transition-colors duration-300">Quote</span>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button className="p-2 rounded-md hover:bg-[#f5f5f5]" style={{ display: isDesktop ? 'none' : 'block' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Mega Menu Dropdown */}
            {activeSubmenu && (
                <div
                    className="absolute left-0 w-full bg-[#f5f5f5] shadow-2xl border-t border-b border-[#e5e7eb] z-50 text-[#111827] transition-all duration-300 ease-in-out"
                    style={{ display: isDesktop ? 'block' : 'none' }}
                    onMouseEnter={() => setActiveSubmenu(activeSubmenu)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                >
                    <div className="max-w-7xl mx-auto px-8 py-10">
                        {renderMegaMenuContent()}
                    </div>
                </div>
            )}
            
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white z-50 overflow-y-auto border-t border-[#e5e7eb] pb-24" style={{ display: isDesktop ? 'none' : 'block' }}>
                    <div className="p-4 border-b border-[#e5e7eb]">
                        <input
                            type="search"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#f5f5f5] text-[#111827] text-sm rounded-full pl-4 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f97316] border border-[#e5e7eb]"
                        />
                        
                        {/* Mobile Search Results with Icons & Hover */}
                        {searchQuery.length > 0 && (
                            <div className="mt-4 bg-white rounded-lg border border-[#e5e7eb] max-h-60 overflow-y-auto p-2">
                                {filteredResults.length > 0 ? (
                                    filteredResults.map(item => {
                                        const Icon = getResultIcon(item.name);
                                        return (
                                            <Link href={item.href} key={item.name} className="flex items-center gap-3 p-3 rounded-md hover:bg-[#e0f2fe] text-sm text-[#111827] group">
                                                <Icon className="w-5 h-5 text-[#f97316] group-hover:scale-125 transition-transform" />
                                                <span className="font-semibold group-hover:text-[#f97316] transition-colors">{item.name}</span>
                                            </Link>
                                        );
                                    })
                                ) : (
                                    <div className="p-4 text-sm text-[#4b5563]">No results found.</div>
                                )}
                            </div>
                        )}
                    </div>
                    
                    <nav className="flex flex-col" style={{ display: searchQuery.length > 0 ? 'none' : 'flex' }}>
                        {["Solutions", "Markets", "Engineering", "Company"].map(item => (
                            <div key={item} className="border-b border-[#e5e7eb]">
                                <button 
                                    className="w-full flex justify-between items-center p-5 text-sm font-semibold uppercase tracking-wider text-[#111827]"
                                    onClick={() => toggleMobileSubmenu(item.toLowerCase())}
                                >
                                    {item}
                                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenu === item.toLowerCase() ? "rotate-180" : ""}`} />
                                </button>
                                
                                {mobileSubmenu === item.toLowerCase() && (
                                    <div className="bg-[#f5f5f5] p-4 flex flex-col gap-3">
                                        {item === "Solutions" && menuData.solutions.items.map(sub => (
                                            <Link href={sub.href} key={sub.name} className="flex items-center gap-3 p-3 bg-white rounded-md border border-[#e5e7eb]">
                                                <Image src={sub.image} alt={sub.name} width={40} height={40} className="rounded-sm" />
                                                <span className="text-sm font-medium">{sub.name}</span>
                                            </Link>
                                        ))}
                                        {item === "Markets" && menuData.markets.items.map(sub => (
                                            <Link href={sub.href} key={sub.name} className="text-sm p-2 text-[#4b5563]">{sub.name}</Link>
                                        ))}
                                        {item === "Engineering" && menuData.engineering.items.map(sub => (
                                            <Link href={sub.href} key={sub.name} className="text-sm p-2 text-[#4b5563]">{sub.name}</Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="p-5 flex flex-col gap-4 mt-6">
                        <Link href="#" className="flex items-center gap-2 text-sm font-semibold text-[#004496]">
                            <Phone className="w-4 h-4" /> 1-800-HARCO-01
                        </Link>
                        <Link href="#" className="w-full text-center bg-[#f97316] text-white py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Get Quote
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
