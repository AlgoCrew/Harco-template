// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

//     const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//     // Mega Menu Data based on Charlotte Pipe structure
//     const productsMenu = {
//         materials: [
//             { name: "Cast Iron", href: "#" },
//             { name: "Plastics (PVC, CPVC)", href: "#" },
//             { name: "ABS", href: "#" },
//             { name: "ChemDrain®", href: "#" },
//             { name: "ReUze®", href: "#" },
//         ],
//         applications: [
//             { name: "Residential", href: "#" },
//             { name: "Commercial", href: "#" },
//             { name: "Industrial", href: "#" },
//             { name: "Irrigation", href: "#" },
//             { name: "Wholesale Plumbing", href: "#" },
//         ],
//     };

//     return (
//         <header className="w-full bg-gradient-to-b from-blue-700 to-blue-900 shadow-md relative z-50 font-sans">
//             {/* Top Bar */}
//             <div className="bg-blue-950 text-xs py-2 px-4 md:px-8 border-b border-blue-800">
//                 <div className="max-w-7xl mx-auto flex justify-end space-x-6 text-blue-100 font-medium">
//                     <Link href="#" className="hover:text-white transition-colors">Careers</Link>
//                     <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
//                     <Link href="#" className="hover:text-white font-bold text-white transition-colors">FIND A REP</Link>
//                 </div>
//             </div>

//             {/* Main Navigation */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//                 <div className="flex justify-between items-center h-24">
//                     {/* Logo */}
//                     <div className="flex-shrink-0 flex items-center">
//                         {/* <Link href="/" className="flex items-center">
//                             <Image
//                                 src="/images/harco_logo.png"
//                                 alt="Harco Fittings"
//                                 width={180}
//                                 height={60}
//                                 className="h-14 w-auto object-contain brightness-150"
//                                 priority
//                             />
//                             HARCO
//                         </Link> */}

//                         <Link href="/" className="font-large text-white  hover:text-blue-200 font-bold text-strong uppercase tracking-wide h-full flex items-center border-b-4 border-transparent hover:border-white transition-all duration-200 px-2">
//                             HARCO
//                         </Link>
//                     </div>

//                     {/* Desktop Menu */}
//                     <nav className="hidden md:flex space-x-8 h-full items-center relative">
//                         {/* Mega Menu Trigger */}
//                         <div
//                             className="group h-full flex items-center"
//                             onMouseEnter={() => setActiveSubmenu("products")}
//                             onMouseLeave={() => setActiveSubmenu(null)}
//                         >
//                             <button
//                                 className={`text-white hover:text-blue-200 font-bold text-base uppercase tracking-wide h-full flex items-center border-b-4 transition-all duration-200 px-2 ${activeSubmenu === "products" ? "border-white text-white" : "border-transparent"}`}
//                             >
//                                 Products
//                                 <svg className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${activeSubmenu === "products" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
//                             </button>

//                             {/* Mega Menu Dropdown */}
//                             {activeSubmenu === "products" && (
//                                 <div className="absolute w-full left-0 right-0 top-full w-screen bg-white shadow-xl border-t-4 border-blue-500 z-50 transform -translate-x-1/2 left-1/2 ml-[calc(50%-50vw)] w-full text-left">
//                                     <div className="w-full bg-white">
//                                         <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-2 gap-12">
//                                             {/* Column 1: Material */}
//                                             <div className="w-full bg-white">
//                                                 <h4></h4>
//                                                 <h3 className="text-blue-900 font-bold text-lg mb-4 border-b-2 border-blue-900 pb-2 inline-block uppercase tracking-wider">By Material</h3>
//                                                 <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
//                                                     {productsMenu.materials.map((item) => (
//                                                         <li key={item.name}>
//                                                             <Link href={item.href} className="text-gray-700 hover:text-blue-700 hover:translate-x-1 transition-all block font-medium text-sm border-l-2 border-gray-100 hover:border-blue-500 pl-3">
//                                                                 {item.name}
//                                                             </Link>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>

//                                             {/* Column 2: Application */}
//                                             <div>
//                                                 <h3 className="text-blue-900 font-bold text-lg mb-4 border-b-2 border-blue-900 pb-2 inline-block uppercase tracking-wider">By Application</h3>
//                                                 <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
//                                                     {productsMenu.applications.map((item) => (
//                                                         <li key={item.name}>
//                                                             <Link href={item.href} className="text-gray-700 hover:text-blue-700 hover:translate-x-1 transition-all block font-medium text-sm border-l-2 border-gray-100 hover:border-blue-500 pl-3">
//                                                                 {item.name}
//                                                             </Link>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                         {/* Mega Menu Footer/Highlight */}
//                                         <div className="bg-gray-100 py-4 px-8 text-center text-sm text-gray-600 border-t border-gray-200">
//                                             Need help selecting a product? <Link href="#" className="text-blue-800 font-bold hover:underline ml-1">Contact Technical Support</Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         <Link href="#" className="text-white hover:text-blue-200 font-bold text-base uppercase tracking-wide h-full flex items-center border-b-4 border-transparent hover:border-white transition-all duration-200 px-2">
//                             Markets
//                         </Link>
//                         <Link href="#" className="text-white hover:text-blue-200 font-bold text-base uppercase tracking-wide h-full flex items-center border-b-4 border-transparent hover:border-white transition-all duration-200 px-2">
//                             Resources
//                         </Link>
//                         <Link href="#" className="text-white hover:text-blue-200 font-bold text-base uppercase tracking-wide h-full flex items-center border-b-4 border-transparent hover:border-white transition-all duration-200 px-2">
//                             Company
//                         </Link>
//                     </nav>

//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden flex items-center">
//                         <button
//                             onClick={toggleMobileMenu}
//                             className="text-white hover:text-blue-200 focus:outline-none p-2 rounded-md transition-colors"
//                         >
//                             <span className="sr-only">Open menu</span>
//                             <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 {isMobileMenuOpen ? (
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 ) : (
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu Overlay */}
//             {isMobileMenuOpen && (
//                 <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 top-full z-40 max-h-[80vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-200">
//                     <div className="flex flex-col pb-4">
//                         {/* Mobile Search */}
//                         <div className="p-4 bg-gray-50 border-b border-gray-100">
//                             <input type="text" placeholder="Search products..." className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-gray-800" />
//                         </div>

