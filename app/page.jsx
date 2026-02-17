// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Image from "next/image";
// import { Zap, ShieldCheck, Cog, BarChart3, FileText, Download } from "lucide-react";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col font-sans bg-white">
//       <Header />

//       <main className="flex-grow">
//         {/* --- Hero Section --- */}
//         <section className="relative bg-[#0a192f] text-white overflow-hidden">
//           <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(to right, #172a45 1px, transparent 1px), linear-gradient(to bottom, #172a45 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          
//           <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[750px] px-4 md:px-8 pt-24 pb-16">
            
//             <div className="z-10 flex flex-col justify-center space-y-8">
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
//                 <button className="group relative px-10 py-4 bg-[#007bff] text-white font-bold rounded-sm shadow-xl shadow-[#007bff]/30 hover:bg-[#0056b3] transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-wider overflow-hidden">
//                   <span className="relative z-10 flex items-center gap-3">
//                     View Catalog
//                     <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
//                   </span>
//                 </button>
//               </div>
//             </div>

//             <div className="relative h-96 lg:h-[500px] w-full min-h-[400px] group">
//               <div className="absolute inset-0 bg-[#020c1b] rounded-sm transform lg:group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl shadow-black/40">
//                 <Image
//                   src="/images/industrial_pvc_hero.jpg"
//                   alt="Industrial PVC pipe close up"
//                   fill
//                   className="object-cover rounded-sm transition-transform duration-700 lg:group-hover:scale-105"
//                   priority
//                 />
//                 <div className="absolute inset-0 bg-[#007bff]/10 rounded-sm mix-blend-multiply"></div>
//               </div>
//             </div>
//           </div>
          
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

//         <section className="py-24 bg-white border-b border-slate-100">
//             <div className="max-w-7xl mx-auto px-4 md:px-8">
//                 <div className="text-center mb-16">
//                 <span className="text-[#007bff] font-semibold text-sm uppercase tracking-wider">Industries & Applications</span>
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 uppercase tracking-tighter mt-3">Markets We Serve</h2>
//                 <div className="h-1 w-24 bg-[#007bff] mx-auto mt-6 rounded-full"></div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                 {[
//                     { 
//                     name: "Industrial", 
//                     desc: "Chemical processing & manufacturing", 
//                     icon: "⚙️", 
//                     image: "/images/market-industrial.jpg" 
//                     },
//                     { 
//                     name: "Municipal", 
//                     desc: "Water treatment & infrastructure", 
//                     icon: "🏛️", 
//                     image: "/images/market-municipal.jpg" 
//                     },
//                     { 
//                     name: "Irrigation", 
//                     desc: "Agricultural water management", 
//                     icon: "💧", 
//                     image: "/images/market-irrigation.jpg" 
//                     },
//                     { 
//                     name: "Utility", 
//                     desc: "Power generation & distribution", 
//                     icon: "⚡", 
//                     image: "/images/market-utility.jpg" 
//                     }
//                 ].map((market) => (
//                     <div key={market.name} className="group relative h-96 rounded-sm overflow-hidden border border-slate-200 shadow-lg cursor-pointer">
                    
//                     {/* Background Image with Zoom Effect */}
//                     <div className="absolute inset-0">
//                         <Image
//                         src={market.image}
//                         alt={market.name}
//                         fill
//                         className="object-cover transition-transform duration-700 group-hover:scale-110"
//                         />

//                         {/* Dark Overlay for Text Readability */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/70 to-transparent transition-opacity duration-300 group-hover:via-[#0a192f]/80"></div>
//                     </div>

//                     {/* Content */}
//                     <div className="relative h-full p-8 flex flex-col justify-end">
//                         <div className="transition-transform duration-300 group-hover:-translate-y-2">
//                             <ShieldCheck className="w-12 h-12 text-5xl text-[white] mb-6 group-hover:text-[#007bff]" />

//                             <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#007bff] transition-colors">
//                                 {market.name}
//                             </h3>
//                             <p className="text-slate-200 text-sm mt-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
//                                 {market.desc}
//                             </p>
//                             {/* Subtle underline effect */}
//                             <div className="h-0.5 w-0 group-hover:w-16 bg-[#007bff] mt-4 transition-all duration-300"></div>
//                         </div>
//                     </div>
//                     </div>
//                 ))}
//                 </div>
//             </div>
//         </section>

