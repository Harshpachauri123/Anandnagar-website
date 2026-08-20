// "use client"

// import { motion } from "framer-motion"
// import {
//   ArrowRight,
//   Coins,
//   Droplet,
//   Hammer,
//   HardHat,
//   HeartPulse,
//   Sparkles,
//   Trash2,
// } from "lucide-react"
// import React from "react"

// interface DepartmentCard {
//   name: string
//   nameHi: string
//   desc: string
//   icon: React.ReactNode
//   color: string
//   badgeColor: string
//   glowColor: string
//   services: string[]
// }

// export default function DigitalGateway() {
//   const departments: DepartmentCard[] = [
//     {
//       name: "Public Works Department",
//       nameHi: "लोक निर्माण विभाग",
//       desc: "Manages urban roads, link paths, administrative buildings, storm drains, street signages, and civic safety infrastructure in Chhata.",
//       icon: <HardHat className="h-7 w-7" />,
//       color: "from-orange-500 via-amber-600 to-orange-700",
//       badgeColor: "bg-orange-50 text-orange-700 border-orange-200/60",
//       glowColor:
//         "group-hover:shadow-orange-500/20 group-hover:border-orange-400/50",
//       services: [
//         "Road Damage Reporting",
//         "Trenching Permissions",
//         "NOC for Road Cut",
//       ],
//     },
//     {
//       name: "Revenue Department",
//       nameHi: "राजस्व विभाग",
//       desc: "Responsible for property tax registry audits, commercial advertisement licenses, vending fees, and local tax collections in Mathura district.",
//       icon: <Coins className="h-7 w-7" />,
//       color: "from-blue-600 via-indigo-600 to-blue-800",
//       badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
//       glowColor:
//         "group-hover:shadow-blue-500/20 group-hover:border-blue-400/50",
//       services: [
//         "Property Tax Self-Assessment",
//         "Mutation of Property",
//         "NOC Certification",
//       ],
//     },
//     {
//       name: "Water Supply Department",
//       nameHi: "जल आपूर्ति विभाग",
//       desc: "Oversees drinking water pipelines, testing centers, tanker reservations, sewer connections, and pipe repair services across Chhata wards.",
//       icon: <Droplet className="h-7 w-7" />,
//       color: "from-sky-500 via-blue-600 to-indigo-700",
//       badgeColor: "bg-sky-50 text-sky-700 border-sky-200/60",
//       glowColor: "group-hover:shadow-sky-500/20 group-hover:border-sky-400/50",
//       services: [
//         "New Connection Request",
//         "Disconnection Report",
//         "Water Bill Dispute",
//       ],
//     },
//     {
//       name: "Sanitation Department",
//       nameHi: "स्वास्थ्य एवं स्वच्छता विभाग",
//       desc: "Executes garbage door collection, solid-waste segregation, anti-larval chemical sprays, and bio-medical cleanliness drives in Nagar Panchayat.",
//       icon: <Trash2 className="h-7 w-7" />,
//       color: "from-emerald-500 via-green-600 to-teal-700",
//       badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
//       glowColor:
//         "group-hover:shadow-emerald-500/20 group-hover:border-emerald-400/50",
//       services: [
//         "Garbage Dump Reporting",
//         "Request Mosquito Spraying",
//         "Community Bin Request",
//       ],
//     },
//     {
//       name: "Health Department",
//       nameHi: "लोक स्वास्थ्य विभाग",
//       desc: "Registers life records (births, deaths), manages vaccination databases, food safety hygiene checks, and community health facilitation.",
//       icon: <HeartPulse className="h-7 w-7" />,
//       color: "from-rose-500 via-red-600 to-pink-700",
//       badgeColor: "bg-rose-50 text-rose-700 border-rose-200/60",
//       glowColor:
//         "group-hover:shadow-rose-500/20 group-hover:border-rose-400/50",
//       services: [
//         "Birth Registration",
//         "Death Registration",
//         "Food License NOC",
//       ],
//     },
//     {
//       name: "Engineering & Town Planning",
//       nameHi: "अभियांत्रिकी एवं नगर नियोजन",
//       desc: "Approves building layout blueprints, regulates zoning rules, manages commercial building permits, and inspects construction sites in Chhata.",
//       icon: <Hammer className="h-7 w-7" />,
//       color: "from-violet-600 via-purple-600 to-indigo-800",
//       badgeColor: "bg-violet-50 text-violet-700 border-violet-200/60",
//       glowColor:
//         "group-hover:shadow-violet-500/20 group-hover:border-violet-400/50",
//       services: [
//         "Building Plan Blueprint NOC",
//         "Encroachment Clearance",
//         "Zoning Regulation NOC",
//       ],
//     },
//   ]

