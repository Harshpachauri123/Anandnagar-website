"use client"

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Home,
  Info,
  Leaf,
  ShieldCheck,
  Sparkles,
  Trash2,
} from "lucide-react"

interface GovernmentScheme {
  title: string
  description: string
  icon: React.ElementType
  category: string
  headerBg: string
  iconBg: string
  iconColor: string
  borderColor: string
  hoverBorder: string
  badgeColor: string
  hoverText: string
  hoverButton: string
  link: string
}

export default function Schemes() {
  const schemes: GovernmentScheme[] = [
    {
      title: "PM Awas Yojana",
      description:
        "Providing affordable pucca houses to eligible urban families under an inclusive development mission.",
      icon: Home,
      category: "Housing",
      headerBg: "bg-gradient-to-br from-blue-50 via-white to-sky-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100",
      hoverBorder: "hover:border-blue-300",
      badgeColor: "bg-blue-100 text-blue-700",
      hoverText: "group-hover:text-blue-600",
      hoverButton:
        "group-hover:bg-blue-600 group-hover:text-white",
      link: "https://pmay-urban.gov.in/",
    },

    {
      title: "Swachh Bharat Mission",
      description:
        "Ensuring scientific waste management, sanitation coverage, and cleaner neighborhood surroundings.",
      icon: Trash2,
      category: "Sanitation",
      headerBg:
        "bg-gradient-to-br from-emerald-50 via-white to-green-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-100",
      hoverBorder: "hover:border-emerald-300",
      badgeColor: "bg-emerald-100 text-emerald-700",
      hoverText: "group-hover:text-emerald-600",
      hoverButton:
        "group-hover:bg-emerald-600 group-hover:text-white",
      link: "https://swachhbharatmission.gov.in/",
    },

    {
      title: "Chief Minister Awas Yojana",
      description:
        "Providing affordable pucca houses to eligible urban families under an inclusive development mission.",
      icon: Home,
      category: "Housing",
      headerBg:
        "bg-gradient-to-br from-violet-50 via-white to-purple-50",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      borderColor: "border-violet-100",
      hoverBorder: "hover:border-violet-300",
      badgeColor: "bg-violet-100 text-violet-700",
      hoverText: "group-hover:text-violet-600",
      hoverButton:
        "group-hover:bg-violet-600 group-hover:text-white",
      link: "https://upcmo.up.nic.in/",
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden bg-slate-950">

        {/* Main background */}

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />

        {/* Ambient colors */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-48 left-1/4 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-amber-400/5 blur-3xl" />

        {/* Grid */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative mx-auto flex min-h-[420px] w-full max-w-[1400px] items-center px-4 py-16 sm:px-6 lg:px-10 lg:py-20">

          <div className="max-w-3xl">

            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-violet-200 backdrop-blur-md">

              <ShieldCheck className="h-4 w-4 text-violet-300" />

              Government Welfare Initiatives

            </div>

            {/* Heading */}

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">

              Government

              <span className="mt-2 block bg-gradient-to-r from-violet-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Schemes
              </span>

            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">

              Explore major government welfare and development
              schemes that support housing, sanitation and
              inclusive growth for citizens of Anandnagar.

            </p>

            {/* Trust indicators */}

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs font-medium text-slate-200 backdrop-blur-md">

                <CheckCircle2 className="h-4 w-4 text-emerald-400" />

                Official Information

              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs font-medium text-slate-200 backdrop-blur-md">

                <ExternalLink className="h-4 w-4 text-cyan-400" />

                Official Portals

              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs font-medium text-slate-200 backdrop-blur-md">

                <Sparkles className="h-4 w-4 text-amber-400" />

                Citizen Access

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <div className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex w-full max-w-[1400px] items-center gap-2 px-4 py-4 text-xs sm:px-6 lg:px-10">

          <a
            href="/"
            className="font-medium text-slate-400 transition-colors hover:text-slate-900"
          >
            Home
          </a>

          <span className="text-slate-300">
            /
          </span>

          <span className="font-semibold text-slate-700">
            Government Schemes
          </span>

        </div>

      </div>

      {/* =====================================================
          SCHEMES SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">

        {/* Very subtle background */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-slate-100/70 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1400px]">

          {/* Section Heading */}

          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

            <div className="max-w-2xl">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-600">

                <Sparkles className="h-3.5 w-3.5 text-amber-500" />

                Citizen Welfare

              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">

                Major Government Schemes

              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">

                Explore important welfare programmes and
                government initiatives available through
                official government portals.

              </p>

            </div>

            {/* Scheme count */}

            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100">

                <Leaf className="h-4 w-4 text-emerald-600" />

              </div>

              <div>

                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Available
                </p>

                <p className="text-sm font-bold text-slate-900">
                  {schemes.length} Schemes
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              SCHEME CARDS
          ================================================== */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {schemes.map((scheme) => {

              const Icon = scheme.icon

              return (
                <a
                  key={scheme.title}
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex min-h-[390px] cursor-pointer flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2 ${scheme.borderColor} ${scheme.hoverBorder}`}
                >

                  {/* Top accent */}

                  <div
                    className={`absolute left-0 right-0 top-0 h-1 opacity-50 transition-opacity duration-300 group-hover:opacity-100 ${
                      scheme.category === "Housing"
                        ? "bg-blue-500"
                        : scheme.category === "Sanitation"
                          ? "bg-emerald-500"
                          : "bg-violet-500"
                    }`}
                  />

                  {/* =================================================
                      CARD HEADER
                  ================================================== */}

                  <div className={`${scheme.headerBg} relative p-7`}>

                    <div className="flex items-start justify-between">

                      {/* Icon */}

                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${scheme.iconBg} transition-all duration-300 group-hover:scale-105 group-hover:shadow-md`}
                      >

                        <Icon
                          className={`h-7 w-7 ${scheme.iconColor}`}
                        />

                      </div>

                      {/* External link */}

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-400 shadow-sm transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">

                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

                      </div>

                    </div>

                    {/* Category */}

                    <div className="mt-6">

                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider ${scheme.badgeColor}`}
                      >
                        {scheme.category}
                      </span>

                    </div>

                    {/* Title */}

                    <h3
                      className={`mt-3 text-2xl font-bold tracking-tight text-slate-950 transition-colors duration-200 ${scheme.hoverText}`}
                    >
                      {scheme.title}
                    </h3>

                  </div>

                  {/* =================================================
                      CARD BODY
                  ================================================== */}

                  <div className="flex flex-1 flex-col p-7">

                    <p className="text-sm leading-6 text-slate-500">
                      {scheme.description}
                    </p>

                    <div className="flex-1" />

                    {/* Bottom */}

                    <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">

                      <div>

                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          Official Portal
                        </p>

                        <p
                          className={`mt-1 text-xs font-bold text-slate-700 transition-colors ${scheme.hoverText}`}
                        >
                          Visit Website
                        </p>

                      </div>

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 ${scheme.hoverButton}`}
                      >

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                      </div>

                    </div>

                  </div>

                </a>
              )
            })}

          </div>

          {/* =====================================================
              ELIGIBILITY SECTION
          ====================================================== */}

          <section className="mt-16">

            <div className="relative overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-7 sm:p-9 lg:p-10">

              {/* Decorative */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />

              <div className="relative flex flex-col gap-7 lg:flex-row lg:items-start">

                {/* Icon */}

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 shadow-sm">

                  <Info className="h-6 w-6" />

                </div>

                {/* Content */}

                <div className="flex-1">

                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-amber-700">

                    <ShieldCheck className="h-3 w-3" />

                    Important Information

                  </div>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">

                    Eligibility & Application

                  </h3>

                  <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">

                    Each government scheme has its own
                    eligibility criteria, documentation
                    requirements and application procedure.
                    Citizens should review the official scheme
                    portal before submitting an application.

                  </p>

                  <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">

                    For assistance with government schemes
                    or related municipal information, citizens
                    may contact the Nagar Panchayat Anandnagar
                    office or citizen help desk.

                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* =====================================================
              HELP CTA
          ====================================================== */}

          <section className="relative mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 p-8 text-white shadow-xl sm:p-10">

            {/* Glows */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-teal-300">

                  <ShieldCheck className="h-3.5 w-3.5" />

                  Citizen Help Desk

                </div>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">

                  Need help understanding a scheme?

                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">

                  Contact Nagar Panchayat Anandnagar
                  for assistance regarding available
                  municipal services and citizen welfare
                  information.

                </p>

              </div>

              <a
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >

                Contact Us

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

              </a>

            </div>

          </section>

        </div>

      </section>

    </main>
  )
}
