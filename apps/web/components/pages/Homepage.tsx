
// import React, { useState, useEffect } from 'react';
// import { 
//   Search, HardHat, Laptop, Droplet, CreditCard, 
//   HeartPulse, FileText, MessageSquare, ArrowRight,
//   ChevronLeft, ChevronRight, ExternalLink
// } from 'lucide-react';

// interface ServiceCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   actionText?: string;
// }

// export const NagarPalikaServicesPortal: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [currentSlide, setCurrentSlide] = useState<number>(0);

//   // --- Official Banners Array using Live S3WAAS and Government Assets ---
//   const sliderImages = [
//     {
//       url: "https://cdn.s3waas.gov.in/s30336dcbab05b9d5ad24f4333c7658a0e/uploads/2026/04/17775345344929.png",
//       alt: "Jan gdna 2027",
//       link: "https://cbpssubscriber.mygov.in/aff/fr9Ap8608OHWeScK"
//     },
//     {
//       url: "https://cdn.s3waas.gov.in/s30336dcbab05b9d5ad24f4333c7658a0e/uploads/2026/04/17775345298586.png",
//       alt: "Census of India 2027 Portal Launch Banner",
//       link: "https://cbpssubscriber.mygov.in/aff/fr9Ap8608OHWeScK"
//     },
//     {
//       url: "https://cdn.s3waas.gov.in/s30336dcbab05b9d5ad24f4333c7658a0e/uploads/2022/08/2022080685.jpg",
//       alt: "Patna Bird Sanctuary, Jalesar, Etah Eco-Tourism",
//       link: "#"
//     }
//   ];

//   // --- Portals Database mapped directly to your Official S3WAAS Image Links ---
//   const governmentPortals = [
//  {
//       imgUrl: "https://tse4.mm.bing.net/th/id/OIP.cmWC0sWBy4tCsvptDLv6mwHaE8?r=0&pid=Api&h=220&P=0", // GeM Official S3WAAS Logo Link
//       siteUrl: "https://gem.gov.in/",
//       title: "GeM Portal",
//       tagline: "Govt e-Marketplace",
//       bgClass: "from-amber-50/80 to-yellow-50/30 border-amber-300 hover:border-amber-600",
//       badgeColor: "bg-amber-700",
//       glowColor: "hover:shadow-amber-100"
//     },
//   {
//       imgUrl: "https://d16kg6xo62zbe.cloudfront.net/site-picture/463x256/e/etender.up.nic.in.png", // eProcurement/NIC Official Asset Link
//       siteUrl: "https://etender.up.nic.in/nicgep/app",
//       title: "eTender UP",
//       tagline: "e-Procurement System",
//       bgClass: "from-teal-50/70 to-cyan-50/20 border-teal-200 hover:border-teal-600",
//       badgeColor: "bg-teal-600",
//       glowColor: "hover:shadow-teal-100"
//     },
  
