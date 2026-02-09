// import React from "react";
// import Link from "next/link";

// export default function Footer() {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer className="bg-blue-900 text-white font-sans border-t-4 border-blue-700">
//             {/* Main Footer Content */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

//                     {/* Column 1: Products */}
//                     <div>
//                         <h3 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 uppercase tracking-wide">Products & Systems</h3>
//                         <ul className="space-y-3">
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Cast Iron Soil Pipe</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Plastics (PVC & CPVC)</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Industrial Piping</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Irrigation Systems</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Chemical Waste (ChemDrain)</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Reclaimed Water (ReUze)</Link></li>
//                         </ul>
//                     </div>

//                     {/* Column 2: Technical Resources */}
//                     <div>
//                         <h3 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 uppercase tracking-wide">Technical Resources</h3>
//                         <ul className="space-y-3">
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Technical Support</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Calculators & Tools</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Product Specifications</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">BIM & CAD Drawings</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Installation Manuals</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Submittal Sheets</Link></li>
//                         </ul>
//                     </div>

//                     {/* Column 3: Company Info */}
//                     <div>
//                         <h3 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 uppercase tracking-wide">Company Info</h3>
//                         <ul className="space-y-3">
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">About Us</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Careers</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Newsroom</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Sustainability</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Contact Us</Link></li>
//                             <li><Link href="#" className="text-blue-100 hover:text-white hover:underline transition-colors text-sm">Privacy Policy</Link></li>
//                         </ul>
//                     </div>

//                     {/* Column 4: CTA & Search */}
//                     <div className="flex flex-col items-start">
//                         <h3 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2 uppercase tracking-wide w-full">Find A Partner</h3>
//                         <p className="text-blue-200 text-sm mb-4">
//                             Locate a sales representative or wholesale distributor near you.
//                         </p>
//                         <Link
//                             href="#"
//                             className="inline-block bg-white text-blue-900 font-bold px-6 py-3 rounded shadow hover:bg-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-0.5 mb-8 w-full text-center uppercase tracking-wide text-sm"
//                         >
//                             Find a Rep
//                         </Link>

//                         <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-sm text-blue-300">Stay Connected</h3>
//                         <div className="flex space-x-4">
//                             {/* Social Icons Placeholders */}
//                             <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="LinkedIn">
//                                 <span className="font-bold text-xs">in</span>
//                             </a>
//                             <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="Facebook">
//                                 <span className="font-bold text-xs">f</span>
//                             </a>
//                             <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="Twitter">
//                                 <span className="font-bold text-xs">x</span>
//                             </a>
//                             <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="YouTube">
//                                 <span className="font-bold text-xs">yt</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Copyright Bar */}
//             <div className="bg-blue-950 py-4 px-4 md:px-8">
//                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-blue-300">
//                     <p>&copy; {currentYear} Industrial Manufacturing Co. All rights reserved.</p>
//                     <div className="flex space-x-6 mt-2 md:mt-0">
//                         <Link href="#" className="hover:text-white">Terms of Use</Link>
//                         <Link href="#" className="hover:text-white">Privacy Policy</Link>
//                         <Link href="#" className="hover:text-white">Sitemap</Link>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }


// import React from "react";
// import Link from "next/link";
// import { Linkedin, Facebook, Youtube, Mail } from "lucide-react"; // Assuming lucide-react for icons

// export default function Footer() {
//     // Hardcoded to 2026 as per request
//     const currentYear = 2026;

//     return (
//         <footer className="bg-slate-950 text-slate-200 font-sans border-t border-slate-800">
//             {/* Main Footer Content */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

//                     {/* Column 1: Products */}
//                     <div className="lg:col-span-1">
//                         <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Solutions</h3>
//                         <ul className="space-y-3">
//                             <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Industrial PVC</Link></li>
//                             <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">High-Temp CPVC</Link></li>
//                             <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Flow Control</Link></li>
//                             <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Custom Fabrication</Link></li>
//                         </ul>
//                     </div>

