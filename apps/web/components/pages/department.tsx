
import React from 'react';
import { 
  HardHat, 
  MonitorPlay, 
  Receipt, 
  HeartPulse, 
  Lightbulb, 
  Droplet, 
  Scale, 
  Users 
} from 'lucide-react';

const DepartmentsSection = () => {
  // विभागों का डेटा (Icons, Titles, Descriptions और Updated Images)
  const departments = [
    {
      title: "Public Works Department",
      shortTitle: "Public Works",
      desc: "Handles road construction, building repairs, and all important public infrastructure projects.",
      icon: <HardHat className="w-8 h-8 text-blue-600" />,
      bgImage: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "IT Department",
      shortTitle: "IT Department",
      desc: "Manages digital services, online portals, and e-governance systems for all citizens.",
      icon: <MonitorPlay className="w-8 h-8 text-blue-600" />,
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Property Tax",
      shortTitle: "Property Tax",
      desc: "Responsible for tax collection, assessment and maintaining accurate municipal tax records.",
      icon: <Receipt className="w-8 h-8 text-blue-600" />,
      bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Health Department",
      shortTitle: "Health Department",
      desc: "Ensures sanitation, disease control, cleanliness, and overall public health safety.",
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
      bgImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Street Light Department",
      shortTitle: "Street Light",
      desc: "Installs and maintains street lighting across the entire city.",
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      // UPDATED IMAGE: आधुनिक एलईडी स्ट्रीट लाइट और सिटी रोड ट्रेक की रियल इमेज
      bgImage: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Water Supply Department",
      shortTitle: "Water Supply",
      desc: "Provides clean drinking water, maintains pipelines and ensures smooth supply.",
      icon: <Droplet className="w-8 h-8 text-blue-600" />,
      // UPDATED IMAGE: क्लीन वाटर यूटिलिटी प्लांट और वॉल्व पाइपलाइन्स की इमेज
      bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Law Department",
      shortTitle: "Law Department",
      desc: "Handles legal advisory, compliance, documentation and court-related matters.",
      icon: <Scale className="w-8 h-8 text-blue-600" />,
      bgImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Establishment Department",
      shortTitle: "Establishment",
      desc: "Manages staff recruitment, salary distribution and internal administrative processes.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      bgImage: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="bg-slate-50 py-16 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
          Departments
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Each department is dedicated to ensuring smooth, efficient and citizen-friendly governance.
        </p>
        <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {departments.map((dept, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-slate-100"
          >
            {/* Top section: Background Image */}
            <div className="relative h-40 w-full overflow-hidden bg-slate-200">
              <img 
                src={dept.bgImage} 
                alt={dept.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
              
              {/* Badge Over Image */}
              <span className="absolute bottom-3 left-4 text-white font-semibold text-sm bg-blue-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                {dept.shortTitle}
              </span>
            </div>

            {/* Bottom section: Content */}
            <div className="p-6 flex flex-col flex-grow relative">
              {/* Floating Icon */}
              <div className="absolute -top-8 right-6 bg-white p-3 rounded-xl shadow-md border border-slate-50 z-10 group-hover:bg-blue-50 transition-colors duration-300">
                {dept.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3 pt-2 group-hover:text-blue-600 transition-colors duration-300">
                {dept.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {dept.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentsSection;