//                         {/* Mobile Nav Links */}
//                         <div className="divide-y divide-gray-100">
//                             {/* Products Accordion */}
//                             <div>
//                                 <button
//                                     onClick={() => setIsMobileMenuOpen(true)} // Keep menu open
//                                     className="w-full flex justify-between items-center px-6 py-4 text-base font-bold text-gray-800 uppercase bg-gray-50"
//                                 >
//                                     Products
//                                 </button>
//                                 <div className="px-6 py-2 bg-white space-y-6">
//                                     <div>
//                                         <h4 className="font-bold text-blue-800 text-xs tracking-wider mb-2 uppercase border-b border-gray-100 pb-1">By Material</h4>
//                                         <ul className="space-y-2 pl-2 border-l-2 border-blue-100">
//                                             {productsMenu.materials.map((item) => (
//                                                 <li key={item.name}>
//                                                     <Link href={item.href} className="block text-sm text-gray-600 font-medium py-1 active:text-blue-700">{item.name}</Link>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                     <div>
//                                         <h4 className="font-bold text-blue-800 text-xs tracking-wider mb-2 uppercase border-b border-gray-100 pb-1">By Application</h4>
//                                         <ul className="space-y-2 pl-2 border-l-2 border-blue-100">
//                                             {productsMenu.applications.map((item) => (
//                                                 <li key={item.name}>
//                                                     <Link href={item.href} className="block text-sm text-gray-600 font-medium py-1 active:text-blue-700">{item.name}</Link>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>

//                             <Link href="#" className="block px-6 py-4 text-base font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-700 uppercase transition-colors">Markets</Link>
//                             <Link href="#" className="block px-6 py-4 text-base font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-700 uppercase transition-colors">Resources</Link>
//                             <Link href="#" className="block px-6 py-4 text-base font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-700 uppercase transition-colors">Company</Link>
//                         </div>

//                         <div className="mt-4 px-6 pb-6 pt-4 bg-gray-50 border-t border-gray-100">
//                             <Link href="#" className="block w-full py-3 text-white bg-blue-700 font-bold text-center rounded hover:bg-blue-800 shadow-md transition-all uppercase tracking-wide mb-3">
//                                 Find a Rep
//                             </Link>
//                             <div className="flex justify-center space-x-6 text-sm text-gray-500 font-medium">
//                                 <Link href="#" className="hover:text-blue-700">Careers</Link>
//                                 <span className="text-gray-300">|</span>
//                                 <Link href="#" className="hover:text-blue-700">Contact Us</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Search, ChevronDown, Phone, Mail } from "lucide-react"; // Assuming lucide-react

// export default function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

//     // Mega Menu Data - Expanded for 2026 standards
//     const productsMenu = {
//         materials: [
//             { name: "Industrial PVC", href: "#" },
//             { name: "High-Temp CPVC", href: "#" },
//             { name: "Flow Control Systems", href: "#" },
//             { name: "Custom Fabrication", href: "#" },
//             { name: "Technical Fittings", href: "#" },
//         ],
//         applications: [
//             { name: "Chemical Processing", href: "#" },
//             { name: "Water Treatment", href: "#" },
//             { name: "Power Generation", href: "#" },
//             { name: "Mining & Refining", href: "#" },
//             { name: "HVAC Systems", href: "#" },
//         ],
//         support: [
//             { name: "CAD Library", href: "#" },
//             { name: "BIM Files", href: "#" },
//             { name: "Compliance & Safety", href: "#" },
//             { name: "Installation Guides", href: "#" },
//         ]
//     };

//     return (
//         <header className="w-full bg-slate-950 text-white shadow-md relative z-50 font-sans border-b border-slate-800">
//             {/* Top Bar - High Contrast */}
//             <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 md:px-8">
//                 <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300 font-medium">
//                     <div className="flex items-center gap-4">
//                         <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-400" /> sales@industrial.co</span>
//                         <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-blue-400" /> 1-800-ENGINEER</span>
//                     </div>
//                     <div className="flex items-center gap-6">
//                         <Link href="#" className="hover:text-white transition-colors">Resources</Link>
//                         <Link href="#" className="hover:text-white transition-colors">Contact</Link>
//                         <Link href="#" className="flex items-center gap-1.5 font-bold text-white transition-colors">
//                             <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
//                             Find A Rep
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navigation */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//                 <div className="flex justify-between items-center h-20">
//                     {/* Logo Space - Brand Consistency */}
//                     <Link href="/" className="flex-shrink-0 flex items-center">
//                         <Image
//                             src="/images/logo.png" // Update with your actual logo
//                             alt="Industrial Co Logo"
//                             width={160}
//                             height={40}
//                             className="h-10 w-auto object-contain"
//                             priority
//                         />
//                     </Link>

//                     {/* Desktop Menu */}
//                     <nav className="hidden lg:flex space-x-1 h-full items-center">
//                         {[ "Solutions", "Markets", "Engineering", "Company" ].map(item => (
//                             <div
//                                 key={item}
//                                 className="group h-full flex items-center"
//                                 onMouseEnter={() => setActiveSubmenu(item.toLowerCase())}
//                                 onMouseLeave={() => setActiveSubmenu(null)}
//                             >
//                                 <button
//                                     className={`relative text-white/90 hover:text-white font-bold text-sm uppercase tracking-wider h-full flex items-center gap-1.5 border-b-2 transition-all duration-200 px-4 ${activeSubmenu === item.toLowerCase() ? "border-blue-500 text-white" : "border-transparent"}`}
//                                 >
//                                     {item}
//                                     <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${activeSubmenu === item.toLowerCase() ? "rotate-180" : ""}`} />
//                                 </button>
//                             </div>
//                         ))}
//                     </nav>

//                     {/* Search & CTA */}
//                     <div className="hidden lg:flex items-center gap-4">
//                         <button className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors">
//                             <Search className="w-5 h-5" />
//                         </button>
//                         <Link href="#" className="bg-blue-600 text-white px-5 py-2.5 rounded-sm text-sm font-bold hover:bg-blue-500 transition-colors uppercase tracking-wider">
//                             Get Quote
//                         </Link>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="lg:hidden flex items-center">
//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className="text-white hover:text-blue-400 focus:outline-none p-2"
//                         >
//                             <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 {isMobileMenuOpen ? (
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 ) : (
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mega Menu Dropdown */}
//             {activeSubmenu && (
//                 <div 
//                     className="absolute left-0 w-full bg-white shadow-2xl border-t border-slate-200 z-50 text-slate-900"
//                     onMouseEnter={() => setActiveSubmenu(activeSubmenu)}
//                     onMouseLeave={() => setActiveSubmenu(null)}
//                 >
//                     <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
//                         <div>
//                             <h3 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-4">By Product</h3>
//                             <ul className="space-y-3">
//                                 {productsMenu.materials.map(item => (
//                                     <li key={item.name}><Link href={item.href} className="text-sm text-slate-700 hover:text-blue-600">{item.name}</Link></li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-4">By Application</h3>
//                             <ul className="space-y-3">
//                                 {productsMenu.applications.map(item => (
//                                     <li key={item.name}><Link href={item.href} className="text-sm text-slate-700 hover:text-blue-600">{item.name}</Link></li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-4">Technical Support</h3>
//                             <ul className="space-y-3">
//                                 {productsMenu.support.map(item => (
//                                     <li key={item.name}><Link href={item.href} className="text-sm text-slate-700 hover:text-blue-600">{item.name}</Link></li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="bg-slate-50 p-6 rounded-sm border border-slate-100">
//                             <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Featured Solution</h3>
//                             <p className="text-xs text-slate-600 mb-4">Next-gen CPVC for high-pressure industrial environments.</p>
//                             <Link href="#" className="text-sm font-bold text-blue-600 hover:underline">Learn More →</Link>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Search, ChevronDown, Phone, Mail, X, Menu } from "lucide-react"; // Assuming lucide-react

