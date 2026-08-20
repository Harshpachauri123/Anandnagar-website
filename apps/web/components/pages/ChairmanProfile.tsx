"use client"

import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Landmark,
  Leaf,
  MessageSquare,
  ShieldCheck,
  Users,
  Wifi,
  Zap,
} from "lucide-react"
import Link from "next/link"

interface Activity {
  date: string
  month: string
  title: string
  description: string
}

const activities: Activity[] = [
  {
    date: "12",
    month: "OCT",
    title: "Citizen Welfare Review",
    description:
      "Reviewed ongoing civic services and citizen requirements across the wards of Nagar Panchayat Anandnagar.",
  },
  {
    date: "05",
    month: "OCT",
    title: "Sanitation & Cleanliness Review",
    description:
      "Reviewed sanitation arrangements, cleanliness activities and waste-management requirements across the town.",
  },
  {
    date: "28",
    month: "SEP",
    title: "Digital Citizen Services",
    description:
      "Reviewed initiatives aimed at making Nagar Panchayat services more accessible through digital platforms.",
  },
  {
    date: "20",
    month: "SEP",
    title: "Urban Infrastructure Review",
    description:
      "Reviewed civic infrastructure requirements including roads, public facilities and essential municipal services.",
  },
]

const focusAreas = [
  {
    icon: Landmark,
    title: "Urban Development",
    description:
      "Improving civic infrastructure and essential municipal facilities.",
  },
  {
    icon: Users,
    title: "Citizen Welfare",
    description:
      "Building accessible and responsive public services for citizens.",
  },
  {
    icon: Wifi,
    title: "Digital Governance",
    description:
      "Encouraging transparent and convenient digital citizen services.",
  },
]

const visionItems = [
  {
    icon: Leaf,
    title: "Clean Anandnagar",
    description:
      "Focus on cleanliness, sanitation and a healthier urban environment.",
    iconClass: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: Zap,
    title: "Better Infrastructure",
    description:
      "Strengthening roads, lighting and essential civic infrastructure.",
    iconClass: "bg-blue-50 text-blue-700",
  },
  {
    icon: Wifi,
    title: "Digital Governance",
    description:
      "Making municipal services easier to access through digital platforms.",
    iconClass: "bg-indigo-50 text-indigo-700",
  },
]

