// // import Header from "@/components/Header";
// // import Footer from "@/components/Footer";
// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen flex flex-col font-sans bg-slate-50">
// //       <Header />

// //       <main className="flex-grow">
// //         {/* Modern Engineering Hero Section */}
// //         <section className="relative bg-slate-950 text-slate-100 overflow-hidden">
// //           {/* Subtle Grid Background Pattern for Tech Vibe */}
// //           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
// //           <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[700px] px-4 md:px-8 py-16">
            
// //             {/* Left Column: Content */}
// //             <div className="z-10 flex flex-col justify-center space-y-6">
// //               <span className="inline-flex items-center rounded-full bg-cyan-950/50 px-3 py-1 text-sm font-semibold text-cyan-300 ring-1 ring-inset ring-cyan-700">
// //                 Industrial Piping Solutions
// //               </span>
// //               <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter">
// //                 Engineered for <br/>
// //                 <span className="text-cyan-400">Excellence</span>
// //               </h1>
// //               <p className="text-lg md:text-xl text-slate-300 max-w-lg font-light">
// //                 High-performance PVC solutions for demanding industrial applications. Precision engineered to meet the highest safety standards.
// //               </p>
              
// //               <div className="flex flex-col sm:flex-row gap-4 pt-4">
// //                 <button className="group px-8 py-4 bg-cyan-600 text-white font-bold rounded-sm shadow-xl shadow-cyan-950/30 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
// //                   Explore Product Catalog
// //                   <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Right Column: Industrial Image */}
// //             <div className="relative h-96 lg:h-full w-full min-h-[400px] group">
// //               <div className="absolute inset-0 bg-slate-800 rounded-lg transform lg:group-hover:rotate-1 transition-transform duration-500">
// //                 <Image
// //                   src="/images/industrial_pvc_hero.jpg" // Replace with your actual image path
// //                   alt="High-tech Industrial PVC fitting"
// //                   fill
// //                   className="object-cover rounded-lg shadow-2xl transition-transform duration-500 lg:group-hover:scale-105"
// //                   priority
// //                 />
// //                 {/* Overlay for depth */}
// //                 <div className="absolute inset-0 bg-cyan-950/20 rounded-lg mix-blend-multiply"></div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* --- REST OF THE SECTIONS --- */}
// //         <section className="py-16 bg-white border-b border-gray-100">
// //           <div className="max-w-7xl mx-auto px-4 md:px-8">
// //             <div className="text-center mb-12">
// //               <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide">Markets We Serve</h2>
// //               <div className="h-1 w-20 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
// //             </div>

// //             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// //               {[
// //                 { name: "Industrial", icon: "/images/industrial_icon.png" },
// //                 { name: "Municipal", icon: "/images/municipal_icon.png" },
// //                 { name: "Irrigation", icon: "/images/irrigation_icon.png" },
// //                 { name: "Utility", icon: "/images/utility_icon.png" }
// //               ].map((market) => (
// //                 <div key={market.name} className="flex flex-col items-center group cursor-pointer">
// //                   <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-cyan-600 group-hover:shadow-lg border border-slate-200 group-hover:border-cyan-600">
// //                     <div className="relative w-12 h-12">
// //                       <Image
// //                         src={market.icon}
// //                         alt={`${market.name} Icon`}
// //                         fill
// //                         className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
// //                       />
// //                     </div>
// //                   </div>
// //                   <h3 className="text-sm font-semibold text-slate-700 group-hover:text-cyan-700 transition-colors uppercase tracking-wider">{market.name}</h3>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // }


// // import Header from "@/components/Header";
// // import Footer from "@/components/Footer";
// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen flex flex-col font-sans bg-white">
// //       <Header />

// //       <main className="flex-grow">
// //         {/* Modern Engineering Hero Section */}
// //         <section className="relative bg-slate-950 text-white overflow-hidden">
// //           {/* Subtle Grid Background Pattern for Tech Vibe */}
// //           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          
// //           {/* Parallax Image Effect container */}
// //           <div className="absolute inset-0 z-0 opacity-30">
// //             <div className="relative w-full h-full bg-slate-900 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1596754854375-a083d6a2f778?q=80&w=2000&auto=format&fit=crop')", backgroundAttachment: 'fixed'}}></div>
// //           </div>

// //           <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[750px] px-4 md:px-8 py-16">
            