// export default function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

//     // Mega Menu Data - Expanded for 2026 standards
//     const menuData = {
//         solutions: {
//             materials: [
//                 { name: "Industrial PVC", href: "#" },
//                 { name: "High-Temp CPVC", href: "#" },
//                 { name: "Flow Control Systems", href: "#" },
//                 { name: "Custom Fabrication", href: "#" },
//             ],
//             applications: [
//                 { name: "Chemical Processing", href: "#" },
//                 { name: "Water Treatment", href: "#" },
//                 { name: "Power Generation", href: "#" },
//                 { name: "HVAC Systems", href: "#" },
//             ]
//         }
//     };

//     return (
//         <header className="w-full bg-slate-950 text-white sticky top-0 z-50 font-sans border-b border-slate-800">
//             {/* Top Bar - Live Metrics / High Priority */}
//             <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 md:px-8">
//                 <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-400 font-medium">
//                     <div className="flex items-center gap-5">
//                         <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"><Mail className="w-3.5 h-3.5 text-blue-400" /> sales@industrial.co</span>
//                         <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"><Phone className="w-3.5 h-3.5 text-blue-400" /> 1-800-ENGINEER</span>
//                     </div>
//                     <div className="flex items-center gap-6">
//                         <Link href="#" className="hover:text-white transition-colors">Resources</Link>
//                         <Link href="#" className="hover:text-white transition-colors">Support</Link>
//                         <Link href="#" className="flex items-center gap-1.5 font-bold text-white transition-colors bg-blue-600 px-3 py-1 rounded-sm">
//                             <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
//                             Portal
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navigation - Engaging Interactions */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//                 <div className="flex justify-between items-center h-20">
//                     {/* Logo */}
//                     <Link href="/" className="flex-shrink-0 flex items-center">
//                         <Image
//                             src="/images/logo.png" // Update with your actual logo
//                             alt="Industrial Co Logo"
//                             width={160}
//                             height={40}
//                             className="h-10 w-auto object-contain"
//                             priority
//                         />
//                     </Link>

//                     {/* Desktop Menu - Micro-interactions */}
//                     <nav className="hidden lg:flex space-x-1 h-full items-center">
//                         {[ "Solutions", "Markets", "Engineering", "Company" ].map(item => (
//                             <div
//                                 key={item}
//                                 className="group h-full flex items-center relative"
//                                 onMouseEnter={() => setActiveSubmenu(item.toLowerCase())}
//                                 onMouseLeave={() => setActiveSubmenu(null)}
//                             >
//                                 <button
//                                     className={`relative text-white/90 hover:text-white font-bold text-sm uppercase tracking-wider h-full flex items-center gap-1.5 border-b-2 transition-all duration-300 px-4 ${activeSubmenu === item.toLowerCase() ? "border-blue-500 text-white" : "border-transparent"}`}
//                                 >
//                                     {item}
//                                     <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${activeSubmenu === item.toLowerCase() ? "rotate-180" : ""}`} />
//                                     {/* Underline animation */}
//                                     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                                 </button>
//                             </div>
//                         ))}
//                     </nav>

//                     {/* Search & CTA */}
//                     <div className="hidden lg:flex items-center gap-3">
//                         <button className="text-slate-400 hover:text-white p-2.5 rounded-full hover:bg-slate-800 transition-all duration-300">
//                             <Search className="w-5 h-5" />
//                         </button>
//                         <Link href="#" className="relative bg-white text-slate-950 px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-slate-200 transition-all duration-300 uppercase tracking-wider overflow-hidden group">
//                             <span className="relative z-10">Get Quote</span>
//                             <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//                         </Link>
//                     </div>

//                     {/* Mobile Menu Button - Engaging */}
//                     <div className="lg:hidden flex items-center">
//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className="text-white hover:text-blue-400 focus:outline-none p-2 transition-transform duration-300"
//                         >
//                             {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mega Menu Dropdown - Glassmorphism */}
//             {activeSubmenu && (
//                 <div 
//                     className="absolute left-0 w-full bg-slate-950/90 backdrop-blur-lg shadow-2xl border-t border-slate-700 z-50 text-white"
//                     onMouseEnter={() => setActiveSubmenu(activeSubmenu)}
//                     onMouseLeave={() => setActiveSubmenu(null)}
//                 >
//                     <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
//                         <div>
//                             <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-5">By Product</h3>
//                             <ul className="space-y-4">
//                                 {menuData.solutions.materials.map(item => (
//                                     <li key={item.name}><Link href={item.href} className="text-sm text-slate-200 hover:text-white hover:pl-1 transition-all duration-300 block">{item.name}</Link></li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-5">By Application</h3>
//                             <ul className="space-y-4">
//                                 {menuData.solutions.applications.map(item => (
//                                     <li key={item.name}><Link href={item.href} className="text-sm text-slate-200 hover:text-white hover:pl-1 transition-all duration-300 block">{item.name}</Link></li>
//                                 ))}
//                             </ul>
//                         </div>
//                         {/* More columns can be added */}
//                         <div className="col-span-2 bg-slate-900 p-6 rounded-sm border border-slate-700">
//                             <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Featured Solution</h3>
//                             <p className="text-sm text-slate-300 mb-4">Next-gen CPVC for high-pressure industrial environments.</p>
//                             <Link href="#" className="text-sm font-bold text-blue-400 hover:text-white transition-colors">Explore Features →</Link>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Mobile Menu - Live Interactivity */}
//             {isMobileMenuOpen && (
//                 <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-lg border-t border-slate-700 z-50 animate-in slide-in-from-top-5 duration-300">
//                     <div className="p-6 space-y-6">
//                         {["Solutions", "Markets", "Engineering", "Company"].map(item => (
//                             <Link key={item} href="#" className="block text-lg font-bold text-white hover:text-blue-400 uppercase tracking-wider border-b border-slate-800 pb-4">
//                                 {item}
//                             </Link>
//                         ))}
//                         <Link href="#" className="block w-full bg-blue-600 text-white text-center py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-blue-500 transition-colors">
//                             Get Quote
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Search, ChevronDown, Phone, Mail, X, Menu } from "lucide-react"; // Assuming lucide-react