//         {/* --- MODERN ENGAGING MARKETING: BENTO GRID --- */}
//         <section className="py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-4 md:px-8">
//             <div className="text-center mb-16">
//               <span className="text-[#007bff] font-semibold text-sm uppercase tracking-wider">Why Choose Harco</span>
//               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tighter mt-3">Built to Outperform. Designed to Last.</h2>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              
//               {/* Card 1 - Tall */}
//               <div className="md:row-span-2 bg-[#0a192f] text-white p-8 rounded-sm flex flex-col justify-between border border-[#172a45]">
//                 <div>
//                   <ShieldCheck className="w-12 h-12 text-[#007bff] mb-6" />
//                   <h3 className="text-2xl font-bold uppercase tracking-tight">Unmatched Safety & Compliance</h3>
//                   <p className="text-slate-300 font-light mt-3 leading-relaxed">Rigorous testing ensures all fittings exceed ASTM standards for pressure and chemical resistance. Your infrastructure deserves the best protection.</p>
//                 </div>
//                 <button className="text-left text-sm font-bold text-[#007bff] flex items-center gap-2 group mt-6">
//                   View Certifications <span className="group-hover:translate-x-1 transition-transform">→</span>
//                 </button>
//               </div>

//               {/* Card 2 */}
//               <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-between">
//                 <div>
//                   <Zap className="w-8 h-8 text-[#007bff] mb-4" />
//                   <h3 className="text-xl font-bold uppercase tracking-tight text-slate-950">Rapid Fulfillment</h3>
//                   <p className="text-slate-600 text-sm font-light mt-2">12+ distribution centers across North America ensuring minimal downtime.</p>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-between">
//                 <div>
//                   <Cog className="w-8 h-8 text-[#007bff] mb-4" />
//                   <h3 className="text-xl font-bold uppercase tracking-tight text-slate-950">Custom Fabrication</h3>
//                   <p className="text-slate-600 text-sm font-light mt-2">Bespoke engineering solutions for unique application requirements.</p>
//                 </div>
//               </div>

//               {/* Card 4 - Wide */}
//               <div className="md:col-span-2 bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-center">
//                 <div className="flex gap-6 items-center">
//                     <BarChart3 className="w-16 h-16 text-[#007bff] flex-shrink-0" />
//                     <div>
//                         <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-950">Technical Consultation</h3>
//                         <p className="text-slate-600 font-light mt-2 leading-relaxed">Access to our dedicated engineering team for product selection, CAD support, and installation advice.</p>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* --- LEAD LOCK SECTION --- */}
//         <section className="py-24 bg-[#020c1b] text-white">
//           <div className="max-w-5xl mx-auto px-4 md:px-8 text-center bg-[#0a192f] p-12 md:p-16 rounded-sm border border-[#172a45] shadow-2xl">
//             <FileText className="w-16 h-16 text-[#007bff] mx-auto mb-8" />
//             <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">Technical Engineering Guide 2026</h2>
//             <p className="text-slate-300 font-light text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
//               Download the definitive resource for piping design, pressure ratings, and chemical compatibility charts. Essential for engineers and procurement specialists.
//             </p>
            
//             <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto bg-[#020c1b] p-3 rounded-sm border border-[#172a45]">
//                 <input 
//                     type="email" 
//                     placeholder="Enter professional email" 
//                     required
//                     className="flex-grow bg-transparent text-white px-4 py-3 rounded-sm focus:outline-none placeholder:text-slate-600"
//                 />
//                 <button type="submit" className="group px-8 py-3 bg-[#007bff] text-white font-bold rounded-sm hover:bg-[#0056b3] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
//                     <Download className="w-4 h-4" />
//                     Download Now
//                 </button>
//             </form>
//             <p className="text-xs text-slate-500 mt-4">By downloading, you agree to our privacy policy.</p>
//           </div>
//         </section>

