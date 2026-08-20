"use client"

import {
  AlertCircle,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  DollarSign,
  FileCheck,
  FileText,
  Landmark,
  MapPin,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

interface Service {
  id: string
  title: string
  description: string
  category: string
  icon: React.ElementType
  href: string
  iconClass: string
  hoverClass: string
  badgeClass: string
}

const services: Service[] = [
  {
    id: "etender",
    title: "E-Tender",
    description:
      "Access tender notices, procurement documents and important information related to Nagar Panchayat works.",
    category: "Procurement",
    icon: FileText,
    href: "#e-tender",
    iconClass: "bg-blue-50 text-blue-600",
    hoverClass:
      "hover:border-blue-200 hover:shadow-blue-100/70",
    badgeClass: "bg-blue-50 text-blue-700",
  },
  {
    id: "grievance",
    title: "Public Grievance",
    description:
      "Submit your complaint or suggestion online and stay informed about the status of your grievance.",
    category: "Citizen Support",
    icon: AlertCircle,
    href: "/public-grievance",
    iconClass: "bg-rose-50 text-rose-600",
    hoverClass:
      "hover:border-rose-200 hover:shadow-rose-100/70",
    badgeClass: "bg-rose-50 text-rose-700",
  },
  {
    id: "rti",
    title: "Right to Information",
    description:
      "Access information related to public administration, transparency and citizen information rights.",
    category: "Transparency",
    icon: Scale,
    href: "#rtiact",
    iconClass: "bg-violet-50 text-violet-600",
    hoverClass:
      "hover:border-violet-200 hover:shadow-violet-100/70",
    badgeClass: "bg-violet-50 text-violet-700",
  },
  {
    id: "wards",
    title: "Wards & Areas",
    description:
      "Explore ward-related information and understand the administrative areas of Anandnagar.",
    category: "Administration",
    icon: MapPin,
    href: "#wards",
    iconClass: "bg-emerald-50 text-emerald-600",
    hoverClass:
      "hover:border-emerald-200 hover:shadow-emerald-100/70",
    badgeClass: "bg-emerald-50 text-emerald-700",
  },
  {
    id: "charter",
    title: "Citizen Charter",
    description:
      "Know about municipal services, expected service timelines, responsibilities and citizen rights.",
    category: "Citizen Rights",
    icon: FileCheck,
    href: "#citizen-charter",
    iconClass: "bg-amber-50 text-amber-600",
    hoverClass:
      "hover:border-amber-200 hover:shadow-amber-100/70",
    badgeClass: "bg-amber-50 text-amber-700",
  },
  {
    id: "tax",
    title: "Property Tax",
    description:
      "Access property-tax related information, assessment details and available municipal tax services.",
    category: "Revenue",
    icon: DollarSign,
    href: "/propertytax",
    iconClass: "bg-cyan-50 text-cyan-600",
    hoverClass:
      "hover:border-cyan-200 hover:shadow-cyan-100/70",
    badgeClass: "bg-cyan-50 text-cyan-700",
  },
  {
    id: "certificate",
    title: "Birth & Death Certificate",
    description:
      "Get information about birth and death registration, certificate applications and related services.",
    category: "Certificates",
    icon: Award,
    href: "#certificates",
    iconClass: "bg-orange-50 text-orange-600",
    hoverClass:
      "hover:border-orange-200 hover:shadow-orange-100/70",
    badgeClass: "bg-orange-50 text-orange-700",
  },
]

const quickLinks = [
  {
    title: "Public Grievance",
    description: "Register a complaint or suggestion",
    href: "/public-grievance",
    icon: AlertCircle,
  },
  {
    title: "Citizen Forms",
    description: "Download important municipal forms",
    href: "/forms",
    icon: FileText,
  },
  {
    title: "Contact Office",
    description: "Get in touch with Nagar Panchayat",
    href: "/contact",
    icon: Landmark,
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden bg-blue-950">

        {/* Background */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-background.png')",
          }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/55" />

        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />

        {/* Ambient Glows */}

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Grid Pattern */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative mx-auto flex min-h-[430px] w-full max-w-[1400px] items-center px-4 py-16 sm:px-6 lg:px-10">

          <div className="max-w-3xl">

            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-100 backdrop-blur-md">

              <ShieldCheck className="h-4 w-4 text-cyan-400" />

              Official Citizen Services

            </div>

            {/* Heading */}

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our{" "}
              <span className="text-cyan-400">
                Services
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-base">
              Access essential municipal services of
              Nagar Panchayat Anandnagar through a simple,
              transparent and citizen-friendly digital
              platform.
            </p>

            {/* Trust Indicators */}

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-blue-100 backdrop-blur-md">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Citizen Centric
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-blue-100 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-cyan-400" />
                Transparent Governance
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-blue-100 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-amber-400" />
                Digital Access
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

          <Link
            href="/"
            className="font-medium text-slate-400 transition-colors hover:text-blue-600"
          >
            Home
          </Link>

          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />

          <span className="font-semibold text-blue-600">
            Our Services
          </span>

        </div>

      </div>

      {/* =====================================================
          SERVICES SECTION
      ====================================================== */}

      <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-10 lg:py-20">

        {/* Background Decoration */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1400px]">

          {/* Section Header */}

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              Digital Civic Services
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything you need,
              <span className="text-blue-600">
                {" "}in one place
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
              Explore municipal services, citizen support,
              certificates, transparency resources and other
              important services provided through Nagar
              Panchayat Anandnagar.
            </p>

          </div>

          {/* =================================================
              SERVICE GRID
          ================================================== */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => {

              const Icon = service.icon

              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className={`group relative flex min-h-[290px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${service.hoverClass}`}
                >

                  {/* Top Accent */}

                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent transition-all duration-300 group-hover:from-blue-500 group-hover:via-cyan-400 group-hover:to-blue-500" />

                  {/* Decorative Glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Header */}

                  <div className="relative flex items-start justify-between">

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg ${service.iconClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider ${service.badgeClass}`}
                    >
                      {service.category}
                    </span>

                  </div>

                  {/* Content */}

                  <div className="relative mt-6 flex-1">

                    <h3 className="text-xl font-bold tracking-tight text-slate-950 transition-colors duration-200 group-hover:text-blue-700">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {service.description}
                    </p>

                  </div>

                  {/* Footer */}

                  <div className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-4">

                    <span className="text-xs font-bold text-slate-500 transition-colors group-hover:text-blue-600">
                      Access Service
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>

                  </div>

                </Link>
              )
            })}

          </div>

          {/* =================================================
              QUICK ACCESS
          ================================================== */}

          <section className="mt-16">

            <div className="mb-7">

              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                Quick Access
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Frequently Used Services
              </h2>

            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

              {quickLinks.map((item) => {

                const Icon = item.icon

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">

                      <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {item.description}
                      </p>

                    </div>

                    <ChevronRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600" />

                  </Link>
                )
              })}

            </div>

          </section>

          {/* =================================================
              HELP CTA
          ================================================== */}

          <section className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 p-8 text-white shadow-xl sm:p-10 lg:p-12">

            {/* Decorative */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* Content */}

              <div className="max-w-2xl">

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-300 backdrop-blur-sm">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Citizen Help Desk
                </div>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Need assistance with a service?
                </h2>

                <p className="mt-3 text-sm leading-6 text-blue-100/75">
                  If you cannot find the information or
                  service you are looking for, contact Nagar
                  Panchayat Anandnagar and our office team
                  will guide you.
                </p>

              </div>

              {/* CTA */}

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-blue-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800"
                >
                  Contact Us

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/public-grievance"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800"
                >
                  Submit Grievance
                </Link>

              </div>

            </div>

          </section>

        </div>

      </section>
    </main>
  )
}