export default function ChairmanProfile() {
  return (
    <main className="w-full bg-slate-50">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-xs font-medium text-slate-500 sm:text-sm"
          >
            <Link
              href="/"
              className="transition-colors hover:text-blue-700 focus:outline-none focus-visible:underline"
            >
              Home
            </Link>

            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />

            <span>Leadership</span>

            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />

            <span
              aria-current="page"
              className="font-semibold text-blue-700"
            >
              Chairman&apos;s Profile
            </span>
          </nav>

          {/* Heading */}

          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700">
              <Landmark className="h-3.5 w-3.5" />

              Nagar Panchayat Leadership
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Chairman&apos;s Profile
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Learn about the leadership, priorities and vision
              guiding Nagar Panchayat Anandnagar, Maharajganj.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        {/* Background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="absolute bottom-0 right-[-100px] h-[350px] w-[350px] rounded-full bg-orange-100/30 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">

            {/* =================================================
                LEFT COLUMN
            ================================================== */}

            <div className="space-y-8">

              {/* =================================================
                  PROFILE CARD
              ================================================== */}

              <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                <div className="grid md:grid-cols-[0.9fr_1.1fr]">

                  {/* Portrait */}

                  <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-blue-950 p-8">

                    {/* Decorative circles */}

                    <div
                      aria-hidden="true"
                      className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full border border-white/10"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"
                    />

                    {/* Placeholder portrait */}

                    <div className="relative">

                      <div className="flex h-48 w-48 items-center justify-center rounded-full border-8 border-white/10 bg-white/10 shadow-2xl backdrop-blur-sm sm:h-56 sm:w-56">

                        <Users className="h-24 w-24 text-blue-200 sm:h-28 sm:w-28" />

                      </div>

                      {/* Status */}

                      <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full border border-white/10 bg-white px-3 py-1.5 text-[10px] font-bold text-emerald-700 shadow-lg">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Public Office
                      </div>

                    </div>
                  </div>

                  {/* Profile Information */}

                  <div className="flex flex-col justify-center p-7 sm:p-9">

                    <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                      <ShieldCheck className="h-4 w-4" />

                      Elected Leadership
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                      Hon&apos;ble Chairman
                    </h2>

                    <p className="mt-1 text-base font-semibold text-orange-600">
                      Nagar Panchayat Anandnagar
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      The Chairman provides leadership for municipal
                      administration and works towards improving
                      civic services, infrastructure and citizen
                      welfare in Anandnagar.
                    </p>

                    {/* Focus Areas */}

                    <div className="mt-7">

                      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        Key Focus Areas
                      </h3>

                      <div className="space-y-3">
                        {focusAreas.map((area) => {
                          const Icon = area.icon

                          return (
                            <div
                              key={area.title}
                              className="flex items-start gap-3"
                            >
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                                <Icon className="h-4 w-4" />
                              </div>

                              <div>
                                <p className="text-sm font-semibold text-slate-900">
                                  {area.title}
                                </p>

                                <p className="mt-0.5 text-xs leading-5 text-slate-500">
                                  {area.description}
                                </p>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                    </div>
                  </div>
                </div>
              </section>

              {/* =================================================
                  MESSAGE / BIOGRAPHY
              ================================================== */}

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <div className="mb-6 flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <MessageSquare className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                      Leadership
                    </p>

                    <h3 className="text-xl font-bold tracking-tight text-slate-950">
                      Message from the Chairman
                    </h3>
                  </div>

                </div>

                <div className="border-l-2 border-blue-600 pl-5">

                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    &quot;Our priority is to work towards accessible,
                    transparent and responsive civic services for
                    every citizen of Anandnagar. Through better
                    infrastructure, responsible administration and
                    digital services, we aim to build a cleaner,
                    more connected and citizen-focused Nagar
                    Panchayat.&quot;
                  </p>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-px w-8 bg-slate-300" />

                    <p className="text-xs font-semibold text-slate-500">
                      Chairman, Nagar Panchayat Anandnagar
                    </p>
                  </div>

                </div>
              </section>

              {/* =================================================
                  VISION
              ================================================== */}

              <section>

                <div className="mb-5 flex items-end justify-between">

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                      Development Priorities
                    </p>

                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                      Vision for Anandnagar
                    </h3>
                  </div>

                  <Award className="hidden h-6 w-6 text-orange-500 sm:block" />

                </div>

                <div className="grid gap-4 sm:grid-cols-3">

                  {visionItems.map((item) => {
                    const Icon = item.icon

                    return (
                      <div
                        key={item.title}
                        className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconClass}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <h4 className="mt-4 text-sm font-bold text-slate-950">
                          {item.title}
                        </h4>

                        <p className="mt-1.5 text-xs leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    )
                  })}

                </div>
              </section>

              {/* =================================================
                  RECENT ACTIVITIES
              ================================================== */}

              <section>

                <div className="mb-6">

                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                    Latest Updates
                  </p>

                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                    Recent Activities
                  </h3>

                </div>

                <div className="relative">

                  {/* Timeline line */}

                  <div
                    aria-hidden="true"
                    className="absolute bottom-5 left-[27px] top-5 w-px bg-slate-200"
                  />

                  <div className="space-y-5">

                    {activities.map((activity) => (
                      <article
                        key={`${activity.date}-${activity.title}`}
                        className="relative flex gap-4"
                      >

                        {/* Date */}

                        <div className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700 shadow-sm">

                          <span className="text-lg font-bold leading-none">
                            {activity.date}
                          </span>

                          <span className="mt-1 text-[9px] font-bold tracking-wider">
                            {activity.month}
                          </span>

                        </div>

                        {/* Content */}

                        <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-200">

                          <div className="flex items-start justify-between gap-3">

                            <h4 className="text-sm font-bold text-slate-950 sm:text-base">
                              {activity.title}
                            </h4>

                            <CalendarDays className="hidden h-4 w-4 shrink-0 text-slate-300 sm:block" />

                          </div>

                          <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
                            {activity.description}
                          </p>

                        </div>

                      </article>
                    ))}

                  </div>
                </div>
              </section>
            </div>

            {/* =================================================
                RIGHT SIDEBAR
            ================================================== */}

            <aside className="space-y-6">

              {/* Chairman Note */}

              <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-emerald-500" />

                <div className="p-6">

                  <div className="mb-5 flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                      <MessageSquare className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-orange-600">
                        Leadership Note
                      </p>

                      <h4 className="text-base font-bold text-slate-950">
                        Chairman&apos;s Note
                      </h4>
                    </div>

                  </div>

                  <blockquote className="border-l-2 border-orange-400 pl-4 text-sm leading-6 text-slate-600">
                    &quot;Together, we can build an Anandnagar
                    that is cleaner, more accessible, digitally
                    connected and responsive to the needs of
                    every citizen.&quot;
                  </blockquote>

                  <div className="mt-5 flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-blue-100" />

                    <div>
                      <p className="text-xs font-semibold text-slate-900">
                        Chairman
                      </p>

                      <p className="text-[10px] text-slate-500">
                        Nagar Panchayat Anandnagar
                      </p>
                    </div>
                  </div>

                </div>
              </section>

              {/* Quick Information */}

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                    Leadership
                  </p>

                  <h4 className="mt-1 text-base font-bold text-slate-950">
                    Office Priorities
                  </h4>
                </div>

                <div className="space-y-3">

                  {[
                    "Transparent civic administration",
                    "Accessible citizen services",
                    "Improved urban infrastructure",
                    "Cleanliness and sanitation",
                    "Digital governance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

                      <span className="text-xs leading-5 text-slate-600">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </section>

              {/* Citizen CTA */}

              <section className="overflow-hidden rounded-2xl bg-blue-950 p-6 text-white shadow-lg">

                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Users className="h-5 w-5 text-blue-200" />
                </div>

                <h4 className="text-lg font-bold">
                  Connect with Nagar Panchayat
                </h4>

                <p className="mt-2 text-xs leading-5 text-blue-200/80">
                  Have a suggestion, grievance or civic service
                  request? Reach out to the Nagar Panchayat.
                </p>

                <Link
                  href="/contact"
                  className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-blue-900 transition-all hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
                >
                  Contact Office

                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

              </section>

            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