// export default function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
//     const [searchQuery, setSearchQuery] = useState("");

//     // Mega Menu Data - Expanded for 2026 standards
//     const menuData = {
//         solutions: {
//             materials: [
//                 { name: "Industrial PVC", href: "#" },
//                 { name: "High-Temp CPVC", href: "#" },
//                 { name: "Flow Control Systems", href: "#" },
//                 { name: "Custom Fabrication", href: "#" },
//             ],
//             applications: [
//                 { name: "Chemical Processing", href: "#" },
//                 { name: "Water Treatment", href: "#" },
//                 { name: "Power Generation", href: "#" },
//                 { name: "HVAC Systems", href: "#" },
//             ]
//         }
//     };

//     return (
//         <header className="w-full bg-slate-950 text-white sticky top-0 z-50 font-sans border-b border-slate-800">
//             {/* Top Bar - Live Metrics / High Priority */}
//             <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 md:px-8">
//                 <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-400 font-medium">
//                     <div className="flex items-center gap-5">
//                         <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"><Mail className="w-3.5 h-3.5 text-blue-400" /> sales@industrial.co</span>
//                         <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"><Phone className="w-3.5 h-3.5 text-blue-400" /> 1-800-ENGINEER</span>
//                     </div>
//                     <div className="flex items-center gap-6">
//                         <Link href="#" className="hover:text-white transition-colors">Resources</Link>
//                         <Link href="#" className="hover:text-white transition-colors">Support</Link>
//                         <Link href="#" className="flex items-center gap-1.5 font-bold text-white transition-colors bg-blue-600 px-3 py-1 rounded-sm">
//                             <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
//                             Portal
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navigation - Engaging Interactions */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//                 <div className="flex justify-between items-center h-20">
//                     {/* Logo */}
//                     <Link href="/" className="flex-shrink-0 flex items-center">
//                         <Image
//                             src="/images/logo.png" // Update with your actual logo
//                             alt="Industrial Co Logo"
//                             width={160}
//                             height={40}
//                             className="h-10 w-auto object-contain"
//                             priority
//                         />
//                     </Link>

//                     {/* Desktop Menu - Micro-interactions */}
//                     <nav className="hidden lg:flex space-x-1 h-full items-center">
//                         {[ "Solutions", "Markets", "Engineering", "Company" ].map(item => (
//                             <div
//                                 key={item}
//                                 className="group h-full flex items-center relative"
//                                 onMouseEnter={() => setActiveSubmenu(item.toLowerCase())}
//                                 onMouseLeave={() => setActiveSubmenu(null)}
//                             >
//                                 <button
//                                     className={`relative text-white/90 hover:text-white font-bold text-sm uppercase tracking-wider h-full flex items-center gap-1.5 border-b-2 transition-all duration-300 px-4 ${activeSubmenu === item.toLowerCase() ? "border-blue-500 text-white" : "border-transparent"}`}
//                                 >
//                                     {item}
//                                     <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${activeSubmenu === item.toLowerCase() ? "rotate-180" : ""}`} />
//                                     {/* Underline animation */}
//                                     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                                 </button>
//                             </div>
//                         ))}
//                     </nav>

//                     {/* Live Search & CTA */}
//                     <div className="hidden lg:flex items-center gap-3">
//                         <div className="relative">
//                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
//                             <input 
//                                 type="text"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 placeholder="Search products..."
//                                 className="bg-slate-900 text-sm text-white pl-9 pr-3 py-2 rounded-full border border-slate-700 focus:outline-none focus:border-blue-500 w-48 focus:w-64 transition-all duration-300"
//                             />
//                         </div>
//                         <Link href="#" className="relative bg-white text-slate-950 px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-slate-200 transition-all duration-300 uppercase tracking-wider overflow-hidden group">
//                             <span className="relative z-10">Get Quote</span>
//                             <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//                         </Link>
//                     </div>

//                     {/* Mobile Menu Button - Engaging */}
//                     <div className="lg:hidden flex items-center">
//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className="text-white hover:text-blue-400 focus:outline-none p-2 transition-transform duration-300"
//                         >
//                             {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mega Menu Dropdown - Glassmorphism */}
//             {activeSubmenu && (
//                 <div 
//                     className="absolute left-0 w-full bg-slate-950/90 backdrop-blur-lg shadow-2xl border-t border-slate-700 z-50 text-white"
//                     onMouseEnter={() => setActiveSubmenu(activeSubmenu)}
//                     onMouseLeave={() => setActiveSubmenu(null)}
//                 >
//                     <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
//                         <div>
//                             <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-5">By Product</h3>
//                             <ul className="space-y-4">
//                                 {menuData.solutions.materials.map(item => (
//                                     <li key={item.name}><Link href={item.href} className="text-sm text-slate-200 hover:text-white hover:pl-1 transition-all duration-300 block">{item.name}</Link></li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-5">By Application</h3>
//                             <ul className="space-y-4">
//                                 {menuData.solutions.applications.map(item => (
//                                     <li key={item.name}><Link href={item.href} className="text-sm text-slate-200 hover:text-white hover:pl-1 transition-all duration-300 block">{item.name}</Link></li>
//                                 ))}
//                             </ul>
//                         </div>
//                         {/* More columns can be added */}
//                         <div className="col-span-2 bg-slate-900 p-6 rounded-sm border border-slate-700">
//                             <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Featured Solution</h3>
//                             <p className="text-sm text-slate-300 mb-4">Next-gen CPVC for high-pressure industrial environments.</p>
//                             <Link href="#" className="text-sm font-bold text-blue-400 hover:text-white transition-colors">Explore Features →</Link>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Mobile Menu - Live Interactivity */}
//             {isMobileMenuOpen && (
//                 <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-lg border-t border-slate-700 z-50 animate-in slide-in-from-top-5 duration-300">
//                     <div className="p-6 space-y-6">
//                         <div className="relative">
//                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
//                             <input 
//                                 type="text"
//                                 placeholder="Search products..."
//                                 className="w-full bg-slate-900 text-sm text-white pl-9 pr-3 py-2 rounded-full border border-slate-700"
//                             />
//                         </div>
//                         {["Solutions", "Markets", "Engineering", "Company"].map(item => (
//                             <Link key={item} href="#" className="block text-lg font-bold text-white hover:text-blue-400 uppercase tracking-wider border-b border-slate-800 pb-4">
//                                 {item}
//                             </Link>
//                         ))}
//                         <Link href="#" className="block w-full bg-blue-600 text-white text-center py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-blue-500 transition-colors">
//                             Get Quote
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Search, ChevronDown, Phone, Mail, X, Menu, ExternalLink } from "lucide-react";