//     {
//        imgUrl: "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053014.png",  // Data Gov Live Link
//       siteUrl: "https://data.gov.in/",
//       title: "Data Gov India",
//       tagline: "Open Data Platform",
//       bgClass: "from-amber-50/70 to-orange-50/20 border-amber-200 hover:border-amber-500",
//       badgeColor: "bg-amber-600",
//       glowColor: "hover:shadow-amber-100"
//     },
//     {
//       imgUrl: "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053094.png",  // Incredible India Live Link
//       siteUrl: "https://www.incredibleindia.org/",
//       title: "Incredible India",
//       tagline: "Ministry of Tourism",
//       bgClass: "from-rose-50/70 to-pink-50/20 border-rose-200 hover:border-rose-500",
//       badgeColor: "bg-rose-600",
//       glowColor: "hover:shadow-rose-100"
//     },
//     {
//       imgUrl: "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053017.png", // MyGov Live Link
//       siteUrl: "https://www.mygov.in/",
//       title: "MyGov Portal",
//       tagline: "Citizen Engagement",
//       bgClass: "from-orange-50/70 to-amber-50/20 border-orange-200 hover:border-orange-500",
//       badgeColor: "bg-orange-600",
//       glowColor: "hover:shadow-orange-100"
//     },
//     {
//       imgUrl: "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053039.png", // PMNRF Live Link
//       siteUrl: "https://pmnrf.gov.in/",
//       title: "PMNRF Fund",
//       tagline: "National Relief Fund",
//       bgClass: "from-emerald-50/70 to-teal-50/20 border-emerald-200 hover:border-emerald-600",
//       badgeColor: "bg-emerald-600",
//       glowColor: "hover:shadow-emerald-100"
//     },
//     {
//       imgUrl: "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017110781.png", // PMINDIA Live Link
//       siteUrl: "https://www.pmindia.gov.in/",
//       title: "PMINDIA Office",
//       tagline: "Prime Minister's Office",
//       bgClass: "from-blue-50/70 to-indigo-50/20 border-blue-200 hover:border-blue-600",
//       badgeColor: "bg-blue-600",
//       glowColor: "hover:shadow-blue-100"
//     },
//     {
//       imgUrl: "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053023.png", // India Gov Fallback/Active Link
//       siteUrl: "https://www.india.gov.in/",
//       title: "National Portal",
//       tagline: "Gateway to Government",
//       bgClass: "from-indigo-50/70 to-purple-50/20 border-indigo-200 hover:border-indigo-600",
//       badgeColor: "bg-indigo-600",
//       glowColor: "hover:shadow-indigo-100"
//     }
//   ];

//   // Auto scroll timer for Top Hero Banners
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [sliderImages.length]);

//   return (
//     <div className="w-full bg-gray-50 text-gray-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
//       {/* 1. HERO SLIDER BANNER SECTION */}
//       <section className="relative h-[380px] w-full bg-slate-900 overflow-hidden group/section">
//         <div className="absolute inset-0 w-full h-full">
//           {sliderImages.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//                 index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//               }`}
//             >
//               <a href={slide.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
//                 <img src={slide.url} alt={slide.alt} className="w-full h-full object-fill md:object-stretch bg-slate-900" />
//               </a>
//             </div>
//           ))}
//         </div>
//         <button
//         suppressHydrationWarning
//           onClick={() => setCurrentSlide(p => (p - 1 + sliderImages.length) % sliderImages.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition"><ChevronLeft className="w-5 h-5" /></button>
//         <button
//           suppressHydrationWarning
//           onClick={() => setCurrentSlide(p => (p + 1) % sliderImages.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition"><ChevronRight className="w-5 h-5" /></button>
//       </section>

     

//       {/* 2. REAL-TIME TICKER ANNOUNCEMENTS */}
//       <section className="bg-red-700 text-white text-xs py-2 px-4 overflow-hidden shadow-inner">
//         <div className="max-w-7xl mx-auto flex items-center">
//           <span className="bg-white text-red-700 font-black px-2.5 py-0.5 rounded mr-4 uppercase tracking-wider shrink-0 shadow-sm animate-pulse">Announcements</span>
//           <div className="relative flex overflow-x-hidden w-full font-medium">
//             <div className="animate-[marquee_25s_linear_infinite] whitespace-nowrap flex gap-12">
//               <span>• Census 2027 Planning Commenced - Secure Digital Participation Verified</span>
//               <span>• Digital Tax Payment System Now Operational Across All Wards</span>
//               <span>• Swachh Bharat Abhiyan Cleanliness Drive Commencing this Friday</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. DIGITAL SERVICE GATEWAY */}
//       <main className="max-w-7xl mx-auto px-4 md:px-12 py-12">
//         <div className="flex justify-between items-end mb-8">
//           <div>
//             <span className="text-[12px] font-bold text-blue-600 tracking-widest uppercase block mb-1">Departments & Services</span>
//             <h3 className="text-4xl font-extrabold text-gray-900">Digital Service Gateway</h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
//           <div className="md:col-span-2 md:row-span-2 bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition relative overflow-hidden group">
//             <div>
//               <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4"><HardHat className="w-5 h-5" /></div>
//               <h4 className="font-bold text-xl text-gray-900 text-base mb-2">Public Works Department</h4>
//               <p className="text-xs text-gray-500 leading-relaxed max-w-sm">Managing infrastructure development, road maintenance, and urban planning initiatives for a better layout.</p>
//             </div>
//             <div className="mt-6 space-y-2 z-10">
//               <a href="#" className="block text-xs font-medium text-blue-600 hover:underline">• New Road Projects</a>
//               <a href="#" className="block text-xs font-medium text-blue-600 hover:underline">• Infrastructure Permits</a>
//             </div>
//           </div>