// //             {/* Left Column: Content */}
// //             <div className="z-10 flex flex-col justify-center space-y-6">
// //               {/* Wrap-width pill */}
// //               <span className="inline-flex w-fit items-center rounded-full bg-blue-950/70 px-5 py-2 text-sm font-semibold text-blue-200 ring-1 ring-inset ring-blue-500/50 backdrop-blur-sm">
// //                 Industrial Piping Solutions
// //               </span>
              
// //               <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white">
// //                 Engineered for <br/>
// //                 <span className="text-blue-400">Durability</span>
// //               </h1>
              
// //               <p className="text-lg md:text-xl text-slate-300 max-w-lg font-light leading-relaxed">
// //                 High-performance PVC solutions for demanding industrial applications. Precision engineered in North America to meet the highest safety standards.
// //               </p>
              
// //               <div className="flex flex-col sm:flex-row gap-4 pt-6">
// //                 {/* Enhanced Animated Button */}
// //                 <button className="group relative px-10 py-4 bg-white text-blue-950 font-bold rounded-sm shadow-2xl shadow-blue-500/20 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-wider overflow-hidden">
// //                   {/* Pulse effect */}
// //                   <span className="absolute inset-0 rounded-sm animate-pulse bg-white/20"></span>
// //                   <span className="relative z-10 flex items-center gap-3">
// //                     Explore Product Catalog
// //                     <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
// //                   </span>
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Right Column: Industrial Image */}
// //             <div className="relative h-96 lg:h-[500px] w-full min-h-[400px] group">
// //               <div className="absolute inset-0 bg-slate-800 rounded-sm transform lg:group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl shadow-black/40">
// //                 <Image
// //                   src="/images/harco_logo.png"
// //                   alt="Industrial PVC pipe close up"
// //                   fill
// //                   className="object-cover rounded-sm transition-transform duration-700 lg:group-hover:scale-105"
// //                   priority
// //                 />
// //                 {/* Overlay for depth */}
// //                 <div className="absolute inset-0 bg-blue-950/20 rounded-sm mix-blend-multiply"></div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* --- MARKETS SECTION --- */}
// //         <section className="py-24 bg-slate-50 border-b border-slate-100">
// //           <div className="max-w-7xl mx-auto px-4 md:px-8">
// //             <div className="text-center mb-16">
// //               <h2 className="text-4xl font-extrabold text-slate-950 uppercase tracking-tighter">Markets We Serve</h2>
// //               <div className="h-1 w-24 bg-blue-600 mx-auto mt-6 rounded-full"></div>
// //             </div>

// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //               {[
// //                 { name: "Industrial", desc: "Chemical processing & manufacturing", icon: "⚙️" },
// //                 { name: "Municipal", desc: "Water treatment & infrastructure", icon: "🏛️" },
// //                 { name: "Irrigation", desc: "Agricultural water management", icon: "💧" },
// //                 { name: "Utility", desc: "Power generation & distribution", icon: "⚡" }
// //               ].map((market) => (
// //                 <div key={market.name} className="bg-white p-8 rounded-sm border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group cursor-pointer">
// //                   <div className="text-4xl mb-6">{market.icon}</div>
// //                   <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-700 transition-colors uppercase tracking-tight">{market.name}</h3>
// //                   <p className="text-slate-600 text-sm mt-2 font-light">{market.desc}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // }

// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col font-sans bg-white">
//       <Header />

//       <main className="flex-grow">
//         {/* State-of-the-Art Hero Section */}
//         <section className="relative bg-slate-950 text-white overflow-hidden">
//           {/* Subtle Grid Background Pattern for Tech Vibe */}
//           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          
//           <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[750px] px-4 md:px-8 pt-24 pb-16">
            
//             {/* Left Column: Content */}
//             <div className="z-10 flex flex-col justify-center space-y-8">
//               {/* Wrap-width pill */}
//               <span className="inline-flex w-fit items-center rounded-full bg-blue-950/70 px-5 py-2 text-sm font-semibold text-blue-200 ring-1 ring-inset ring-blue-500/50 backdrop-blur-sm">
//                 Next-Gen Industrial Piping
//               </span>
              
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white">
//                 Engineered for <br/>
//                 <span className="text-blue-400">Excellence</span>
//               </h1>
              