//                     {/* Column 2: Resources */}
//                     <div className="lg:col-span-1">
//                         <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Engineering</h3>
//                         <ul className="space-y-3">
//                             <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Data Sheets</Link></li>
//                             <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">BIM Library</Link></li>
//                             <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Certifications</Link></li>
//                             <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">White Papers</Link></li>
//                         </ul>
//                     </div>

//                     {/* Column 3: Company */}
//                     <div className="lg:col-span-1">
//                         <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Company</h3>
//                         <ul className="space-y-3">
//                             <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">About</Link></li>
//                             <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Careers</Link></li>
//                             <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Sustainability</Link></li>
//                             <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Contact</Link></li>
//                         </ul>
//                     </div>

//                     {/* Column 4: Newsletter/Lead Gen - New Section */}
//                     <div className="lg:col-span-2 bg-slate-900 p-6 rounded-sm border border-slate-800">
//                         <h3 className="text-sm font-bold mb-3 text-white uppercase tracking-wider">Stay Technical</h3>
//                         <p className="text-slate-400 text-sm mb-6 font-light">
//                             Receive engineering updates, compliance alerts, and new product releases.
//                         </p>
//                         <form className="flex flex-col sm:flex-row gap-3">
//                             <input 
//                                 type="email" 
//                                 placeholder="Enter your business email" 
//                                 className="flex-grow bg-slate-800 text-white rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//                             />
//                             <button 
//                                 type="submit"
//                                 className="bg-blue-600 text-white px-5 py-3 rounded-sm text-sm font-bold hover:bg-blue-500 transition-colors uppercase tracking-wider"
//                             >
//                                 Subscribe
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Bottom Bar: Connect & Locate */}
//                 <div className="border-t border-slate-800 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
//                     <div className="flex items-center gap-3">
//                         <span className="text-sm text-slate-400">Connect with us:</span>
//                         <div className="flex space-x-3">
//                             {[Linkedin, Facebook, Youtube].map((Icon, i) => (
//                                 <a key={i} href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
//                                     <Icon className="w-5 h-5" />
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
                    
//                     <Link
//                         href="#"
//                         className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-sm hover:bg-slate-700 transition-colors text-sm font-bold uppercase tracking-wider"
//                     >
//                         <Mail className="w-4 h-4" />
//                         Find a Rep
//                     </Link>
//                 </div>
//             </div>

//             {/* Copyright Bar */}
//             <div className="bg-slate-900 py-6 px-4 md:px-8 border-t border-slate-800">
//                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
//                     <p>&copy; {currentYear} Industrial Manufacturing Co. All rights reserved.</p>
//                     <div className="flex space-x-6 mt-3 md:mt-0">
//                         <Link href="#" className="hover:text-blue-400">Terms of Use</Link>
//                         <Link href="#" className="hover:text-blue-400">Privacy Policy</Link>
//                         <Link href="#" className="hover:text-blue-400">Compliance</Link>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }



// import React from "react";
// import Link from "next/link";
// import { Linkedin, Facebook, Youtube, Mail } from "lucide-react"; // Assuming lucide-react for icons

// export default function Footer() {
//     // Hardcoded to 2026 as per request
//     const currentYear = 2026;

//     return (
//         <footer className="bg-blue-950 text-slate-200 font-sans border-t-4 border-blue-900">
//             {/* Main Footer Content */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