// export default function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
//     const [searchQuery, setSearchQuery] = useState("");

//     // Mega Menu Data - Modernized Categories
//     const menuData = {
//         solutions: {
//             materials: [
//                 { name: "Industrial PVC", href: "#" },
//                 { name: "High-Temp CPVC", href: "#" },
//                 { name: "Flow Control Systems", href: "#" },
//                 { name: "Custom Fabrication", href: "#" },
//             ],
//             applications: [
//                 { name: "Chemical Processing", href: "#" },
//                 { name: "Water Treatment", href: "#" },
//                 { name: "Power Generation", href: "#" },
//                 { name: "HVAC Systems", href: "#" },
//             ]
//         }
//     };

//     return (
//         // Modernized Deep Navy Background
//         <header className="w-full bg-[#0a192f] text-white sticky top-0 z-50 font-sans border-b border-[#172a45]">
            
//             {/* Top Bar - Subtle Accents */}
//             <div className="bg-[#020c1b] border-b border-[#172a45] text-xs py-2 px-4 md:px-8">
//                 <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300 font-medium">
//                     <div className="flex items-center gap-5">
//                         <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
//                             <Mail className="w-3.5 h-3.5 text-[#007bff]" /> sales@harcofittings.com
//                         </span>
//                         <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
//                             <Phone className="w-3.5 h-3.5 text-[#007bff]" /> 1-800-HARCO-01
//                         </span>
//                     </div>
//                     <div className="flex items-center gap-6">
//                         <Link href="#" className="hover:text-white transition-colors">Resources</Link>
//                         <Link href="#" className="hover:text-white transition-colors">Support</Link>
//                         {/* Electric Blue Portal Link */}
//                         <Link href="#" className="flex items-center gap-1.5 font-bold text-white transition-colors bg-[#007bff] px-3 py-1 rounded-sm hover:bg-[#0056b3]">
//                             <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
//                             Portal
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navigation - Minimal Navy, High Contrast */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//                 <div className="flex justify-between items-center h-24">
//                     {/* Logo */}
//                     <Link href="/" className="flex-shrink-0 flex items-center">
//                         <Image
//                             src="/images/logo.png" // Update with your actual logo
//                             alt="Harco Fittings Logo"
//                             width={200}
//                             height={50}
//                             className="h-12 w-auto object-contain"
//                             priority
//                         />
//                     </Link>

//                     {/* Desktop Menu - Electric Blue Accents */}
//                     <nav className="hidden lg:flex space-x-1 h-full items-center">
//                         {[ "Solutions", "Markets", "Engineering", "Company" ].map(item => (
//                             <div
//                                 key={item}
//                                 className="group h-full flex items-center relative"
//                                 onMouseEnter={() => setActiveSubmenu(item.toLowerCase())}
//                                 onMouseLeave={() => setActiveSubmenu(null)}
//                             >
//                                 <button
//                                     className={`relative text-white hover:text-white font-bold text-sm uppercase tracking-wider h-full flex items-center gap-1.5 border-b-4 transition-all duration-300 px-4 ${activeSubmenu === item.toLowerCase() ? "border-[#007bff]" : "border-transparent"}`}
//                                 >
//                                     {item}
//                                     <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${activeSubmenu === item.toLowerCase() ? "rotate-180" : ""}`} />
//                                     {/* Electric Blue Underline animation */}
//                                     <span className="absolute bottom-0 left-0 w-full h-1 bg-[#007bff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                                 </button>
//                             </div>
//                         ))}
//                     </nav>

//                     {/* Search & CTA */}
//                     <div className="hidden lg:flex items-center gap-3">
//                         <div className="relative">
//                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                             <input 
//                                 type="text"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 placeholder="Search products..."
//                                 className="bg-[#020c1b] text-sm text-white pl-9 pr-3 py-2 rounded-full border border-[#172a45] focus:outline-none focus:border-[#007bff] w-48 focus:w-64 transition-all duration-300 placeholder:text-slate-500"
//                             />
//                         </div>
//                         {/* Animated CTA Button */}
//                         <Link href="#" className="group relative inline-flex items-center gap-2 bg-white text-[#0a192f] px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]">
//                             <span className="absolute inset-0 bg-[#007bff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
//                             <span className="relative z-10 text-[#0a192f] group-hover:text-white transition-colors duration-300">Get Quote</span>
//                         </Link>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="lg:hidden flex items-center">
//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className="text-white hover:text-[#007bff] focus:outline-none p-2 transition-transform duration-300"
//                         >
//                             {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mega Menu Dropdown - Glassmorphism */}
//             {activeSubmenu && (
//                 <div 
//                     className="absolute left-0 w-full bg-[#0a192f]/95 backdrop-blur-lg shadow-2xl border-t border-[#172a45] z-50 text-white"
//                     onMouseEnter={() => setActiveSubmenu(activeSubmenu)}
//                     onMouseLeave={() => setActiveSubmenu(null)}
//                 >
//                     <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
//                         <div>
//                             <h3 className="text-sm font-bold text-[#007bff] uppercase tracking-wider mb-5">By Product</h3>
//                             <ul className="space-y-4">
//                                 {menuData.solutions.materials.map(item => (
//                                     <li key={item.name}><Link href={item.href} className="text-sm text-slate-200 hover:text-white hover:pl-1 transition-all duration-300 block font-medium">{item.name}</Link></li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-sm font-bold text-[#007bff] uppercase tracking-wider mb-5">By Application</h3>
//                             <ul className="space-y-4">
//                                 {menuData.solutions.applications.map(item => (
//                                     <li key={item.name}><Link href={item.href} className="text-sm text-slate-200 hover:text-white hover:pl-1 transition-all duration-300 block font-medium">{item.name}</Link></li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="col-span-2 bg-[#020c1b] p-6 rounded-sm border border-[#172a45]">
//                             <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Featured Solution</h3>
//                             <p className="text-sm text-slate-300 mb-4 font-light">Next-gen CPVC for high-pressure industrial environments.</p>
//                             <Link href="#" className="text-sm font-bold text-[#007bff] hover:text-white transition-colors flex items-center gap-1.5">
//                                 Explore Features <ExternalLink className="w-4 h-4" />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//                 <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a192f]/95 backdrop-blur-lg border-t border-[#172a45] z-50 animate-in slide-in-from-top-5 duration-300">
//                     <div className="p-6 space-y-6">
//                         <div className="relative">
//                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                             <input 
//                                 type="text"
//                                 placeholder="Search products..."
//                                 className="w-full bg-[#020c1b] text-sm text-white pl-9 pr-3 py-2 rounded-full border border-[#172a45] placeholder:text-slate-500"
//                             />
//                         </div>
//                         {["Solutions", "Markets", "Engineering", "Company"].map(item => (
//                             <Link key={item} href="#" className="block text-lg font-bold text-white hover:text-[#007bff] uppercase tracking-wider border-b border-[#172a45] pb-4">
//                                 {item}
//                             </Link>
//                         ))}
//                         <Link href="#" className="group relative block w-full bg-white text-[#0a192f] text-center py-3 rounded-sm font-bold uppercase tracking-wider overflow-hidden transition-all duration-300">
//                             <span className="absolute inset-0 bg-[#007bff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
//                             <span className="relative z-10 text-[#0a192f] group-hover:text-white transition-colors duration-300">Get Quote</span>
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Search, ChevronDown, Phone, Mail, X, Menu, ExternalLink } from "lucide-react";