//   return (
//     <section
//       id="digital-gateway"
//       className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-slate-50 to-orange-50/40 px-4 py-24 font-sans md:px-8"
//     >
//       {/* Immersive Light Mesh / Architectural Ambient Glows */}
//       <div className="pointer-events-none absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-orange-400/10 blur-[140px]" />
//       <div className="pointer-events-none absolute right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[140px]" />
//       <div className="pointer-events-none absolute top-1/2 left-[-5%] h-[400px] w-[400px] rounded-full bg-emerald-400/5 blur-[120px]" />

//       {/* Subtle Grid Pattern Overlay for Official Administrative Aesthetic */}
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-30" />

//       <div className="relative z-10 mx-auto max-w-7xl">
//         {/* Section Header */}
//         <div className="mx-auto mb-20 max-w-3xl text-center">
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-extrabold tracking-wider text-orange-600 uppercase shadow-sm"
//           >
//             <Sparkles className="h-3.5 w-3.5 animate-pulse text-orange-500" />
//             <span>Nagar Panchayat Chhata • Mathura Portal</span>
//           </motion.div>

//           <h2 className="mt-4 font-serif text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
//             Digital Service Gateway
//           </h2>
//           <p className="mt-3 text-sm leading-relaxed font-medium text-slate-600 md:text-base">
//             Access specific departmental portals to download applications, file
//             reports, and track permissions directly in real-time for Chhata.
//           </p>

//           <div className="mt-5 flex items-center justify-center gap-2">
//             <span className="h-1.5 w-12 rounded-full bg-orange-500 shadow-sm" />
//             <span className="h-1.5 w-3 rounded-full bg-sky-600 shadow-sm" />
//             <span className="h-1.5 w-6 rounded-full bg-emerald-500 shadow-sm" />
//           </div>
//         </div>

//         {/* Department Grid */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {departments.map((dept, index) => (
//             <motion.div
//               key={dept.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{
//                 delay: index * 0.1,
//                 duration: 0.5,
//                 ease: "easeOut",
//               }}
//               className={`rounded-3xl border border-slate-200/90 bg-white/90 shadow-xl shadow-slate-200/50 backdrop-blur-xl ${dept.glowColor} group relative flex flex-col justify-between overflow-hidden p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
//             >
//               {/* Top ambient color highlight strip inside card */}
//               <div
//                 className={`absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r ${dept.color} opacity-90 transition-opacity group-hover:opacity-100`}
//               />

//               <div>
//                 {/* Header Icon Card with Glow */}
//                 <div className="mb-5 flex items-center justify-between">
//                   <div
//                     className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-white shadow-lg shadow-slate-400/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
//                   >
//                     {dept.icon}
//                   </div>
//                   <span
//                     className={`rounded-full border px-3 py-1 text-[10px] font-extrabold tracking-wider uppercase ${dept.badgeColor} shadow-sm`}
//                   >
//                     Active Portal
//                   </span>
//                 </div>

//                 {/* Titles */}
//                 <div>
//                   <span className="block text-[11px] font-bold tracking-wider text-orange-600 uppercase">
//                     {dept.nameHi}
//                   </span>
//                   <h3 className="mt-1 text-xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-orange-600">
//                     {dept.name}
//                   </h3>
//                 </div>

//                 {/* Description */}
//                 <p className="mt-3 text-xs leading-relaxed font-medium text-slate-600">
//                   {dept.desc}
//                 </p>