//                     {/* Column 1: Products */}
//                     <div className="lg:col-span-1">
//                         <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider border-b border-blue-900 pb-2">Solutions</h3>
//                         <ul className="space-y-3">
//                             {["Industrial PVC", "High-Temp CPVC", "Flow Control", "Custom Fabrication"].map(item => (
//                                 <li key={item}>
//                                     <Link href="#" className="text-slate-300 hover:text-white flex items-center gap-0 group text-sm relative">
//                                         {/* Vertical line indicator - appears on hover */}
//                                         <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
//                                         <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Column 2: Resources */}
//                     <div className="lg:col-span-1">
//                         <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider border-b border-blue-900 pb-2">Engineering</h3>
//                         <ul className="space-y-3">
//                             {["Data Sheets", "BIM Library", "Certifications", "White Papers"].map(item => (
//                                 <li key={item}>
//                                     <Link href="#" className="text-slate-300 hover:text-white flex items-center gap-0 group text-sm relative">
//                                         {/* Vertical line indicator - appears on hover */}
//                                         <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
//                                         <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Column 3: Company */}
//                     <div className="lg:col-span-1">
//                         <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider border-b border-blue-900 pb-2">Company</h3>
//                         <ul className="space-y-3">
//                             {["About", "Careers", "Sustainability", "Contact"].map(item => (
//                                 <li key={item}>
//                                     <Link href="#" className="text-slate-300 hover:text-white flex items-center gap-0 group text-sm relative">
//                                         {/* Vertical line indicator - appears on hover */}
//                                         <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
//                                         <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Column 4: Newsletter/Lead Gen */}
//                     <div className="lg:col-span-2 bg-blue-900 p-8 rounded-sm border border-blue-800 shadow-inner">
//                         <h3 className="text-sm font-bold mb-3 text-white uppercase tracking-wider">Stay Technical</h3>
//                         <p className="text-slate-300 text-sm mb-6 font-light">
//                             Receive engineering updates, compliance alerts, and new product releases.
//                         </p>
//                         <form className="flex flex-col sm:flex-row gap-3">
//                             <input 
//                                 type="email" 
//                                 placeholder="Enter your business email" 
//                                 className="flex-grow bg-blue-950 text-white rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white border border-blue-800"
//                             />
//                             <button 
//                                 type="submit"
//                                 className="bg-white text-blue-950 px-5 py-3 rounded-sm text-sm font-bold hover:bg-slate-200 transition-colors uppercase tracking-wider"
//                             >
//                                 Subscribe
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Bottom Bar: Connect & Locate */}
//                 <div className="border-t border-blue-900 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
//                     <div className="flex items-center gap-3">
//                         <span className="text-sm text-slate-300">Connect with us:</span>
//                         <div className="flex space-x-3">
//                             {[Linkedin, Facebook, Youtube].map((Icon, i) => (
//                                 <a key={i} href="#" className="text-slate-400 hover:text-white transition-colors">
//                                     <Icon className="w-5 h-5" />
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
                    
//                     {/* ANIMATED CTA BUTTON - Navy/White Scheme */}
//                     <Link
//                         href="#"
//                         className="group relative inline-flex items-center gap-2 bg-white text-blue-950 px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider shadow-lg overflow-hidden transition-all duration-300 hover:bg-slate-200"
//                     >
//                         {/* Content */}
//                         <span className="relative z-10 flex items-center gap-2">
//                             <Mail className="w-4 h-4" />
//                             Find a Rep
//                         </span>
//                     </Link>
//                 </div>
//             </div>

//             {/* Copyright Bar */}
//             <div className="bg-blue-900 py-6 px-4 md:px-8 border-t border-blue-800">
//                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
//                     <p>&copy; {currentYear} Industrial Manufacturing Co. All rights reserved.</p>
//                     <div className="flex space-x-6 mt-3 md:mt-0">
//                         <Link href="#" className="hover:text-white">Terms of Use</Link>
//                         <Link href="#" className="hover:text-white">Privacy Policy</Link>
//                         <Link href="#" className="hover:text-white">Compliance</Link>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }


// import React from "react";
// import Link from "next/link";
// import { Linkedin, Facebook, Youtube, Mail, ShieldCheck, MapPin } from "lucide-react";

// export default function Footer() {
//     // Hardcoded to 2026 as per request
//     const currentYear = 2026;

