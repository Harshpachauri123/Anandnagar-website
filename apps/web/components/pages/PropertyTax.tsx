import {
  ArrowDown,
  BadgeCheck,
  Building2,
  ChevronRight,
  FileText,
  MapPin,
  ReceiptText,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import PropertyTaxClient from "@/components/property-tax/PropertyTaxClient"

export default function PropertyTaxPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-slate-50">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-950">

        {/* Main background */}

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />

        {/* Ambient lights */}

        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[110px]" />

        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute left-0 top-1/2 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />

        {/* Subtle grid */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            {/* =================================================
                HERO CONTENT
            ================================================== */}

            <div className="max-w-3xl">

              {/* Badge */}

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-orange-200 backdrop-blur-md">

                <Sparkles className="h-3.5 w-3.5 text-orange-300" />

                Nagar Panchayat Anandnagar

              </div>

              {/* Heading */}

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">

                Online Property

                <span className="block bg-gradient-to-r from-orange-300 via-amber-200 to-cyan-300 bg-clip-text text-transparent">
                  Tax Services
                </span>

              </h1>

              {/* Description */}

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">

                Search your property record, review assessment details,
                check outstanding tax dues and proceed with the available
                online payment service.

              </p>

              {/* Feature chips */}

              <div className="mt-7 flex flex-wrap gap-3">

                <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-semibold text-slate-200 backdrop-blur-md">

                  <SearchIcon />

                  Property Search

                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-semibold text-slate-200 backdrop-blur-md">

                  <ReceiptText className="h-4 w-4 text-orange-300" />

                  Tax Assessment

                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-semibold text-slate-200 backdrop-blur-md">

                  <BadgeCheck className="h-4 w-4 text-emerald-300" />

                  Secure Service

                </div>

              </div>

            </div>

            {/* =================================================
                SECURITY CARD
            ================================================== */}

            <div className="w-full lg:w-[330px]">

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl">

                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl" />

                <div className="relative">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-300/20">

                      <ShieldCheck className="h-6 w-6 text-emerald-300" />

                    </div>

                    <div>

                      <p className="text-sm font-extrabold text-white">
                        Secure Citizen Service
                      </p>

                      <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                        Official municipal property tax portal
                      </p>

                    </div>

                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4">

                    <div className="flex items-center justify-between">

                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Service Status
                      </span>

                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-300">

                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>

                        Available

                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom wave-like edge */}

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      </section>

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <div className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">

          <div className="flex items-center gap-2 text-xs">

            <a
              href="/"
              className="font-medium text-slate-400 transition-colors hover:text-blue-600"
            >
              Home
            </a>

            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />

            <span className="font-bold text-slate-700">
              Property Tax
            </span>

          </div>

          <div className="hidden items-center gap-2 sm:flex">

            <MapPin className="h-3.5 w-3.5 text-orange-500" />

            <span className="text-[10px] font-semibold text-slate-400">
              Anandnagar, Maharajganj
            </span>

          </div>

        </div>

      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">

        {/* Ambient background */}

        <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 rounded-full bg-orange-500/5 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">

          {/* =================================================
              PAGE INTRO
          ================================================== */}

          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="mb-2 flex items-center gap-2">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">

                  <Building2 className="h-4 w-4" />

                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
                  Citizen Property Services
                </span>

              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                Search & Manage Property Tax
              </h2>

              <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm">
                Use the property search below to find your registered
                property and view its municipal tax information.
              </p>

            </div>

            {/* Help indicator */}

            <div className="flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">

              <FileText className="h-4 w-4 text-violet-500" />

              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Property Records
              </span>

            </div>

          </div>

          {/* =================================================
              EXISTING CLIENT
          ================================================== */}

          <PropertyTaxClient />

        </div>

      </section>

      {/* =====================================================
          BOTTOM INFORMATION STRIP
      ====================================================== */}

      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 divide-y divide-slate-100 px-4 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-10">

          <InfoItem
            icon={<ShieldCheck className="h-4 w-4" />}
            title="Secure Information"
            description="Your property information is handled securely."
            color="emerald"
          />

          <InfoItem
            icon={<ReceiptText className="h-4 w-4" />}
            title="Transparent Assessment"
            description="View tax heads, arrears and current demand."
            color="blue"
          />

          <InfoItem
            icon={<Building2 className="h-4 w-4" />}
            title="Official Portal"
            description="Nagar Panchayat Anandnagar, Maharajganj."
            color="orange"
          />

        </div>

      </section>

    </main>
  )
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SearchIcon() {
  return (
    <span className="flex h-4 w-4 items-center justify-center text-cyan-300">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    </span>
  )
}

function InfoItem({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: "emerald" | "blue" | "orange"
}) {
  const styles = {
    emerald: {
      icon: "bg-emerald-50 text-emerald-600",
    },
    blue: {
      icon: "bg-blue-50 text-blue-600",
    },
    orange: {
      icon: "bg-orange-50 text-orange-600",
    },
  }

  return (
    <div className="flex items-center gap-3 px-2 py-4 sm:px-5">

      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${styles[color].icon}`}
      >
        {icon}
      </div>

      <div>

        <p className="text-xs font-bold text-slate-800">
          {title}
        </p>

        <p className="mt-0.5 text-[10px] leading-4 text-slate-400">
          {description}
        </p>

      </div>

    </div>
  )
}