//                 {/* Services Bullets List */}
//                 <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
//                   <p className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">
//                     Key Services Offered:
//                   </p>
//                   {dept.services.map((serv) => (
//                     <div
//                       key={serv}
//                       className="flex items-center gap-2 text-xs font-semibold text-slate-700"
//                     >
//                       <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500 transition-transform group-hover:scale-125" />
//                       <span>{serv}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Optional Interactive Callout Footer */}
//               <div className="mt-7 border-t border-slate-100 pt-4">
//                 <div className="flex items-center justify-between text-xs font-bold text-orange-600 transition-colors group-hover:text-slate-900">
//                   <span className="text-[11px] tracking-wider uppercase">
//                     Nagar Panchayat Chhata
//                   </span>
//                   <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Coins,
  Droplet,
  Hammer,
  HardHat,
  HeartPulse,
  ShieldCheck,
  Trash2,
} from "lucide-react"
import type { ReactNode } from "react"

interface Department {
  id: string
  name: string
  nameHi: string
  description: string
  icon: ReactNode
  services: string[]
  accent: {
    line: string
    icon: string
    text: string
    dot: string
  }
}

const departments: Department[] = [
  {
    id: "public-works",
    name: "Public Works Department",
    nameHi: "लोक निर्माण विभाग",
    description:
      "Roads, drainage, public buildings, street infrastructure and other civic development services.",
    icon: <HardHat className="h-6 w-6" />,
    services: [
      "Road Damage Reporting",
      "Trenching Permissions",
      "NOC for Road Cut",
    ],
    accent: {
      line: "from-orange-500 to-amber-400",
      icon: "bg-orange-50 text-orange-700 ring-orange-200",
      text: "text-orange-700",
      dot: "bg-orange-500",
    },
  },
  {
    id: "revenue",
    name: "Revenue Department",
    nameHi: "राजस्व विभाग",
    description:
      "Property records, local revenue services, licenses and municipal revenue-related processes.",
    icon: <Coins className="h-6 w-6" />,
    services: [
      "Property Tax Services",
      "Mutation of Property",
      "NOC Certification",
    ],
    accent: {
      line: "from-blue-600 to-indigo-500",
      icon: "bg-blue-50 text-blue-700 ring-blue-200",
      text: "text-blue-700",
      dot: "bg-blue-600",
    },
  },
  {
    id: "water",
    name: "Water Supply Department",
    nameHi: "जल आपूर्ति विभाग",
    description:
      "Drinking water connections, pipeline support, water complaints and other water supply services.",
    icon: <Droplet className="h-6 w-6" />,
    services: [
      "New Connection Request",
      "Disconnection Report",
      "Water Bill Dispute",
    ],
    accent: {
      line: "from-sky-500 to-blue-500",
      icon: "bg-sky-50 text-sky-700 ring-sky-200",
      text: "text-sky-700",
      dot: "bg-sky-500",
    },
  },
  {
    id: "sanitation",
    name: "Sanitation Department",
    nameHi: "स्वास्थ्य एवं स्वच्छता विभाग",
    description:
      "Waste management, cleanliness drives, sanitation requests and public hygiene services.",
    icon: <Trash2 className="h-6 w-6" />,
    services: [
      "Garbage Dump Reporting",
      "Mosquito Spraying Request",
      "Community Bin Request",
    ],
    accent: {
      line: "from-emerald-500 to-teal-500",
      icon: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
    },
  },
  {
    id: "health",
    name: "Health Department",
    nameHi: "लोक स्वास्थ्य विभाग",
    description:
      "Birth and death registration, food safety assistance and community health services.",
    icon: <HeartPulse className="h-6 w-6" />,
    services: [
      "Birth Registration",
      "Death Registration",
      "Food License NOC",
    ],
    accent: {
      line: "from-rose-500 to-pink-500",
      icon: "bg-rose-50 text-rose-700 ring-rose-200",
      text: "text-rose-700",
      dot: "bg-rose-500",
    },
  },
  {
    id: "town-planning",
    name: "Engineering & Town Planning",
    nameHi: "अभियांत्रिकी एवं नगर नियोजन",
    description:
      "Building permissions, planning approvals, zoning regulations and construction-related services.",
    icon: <Hammer className="h-6 w-6" />,
    services: [
      "Building Plan NOC",
      "Encroachment Clearance",
      "Zoning Regulation NOC",
    ],
    accent: {
      line: "from-violet-600 to-indigo-500",
      icon: "bg-violet-50 text-violet-700 ring-violet-200",
      text: "text-violet-700",
      dot: "bg-violet-500",
    },
  },
]