// export default function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
//     const [searchQuery, setSearchQuery] = useState("");

//     // Mega Menu Data - Modernized Categories
//     const menuData = {
//         solutions: {
//             materials: [
//                 { name: "Industrial PVC", href: "#" },
//                 { name: "High-Temp CPVC", href: "#" },
//                 { name: "Flow Control Systems", href: "#" },
//                 { name: "Custom Fabrication", href: "#" },
//             ],
//             applications: [
//                 { name: "Chemical Processing", href: "#" },
//                 { name: "Water Treatment", href: "#" },
//                 { name: "Power Generation", href: "#" },
//                 { name: "HVAC Systems", href: "#" },
//             ]
//         }
//     };

//     return (
//         // Modernized Deep Navy Background
//         <header className="w-full bg-[#0a192f] text-white sticky top-0 z-50 font-sans border-b border-[#172a45]">
            
//             {/* Top Bar - Subtle Accents */}
//             <div className="bg-[#020c1b] border-b border-[#172a45] text-xs py-2 px-4 md:px-8">
//                 <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300 font-medium">
//                     <div className="flex items-center gap-5">
//                         <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
//                             <Mail className="w-3.5 h-3.5 text-[#007bff]" /> sales@harcofittings.com
//                         </span>
//                         <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
//                             <Phone className="w-3.5 h-3.5 text-[#007bff]" /> 1-800-HARCO-01
//                         </span>
//                     </div>
//                     <div className="flex items-center gap-6">
//                         <Link href="#" className="hover:text-white transition-colors">Resources</Link>
//                         <Link href="#" className="hover:text-white transition-colors">Support</Link>
//                         {/* Electric Blue Portal Link */}
//                         <Link href="#" className="flex items-center gap-1.5 font-bold text-white transition-colors bg-[#007bff] px-3 py-1 rounded-sm hover:bg-[#0056b3]">
//                             <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
//                             Portal
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navigation - Minimal Navy, High Contrast */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//                 <div className="flex justify-between items-center h-24">
//                     {/* Logo */}
//                     <Link href="/" className="flex-shrink-0 flex items-center">
//                         <Image
//                             src="/images/logo.png" // Update with your actual logo
//                             alt="Harco Fittings Logo"
//                             width={200}
//                             height={50}
//                             className="h-12 w-auto object-contain"
//                             priority
//                         />
//                     </Link>

//                     {/* Desktop Menu - Electric Blue Accents */}
//                     <nav className="hidden lg:flex space-x-1 h-full items-center">
//                         {[ "Solutions", "Markets", "Engineering", "Company" ].map(item => (
//                             <div
//                                 key={item}
//                                 className="group h-full flex items-center relative"
//                                 onMouseEnter={() => setActiveSubmenu(item.toLowerCase())}
//                                 onMouseLeave={() => setActiveSubmenu(null)}
//                             >
//                                 <button
//                                     className={`relative text-white hover:text-white font-bold text-sm uppercase tracking-wider h-full flex items-center gap-1.5 border-b-4 transition-all duration-300 px-4 ${activeSubmenu === item.toLowerCase() ? "border-[#007bff]" : "border-transparent"}`}
//                                 >
//                                     {item}
//                                     <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${activeSubmenu === item.toLowerCase() ? "rotate-180" : ""}`} />
//                                     {/* Electric Blue Underline animation */}
//                                     <span className="absolute bottom-0 left-0 w-full h-1 bg-[#007bff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                                 </button>
//                             </div>
//                         ))}
//                     </nav>