//               <p className="text-lg md:text-xl text-slate-300 max-w-lg font-light leading-relaxed">
//                 High-performance PVC solutions precision engineered in North America. Designed for demanding industrial applications requiring maximum durability.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 {/* Enhanced Animated Button */}
//                 <button className="group relative px-10 py-4 bg-white text-blue-950 font-bold rounded-sm shadow-2xl shadow-blue-500/20 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-wider overflow-hidden">
//                   {/* Pulse effect */}
//                   <span className="absolute inset-0 rounded-sm animate-pulse bg-white/20"></span>
//                   <span className="relative z-10 flex items-center gap-3">
//                     View Catalog
//                     <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
//                   </span>
//                 </button>
//               </div>
//             </div>

//             {/* Right Column: Industrial Image */}
//             <div className="relative h-96 lg:h-[500px] w-full min-h-[400px] group">
//               <div className="absolute inset-0 bg-slate-800 rounded-sm transform lg:group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl shadow-black/40">
//                 <Image
//                   src="/images/harco_logo.png"
//                   alt="Industrial PVC pipe close up"
//                   fill
//                   className="object-cover rounded-sm transition-transform duration-700 lg:group-hover:scale-105"
//                   priority
//                 />
//                 {/* Overlay for depth */}
//                 <div className="absolute inset-0 bg-blue-950/20 rounded-sm mix-blend-multiply"></div>
//               </div>
//             </div>
//           </div>
          
//           {/* New Section: Stats/Trust Bar */}
//           <div className="relative border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
//             <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//               {[
//                 { label: "Founded", value: "1985" },
//                 { label: "Locations", value: "12+" },
//                 { label: "Engineers", value: "50+" },
//                 { label: "Certification", value: "ISO 9001" },
//               ].map(stat => (
//                 <div key={stat.label} className="border-r border-slate-700 last:border-r-0">
//                   <div className="text-3xl font-extrabold text-blue-400 tracking-tight">{stat.value}</div>
//                   <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* --- MARKETS SECTION --- */}
//         <section className="py-24 bg-slate-50 border-b border-slate-100">
//           <div className="max-w-7xl mx-auto px-4 md:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-extrabold text-slate-950 uppercase tracking-tighter">Markets We Serve</h2>
//               <div className="h-1 w-24 bg-blue-600 mx-auto mt-6 rounded-full"></div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//               {[
//                 { name: "Industrial", desc: "Chemical processing & manufacturing", icon: "⚙️" },
//                 { name: "Municipal", desc: "Water treatment & infrastructure", icon: "🏛️" },
//                 { name: "Irrigation", desc: "Agricultural water management", icon: "💧" },
//                 { name: "Utility", desc: "Power generation & distribution", icon: "⚡" }
//               ].map((market) => (
//                 <div key={market.name} className="bg-white p-8 rounded-sm border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group cursor-pointer">
//                   <div className="text-4xl mb-6">{market.icon}</div>
//                   <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-700 transition-colors uppercase tracking-tight">{market.name}</h3>
//                   <p className="text-slate-600 text-sm mt-2 font-light">{market.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }


// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Image from "next/image";
// import { Zap, ShieldCheck, Cog, BarChart3 } from "lucide-react";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col font-sans bg-white">
//       <Header />

//       <main className="flex-grow">
//         {/* --- Hero Section - Updated with Header/Footer Colors --- */}
//         <section className="relative bg-[#0a192f] text-white overflow-hidden">
//           {/* Subtle Grid Background Pattern */}
//           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #172a45 1px, transparent 1px), linear-gradient(to bottom, #172a45 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          
//           <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[750px] px-4 md:px-8 pt-24 pb-16">
            
//             {/* Left Column: Content */}
//             <div className="z-10 flex flex-col justify-center space-y-8">
//               {/* Electric Blue Pill */}
//               <span className="inline-flex w-fit items-center rounded-full bg-[#020c1b] px-5 py-2 text-sm font-semibold text-[#007bff] ring-1 ring-inset ring-[#007bff]/50">
//                 Next-Gen Industrial Piping
//               </span>
              
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white">
//                 Engineered for <br/>
//                 <span className="text-[#007bff]">Excellence</span>
//               </h1>
              
//               <p className="text-lg md:text-xl text-slate-300 max-w-lg font-light leading-relaxed">
//                 High-performance PVC solutions precision engineered in North America. Designed for demanding industrial applications requiring maximum durability.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 {/* Enhanced Electric Blue Button */}
//                 <button className="group relative px-10 py-4 bg-[#007bff] text-white font-bold rounded-sm shadow-xl shadow-[#007bff]/30 hover:bg-[#0056b3] transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-wider overflow-hidden">
//                   <span className="relative z-10 flex items-center gap-3">
//                     View Catalog
//                     <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
//                   </span>
//                 </button>
//               </div>
//             </div>

