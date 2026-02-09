"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, Phone, Mail, X, Menu, ExternalLink, Zap, Factory, BookOpenText } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const menuData = {
        solutions: {
            title: "Industrial Pipe Solutions",
            description: "Engineered PVC & CPVC for high-pressure systems.",
            items: [
                { name: "Industrial PVC", image: "/images/pvc.jpg", href: "#" },
                { name: "High-Temp CPVC", image: "/images/cpvc.jpg", href: "#" },
                { name: "Flow Control Systems", image: "/images/flow.jpg", href: "#" },
                { name: "Custom Fabrication", image: "/images/fab.jpg", href: "#" },
                { name: "Industrial PVC", image: "/images/pvc.jpg", href: "#" },
                { name: "High-Temp CPVC", image: "/images/cpvc.jpg", href: "#" },
                { name: "Flow Control Systems", image: "/images/flow.jpg", href: "#" },
                { name: "Custom Fabrication", image: "/images/fab.jpg", href: "#" },
            ], 
            materials: [
                { name: "Industrial PVC", href: "#" },
                { name: "High-Temp CPVC", href: "#" },
                { name: "Flow Control Systems", href: "#" },
                { name: "Custom Fabrication", href: "#" },
            ],
            applications: [
                { name: "Chemical Processing", href: "#" },
                { name: "Water Treatment", href: "#" },
                { name: "Power Generation", href: "#" },
                { name: "HVAC Systems", href: "#" },
            ]
        },
        markets: {
            title: "Application Sectors",
            description: "Tailored solutions for demanding industries.",
            items: [
                { name: "Chemical Processing", icon: Factory, href: "#" },
                { name: "Water Treatment", icon: Zap, href: "#" },
                { name: "Power Generation", icon: Factory, href: "#" },
                { name: "HVAC Systems", icon: Zap, href: "#" },
            ]
        },
        engineering: {
            title: "Technical Resources",
            description: "Data sheets, CAD files, and compliance documentation.",
            items: [
                { name: "Data Sheets", href: "#" },
                { name: "BIM Library", href: "#" },
                { name: "Certifications", href: "#" },
                { name: "White Papers", href: "#" },
            ]
        }
    };


    const renderMegaMenuContent = () => {
        if (!activeSubmenu || !menuData[activeSubmenu]) return null;

        const data = menuData[activeSubmenu];

        // Layout for Solutions - UPDATED FOR SLIDER BEHAVIOR
        if (activeSubmenu === "solutions") {
            return (
                <div className="flex gap-6">
                    <div className="w-1/5 flex-shrink-0 border-r border-[#172a45] pr-6">
                        <h3 className="text-lg font-bold text-white mb-2">{data.title}</h3>
                        <p className="text-sm text-slate-400 mb-4">{data.description}</p>
                        <Link href="#" className="text-sm font-bold text-[#007bff] hover:text-white flex items-center gap-1.5">
                            View All Products <ExternalLink className="w-4 h-4" />
                        </Link>
                    </div>
                    
                    {/* Slider Container */}
                    <div className="w-4/5 flex gap-4 overflow-x-auto pb-4 -mb-2 scrollbar-thin scrollbar-thumb-[#172a45] scrollbar-track-transparent">
                        {data.items.map((item, index) => (
                            <Link href={item.href} key={index} className="group flex-shrink-0 w-64 block bg-[#020c1b] p-3 rounded-sm border border-[#172a45] hover:border-[#007bff] transition-colors">
                                <div className="relative h-32 w-full mb-3 overflow-hidden rounded-sm">
                                    <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="text-sm font-bold text-white group-hover:text-[#007bff] transition-colors">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            );
        }
        
        // Layout for Markets
        if (activeSubmenu === "markets") {
            return (
                <div className="grid grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <h3 className="text-lg font-bold text-white mb-2">{data.title}</h3>
                        <p className="text-sm text-slate-400 mb-6">{data.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                            {data.items.map((item) => (
                                <Link href={item.href} key={item.name} className="flex items-center gap-3 bg-[#020c1b] p-4 rounded-sm border border-[#172a45] hover:border-[#007bff] group transition-colors">
                                    <item.icon className="w-8 h-8 text-[#007bff] group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-bold text-white group-hover:text-[#007bff] transition-colors">{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2 bg-[#0a192f] p-6 rounded-sm border-l-4 border-[#007bff]">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Case Study</h3>
                        <p className="text-sm text-slate-300 mb-4 font-light">How Harco solutions reduced installation time by 40% in a major municipal project.</p>
                        <Link href="#" className="text-sm font-bold text-[#007bff] hover:text-white transition-colors flex items-center gap-1.5">
                            Read Study <ExternalLink className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            );
        }

        // Generic layout for other items (e.g., Engineering, Company)
        return (
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
                {/* Link Columns with Animated Lines */}
                {[
                    { title: "By Product", links: menuData.solutions.materials },
                    { title: "By Application", links: menuData.solutions.applications },
                ].map(section => (
                    <div key={section.title}>
                        <h3 className="text-sm font-bold text-[#007bff] uppercase tracking-wider mb-5">{section.title}</h3>
                        <ul className="space-y-4">
                            {section.links.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-slate-200 hover:text-white flex items-center gap-0 group relative font-medium">
                                        {/* Vertical line indicator - appears on hover */}
                                        <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-[#007bff] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" aria-hidden="true"></span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="col-span-2 bg-[#020c1b] p-6 rounded-sm border border-[#172a45]">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Featured Solution</h3>
                    <p className="text-sm text-slate-300 mb-4 font-light">Next-gen CPVC for high-pressure industrial environments.</p>
                    <Link href="#" className="text-sm font-bold text-[#007bff] hover:text-white transition-colors flex items-center gap-1.5">
                        Explore Features <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <header className="w-full bg-[#0a192f] bg-gradient-to-b to-[#0a192f] from-blue-950 text-white sticky top-0 z-50 font-sans border-b border-[#172a45]">
            <div className="bg-[#020c1b] border-b border-[#172a45] text-xs py-2 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300 font-medium">
                    <div className="flex items-center gap-5">
                        <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                            <Mail className="w-3.5 h-3.5 text-[#007bff]" /> sales@harcofittings.com
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                            <Phone className="w-3.5 h-3.5 text-[#007bff]" /> 1-800-HARCO-01
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Resources</Link>
                        <Link href="#" className="hover:text-white transition-colors">Support</Link>
                        {/* Electric Blue Portal Link */}
                        <Link href="#" className="flex items-center gap-1.5 font-bold text-white transition-colors bg-[#007bff] px-3 py-1 rounded-sm hover:bg-[#0056b3]">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            Portal
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center h-24">
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        <Image src="/images/logo.png" alt="Harco Fittings Logo" width={200} height={50} className="h-12 w-auto object-contain" priority />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="flex space-x-1 h-full items-center">
                        {[ "Solutions", "Markets", "Engineering", "Company" ].map(item => (
                            <div key={item} className="group h-full flex items-center relative"
                                onMouseEnter={() => setActiveSubmenu(item.toLowerCase())}
                                onMouseLeave={() => setActiveSubmenu(null)}
                            >
                                <button className={`relative text-white hover:text-white font-bold text-sm uppercase tracking-wider h-full flex items-center gap-1.5 border-b-4 transition-all duration-300 px-4 ${activeSubmenu === item.toLowerCase() ? "border-[#007bff]" : "border-transparent"}`}>
                                    {item}
                                    <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${activeSubmenu === item.toLowerCase() ? "rotate-180" : ""}`} />
                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#007bff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </button>
                            </div>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="flex items-center gap-3">
                        <Link href="#" className="group relative inline-flex items-center gap-2 bg-white text-[#0a192f] px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                            <span className="absolute inset-0 bg-[#007bff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                            <span className="relative z-10 text-[#0a192f] group-hover:text-white transition-colors duration-300">Get Quote</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mega Menu Dropdown */}
            {activeSubmenu && (
                <div 
                    className="absolute left-0 w-full bg-gradient-to-b from-[#0a192f] to-blue-950 backdrop-blur-lg shadow-2xl border-t border-b-white border-[#172a45] z-50 text-white"
                    onMouseEnter={() => setActiveSubmenu(activeSubmenu)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                >
                    <div className="max-w-7xl mx-auto px-8 py-10">
                        {renderMegaMenuContent()}
                    </div>
                </div>
            )}
        </header>
    );
}