//     return (
//         <footer className="bg-blue-950 text-slate-200 font-sans border-t-4 border-blue-900" aria-labelledby="footer-heading">
//             <h2 id="footer-heading" className="sr-only">Footer</h2>
            
//             {/* Main Footer Content */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

//                     {/* Columns 1-3: Links remain same for consistency */}
//                     <div className="lg:col-span-1">
//                         <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider border-b border-blue-900 pb-2">Solutions</h3>
//                         <ul className="space-y-3" role="list">
//                             {["Industrial PVC", "High-Temp CPVC", "Flow Control", "Custom Fabrication"].map(item => (
//                                 <li key={item}>
//                                     <Link href="#" className="text-slate-300 hover:text-white flex items-center gap-0 group text-sm relative">
//                                         <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" aria-hidden="true"></span>
//                                         <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div className="lg:col-span-1">
//                         <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider border-b border-blue-900 pb-2">Engineering</h3>
//                         <ul className="space-y-3" role="list">
//                             {["Data Sheets", "BIM Library", "Certifications", "White Papers"].map(item => (
//                                 <li key={item}>
//                                     <Link href="#" className="text-slate-300 hover:text-white flex items-center gap-0 group text-sm relative">
//                                         <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" aria-hidden="true"></span>
//                                         <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div className="lg:col-span-1">
//                         <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider border-b border-blue-900 pb-2">Company</h3>
//                         <ul className="space-y-3" role="list">
//                             {["About", "Careers", "Sustainability", "Contact"].map(item => (
//                                 <li key={item}>
//                                     <Link href="#" className="text-slate-300 hover:text-white flex items-center gap-0 group text-sm relative">
//                                         <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" aria-hidden="true"></span>
//                                         <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Newsletter - Updated layout */}
//                     <div className="lg:col-span-2 bg-blue-900 p-8 rounded-sm border border-blue-800 shadow-inner">
//                         <h3 className="text-sm font-bold mb-3 text-white uppercase tracking-wider">Stay Technical</h3>
//                         <p className="text-slate-300 text-sm mb-6 font-light">
//                             Receive engineering updates, compliance alerts, and new product releases.
//                         </p>
//                         <form className="flex flex-col sm:flex-row gap-3" aria-label="Newsletter Subscription">
//                             <label htmlFor="footer-email" className="sr-only">Business email</label>
//                             <input 
//                                 id="footer-email"
//                                 type="email" 
//                                 placeholder="Enter your business email" 
//                                 autoComplete="email"
//                                 required
//                                 className="flex-grow bg-blue-950 text-white rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white border border-blue-800"
//                             />
//                             <button 
//                                 type="submit"
//                                 className="bg-white text-blue-950 px-5 py-3 rounded-sm text-sm font-bold hover:bg-slate-200 transition-colors uppercase tracking-wider"
//                             >
//                                 Subscribe
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Bottom Bar: Connect & Locate */}
//                 <div className="border-t border-blue-900 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
//                     <div className="flex items-center gap-3">
//                         <span className="text-sm text-slate-300">Connect with us:</span>
//                         <div className="flex space-x-3" role="list" aria-label="Social links">
//                             {[
//                                 { Icon: Linkedin, name: "LinkedIn" },
//                                 { Icon: Facebook, name: "Facebook" },
//                                 { Icon: Youtube, name: "YouTube" }
//                             ].map(({ Icon, name }) => (
//                                 <a key={name} href="#" className="text-slate-400 hover:text-white transition-colors" aria-label={`Follow us on ${name}`}>
//                                     <Icon className="w-5 h-5" />
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
                    
//                     <Link
//                         href="#"
//                         className="group relative inline-flex items-center gap-2 bg-white text-blue-950 px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider shadow-lg overflow-hidden transition-all duration-300 hover:bg-slate-200"
//                     >
//                         <span className="relative z-10 flex items-center gap-2">
//                             <Mail className="w-4 h-4" />
//                             Find a Rep
//                         </span>
//                     </Link>
//                 </div>
//             </div>