//                     {/* Search & CTA */}
//                     <div className="hidden lg:flex items-center gap-3">
//                         <div className="relative">
//                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                             <input 
//                                 type="text"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 placeholder="Search products..."
//                                 className="bg-[#020c1b] text-sm text-white pl-9 pr-3 py-2 rounded-full border border-[#172a45] focus:outline-none focus:border-[#007bff] w-48 focus:w-64 transition-all duration-300 placeholder:text-slate-500"
//                             />
//                         </div>
//                         {/* Animated CTA Button */}
//                         <Link href="#" className="group relative inline-flex items-center gap-2 bg-white text-[#0a192f] px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]">
//                             <span className="absolute inset-0 bg-[#007bff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
//                             <span className="relative z-10 text-[#0a192f] group-hover:text-white transition-colors duration-300">Get Quote</span>
//                         </Link>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="lg:hidden flex items-center">
//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className="text-white hover:text-[#007bff] focus:outline-none p-2 transition-transform duration-300"
//                         >
//                             {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mega Menu Dropdown - Glassmorphism & Sliding Lines */}
//             {activeSubmenu && (
//                 <div 
//                     className="absolute left-0 w-full bg-[#0a192f]/95 backdrop-blur-lg shadow-2xl border-t border-[#172a45] z-50 text-white"
//                     onMouseEnter={() => setActiveSubmenu(activeSubmenu)}
//                     onMouseLeave={() => setActiveSubmenu(null)}
//                 >
//                     <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
//                         {/* Link Columns with Animated Lines */}
//                         {[
//                             { title: "By Product", links: menuData.solutions.materials },
//                             { title: "By Application", links: menuData.solutions.applications },
//                         ].map(section => (
//                             <div key={section.title}>
//                                 <h3 className="text-sm font-bold text-[#007bff] uppercase tracking-wider mb-5">{section.title}</h3>
//                                 <ul className="space-y-4">
//                                     {section.links.map(item => (
//                                         <li key={item.name}>
//                                             <Link href={item.href} className="text-sm text-slate-200 hover:text-white flex items-center gap-0 group relative font-medium">
//                                                 {/* Vertical line indicator - appears on hover */}
//                                                 <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-[#007bff] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" aria-hidden="true"></span>
//                                                 <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                         <div className="col-span-2 bg-[#020c1b] p-6 rounded-sm border border-[#172a45]">
//                             <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Featured Solution</h3>
//                             <p className="text-sm text-slate-300 mb-4 font-light">Next-gen CPVC for high-pressure industrial environments.</p>
//                             <Link href="#" className="text-sm font-bold text-[#007bff] hover:text-white transition-colors flex items-center gap-1.5">
//                                 Explore Features <ExternalLink className="w-4 h-4" />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//                 <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a192f]/95 backdrop-blur-lg border-t border-[#172a45] z-50 animate-in slide-in-from-top-5 duration-300">
//                     <div className="p-6 space-y-6">
//                         <div className="relative">
//                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                             <input 
//                                 type="text"
//                                 placeholder="Search products..."
//                                 className="w-full bg-[#020c1b] text-sm text-white pl-9 pr-3 py-2 rounded-full border border-[#172a45] placeholder:text-slate-500"
//                             />
//                         </div>
//                         {["Solutions", "Markets", "Engineering", "Company"].map(item => (
//                             <Link key={item} href="#" className="block text-lg font-bold text-white hover:text-[#007bff] uppercase tracking-wider border-b border-[#172a45] pb-4">
//                                 {item}
//                             </Link>
//                         ))}
//                         <Link href="#" className="group relative block w-full bg-white text-[#0a192f] text-center py-3 rounded-sm font-bold uppercase tracking-wider overflow-hidden transition-all duration-300">
//                             <span className="absolute inset-0 bg-[#007bff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
//                             <span className="relative z-10 text-[#0a192f] group-hover:text-white transition-colors duration-300">Get Quote</span>
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }



// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Search, ChevronDown, Phone, Mail, X, Menu, ExternalLink, Zap, Factory, BookOpenText } from "lucide-react";

// export default function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
//     const [searchQuery, setSearchQuery] = useState("");

//     const menuData: Record<string, any> = {
//         solutions: {
//             title: "Industrial Pipe Solutions",
//             description: "Engineered PVC & CPVC for high-pressure systems.",
//             items: [
//                 { name: "Industrial PVC", image: "/images/pvc.jpg", href: "#" },
//                 { name: "High-Temp CPVC", image: "/images/cpvc.jpg", href: "#" },
//                 { name: "Flow Control Systems", image: "/images/flow.jpg", href: "#" },
//                 { name: "Custom Fabrication", image: "/images/fab.jpg", href: "#" },
//                 { name: "Industrial PVC", image: "/images/pvc.jpg", href: "#" },
//                 { name: "High-Temp CPVC", image: "/images/cpvc.jpg", href: "#" },
//                 { name: "Flow Control Systems", image: "/images/flow.jpg", href: "#" },
//                 { name: "Custom Fabrication", image: "/images/fab.jpg", href: "#" },
//             ], 
//             materials: [
//                 { name: "Industrial PVC", href: "#" },
//                 { name: "High-Temp CPVC", href: "#" },
//                 { name: "Flow Control Systems", href: "#" },
//                 { name: "Custom Fabrication", href: "#" },
//             ],
//             applications: [
//                 { name: "Chemical Processing", href: "#" },
//                 { name: "Water Treatment", href: "#" },
//                 { name: "Power Generation", href: "#" },
//                 { name: "HVAC Systems", href: "#" },
//             ]
//         },
//         markets: {
//             title: "Application Sectors",
//             description: "Tailored solutions for demanding industries.",
//             items: [
//                 { name: "Chemical Processing", icon: Factory, href: "#" },
//                 { name: "Water Treatment", icon: Zap, href: "#" },
//                 { name: "Power Generation", icon: Factory, href: "#" },
//                 { name: "HVAC Systems", icon: Zap, href: "#" },
//             ]
//         },
//         engineering: {
//             title: "Technical Resources",
//             description: "Data sheets, CAD files, and compliance documentation.",
//             items: [
//                 { name: "Data Sheets", href: "#" },
//                 { name: "BIM Library", href: "#" },
//                 { name: "Certifications", href: "#" },
//                 { name: "White Papers", href: "#" },
//             ]
//         }
//     };


//     const renderMegaMenuContent = () => {
//         if (!activeSubmenu || !menuData[activeSubmenu]) return null;

//         const data = menuData[activeSubmenu];

//         // Layout for Solutions
//         if (activeSubmenu === "solutions") {
//             return (
//                 <div className="grid grid-cols-5 gap-6">
//                     <div className="col-span-1 border-r border-[#172a45] pr-6">
//                         <h3 className="text-lg font-bold text-white mb-2">{data.title}</h3>
//                         <p className="text-sm text-slate-400 mb-4">{data.description}</p>
//                         <Link href="#" className="text-sm font-bold text-[#007bff] hover:text-white flex items-center gap-1.5">
//                             View All Products <ExternalLink className="w-4 h-4" />
//                         </Link>
//                     </div>
//                     {data.items.map((item: any) => (
//                         <Link href={item.href} key={item.name} className="group col-span-1 block bg-[#020c1b] p-3 rounded-sm border border-[#172a45] hover:border-[#007bff] transition-colors">
//                             <div className="relative h-32 w-full mb-3 overflow-hidden rounded-sm">
//                                 <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
//                             </div>
//                             <span className="text-sm font-bold text-white group-hover:text-[#007bff] transition-colors">{item.name}</span>
//                         </Link>
//                     ))}
//                 </div>
//             );
//         }
        
