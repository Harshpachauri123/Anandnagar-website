import React from 'react';
import { 
  MapPin, Users, Milestone, TrendingUp, BookOpen, Building2, Calendar, CheckCircle, ArrowUpRight, ShieldCheck 
} from 'lucide-react';

export const AboutAnandnagarSection: React.FC = () => {
  const stats = [
    { icon: <Users className="w-5 h-5 text-blue-600" />, label: "Total Population", value: "10,113", desc: "Across 11 Wards" },
    { icon: <TrendingUp className="w-5 h-5 text-emerald-600" />, label: "Administrative Wards", value: "11 Wards", desc: "Local urban bodies" },
    { icon: <Milestone className="w-5 h-5 text-purple-600" />, label: "Elevation Level", value: "88 meters", desc: "Above sea level" },
    { icon: <BookOpen className="w-5 h-5 text-amber-600" />, label: "Literacy Rate", value: "88.41%", desc: "Regional benchmark" },
  ];

  const localGraphicUrl = "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053023.png";

  return (
    <section className="relative w-full bg-gradient-to-br from-sky-50/60 via-indigo-50/30 to-emerald-50/40 py-20 px-6 md:px-14 border-b border-sky-100 font-sans selection:bg-blue-600 selection:text-white antialiased overflow-hidden">
      
      {/* Colorful Light Background Ambient Glows */}
      <div className="absolute -top-20 right-10 w-[450px] h-[450px] bg-sky-300/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-300/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-amber-300/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="border-b border-sky-200/60 pb-8 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-sky-500/10 text-sky-700 border border-sky-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> Official Documentation
            </span>
          </div>

          <nav className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Home</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700">About Anandnagar</span>
          </nav>
          
          <h3 className="text-3xl md:text-5xl font-extrabold text-red-900 tracking-tight font-serif">
            About Nagar Panchayat Anandnagar
          </h3>
          <p className="text-sm md:text-base text-slate-600 font-medium mt-3 max-w-3xl leading-relaxed">
            Enterprise civic, geographic, and demographic analytics of Anandnagar (Pharenda), Maharajganj, Uttar Pradesh.
          </p>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview Card */}
            <div className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-sky-100 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h4 className="text-sm font-extrabold text-blue-900 uppercase tracking-wider mb-4 flex items-center gap-2.5">
                <span className="w-2 h-5 bg-blue-600 rounded-full shadow-xs" />
                Overview & Heritage
              </h4>
              
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-normal">
                <strong className="text-slate-900 font-semibold">Nagar Panchayat Anandnagar</strong> (widely recognized as Pharenda) is a premier urban local body in the <strong className="text-slate-900 font-semibold">Maharajganj district</strong> of Uttar Pradesh. Established and named after visionary philanthropist <span className="underline decoration-blue-400 decoration-2 underline-offset-2">Seth Anandram Jaipuria</span>, the town operates as an active economic and transit anchor via the major Anandnagar Junction.
              </p>
              
              <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-5 flex items-start gap-4 text-sm text-slate-700 transition-colors hover:bg-sky-50">
                <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-sm shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block mb-1 text-sm tracking-tight font-bold">Geographical Mapping Core</strong>
                  <span className="text-slate-600 leading-relaxed">Situated precisely at <strong className="text-slate-800">27.06°N 83.17°E</strong> along the prominent Buddhist Circuit connecting core heritage regions.</span>
                </div>
              </div>
            </div>

            {/* Infrastructure Card */}
            <div className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <h4 className="text-sm font-extrabold text-emerald-900 uppercase tracking-wider mb-4 flex items-center gap-2.5">
                <span className="w-2 h-5 bg-emerald-600 rounded-full shadow-xs" />
                Infrastructure & Regional Economy
              </h4>
              
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-normal">
                The region leverages high-fertility tarai soil profiles, functioning as a primary commercial distribution hub for surrounding agricultural markets like Dhani Bazar and Brijmanganj with seamless roadway connectivity.
              </p>
              
              <div className="flex flex-wrap gap-2.5 pt-1">
                {['Anandnagar Junction', 'Buddhist Circuit Hub', 'Tarai Agro Trade', 'Local Market Center', 'Urban Civic Wards'].map((tag) => (
                  <div key={tag} className="flex items-center gap-1.5 text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3.5 py-2 rounded-xl shadow-2xs transition-transform hover:scale-105">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Grid Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-purple-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mb-5 border border-purple-200 shadow-2xs">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h5 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-2">Education & Landmarks</h5>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                    Anchor home to historic institutions like Seth Anandram Jaipuria Inter College (SAJIC) and the revered regional shrine <strong className="text-slate-900 font-semibold">Lehara Devi Mandir</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-5 border border-amber-200 shadow-2xs">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h5 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-2">Civic Administration</h5>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                    The Nagar Panchayat directly manages sanitary operations, municipal utilities, and strategic infrastructure programs distributed across its <strong className="text-slate-900 font-semibold">11 wards</strong>.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            
            {/* Visual Frame Box */}
            <div className="bg-white/90 backdrop-blur-md border border-sky-100 rounded-3xl p-5 shadow-sm">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-3 px-1">
                Visual Framework
              </span>
              <div className="w-full h-52 rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner group">
                <img 
                  src={localGraphicUrl} 
                  alt="Anandnagar Nagar Panchayat Visual Framework" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold tracking-wide flex items-center gap-1">
                    Verified Regional Asset <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Enterprise Dashboard Box */}
            <div className="bg-gradient-to-b from-slate-900 to-blue-950 text-white rounded-3xl p-6 shadow-2xl border border-blue-900/50 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-blue-900/50 pb-4 mb-5">
                <span className="text-xs uppercase font-black tracking-widest text-sky-300">
                  Census Dashboard Core
                </span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              
              <div className="space-y-3.5">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all hover:bg-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-slate-900/80 border border-white/10 shadow-2xs">
                        {stat.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-200 block tracking-tight">{stat.label}</span>
                        <span className="text-[11px] font-medium text-slate-400 block mt-0.5">{stat.desc}</span>
                      </div>
                    </div>
                    <span className="text-sm font-black text-sky-300 bg-sky-950/60 px-3 py-1 rounded-xl border border-sky-800/40">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Sex Ratio Progress Container */}
              <div className="mt-6 pt-5 border-t border-blue-900/50">
                <div className="flex justify-between items-center text-xs mb-2.5">
                  <span className="font-bold text-slate-300">Demographic Sex Ratio</span>
                  <span className="font-extrabold text-sky-300 bg-white/10 px-2 py-0.5 rounded-md">907 ♀ / 1000 ♂</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/10">
                  <div className="bg-gradient-to-r from-sky-400 to-indigo-400 h-full rounded-full w-[90.7%] shadow-sm" />
                </div>
              </div>

              <div className="mt-5 p-4 bg-white/5 rounded-2xl text-center border border-white/10">
                <span className="text-[10px] uppercase font-black tracking-widest text-sky-300 block">District Jurisdiction</span>
                <span className="text-sm md:text-base font-extrabold text-white block mt-0.5 tracking-tight">Maharajganj, Uttar Pradesh</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutAnandnagarSection;