//             {/* Utility Navigation Bar */}
//             <nav className="bg-blue-900 py-4 px-4 md:px-8 border-t border-blue-800" aria-label="Utility Links">
//                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-300">
//                     <ul className="flex space-x-6" role="list">
//                         <li><Link href="#" className="hover:text-white">Catalog PDF</Link></li>
//                         <li><Link href="#" className="hover:text-white">Terms of Sale</Link></li>
//                         <li><Link href="#" className="hover:text-white">Legal Notice</Link></li>
//                     </ul>
//                 </div>
//             </nav>

//             {/* LIVE TECHNICAL DATA BAR - Engineer Approved */}
//             <div className="bg-blue-950 py-3 px-4 md:px-8 border-t border-blue-800">
//                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-3">
//                     <p>&copy; {currentYear} Industrial Manufacturing Co. All rights reserved.</p>
                    
//                     <div className="flex items-center gap-6">
//                         {/* Live Compliance Indicator */}
//                         <div className="flex items-center gap-2 text-emerald-400">
//                             <ShieldCheck className="w-4 h-4" />
//                             <span>ISO 9001:2015 Certified</span>
//                         </div>
//                         {/* Live Location/Time Placeholder */}
//                         <div className="flex items-center gap-2">
//                             <MapPin className="w-4 h-4 text-blue-400" />
//                             <span>Gojra, PK | {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Karachi' })}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// import React from "react";
// import Link from "next/link";
// import { Linkedin, Facebook, Youtube, Mail, ShieldCheck, MapPin } from "lucide-react";

// export default function Footer() {
//     // Hardcoded to 2026 as per request
//     const currentYear = 2026;

//     return (
//         <footer className="bg-blue-950 text-slate-100 font-sans border-t-4 border-blue-900" aria-labelledby="footer-heading">
//             <h2 id="footer-heading" className="sr-only">Footer</h2>
            
//             {/* Main Footer Content */}
//             <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

//                     {/* Columns 1-3: Links */}
//                     {[
//                         { title: "Solutions", links: ["Industrial PVC", "High-Temp CPVC", "Flow Control", "Custom Fabrication"] },
//                         { title: "Engineering", links: ["Data Sheets", "BIM Library", "Certifications", "White Papers"] },
//                         { title: "Company", links: ["About", "Careers", "Sustainability", "Contact"] },
//                     ].map((section) => (
//                         <div key={section.title} className="lg:col-span-1">
//                             <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider border-b border-blue-800 pb-3">{section.title}</h3>
//                             <ul className="space-y-3.5" role="list">
//                                 {section.links.map(link => (
//                                     <li key={link}>
//                                         <Link href="#" className="text-slate-100 hover:text-white flex items-center gap-0 group text-sm relative font-medium leading-relaxed">
//                                             {/* Vertical line indicator - appears on hover */}
//                                             <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" aria-hidden="true"></span>
//                                             <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}