const overview = [
  {
    value: "06",
    label: "Departments",
    icon: Building2,
  },
  {
    value: "18+",
    label: "Online Services",
    icon: CheckCircle2,
  },
  {
    value: "24×7",
    label: "Digital Access",
    icon: ShieldCheck,
  },
]

export default function DigitalGateway() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="digital-gateway"
      aria-labelledby="digital-gateway-title"
      className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="absolute right-[-180px] top-1/3 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-orange-600" />

            <span>Nagar Panchayat Anandnagar</span>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-slate-300"
            />

            <span>Citizen Services</span>
          </div>

          {/* Heading */}

          <h2
            id="digital-gateway-title"
            className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Digital Service Gateway
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-7 text-slate-600 sm:text-base">
            Access municipal services, submit applications and
            connect with the concerned department through a
            single digital platform.
          </p>

          {/* Tricolor-inspired accent */}

          <div
            aria-hidden="true"
            className="mx-auto mt-7 flex items-center justify-center gap-1.5"
          >
            <span className="h-1 w-10 rounded-full bg-orange-500" />
            <span className="h-1 w-5 rounded-full bg-blue-600" />
            <span className="h-1 w-3 rounded-full bg-emerald-500" />
          </div>
        </motion.div>

        {/* =========================
            OVERVIEW
        ========================== */}

        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {overview.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.label}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 12,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion
                    ? 0
                    : index * 0.08,
                }}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-100">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-lg font-bold tracking-tight text-slate-950">
                    {item.value}
                  </p>

                  <p className="text-xs font-medium text-slate-500">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* =========================
            DEPARTMENT GRID
        ========================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((department, index) => (
            <motion.article
              key={department.id}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion
                  ? 0
                  : (index % 3) * 0.08,
                ease: "easeOut",
              }}
              className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/70 focus-within:ring-2 focus-within:ring-orange-500/30"
            >
              {/* Accent line */}

              <div
                aria-hidden="true"
                className={`h-1 w-full bg-gradient-to-r ${department.accent.line}`}
              />

              <div className="flex flex-1 flex-col p-6 sm:p-7">

                {/* Card header */}

                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 transition-transform duration-300 motion-safe:group-hover:scale-105 ${department.accent.icon}`}
                  >
                    {department.icon}
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                    Active
                  </span>
                </div>

                {/* Title */}

                <div className="mt-6">
                  <p
                    className={`text-xs font-bold tracking-wide ${department.accent.text}`}
                  >
                    {department.nameHi}
                  </p>

                  <h3 className="mt-1.5 text-xl font-bold tracking-tight text-slate-950">
                    {department.name}
                  </h3>
                </div>

                {/* Description */}

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {department.description}
                </p>

                {/* Services */}

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Key Services
                  </p>

                  <ul className="mt-3 space-y-2.5">
                    {department.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-2.5 text-sm font-medium text-slate-700"
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${department.accent.dot}`}
                        />

                        <span className="leading-5">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}

                <div className="mt-auto pt-7">
                  <button
                    type="button"
                    className={`group/btn inline-flex w-full cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${department.accent.text}`}
                  >
                    <span>View Department Services</span>

                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =========================
            FOOTER NOTE
        ========================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                }
          }
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row"
        >
          <ShieldCheck className="h-4 w-4 text-slate-400" />

          <p className="text-xs font-medium text-slate-500">
            Official digital services of Nagar Panchayat
            Anandnagar
          </p>
        </motion.div>
      </div>
    </section>
  )
}