//         <section className="py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-4 md:px-8">
//             <div className="text-center mb-16">
//               <span className="text-[#007bff] font-semibold text-sm uppercase tracking-wider">Why Choose Harco</span>
//               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tighter mt-3">Built to Outperform. Designed to Last.</h2>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              
//               {/* Card 1 - Tall */}
//               <div className="md:row-span-2 bg-[#0a192f] text-white p-8 rounded-sm flex flex-col justify-between border border-[#172a45]">
//                 <div>
//                   <ShieldCheck className="w-12 h-12 text-[#007bff] mb-6" />
//                   <h3 className="text-2xl font-bold uppercase tracking-tight">Unmatched Safety & Compliance</h3>
//                   <p className="text-slate-300 font-light mt-3 leading-relaxed">Rigorous testing ensures all fittings exceed ASTM standards for pressure and chemical resistance. Your infrastructure deserves the best protection.</p>
//                 </div>
//                 <button className="text-left text-sm font-bold text-[#007bff] flex items-center gap-2 group mt-6">
//                   View Certifications <span className="group-hover:translate-x-1 transition-transform">→</span>
//                 </button>
//               </div>

//               {/* Card 2 */}
//               <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-between">
//                 <div>
//                   <Zap className="w-8 h-8 text-[#007bff] mb-4" />
//                   <h3 className="text-xl font-bold uppercase tracking-tight text-slate-950">Rapid Fulfillment</h3>
//                   <p className="text-slate-600 text-sm font-light mt-2">12+ distribution centers across North America ensuring minimal downtime.</p>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-between">
//                 <div>
//                   <Cog className="w-8 h-8 text-[#007bff] mb-4" />
//                   <h3 className="text-xl font-bold uppercase tracking-tight text-slate-950">Custom Fabrication</h3>
//                   <p className="text-slate-600 text-sm font-light mt-2">Bespoke engineering solutions for unique application requirements.</p>
//                 </div>
//               </div>

//               {/* Card 4 - Wide */}
//               <div className="md:col-span-2 bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-center">
//                 <div className="flex gap-6 items-center">
//                     <BarChart3 className="w-16 h-16 text-[#007bff] flex-shrink-0" />
//                     <div>
//                         <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-950">Technical Consultation</h3>
//                         <p className="text-slate-600 font-light mt-2 leading-relaxed">Access to our dedicated engineering team for product selection, CAD support, and installation advice.</p>
//                     </div>
//                 </div>
//               </div>
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
// import { Zap, ShieldCheck, Cog, BarChart3, FileText, Download, ArrowRight, Factory, Droplets, Users, Target } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col font-sans bg-white">
//       <Header />

//       <main className="flex-grow">
//         {/* 1. Hero Section */}
//         <section className="relative bg-[#004496] text-white overflow-hidden">
//           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          
//           <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[700px] px-6 md:px-8 pt-24 pb-16">
//             <div className="z-10 flex flex-col justify-center space-y-6">
//               <span className="inline-flex w-fit items-center rounded-full bg-[#0e3a74] px-5 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/10">
//                 INDUSTRIAL PIPE SOLUTIONS
//               </span>
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white">
//                 Engineered for <br/>
//                 <span className="text-[#f97316]">Reliability</span>
//               </h1>
//               <p className="text-lg md:text-xl text-slate-200 max-w-lg font-light leading-relaxed">
//                 Precision-engineered PVC & CPVC systems designed for maximum durability in chemical, municipal, and industrial applications.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Link href="/products" className="group px-8 py-4 bg-[#f97316] text-white font-bold rounded-sm shadow-xl hover:bg-[#ea580c] transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-wider hover:scale-105">
//                     View Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//                 <Link href="/contact" className="px-8 py-4 bg-white text-[#004496] font-bold rounded-sm shadow-xl transition-all duration-300 hover:bg-slate-100 flex items-center justify-center gap-3 text-sm uppercase tracking-wider hover:scale-105">
//                     Request Quote
//                 </Link>
//               </div>
//             </div>
//             {/* Hero Image */}
//             <div className="relative h-96 lg:h-[480px] w-full group rounded-sm overflow-hidden">
//                 <Image src="/images/industrial_pvc_hero.jpg" alt="Industrial Pipe" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
//                 <div className="absolute inset-0 bg-[#004496]/20 mix-blend-multiply"></div>
//             </div>
//           </div>
//         </section>

//         {/* 2. Trust Bar (Client Logos) */}
//         <section className="py-12 bg-white border-b border-slate-100">
//             <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
//                 <p className="text-sm text-slate-500 uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
//                 <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
//                     {/* Placeholder logos - replace with actual images */}
//                     {['#', '#', '#', '#', '#'].map((_, i) => (
//                         <div key={i} className="text-2xl font-bold text-slate-400">LOGO {i+1}</div>
//                     ))}
//                 </div>
//             </div>
//         </section>