//           <ServiceCard icon={<Laptop className="w-6 h-6" />} title="IT Department" description="E-governance & digital solutions." actionText="Access Services →" />
//           <ServiceCard icon={<Droplet className="w-6 h-6" />} title="Water Supply" description="Clean water management and billing." actionText="Pay Bills →" />
//           <ServiceCard icon={<CreditCard className="w-6 6-4" />} title="Tax Payment" description="Fast property tax portal." />
//           <ServiceCard icon={<HeartPulse className="w-6 h-6" />} title="Health Dept" description="Public health clinics." />
//         </div>
//       </main>

//       {/* --- 4. EXTREMELY POWERFUL & COLORFUL GOVERNMENT PORTALS GRID --- */}
//       <section className="bg-slate-100/60 border-t border-b border-gray-200/80 py-14 px-4 md:px-12 relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-10">
//             <span className="text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-0.5 uppercase tracking-wider inline-block mb-2">
//               National Digital Systems
//             </span>
//             <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
//               Important Government Portals
//             </h3>
//             <p className="text-xs text-gray-500 mt-1">Direct single-click live connection with official frameworks.</p>
//           </div>
          
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 items-stretch">
//             {governmentPortals.map((portal, idx) => (
//               <a 
//                 key={idx} 
//                 href={portal.siteUrl} 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className={`group relative flex flex-col justify-between items-center bg-gradient-to-br ${portal.bgClass} border rounded-2xl p-4 min-h-[150px] transition-all duration-300 shadow-xs hover:shadow-lg ${portal.glowColor} hover:-translate-y-1.5`}
//               >
//                 {/* Arrow Icon in Corner */}
//                 <div className="absolute top-2.5 right-2.5 text-gray-300 group-hover:text-gray-400 transition-colors">
//                   <ExternalLink className="w-3 h-3" />
//                 </div>

//                 {/* S3WAAS White Secure Container — Logos ab super sharp aur bina image break ke dikhenge */}
//                 <div className="w-full h-24 bg-white rounded-xl p-2.5 flex items-center justify-center shadow-2xs border border-gray-100 transition-transform duration-300 group-hover:scale-105">
//                   <img 
//                     src={portal.imgUrl} 
//                     alt={portal.title} 
//                     className="max-w-full max-h-full object-contain"
//                     onError={(e) => {
//                       // Fallback text management in case user has specific client-side proxy blocking
//                       (e.target as HTMLElement).style.display = 'none';
//                     }}
//                   />
//                 </div>
                
//                 {/* Text Metadata */}
//                 <div className="w-full text-center mt-3">
//                   <h4 className="text-[11px] font-extrabold text-gray-800 group-hover:text-gray-900 transition-colors leading-tight">
//                     {portal.title}
//                   </h4>
//                   <p className="text-[9px] text-gray-400 font-medium truncate mt-0.5">
//                     {portal.tagline}
//                   </p>
//                 </div>

//                 {/* Animated Interactive Reveal Tag on hover */}
//                 <div className="w-full mt-2.5 overflow-hidden rounded h-0.5 group-hover:h-5 transition-all duration-300 opacity-0 group-hover:opacity-100">
//                   <div className={`${portal.badgeColor} text-white font-bold text-[9px] text-center uppercase tracking-wider py-0.5 rounded shadow-xs`}>
//                     Visit Site ↗
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, actionText }) => {
//   return (
//     <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
//       <div>
//         <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3">{icon}</div>
//         <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
//         <p className="text-[11px] text-gray-400 leading-normal">{description}</p>
//       </div>
//       {actionText && <a href="#" className="text-[11px] font-semibold text-blue-600 hover:underline mt-3 block">{actionText}</a>}
//     </div>
//   );
// };

// export default NagarPalikaServicesPortal;


'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Activity, ArrowRight, Building2, CheckCircle2, ChevronLeft, 
  ChevronRight, Trees 
} from 'lucide-react';