//         // Layout for Markets
//         if (activeSubmenu === "markets") {
//             return (
//                 <div className="grid grid-cols-4 gap-8">
//                     <div className="col-span-2">
//                         <h3 className="text-lg font-bold text-white mb-2">{data.title}</h3>
//                         <p className="text-sm text-slate-400 mb-6">{data.description}</p>
//                         <div className="grid grid-cols-2 gap-4">
//                             {data.items.map((item: any) => (
//                                 <Link href={item.href} key={item.name} className="flex items-center gap-3 bg-[#020c1b] p-4 rounded-sm border border-[#172a45] hover:border-[#007bff] group transition-colors">
//                                     <item.icon className="w-8 h-8 text-[#007bff] group-hover:scale-110 transition-transform" />
//                                     <span className="text-sm font-bold text-white group-hover:text-[#007bff] transition-colors">{item.name}</span>
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="col-span-2 bg-[#0a192f] p-6 rounded-sm border-l-4 border-[#007bff]">
//                         <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Case Study</h3>
//                         <p className="text-sm text-slate-300 mb-4 font-light">How Harco solutions reduced installation time by 40% in a major municipal project.</p>
//                         <Link href="#" className="text-sm font-bold text-[#007bff] hover:text-white transition-colors flex items-center gap-1.5">
//                             Read Study <ExternalLink className="w-4 h-4" />
//                         </Link>
//                     </div>
//                 </div>
//             );
//         }

//         // Generic layout for other items (e.g., Engineering, Company)
//         return (
//                 <div 
//                     className="absolute left-0 w-full bg-[#0a192f]/95 backdrop-blur-lg shadow-2xl border-t border-[#172a45] z-50 text-white"
//                     onMouseEnter={() => setActiveSubmenu(activeSubmenu)}
//                     onMouseLeave={() => setActiveSubmenu(null)}
//                 >
//                     <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
//                         {/* Link Columns with Animated Lines */}
//                         {[
//                             { title: "By Product", links: menuData.solutions.materials },
//                             { title: "By Application", links: menuData.solutions.applications },
//                         ].map(section => (
//                             <div key={section.title}>
//                                 <h3 className="text-sm font-bold text-[#007bff] uppercase tracking-wider mb-5">{section.title}</h3>
//                                 <ul className="space-y-4">
//                                     {section.links.map(item => (
//                                         <li key={item.name}>
//                                             <Link href={item.href} className="text-sm text-slate-200 hover:text-white flex items-center gap-0 group relative font-medium">
//                                                 {/* Vertical line indicator - appears on hover */}
//                                                 <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-[#007bff] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" aria-hidden="true"></span>
//                                                 <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                         <div className="col-span-2 bg-[#020c1b] p-6 rounded-sm border border-[#172a45]">
//                             <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Featured Solution</h3>
//                             <p className="text-sm text-slate-300 mb-4 font-light">Next-gen CPVC for high-pressure industrial environments.</p>
//                             <Link href="#" className="text-sm font-bold text-[#007bff] hover:text-white transition-colors flex items-center gap-1.5">
//                                 Explore Features <ExternalLink className="w-4 h-4" />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//         );
//     };

//     return (
//         <header className="w-full bg-[#0a192f] text-white sticky top-0 z-50 font-sans border-b border-[#172a45]">
//             <div className="bg-[#020c1b] border-b border-[#172a45] text-xs py-2 px-4 md:px-8">
//                 <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300 font-medium">
//                     <div className="flex items-center gap-5">
//                         <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
//                             <Mail className="w-3.5 h-3.5 text-[#007bff]" /> sales@harcofittings.com
//                         </span>
//                         <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
//                             <Phone className="w-3.5 h-3.5 text-[#007bff]" /> 1-800-HARCO-01
//                         </span>
//                     </div>
//                     <div className="flex items-center gap-6">
//                         <Link href="#" className="hover:text-white transition-colors">Resources</Link>
//                         <Link href="#" className="hover:text-white transition-colors">Support</Link>
//                         {/* Electric Blue Portal Link */}
//                         <Link href="#" className="flex items-center gap-1.5 font-bold text-white transition-colors bg-[#007bff] px-3 py-1 rounded-sm hover:bg-[#0056b3]">
//                             <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
//                             Portal
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navigation */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//                 <div className="flex justify-between items-center h-24">
//                     <Link href="/" className="flex-shrink-0 flex items-center">
//                         <Image src="/images/logo.png" alt="Harco Fittings Logo" width={200} height={50} className="h-12 w-auto object-contain" priority />
//                     </Link>

//                     {/* Desktop Menu */}
//                     <nav className="hidden lg:flex space-x-1 h-full items-center">
//                         {[ "Solutions", "Markets", "Engineering", "Company" ].map(item => (
//                             <div key={item} className="group h-full flex items-center relative"
//                                 onMouseEnter={() => setActiveSubmenu(item.toLowerCase())}
//                                 onMouseLeave={() => setActiveSubmenu(null)}
//                             >
//                                 <button className={`relative text-white hover:text-white font-bold text-sm uppercase tracking-wider h-full flex items-center gap-1.5 border-b-4 transition-all duration-300 px-4 ${activeSubmenu === item.toLowerCase() ? "border-[#007bff]" : "border-transparent"}`}>
//                                     {item}
//                                     <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${activeSubmenu === item.toLowerCase() ? "rotate-180" : ""}`} />
//                                     <span className="absolute bottom-0 left-0 w-full h-1 bg-[#007bff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                                 </button>
//                             </div>
//                         ))}
//                     </nav>

//                     {/* CTA */}
//                     <div className="hidden lg:flex items-center gap-3">
//                         <Link href="#" className="group relative inline-flex items-center gap-2 bg-white text-[#0a192f] px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]">
//                             <span className="absolute inset-0 bg-[#007bff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
//                             <span className="relative z-10 text-[#0a192f] group-hover:text-white transition-colors duration-300">Get Quote</span>
//                         </Link>
//                     </div>

//                     <div className="lg:hidden flex items-center">
//                         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-[#007bff] focus:outline-none p-2">
//                             {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mega Menu Dropdown */}
//             {activeSubmenu && (
//                 <div 
//                     className="absolute left-0 w-full bg-[#0a192f]/98 backdrop-blur-lg shadow-2xl border-t border-[#172a45] z-50 text-white"
//                     onMouseEnter={() => setActiveSubmenu(activeSubmenu)}
//                     onMouseLeave={() => setActiveSubmenu(null)}
//                 >
//                     <div className="max-w-7xl mx-auto px-8 py-10">
//                         {renderMegaMenuContent()}
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }


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
                    <nav className="hidden lg:flex space-x-1 h-full items-center">
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
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="#" className="group relative inline-flex items-center gap-2 bg-white text-[#0a192f] px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                            <span className="absolute inset-0 bg-[#007bff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                            <span className="relative z-10 text-[#0a192f] group-hover:text-white transition-colors duration-300">Get Quote</span>
                        </Link>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-[#007bff] focus:outline-none p-2">
                            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
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