//         {/* 3. Product Spotlight (Modern Card Grid) */}
//         <section className="py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-6 md:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-extrabold text-[#004496] tracking-tighter">High-Performance Solutions</h2>
//               <p className="text-slate-600 mt-4 max-w-2xl mx-auto">From raw materials to finished fittings, Harco delivers quality engineered to withstand the most demanding environments.</p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 { title: "Industrial PVC", desc: "For corrosive environments.", icon: Factory },
//                 { title: "CPVC Systems", desc: "High-temperature capability.", icon: Droplets },
//                 { title: "Flow Control", desc: "Valves & Actuation.", icon: Target },
//               ].map((product, i) => (
//                 <div key={i} className="group p-8 bg-slate-50 border border-slate-100 rounded-sm hover:border-[#004496]/20 hover:shadow-xl transition-all duration-300">
//                   <product.icon className="w-12 h-12 text-[#f97316] mb-6" />
//                   <h3 className="text-2xl font-bold text-[#004496]">{product.title}</h3>
//                   <p className="text-slate-600 mt-2 text-sm leading-relaxed">{product.desc}</p>
//                   <Link href="/products" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[#f97316] group-hover:gap-3 transition-all">
//                     Explore <ArrowRight className="w-4 h-4" />
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* 4. Bento Grid (Why Choose Us) */}
//         <section className="py-24 bg-slate-50">
//           <div className="max-w-7xl mx-auto px-6 md:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-extrabold text-[#004496] tracking-tighter">Engineered for Excellence</h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
//               <div className="md:col-span-2 md:row-span-2 bg-[#004496] text-white p-10 rounded-sm flex flex-col justify-end gap-3">
//                 <ShieldCheck className="w-12 h-12 text-[#f97316]" />
//                 <h3 className="text-3xl font-bold uppercase tracking-tight">Certified Quality</h3>
//                 <p className="text-slate-200 font-light text-sm leading-relaxed">Exceeding ASTM standards with rigorous testing protocols for pressure, chemical resistance, and longevity.</p>
//               </div>
//               <div className="bg-white p-6 rounded-sm border border-slate-100 flex flex-col justify-between">
//                 <Zap className="w-8 h-8 text-[#f97316]" />
//                 <h3 className="font-bold text-[#004496]">Rapid Shipping</h3>
//               </div>
//               <div className="bg-white p-6 rounded-sm border border-slate-100 flex flex-col justify-between">
//                 <Users className="w-8 h-8 text-[#f97316]" />
//                 <h3 className="font-bold text-[#004496]">Expert Support</h3>
//               </div>
//               <div className="md:col-span-2 bg-white p-8 rounded-sm border border-slate-100 flex flex-col justify-center">
//                 <div className="flex gap-4 items-center">
//                     <BarChart3 className="w-12 h-12 text-[#f97316] flex-shrink-0" />
//                     <p className="text-slate-700 text-sm leading-relaxed">Custom fabrication and technical consultations available for specialized infrastructure projects.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 5. Process/Steps Section */}
//         <section className="py-24 bg-white">
//             <div className="max-w-7xl mx-auto px-6 md:px-8">
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-[#004496] tracking-tighter text-center mb-16">The Harco Process</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                     {[
//                         { step: "01", title: "Consultation", desc: "Understanding your technical requirements." },
//                         { step: "02", title: "Engineering", desc: "Designing for performance and safety." },
//                         { step: "03", title: "Fulfillment", desc: "Precision manufacturing and delivery." },
//                     ].map((item, i) => (
//                         <div key={i} className="relative p-8 bg-slate-50 border border-slate-100 rounded-sm">
//                             <span className="absolute -top-6 -left-2 text-6xl font-black text-[#004496]/10">{item.step}</span>
//                             <h3 className="text-xl font-bold text-[#004496] relative z-10">{item.title}</h3>
//                             <p className="text-slate-600 mt-2 text-sm leading-relaxed relative z-10">{item.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>

//         {/* 6. Lead Lock (Updated to new colors) */}
//         <section className="py-24 bg-[#0e3a74] text-white">
//           <div className="max-w-5xl mx-auto px-6 md:px-8 text-center bg-[#004496] p-12 md:p-16 rounded-sm border border-[#0e3a74] shadow-2xl">
//             <FileText className="w-16 h-16 text-[#f97316] mx-auto mb-8" />
//             <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">Engineering Guide 2026</h2>
//             <p className="text-slate-200 font-light text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
//               Download the definitive resource for piping design, pressure ratings, and chemical compatibility charts.
//             </p>
//             <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto bg-[#0e3a74] p-3 rounded-sm border border-[#004496]">
//                 <input type="email" placeholder="Enter professional email" required className="flex-grow bg-transparent text-white px-4 py-3 rounded-sm focus:outline-none placeholder:text-slate-400" />
//                 <button type="submit" className="group px-8 py-3 bg-[#f97316] text-white font-bold rounded-sm hover:bg-[#ea580c] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
//                     <Download className="w-4 h-4" /> Download Now
//                 </button>
//             </form>
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
// import { Zap, ShieldCheck, Cog, BarChart3, FileText, Download, ArrowRight, Factory, Droplets, Target, FileSearch, Users } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col font-sans bg-white">
//       <Header />

//       <main className="flex-grow">
//         {/* 1. Hero Section */}
//         <section className="relative bg-[#004496] text-white overflow-hidden">
//           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          
//           <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[700px] px-6 md:px-8 pt-24 pb-16">
//             <div className="z-10 flex flex-col justify-center space-y-6">
//               <span className="inline-flex w-fit items-center rounded-full bg-[#0e3a74] px-5 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/10">
//                 INDUSTRIAL PIPE SOLUTIONS
//               </span>
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white">
//                 Engineered for <br/>
//                 <span className="text-[#f97316]">Reliability</span>
//               </h1>
//               <p className="text-lg md:text-xl text-slate-200 max-w-lg font-light leading-relaxed">
//                 Precision-engineered PVC & CPVC systems designed for maximum durability in chemical, municipal, and industrial applications.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Link href="/products" className="group px-8 py-4 bg-[#f97316] text-white font-bold rounded-sm shadow-xl hover:bg-[#ea580c] transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-wider hover:scale-105">
//                     View Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//                 <Link href="/contact" className="px-8 py-4 bg-white text-[#004496] font-bold rounded-sm shadow-xl transition-all duration-300 hover:bg-slate-100 flex items-center justify-center gap-3 text-sm uppercase tracking-wider hover:scale-105">
//                     Request Quote
//                 </Link>
//               </div>
//             </div>
            
//             {/* Hero Image - Will work once next.config.js is updated */}
//             <div className="relative h-96 lg:h-[480px] w-full group rounded-sm overflow-hidden shadow-2xl">
//                 <Image 
//                   src="https://unsplash.com/photos/person-writing-on-white-paper-xYCBw1uIP_M?q=80&w=1000&auto=format&fit=crop" 
//                   alt="Industrial Pipe System" 
//                   fill 
//                   className="object-cover transition-transform duration-700 group-hover:scale-105" 
//                   priority 
//                 />
//                 <div className="absolute inset-0 bg-[#004496]/20 mix-blend-multiply"></div>
//             </div>
//           </div>
//         </section>

//         {/* 2. Trust Bar */}
//         <section className="py-12 bg-white border-b border-slate-100">
//             <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
//                 <p className="text-sm text-slate-500 uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
//                 <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
//                     {['#', '#', '#', '#', '#'].map((_, i) => (
//                         <div key={i} className="text-2xl font-bold text-slate-400">LOGO {i+1}</div>
//                     ))}
//                 </div>
//             </div>
//         </section>

//         {/* 3. Product Spotlight */}
//         <section className="py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-6 md:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-extrabold text-[#004496] tracking-tighter">High-Performance Solutions</h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 { title: "Industrial PVC", desc: "For corrosive environments.", icon: Factory },
//                 { title: "CPVC Systems", desc: "High-temperature capability.", icon: Droplets },
//                 { title: "Flow Control", desc: "Valves & Actuation.", icon: Target },
//               ].map((product, i) => (
//                 <div key={i} className="group p-8 bg-slate-50 border border-slate-100 rounded-sm hover:border-[#004496]/20 hover:shadow-xl transition-all duration-300">
//                   <product.icon className="w-12 h-12 text-[#f97316] mb-6" />
//                   <h3 className="text-2xl font-bold text-[#004496]">{product.title}</h3>
//                   <p className="text-slate-600 mt-2 text-sm leading-relaxed">{product.desc}</p>
//                   <Link href="/products" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[#f97316] group-hover:gap-3 transition-all">
//                     Explore <ArrowRight className="w-4 h-4" />
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* 4. Engineering Resource Center */}
//         <section className="py-24 bg-slate-50 border-y border-slate-100">
//           <div className="max-w-7xl mx-auto px-6 md:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
//               <div className="lg:col-span-1">
//                 <FileSearch className="w-16 h-16 text-[#f97316] mb-6" />
//                 <h2 className="text-4xl font-extrabold text-[#004496] tracking-tighter">Engineer Resource Center</h2>
//                 <p className="text-slate-600 mt-4 leading-relaxed">Access comprehensive technical documentation, CAD drawings, and BIM models to streamline your design process.</p>
//               </div>
//               <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[
//                   { title: "CAD Drawings", desc: "2D & 3D dwg files", icon: Cog },
//                   { title: "BIM Models", desc: "Revit families", icon: Target },
//                   { title: "Submittals", desc: "Technical data sheets", icon: FileText },
//                   { title: "Install Guides", desc: "Best practices", icon: Zap },
//                 ].map((item, i) => (
//                   <Link href="/resources" key={i} className="bg-white p-6 rounded-sm border border-slate-100 flex items-center gap-5 hover:border-[#f97316]/30 transition-all group">
//                     <item.icon className="w-10 h-10 text-[#004496] group-hover:text-[#f97316] transition-colors" />
//                     <div>
//                       <h4 className="font-bold text-[#004496]">{item.title}</h4>
//                       <p className="text-sm text-slate-500">{item.desc}</p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 5. Bento Grid - Why Choose Us */}
//         <section className="py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-6 md:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-extrabold text-[#004496] tracking-tighter">Engineered for Excellence</h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
//               <div className="md:col-span-2 md:row-span-2 bg-[#004496] text-white p-10 rounded-sm flex flex-col justify-end gap-3">
//                 <ShieldCheck className="w-12 h-12 text-[#f97316]" />
//                 <h3 className="text-3xl font-bold uppercase tracking-tight">Certified Quality</h3>
//                 <p className="text-slate-200 font-light text-sm leading-relaxed">Exceeding ASTM standards with rigorous testing protocols for pressure, chemical resistance, and longevity.</p>
//               </div>
//               <div className="bg-slate-50 p-6 rounded-sm border border-slate-100 flex flex-col justify-between">
//                 <Zap className="w-8 h-8 text-[#f97316]" />
//                 <h3 className="font-bold text-[#004496]">Rapid Shipping</h3>
//               </div>
//               <div className="bg-slate-50 p-6 rounded-sm border border-slate-100 flex flex-col justify-between">
//                 <Users className="w-8 h-8 text-[#f97316]" />
//                 <h3 className="font-bold text-[#004496]">Expert Support</h3>
//               </div>
//               <div className="md:col-span-2 bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-center">
//                 <div className="flex gap-4 items-center">
//                     <BarChart3 className="w-12 h-12 text-[#f97316] flex-shrink-0" />
//                     <p className="text-slate-700 text-sm leading-relaxed">Custom fabrication and technical consultations available for specialized infrastructure projects.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 6. Material Data Spotlight */}
//         <section className="py-24 bg-[#0e3a74] text-white">
//           <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#f97316]">Material Science Spotlight</h2>
//               <p className="text-slate-200 mt-6 leading-relaxed">Harco PVC and CPVC materials are formulated to handle extreme chemical exposure and high-pressure environments. Explore our chemical resistance charts.</p>
//               <Link href="/materials" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-[#004496] font-bold rounded-sm hover:bg-slate-100 transition-colors">
//                 View Resistance Charts <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//             {/* Image Placeholder */}
//             <div className="relative h-80 rounded-sm overflow-hidden border-4 border-[#004496] shadow-xl">
//               <Image 
//                 src="https://images.unsplash.com/photo-1517411032315-34fa68025219?q=80&w=1000&auto=format&fit=crop" 
//                 alt="Material Science Lab" 
//                 fill 
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </section>

