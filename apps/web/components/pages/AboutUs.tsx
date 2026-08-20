"use client"

import React from "react"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"

const staffMembers = [
  {
    name: "Smt. Vijay Lakshmi Jaiswal",
    designation: "Chairman Officer",
    image: "/chairmanperson.png",
    description:
      "Responsible for overall administration, municipal services, development activities and effective implementation of civic programmes.",
  },
  {
    name: "Shree Anuj Kumar Bharti",
    designation: "Executive Officer",
    image: "/executiveclerk.png",
    description:
      "Supports administrative operations, official records, citizen services and coordination of municipal office activities.",
  },
  {
    name: "Head Clerk",
    designation: "Head Clerk",
    image: "#executive.png",
    description:
      "Supports administrative operations, official records, citizen services and coordination of municipal office activities.",
  },
]

const highlights = [
  "Citizen-centric municipal services",
  "Transparent and accountable governance",
  "Digital access to important civic services",
  "Clean, sustainable and well-planned urban development",
]

export default function AboutUs() {
  return (
    <main className="min-h-screen w-full bg-slate-50 text-slate-900">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[10%] top-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute right-[8%] bottom-0 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              <ShieldCheck className="h-4 w-4" />
              Official Municipal Portal
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              About Nagar Panchayat
              <span className="block text-blue-700">
                Anandnagar
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Nagar Panchayat Anandnagar, Maharajganj, Uttar Pradesh is
              committed to providing transparent, accessible and citizen-focused
              municipal services while supporting sustainable development and
              better urban living.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
              >
                Know About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#staff"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                <Users className="h-4 w-4" />
                Meet Our Staff
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================== */}
      <section
        id="about"
        className="relative overflow-hidden bg-slate-50 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

            {/* LEFT CONTENT */}
            <div>

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700">
                <Landmark className="h-4 w-4" />
                About Anandnagar
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Serving citizens with
                <span className="text-blue-700">
                  {" "}transparency & dedication
                </span>
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">

                <p>
                  Nagar Panchayat Anandnagar works towards delivering essential
                  civic services and creating a responsive municipal
                  administration for residents of Anandnagar.
                </p>

                <p>
                  The Nagar Panchayat focuses on improving public infrastructure,
                  sanitation, cleanliness, water-related services, civic
                  amenities and citizen service delivery through efficient
                  administration.
                </p>

                <p>
                  Through digital governance initiatives, citizens can access
                  important municipal information and services more conveniently
                  while promoting transparency and accountability.
                </p>

              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 transition-transform group-hover:scale-110" />

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT INFORMATION CARD */}
            <div className="relative">

              <div className="absolute -inset-4 rounded-[2rem] bg-blue-100/50 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">

                <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-7 text-white">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                    <Building2 className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    Nagar Panchayat Anandnagar
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    Maharajganj, Uttar Pradesh
                  </p>

                </div>

                <div className="space-y-5 p-7">

                  <InfoRow
                    icon={<MapPin className="h-5 w-5" />}
                    title="Location"
                    value="Anandnagar, Maharajganj, Uttar Pradesh"
                  />

                  <InfoRow
                    icon={<ShieldCheck className="h-5 w-5" />}
                    title="Governance"
                    value="Citizen-focused local administration"
                  />

                  <InfoRow
                    icon={<Users className="h-5 w-5" />}
                    title="Public Service"
                    value="Accessible civic services for residents"
                  />

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================== */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-600">
              Our Direction
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Mission & Vision
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Building a cleaner, more transparent, inclusive and digitally
              accessible Anandnagar for every citizen.
            </p>

          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            {/* MISSION */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl transition-transform duration-500 group-hover:scale-125" />

              <div className="relative">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                    <Target className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                      Mission
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-slate-950">
                      Our Mission
                    </h3>
                  </div>

                </div>

                <p className="mt-7 text-sm leading-8 text-slate-600 sm:text-base">
                  To provide efficient, transparent and citizen-centric
                  municipal services while continuously improving civic
                  infrastructure, sanitation, public amenities and digital
                  access for the people of Anandnagar.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  <span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold text-blue-700">
                    Transparency
                  </span>

                  <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    Citizen First
                  </span>

                  <span className="rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold text-orange-700">
                    Better Services
                  </span>

                </div>

              </div>
            </div>

            {/* VISION */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl">

              <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-emerald-200/30 blur-3xl transition-transform duration-500 group-hover:scale-125" />

              <div className="relative">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                    <Eye className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                      Vision
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-slate-950">
                      Our Vision
                    </h3>
                  </div>

                </div>

                <p className="mt-7 text-sm leading-8 text-slate-600 sm:text-base">
                  To develop Anandnagar as a clean, sustainable, inclusive and
                  digitally empowered Nagar Panchayat where modern civic
                  infrastructure and responsive governance contribute to a
                  better quality of life for every resident.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    Clean Anandnagar
                  </span>

                  <span className="rounded-full bg-teal-100 px-3 py-1.5 text-xs font-bold text-teal-700">
                    Digital Governance
                  </span>

                  <span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold text-blue-700">
                    Sustainable Growth
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          STAFF
      ========================================================== */}
      <section
        id="staff"
        className="relative overflow-hidden bg-slate-50 py-16 lg:py-20"
      >

        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                <Users className="h-4 w-4" />
                Municipal Administration
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Our Staff
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Meet the administrative team working towards efficient
                municipal services and better citizen support in Anandnagar.
              </p>

            </div>

            <div className="hidden rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm md:block">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Administration
              </p>

              <p className="mt-1 font-black text-slate-900">
                Nagar Panchayat Anandnagar
              </p>
            </div>

          </div>

          {/* STAFF GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {staffMembers.map((staff) => (

              <article
                key={staff.designation}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100"
              >

                {/* =================================================
                    STAFF IMAGE
                ================================================== */}
                <div className="relative flex h-72 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-slate-100 to-orange-50">

                  {/* Decorative background */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-xl" />

                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="relative z-10 h-full w-full object-contain object-center p-4 transition-transform duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none"
                    }}
                  />

                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                </div>

                {/* STAFF DETAILS */}
                <div className="p-6">

                  <h3 className="text-lg font-black text-slate-950 transition-colors group-hover:text-blue-700">
                    {staff.name}
                  </h3>

                  <p className="mt-1 text-sm font-bold text-orange-600">
                    {staff.designation}
                  </p>

                  <p className="mt-4 text-xs leading-6 text-slate-500">
                    {staff.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-slate-500">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    Municipal Administration
                  </div>

                </div>

              </article>

            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================== */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-8 text-white shadow-2xl shadow-blue-900/20 sm:p-10 lg:p-12">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                  Citizen Support
                </span>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Need assistance from Nagar Panchayat?
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100">
                  For municipal services, civic information or assistance,
                  citizens can contact the Nagar Panchayat office.
                </p>

              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-blue-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  <Mail className="h-4 w-4" />
                  Contact Office
                </a>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" />
                  Call Office
                </a>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

/* =========================================================
   INFORMATION ROW
========================================================= */

function InfoRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-700">
        {icon}
      </div>

      <div>

        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {title}
        </p>

        <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">
          {value}
        </p>

      </div>
    </div>
  )
}