//                     {/* Newsletter - Technical Focus Block */}
//                     <div className="lg:col-span-2 bg-blue-900 p-8 rounded-sm border border-blue-800 shadow-inner">
//                         <h3 className="text-sm font-bold mb-3 text-white uppercase tracking-wider">Stay Technical</h3>
//                         <p className="text-slate-200 text-sm mb-6 font-light leading-relaxed">
//                             Receive engineering updates, compliance alerts, and new product releases.
//                         </p>
//                         <form className="flex flex-col sm:flex-row gap-3" aria-label="Newsletter Subscription">
//                             <label htmlFor="footer-email" className="sr-only">Business email</label>
//                             <input 
//                                 id="footer-email"
//                                 type="email" 
//                                 placeholder="Enter your business email" 
//                                 autoComplete="email"
//                                 required
//                                 className="flex-grow bg-blue-950 text-white rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white border border-blue-800 placeholder:text-slate-500"
//                             />
//                             {/* Subscribe Button - Left-to-Right Animation */}
//                             <button 
//                                 type="submit"
//                                 className="group relative overflow-hidden bg-white text-blue-950 px-5 py-3 rounded-sm text-sm font-bold uppercase tracking-wider transition-all duration-300"
//                             >
//                                 <span className="absolute inset-0 bg-blue-950 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
//                                 <span className="relative z-10 text-blue-950 group-hover:text-white">Subscribe</span>
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Bottom Bar: Connect & Locate */}
//                 <div className="border-t border-blue-900 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
//                     <div className="flex items-center gap-3">
//                         <span className="text-sm text-slate-200">Connect with us:</span>
//                         <div className="flex space-x-3" role="list" aria-label="Social links">
//                             {[
//                                 { Icon: Linkedin, name: "LinkedIn" },
//                                 { Icon: Facebook, name: "Facebook" },
//                                 { Icon: Youtube, name: "YouTube" }
//                             ].map(({ Icon, name }) => (
//                                 <a key={name} href="#" className="text-slate-300 hover:text-white transition-colors" aria-label={`Follow us on ${name}`}>
//                                     <Icon className="w-5 h-5" />
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
                    
//                     {/* Animated CTA Button - Left-to-Right Animation */}
//                     <Link
//                         href="#"
//                         className="group relative inline-flex items-center gap-2 bg-white text-blue-950 px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider shadow-lg overflow-hidden transition-all duration-300"
//                     >
//                         <span className="absolute inset-0 bg-slate-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
//                         <span className="relative z-10 flex items-center gap-2 text-blue-950">
//                             <Mail className="w-4 h-4" />
//                             Find a Rep
//                         </span>
//                     </Link>
//                 </div>
//             </div>

//             {/* Utility Navigation Bar */}
//             <nav className="bg-blue-900 py-4 px-4 md:px-8 border-t border-blue-800" aria-label="Utility Links">
//                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-100">
//                     <ul className="flex space-x-6" role="list">
//                         <li><Link href="#" className="hover:text-white font-medium">Catalog PDF</Link></li>
//                         <li><Link href="#" className="hover:text-white font-medium">Terms of Sale</Link></li>
//                         <li><Link href="#" className="hover:text-white font-medium">Legal Notice</Link></li>
//                     </ul>
//                 </div>
//             </nav>

//             {/* LIVE TECHNICAL DATA BAR */}
//             <div className="bg-blue-950 py-3 px-4 md:px-8 border-t border-blue-800">
//                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-300 gap-3">
//                     <p>&copy; {currentYear} Industrial Manufacturing Co. All rights reserved.</p>
                    
//                     <div className="flex items-center gap-6">
//                         {/* Live Compliance Indicator */}
//                         <div className="flex items-center gap-2 text-emerald-300">
//                             <ShieldCheck className="w-4 h-4" />
//                             <span className="font-semibold">ISO 9001:2015 Certified</span>
//                         </div>
//                         {/* Live Location/Time Placeholder */}
//                         <div className="flex items-center gap-2">
//                             <MapPin className="w-4 h-4 text-blue-300" />
//                             <span className="font-semibold">Gojra, PK | {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Karachi' })}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }


"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Facebook, Youtube, Mail, ShieldCheck, MapPin } from "lucide-react";