//         {/* 7. Lead Lock */}
//         <section className="py-24 bg-white text-white">
//           <div className="max-w-5xl mx-auto px-6 md:px-8 text-center bg-[#004496] p-12 md:p-16 rounded-sm border border-[#0e3a74] shadow-2xl">
//             <FileText className="w-16 h-16 text-[#f97316] mx-auto mb-8" />
//             <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">Engineering Guide 2026</h2>
//             <p className="text-slate-200 font-light text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
//               Download the definitive resource for piping design, pressure ratings, and chemical compatibility charts.
//             </p>
//             <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto bg-[#0e3a74] p-3 rounded-sm border border-[#004496]">
//                 <input type="email" placeholder="Enter professional email" required className="flex-grow bg-transparent text-white px-4 py-3 rounded-sm focus:outline-none placeholder:text-slate-400" />
//                 <button type="submit" className="group px-8 py-3 bg-[#f97316] text-white font-bold rounded-sm hover:bg-[#ea580c] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
//                     <Download className="w-4 h-4" /> Download Now
//                 </button>
//             </form>
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
import { Zap, ShieldCheck, Cog, BarChart3, FileText, Download, ArrowRight, Factory, Droplets, Target, FileSearch, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />

      <main className="flex-grow">

        <section className="relative bg-[#004496] text-white overflow-hidden min-h-screen flex flex-col">
          {/* <div className="absolute inset-0 opacity-5 index-0 z-0" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div> */}

          
          <div className="relative flex-grow flex flex-col lg:flex-row">
            
            {/* Left Side: Content */}
            <div className="relative z-10 w-full lg:w-1/2 flex items-center px-6 md:px-8 py-16 lg:py-0 lg:ps-28">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <span className="inline-flex items-center rounded-full bg-[#0e3a74] px-5 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 mb-6 tracking-wide">
                  INDUSTRIAL PIPE SOLUTIONS
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white">
                  Engineered for <br/>
                  <span className="text-[#f97316]">Durability</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed mt-6 mb-10">
                  Precision-engineered PVC & CPVC systems designed for maximum durability in chemical, municipal, and industrial applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products" className="group px-8 py-4 bg-[#f97316] text-white font-bold rounded-sm shadow-xl hover:bg-[#ea580c] transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-wider hover:scale-105">
                      View Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="px-8 py-4 bg-white text-[#004496] font-bold rounded-sm shadow-xl transition-all duration-300 hover:bg-slate-100 flex items-center justify-center gap-3 text-sm uppercase tracking-wider hover:scale-105">
                      Request Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side: Full Height Image with Blend Effect */}
            <div className="absolute top-0 right-0 w-full lg:h-full group overflow-hidden">
                <Image 
                  src="/images/enginner.jpg" 
                  alt="Industrial Pipe System" 
                  fill 
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter-none " 
                  style={{ mixBlendMode: 'multiply' }} 
                  priority 
                />
                {/* Modern Overlay - Darker on edge, fades toward center */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#004496] via-transparent to-transparent group-hover:from-[#004496]/50 transition-colors duration-700"></div>
            </div>
          </div>

          {/* Neater Stats Bar with subtle dividers */}
          <div className="relative z-10 border-t border-[#0e3a74] bg-[#020c1b]/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: "Founded", value: "1985" },
                { label: "Locations", value: "12+" },
                { label: "Engineers", value: "50+" },
                { label: "Certification", value: "ISO 9001" },
              ].map(stat => (
                <div key={stat.label} className="flex flex-col items-center justify-center border-r border-[#0e3a74] last:border-r-0 py-2">
                  <div className="text-3xl font-extrabold text-[#f97316] tracking-tight">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-300 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        {/* 2. Trust Bar */}
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
                <p className="text-sm text-slate-500 uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                    {['#', '#', '#', '#', '#'].map((_, i) => (
                        <div key={i} className="text-2xl font-bold text-slate-400">LOGO {i+1}</div>
                    ))}
                </div>
            </div>
        </section>

        {/* 3. Product Spotlight */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#004496] tracking-tighter">High-Performance Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Industrial PVC", desc: "For corrosive environments.", icon: Factory },
                { title: "CPVC Systems", desc: "High-temperature capability.", icon: Droplets },
                { title: "Flow Control", desc: "Valves & Actuation.", icon: Target },
              ].map((product, i) => (
                <div key={i} className="group p-8 bg-slate-50 border border-slate-100 rounded-sm hover:border-[#004496]/20 hover:shadow-xl transition-all duration-300">
                  <product.icon className="w-12 h-12 text-[#f97316] mb-6" />
                  <h3 className="text-2xl font-bold text-[#004496]">{product.title}</h3>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">{product.desc}</p>
                  <Link href="/products" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[#f97316] group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Engineering Resource Center */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <FileSearch className="w-16 h-16 text-[#f97316] mb-6" />
                <h2 className="text-4xl font-extrabold text-[#004496] tracking-tighter">Engineer Resource Center</h2>
                <p className="text-slate-600 mt-4 leading-relaxed">Access comprehensive technical documentation, CAD drawings, and BIM models to streamline your design process.</p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "CAD Drawings", desc: "2D & 3D dwg files", icon: Cog },
                  { title: "BIM Models", desc: "Revit families", icon: Target },
                  { title: "Submittals", desc: "Technical data sheets", icon: FileText },
                  { title: "Install Guides", desc: "Best practices", icon: Zap },
                ].map((item, i) => (
                  <Link href="/resources" key={i} className="bg-white p-6 rounded-sm border border-slate-100 flex items-center gap-5 hover:border-[#f97316]/30 transition-all group">
                    <item.icon className="w-10 h-10 text-[#004496] group-hover:text-[#f97316] transition-colors" />
                    <div>
                      <h4 className="font-bold text-[#004496]">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Bento Grid - Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#004496] tracking-tighter">Engineered for Excellence</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
              <div className="md:col-span-2 md:row-span-2 bg-[#004496] text-white p-10 rounded-sm flex flex-col justify-end gap-3">
                <ShieldCheck className="w-12 h-12 text-[#f97316]" />
                <h3 className="text-3xl font-bold uppercase tracking-tight">Certified Quality</h3>
                <p className="text-slate-200 font-light text-sm leading-relaxed">Exceeding ASTM standards with rigorous testing protocols for pressure, chemical resistance, and longevity.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-sm border border-slate-100 flex flex-col justify-between">
                <Zap className="w-8 h-8 text-[#f97316]" />
                <h3 className="font-bold text-[#004496]">Rapid Shipping</h3>
              </div>
              <div className="bg-slate-50 p-6 rounded-sm border border-slate-100 flex flex-col justify-between">
                <Users className="w-8 h-8 text-[#f97316]" />
                <h3 className="font-bold text-[#004496]">Expert Support</h3>
              </div>
              <div className="md:col-span-2 bg-slate-50 p-8 rounded-sm border border-slate-100 flex flex-col justify-center">
                <div className="flex gap-4 items-center">
                    <BarChart3 className="w-12 h-12 text-[#f97316] flex-shrink-0" />
                    <p className="text-slate-700 text-sm leading-relaxed">Custom fabrication and technical consultations available for specialized infrastructure projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Material Data Spotlight */}
        <section className="py-24 bg-[#0e3a74] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#f97316]">Material Science Spotlight</h2>
              <p className="text-slate-200 mt-6 leading-relaxed">Harco PVC and CPVC materials are formulated to handle extreme chemical exposure and high-pressure environments. Explore our chemical resistance charts.</p>
              <Link href="/materials" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-[#004496] font-bold rounded-sm hover:bg-slate-100 transition-colors">
                View Resistance Charts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Image Placeholder - Verified URL */}
            <div className="relative h-80 rounded-sm overflow-hidden border-4 border-[#004496] shadow-xl">
              <Image 
                src="/images/enginner.jpg" 
                alt="Material Science Lab" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </section>
        

        {/* 7. Lead Lock */}
        <section className="py-24 bg-white text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 text-center bg-[#004496] p-12 md:p-16 rounded-sm border border-[#0e3a74] shadow-2xl">
            <FileText className="w-16 h-16 text-[#f97316] mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">Engineering Guide 2026</h2>
            <p className="text-slate-200 font-light text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Download the definitive resource for piping design, pressure ratings, and chemical compatibility charts.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto bg-[#0e3a74] p-3 rounded-sm border border-[#004496]">
                <input type="email" placeholder="Enter professional email" required className="flex-grow bg-transparent text-white px-4 py-3 rounded-sm focus:outline-none placeholder:text-slate-400" />
                <button type="submit" className="group px-8 py-3 bg-[#f97316] text-white font-bold rounded-sm hover:bg-[#ea580c] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                    <Download className="w-4 h-4" /> Download Now
                </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