interface Slide {
  id: number;
  headline: string;
  tagline: string;
  badgeText: string;
  icon: React.ReactNode;
  bgImage: string;
  primaryAction: string;
  primaryTarget: string;
  secondaryAction: string;
}

// --- Official Hero Slider Data ---
const carouselSlides: Slide[] = [
  {
    id: 1,
    headline: "Empowering Citizens Through Digital Governance",
    tagline: "Access fast-track municipal permissions, clear utility dues, and download verified civic certificates.",
    badgeText: "Digital Portal 2.0",
    icon: <Activity className="h-4 w-4 text-amber-300" />,
    bgImage: "https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5",
    primaryAction: "Explore Services",
    primaryTarget: "#citizen-services",
    secondaryAction: "Get Mobile App",
  },
  {
    id: 2,
    headline: "Sustainable Urban Ecosystem Development",
    tagline: "Witness our ongoing transformation featuring oxygen-rich urban parks and green highway corridor plantation drives.",
    badgeText: "Eco Initiative",
    icon: <Trees className="h-4 w-4 text-emerald-300" />,
    bgImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=80",
    primaryAction: "Join Tree Plantation",
    primaryTarget: "/contact-us",
    secondaryAction: "View Green Report",
  },
  {
    id: 3,
    headline: "Modern Infrastructure & Civic Utilities",
    tagline: "Accelerating city growth with high-capacity road networks, automated smart-lighting layouts, and modern public amenities.",
    badgeText: "Civic Infrastructure",
    icon: <Building2 className="h-4 w-4 text-cyan-300" />,
    bgImage: "https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=1920&q=80",
    primaryAction: "Check Active Tenders",
    primaryTarget: "#news-notices",
    secondaryAction: "Project Milestones",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
  }, []);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      handleNextSlide();
    }, 7000);
    return () => clearInterval(intervalTimer);
  }, [handleNextSlide]);

  const currentSlide = carouselSlides[activeSlide] || carouselSlides[0];

  return (
    <section className="relative h-[525px] w-full overflow-hidden bg-slate-950 font-sans select-none md:h-[625px]" aria-label="Featured Highlights">
      {/* Background Slides with Fade Cross-fade */}
      <div className="absolute inset-0 h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full pointer-events-none"
          >
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat brightness-90 filter"
              style={{ backgroundImage: `url(${currentSlide?.bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Grid Content Wrapper */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-12">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${activeSlide}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white uppercase shadow-lg backdrop-blur-md"
            >
              <div className="rounded-full bg-white/10 p-0.5">{currentSlide?.icon}</div>
              <span className="font-bold text-amber-300">{currentSlide?.badgeText}</span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={`head-${activeSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mb-3 text-3xl leading-tight font-black tracking-tight text-white uppercase drop-shadow-lg md:text-5xl"
            >
              {currentSlide?.headline}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="mb-6 max-w-xl text-sm leading-relaxed font-normal text-slate-200 drop-shadow-sm md:text-base"
            >
              {currentSlide?.tagline}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${activeSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <a
                href={currentSlide?.primaryTarget}
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-xs font-extrabold tracking-wider text-slate-950 uppercase shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105 active:scale-95 md:text-sm"
              >
                <span>{currentSlide?.primaryAction}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#about-us"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-slate-900/70 px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-slate-900 md:text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                <span>{currentSlide?.secondaryAction}</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Control Arrows */}
      <div className="absolute right-4 bottom-6 z-20 flex items-center gap-2.5 md:right-8">
        <button
          onClick={handlePrevSlide}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-slate-900/70 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-amber-500 hover:text-slate-950"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNextSlide}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-slate-900/70 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-amber-500 hover:text-slate-950"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Modern Line Progress Indicators */}
      <div className="absolute bottom-6 left-6 z-20 hidden items-center gap-2 sm:flex md:left-12">
        {carouselSlides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlide(idx)}
            className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${
              idx === activeSlide ? "w-10 bg-amber-400 shadow-md" : "w-3 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Jump to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