//             {/* Right Column: Industrial Image */}
//             <div className="relative h-96 lg:h-[500px] w-full min-h-[400px] group">
//               <div className="absolute inset-0 bg-[#020c1b] rounded-sm transform lg:group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl shadow-black/40">
//                 <Image
//                   src="/images/industrial_pvc_hero.jpg" // Replace with your image
//                   alt="Industrial PVC pipe close up"
//                   fill
//                   className="object-cover rounded-sm transition-transform duration-700 lg:group-hover:scale-105"
//                   priority
//                 />
//                 {/* Overlay for depth */}
//                 <div className="absolute inset-0 bg-[#007bff]/10 rounded-sm mix-blend-multiply"></div>
//               </div>
//             </div>
//           </div>
          
//           {/* Stats Bar */}
//           <div className="relative border-t border-[#172a45] bg-[#020c1b]">
//             <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//               {[
//                 { label: "Founded", value: "1985" },
//                 { label: "Locations", value: "12+" },
//                 { label: "Engineers", value: "50+" },
//                 { label: "Certification", value: "ISO 9001" },
//               ].map(stat => (
//                 <div key={stat.label} className="border-r border-[#172a45] last:border-r-0">
//                   <div className="text-3xl font-extrabold text-[#007bff] tracking-tight">{stat.value}</div>
//                   <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* --- MARKETS SECTION --- */}
//         <section className="py-24 bg-slate-50 border-b border-slate-100">
//           <div className="max-w-7xl mx-auto px-4 md:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-extrabold text-slate-950 uppercase tracking-tighter">Markets We Serve</h2>
//               <div className="h-1 w-24 bg-[#007bff] mx-auto mt-6 rounded-full"></div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//               {[
//                 { name: "Industrial", desc: "Chemical processing & manufacturing", icon: "⚙️" },
//                 { name: "Municipal", desc: "Water treatment & infrastructure", icon: "🏛️" },
//                 { name: "Irrigation", desc: "Agricultural water management", icon: "💧" },
//                 { name: "Utility", desc: "Power generation & distribution", icon: "⚡" }
//               ].map((market) => (
//                 <div key={market.name} className="bg-white p-8 rounded-sm border border-slate-100 hover:border-[#007bff]/30 hover:shadow-xl hover:shadow-[#007bff]/5 transition-all duration-300 group cursor-pointer">
//                   <div className="text-4xl mb-6">{market.icon}</div>
//                   <h3 className="text-xl font-bold text-slate-950 group-hover:text-[#007bff] transition-colors uppercase tracking-tight">{market.name}</h3>
//                   <p className="text-slate-600 text-sm mt-2 font-light">{market.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* --- WHY HARCO SECTION (ENGAGING MARKETING) --- */}
//         <section className="py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-4 md:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
//               <div className="lg:col-span-2">
//                 <span className="text-[#007bff] font-semibold text-sm uppercase tracking-wider">The Harco Advantage</span>
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tighter mt-3 mb-6">Built to Outperform. <br/> Designed to Last.</h2>
//                 <p className="text-slate-600 font-light leading-relaxed mb-8">
//                   We do not just manufacture fittings; we engineer solutions that stand the test of time and pressure. With rigorous quality control and innovative design, Harco is the trusted partner for mission-critical infrastructure.
//                 </p>
//                 <button className="text-sm font-bold text-[#007bff] flex items-center gap-2 group">
//                   Learn About Our Process 
//                   <span className="group-hover:translate-x-1 transition-transform">→</span>
//                 </button>
//               </div>