export default function Footer() {
    // Hardcoded to 2026 as per request
    const currentYear = 2026;

    return (
        // NEAR-BLACK NAVY BACKGROUND
        <footer className="bg-[#0a192f]  text-slate-100 font-sans border-t-4 border-[#020c1b]" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

                    {/* Columns 1-3: Links */}
                    {[
                        { title: "Solutions", links: ["Industrial PVC", "High-Temp CPVC", "Flow Control", "Custom Fabrication"] },
                        { title: "Engineering", links: ["Data Sheets", "BIM Library", "Certifications", "White Papers"] },
                        { title: "Company", links: ["About", "Careers", "Sustainability", "Contact"] },
                    ].map((section) => (
                        <div key={section.title} className="lg:col-span-1">
                            {/* ELECTRIC BLUE TITLE */}
                            <h3 className="text-sm font-bold mb-6 text-[#007bff] uppercase tracking-wider border-b border-[#172a45] pb-3">{section.title}</h3>
                            <ul className="space-y-3.5" role="list">
                                {section.links.map(link => (
                                    <li key={link}>
                                        <Link href="#" className="text-slate-100 hover:text-white flex items-center gap-0 group text-sm relative font-medium leading-relaxed">
                                            {/* Vertical line indicator - appears on hover */}
                                            <span className="absolute -left-3 top-0 bottom-0 w-0.5 bg-[#007bff] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" aria-hidden="true"></span>
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter - Technical Focus Block */}
                    <div className="lg:col-span-2 bg-[#020c1b] p-8 rounded-sm border border-[#172a45] shadow-inner">
                        <h3 className="text-sm font-bold mb-3 text-white uppercase tracking-wider">Stay Technical</h3>
                        <p className="text-slate-300 text-sm mb-6 font-light leading-relaxed">
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
                                className="flex-grow bg-[#0a192f] text-white rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#007bff] border border-[#172a45] placeholder:text-slate-500"
                            />
                            {/* Subscribe Button - Left-to-Right Animation */}
                            <button 
                                type="submit"
                                className="group relative overflow-hidden bg-[#007bff] text-white px-5 py-3 rounded-sm text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#0056b3]"
                            >
                                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                                <span className="relative z-10 text-white group-hover:text-[#0a192f]">Subscribe</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar: Connect & Locate */}
                <div className="border-t border-[#172a45] mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-300">Connect with us:</span>
                        <div className="flex space-x-3" role="list" aria-label="Social links">
                            {[
                                { Icon: Linkedin, name: "LinkedIn" },
                                { Icon: Facebook, name: "Facebook" },
                                { Icon: Youtube, name: "YouTube" }
                            ].map(({ Icon, name }) => (
                                <a key={name} href="#" className="text-slate-400 hover:text-[#007bff] transition-colors" aria-label={`Follow us on ${name}`}>
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Animated CTA Button - Left-to-Right Animation */}
                    <Link
                        href="#"
                        className="group relative inline-flex items-center gap-2 bg-white text-[#0a192f] px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider shadow-lg overflow-hidden transition-all duration-300"
                    >
                        <span className="absolute inset-0 bg-[#007bff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        <span className="relative z-10 flex items-center gap-2 text-[#0a192f] group-hover:text-white">
                            <Mail className="w-4 h-4" />
                            Find a Rep
                        </span>
                    </Link>
                </div>
            </div>

            {/* Utility Navigation Bar */}
            <div className="bg-[#020c1b] py-4 px-4 md:px-8 border-t border-[#172a45]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-300">
                    <ul className="flex space-x-6" role="list">
                        <li><Link href="#" className="hover:text-white font-medium">Catalog PDF</Link></li>
                        <li><Link href="#" className="hover:text-white font-medium">Terms of Sale</Link></li>
                        <li><Link href="#" className="hover:text-white font-medium">Legal Notice</Link></li>
                    </ul>
                </div>
            </div>

            {/* LIVE TECHNICAL DATA BAR */}
            <div className="bg-[#0a192f] py-3 px-4 md:px-8 border-t border-[#172a45]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-3">
                    <p>&copy; {currentYear} Industrial Manufacturing Co. All rights reserved.</p>
                    
                    <div className="flex items-center gap-6">
                        {/* Live Compliance Indicator */}
                        <div className="flex items-center gap-2 text-emerald-400">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="font-semibold">ISO 9001:2015 Certified</span>
                        </div>
                        {/* Live Location/Time Placeholder */}
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#007bff]" />
                            <span className="font-semibold text-slate-300">Gojra, PK | {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Karachi' })}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}



