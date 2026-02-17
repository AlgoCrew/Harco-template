"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Linkedin, Facebook, Youtube, Mail, ShieldCheck, MapPin } from "lucide-react";

export default function Footer() {
    // Hardcoded to 2026 as per request
    const currentYear = 2026;
    
    // --- LIVE TIME MANAGEMENT ---
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            // Setting explicitly to Pakistan Time for Gojra
            const timeString = now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                timeZone: 'Asia/Karachi' 
            });
            setCurrentTime(timeString);
        };

        updateClock(); // Initial call
        const timerId = setInterval(updateClock, 1000); // Update every second

        return () => clearInterval(timerId); // Cleanup on unmount
    }, []);

    // --- DYNAMIC DATA STRUCTURE ---
    const footerData = {
        navigation: [
            {
                title: "Solutions",
                links: [
                    { name: "Industrial PVC", href: "/products/pvc" },
                    { name: "High-Temp CPVC", href: "/products/cpvc" },
                    { name: "Flow Control", href: "/products/flow" },
                    { name: "Custom Fabrication", href: "/products/custom" },
                ],
            },
            {
                title: "Engineering",
                links: [
                    { name: "Data Sheets", href: "/resources/data" },
                    { name: "BIM Library", href: "/resources/bim" },
                    { name: "Certifications", href: "/resources/certs" },
                    { name: "White Papers", href: "/resources/whitepapers" },
                ],
            },
            {
                title: "Company",
                links: [
                    { name: "About", href: "/about" },
                    { name: "Careers", href: "/careers" },
                    { name: "Sustainability", href: "/sustainability" },
                    { name: "Contact", href: "/contact" },
                ],
            },
        ],
        social: [
            { Icon: Linkedin, name: "LinkedIn", href: "#" },
            { Icon: Facebook, name: "Facebook", href: "#" },
            { Icon: Youtube, name: "YouTube", href: "#" },
        ],
        utility: [
            { name: "Catalog PDF", href: "/resources/catalog" },
            { name: "Terms of Sale", href: "/terms" },
            { name: "Legal Notice", href: "/legal" },
        ],
    };

    return (
        // --- PALETTE: #004496, #0e3a74, #f97316 ---
        <footer className="bg-[#004496] text-slate-100 font-sans border-t-4 border-[#0e3a74]" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12">

                    {/* Columns 1-3: Dynamic Links */}
                    {footerData.navigation.map((section) => (
                        <div key={section.title} className="col-span-1">
                            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider border-b-2 border-[#f97316] pb-3">
                                {section.title}
                            </h3>
                            <ul className="space-y-3.5" role="list">
                                {section.links.map(link => (
                                    <li key={link.name}>
                                        <Link 
                                            href={link.href} 
                                            className="text-slate-200 hover:text-white flex items-center gap-0 group text-sm relative font-medium leading-relaxed"
                                        >
                                            {/* Refined vertical line indicator - faster animation */}
                                            <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-[#f97316] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-bottom" aria-hidden="true"></span>
                                            <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter - Technical Focus Block */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-2 bg-[#0e3a74] p-8 rounded-sm border border-[#004496] shadow-inner">
                        <h3 className="text-sm font-bold mb-3 text-white uppercase tracking-wider">Stay Technical</h3>
                        <p className="text-slate-200 text-sm mb-6 font-light leading-relaxed">
                            Receive engineering updates, compliance alerts, and new product releases.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3" aria-label="Newsletter Subscription">
                            <label htmlFor="footer-email" className="sr-only">Business email</label>
                            <input 
                                id="footer-email"
                                type="email" 
                                placeholder="Enter your business email" 
                                autoComplete="email"
                                required
                                className="flex-grow bg-[#004496] text-white rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316] border border-[#004496] placeholder:text-slate-400"
                            />
                            {/* Refined Subscribe Button - Smoother Animation */}
                            <button 
                                type="submit"
                                className="group relative overflow-hidden bg-[#f97316] text-white px-5 py-3 rounded-sm text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#ea580c] hover:shadow-lg"
                            >
                                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                                <span className="relative z-10 text-white group-hover:text-[#004496]">Subscribe</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar: Connect & Locate */}
                <div className="border-t border-[#0e3a74] mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-200">Connect with us:</span>
                        <div className="flex space-x-3" role="list" aria-label="Social links">
                            {footerData.social.map(({ Icon, name, href }) => (
                                <a 
                                    key={name} 
                                    href={href} 
                                    className="text-slate-300 hover:text-[#f97316] transition-all duration-200 hover:scale-110" 
                                    aria-label={`Follow us on ${name}`}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Enhanced Animated CTA Button */}
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-2 bg-white text-[#004496] px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                    >
                        <span className="absolute inset-0 bg-[#f97316] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        <span className="relative z-10 flex items-center gap-2 text-[#004496] group-hover:text-white">
                            <Mail className="w-4 h-4" />
                            Find a Rep
                        </span>
                    </Link>
                </div>
            </div>

            {/* Utility Navigation Bar */}
            <div className="bg-[#0e3a74] py-4 px-6 md:px-8 border-t border-[#004496]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-300">
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0" role="list">
                        {footerData.utility.map(link => (
                            <li key={link.name}>
                                <Link href={link.href} className="hover:text-white font-medium">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* LIVE TECHNICAL DATA BAR */}
            <div className="bg-[#004496] py-3 px-6 md:px-8 border-t border-[#0e3a74]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-300 gap-3">
                    <p>&copy; {currentYear} Industrial Manufacturing Co. All rights reserved.</p>
                    
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {/* Live Compliance Indicator */}
                        <div className="flex items-center gap-2 text-emerald-300">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="font-semibold">ISO 9001:2015 Certified</span>
                        </div>
                        {/* Live Location/Time Indicator */}
                        {/* <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#f97316]" />
                            <span className="font-semibold text-white">Gojra, PK | {currentTime}</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}