//               <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {[
//                   { icon: ShieldCheck, title: "Unmatched Safety", desc: "Tested beyond industry standards for pressure and chemical resistance." },
//                   { icon: Zap, title: "Rapid Fulfillment", desc: "Extensive inventory ensures your project stays on schedule." },
//                   { icon: Cog, title: "Custom Solutions", desc: "Bespoke fabrication tailored to unique application requirements." },
//                   { icon: BarChart3, title: "Technical Support", desc: "Expert engineering consultation from design to installation." },
//                 ].map((item, index) => (
//                   <div key={index} className="bg-slate-50 p-8 rounded-sm border border-slate-100">
//                     <item.icon className="w-10 h-10 text-[#007bff] mb-6" />
//                     <h3 className="text-lg font-bold text-slate-950 mb-2 uppercase tracking-tight">{item.title}</h3>
//                     <p className="text-slate-600 text-sm font-light">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Zap, ShieldCheck, Cog, BarChart3, FileText, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="relative bg-[#0a192f] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(to right, #172a45 1px, transparent 1px), linear-gradient(to bottom, #172a45 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[750px] px-4 md:px-8 pt-24 pb-16">
            
            <div className="z-10 flex flex-col justify-center space-y-8">
              <span className="inline-flex w-fit items-center rounded-full bg-[#020c1b] px-5 py-2 text-sm font-semibold text-[#007bff] ring-1 ring-inset ring-[#007bff]/50">
                Next-Gen Industrial Piping
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white">
                Engineered for <br/>
                <span className="text-[#007bff]">Excellence</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 max-w-lg font-light leading-relaxed">
                High-performance PVC solutions precision engineered in North America. Designed for demanding industrial applications requiring maximum durability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative px-10 py-4 bg-[#007bff] text-white font-bold rounded-sm shadow-xl shadow-[#007bff]/30 hover:bg-[#0056b3] transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-wider overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    View Catalog
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </button>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] w-full min-h-[400px] group">
              <div className="absolute inset-0 bg-[#020c1b] rounded-sm transform lg:group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl shadow-black/40">
                <Image
                  src="/images/industrial_pvc_hero.jpg"
                  alt="Industrial PVC pipe close up"
                  fill
                  className="object-cover rounded-sm transition-transform duration-700 lg:group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-[#007bff]/10 rounded-sm mix-blend-multiply"></div>
              </div>
            </div>
          </div>
          
          <div className="relative border-t border-[#172a45] bg-[#020c1b]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: "Founded", value: "1985" },
                { label: "Locations", value: "12+" },
                { label: "Engineers", value: "50+" },
                { label: "Certification", value: "ISO 9001" },
              ].map(stat => (
                <div key={stat.label} className="border-r border-[#172a45] last:border-r-0">
                  <div className="text-3xl font-extrabold text-[#007bff] tracking-tight">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                <span className="text-[#007bff] font-semibold text-sm uppercase tracking-wider">Industries & Applications</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 uppercase tracking-tighter mt-3">Markets We Serve</h2>
                <div className="h-1 w-24 bg-[#007bff] mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { 
                    name: "Industrial", 
                    desc: "Chemical processing & manufacturing", 
                    icon: "⚙️", 
                    image: "/images/market-industrial.jpg" 
                    },
                    { 
                    name: "Municipal", 
                    desc: "Water treatment & infrastructure", 
                    icon: "🏛️", 
                    image: "/images/market-municipal.jpg" 
                    },
                    { 
                    name: "Irrigation", 
                    desc: "Agricultural water management", 
                    icon: "💧", 
                    image: "/images/market-irrigation.jpg" 
                    },
                    { 
                    name: "Utility", 
                    desc: "Power generation & distribution", 
                    icon: "⚡", 
                    image: "/images/market-utility.jpg" 
                    }
                ].map((market) => (
                    <div key={market.name} className="group relative h-96 rounded-sm overflow-hidden border border-slate-200 shadow-lg cursor-pointer">
                    
                    {/* Background Image with Zoom Effect */}
                    <div className="absolute inset-0">
                        <Image
                        src={market.image}
                        alt={market.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Dark Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/70 to-transparent transition-opacity duration-300 group-hover:via-[#0a192f]/80"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col justify-end">
                        <div className="transition-transform duration-300 group-hover:-translate-y-2">
                            <ShieldCheck className="w-12 h-12 text-5xl text-[white] mb-6 group-hover:text-[#007bff]" />

                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#007bff] transition-colors">
                                {market.name}
                            </h3>
                            <p className="text-slate-200 text-sm mt-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                {market.desc}
                            </p>
                            {/* Subtle underline effect */}
                            <div className="h-0.5 w-0 group-hover:w-16 bg-[#007bff] mt-4 transition-all duration-300"></div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>

        {/* --- MODERN ENGAGING MARKETING: BENTO GRID --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="text-[#007bff] font-semibold text-sm uppercase tracking-wider">Why Choose Harco</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tighter mt-3">Built to Outperform. Designed to Last.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              
              {/* Card 1 - Tall */}
              <div className="md:row-span-2 bg-[#0a192f] text-white p-8 rounded-sm flex flex-col justify-between border border-[#172a45]">
                <div>
                  <ShieldCheck className="w-12 h-12 text-[#007bff] mb-6" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Unmatched Safety & Compliance</h3>
                  <p className="text-slate-300 font-light mt-3 leading-relaxed">Rigorous testing ensures all fittings exceed ASTM standards for pressure and chemical resistance. Your infrastructure deserves the best protection.</p>
                </div>
                <button className="text-left text-sm font-bold text-[#007bff] flex items-center gap-2 group mt-6">
                  View Certifications <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <Zap className="w-8 h-8 text-[#007bff] mb-4" />
                  <h3 className="text-xl font-bold uppercase tracking-tight text-slate-950">Rapid Fulfillment</h3>
                  <p className="text-slate-600 text-sm font-light mt-2">12+ distribution centers across North America ensuring minimal downtime.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <Cog className="w-8 h-8 text-[#007bff] mb-4" />
                  <h3 className="text-xl font-bold uppercase tracking-tight text-slate-950">Custom Fabrication</h3>
                  <p className="text-slate-600 text-sm font-light mt-2">Bespoke engineering solutions for unique application requirements.</p>
                </div>
              </div>

              {/* Card 4 - Wide */}
              <div className="md:col-span-2 bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-center">
                <div className="flex gap-6 items-center">
                    <BarChart3 className="w-16 h-16 text-[#007bff] flex-shrink-0" />
                    <div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-950">Technical Consultation</h3>
                        <p className="text-slate-600 font-light mt-2 leading-relaxed">Access to our dedicated engineering team for product selection, CAD support, and installation advice.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- LEAD LOCK SECTION --- */}
        <section className="py-24 bg-[#020c1b] text-white">
          <div className="max-w-5xl mx-auto px-4 md:px-8 text-center bg-[#0a192f] p-12 md:p-16 rounded-sm border border-[#172a45] shadow-2xl">
            <FileText className="w-16 h-16 text-[#007bff] mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">Technical Engineering Guide 2026</h2>
            <p className="text-slate-300 font-light text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Download the definitive resource for piping design, pressure ratings, and chemical compatibility charts. Essential for engineers and procurement specialists.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto bg-[#020c1b] p-3 rounded-sm border border-[#172a45]">
                <input 
                    type="email" 
                    placeholder="Enter professional email" 
                    required
                    className="flex-grow bg-transparent text-white px-4 py-3 rounded-sm focus:outline-none placeholder:text-slate-600"
                />
                <button type="submit" className="group px-8 py-3 bg-[#007bff] text-white font-bold rounded-sm hover:bg-[#0056b3] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                    <Download className="w-4 h-4" />
                    Download Now
                </button>
            </form>
            <p className="text-xs text-slate-500 mt-4">By downloading, you agree to our privacy policy.</p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="text-[#007bff] font-semibold text-sm uppercase tracking-wider">Why Choose Harco</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tighter mt-3">Built to Outperform. Designed to Last.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              
              {/* Card 1 - Tall */}
              <div className="md:row-span-2 bg-[#0a192f] text-white p-8 rounded-sm flex flex-col justify-between border border-[#172a45]">
                <div>
                  <ShieldCheck className="w-12 h-12 text-[#007bff] mb-6" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Unmatched Safety & Compliance</h3>
                  <p className="text-slate-300 font-light mt-3 leading-relaxed">Rigorous testing ensures all fittings exceed ASTM standards for pressure and chemical resistance. Your infrastructure deserves the best protection.</p>
                </div>
                <button className="text-left text-sm font-bold text-[#007bff] flex items-center gap-2 group mt-6">
                  View Certifications <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <Zap className="w-8 h-8 text-[#007bff] mb-4" />
                  <h3 className="text-xl font-bold uppercase tracking-tight text-slate-950">Rapid Fulfillment</h3>
                  <p className="text-slate-600 text-sm font-light mt-2">12+ distribution centers across North America ensuring minimal downtime.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <Cog className="w-8 h-8 text-[#007bff] mb-4" />
                  <h3 className="text-xl font-bold uppercase tracking-tight text-slate-950">Custom Fabrication</h3>
                  <p className="text-slate-600 text-sm font-light mt-2">Bespoke engineering solutions for unique application requirements.</p>
                </div>
              </div>

              {/* Card 4 - Wide */}
              <div className="md:col-span-2 bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-center">
                <div className="flex gap-6 items-center">
                    <BarChart3 className="w-16 h-16 text-[#007bff] flex-shrink-0" />
                    <div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-950">Technical Consultation</h3>
                        <p className="text-slate-600 font-light mt-2 leading-relaxed">Access to our dedicated engineering team for product selection, CAD support, and installation advice.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
