"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  MessageSquarePlus,
  PhoneCall,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"

export default function GrievanceBanner() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="grievance-banner-title"
      className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-orange-100/50 blur-3xl" />

        <div className="absolute bottom-[-150px] left-[-100px] h-[300px] w-[300px] rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            MAIN BANNER
        ====================================================== */}

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
          className="relative overflow-hidden rounded-2xl border border-blue-800 bg-blue-950 shadow-xl shadow-blue-950/10"
        >
          {/* =================================================
              DECORATIVE ELEMENTS
          ================================================== */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-80px] top-[-120px] h-[320px] w-[320px] rounded-full border border-white/5"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-20px] top-[-60px] h-[220px] w-[220px] rounded-full border border-white/5"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
          />

          {/* Top accent */}

          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-white/70 to-emerald-500"
          />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative flex flex-col gap-8 px-6 py-8 sm:px-8 md:px-10 md:py-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-12">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="max-w-2xl">

              {/* Badge */}

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 text-[11px] font-bold text-blue-100 backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-orange-400" />

                <span>
                  जन शिकायत निवारण
                </span>

                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-blue-400"
                />

                <span className="text-blue-300">
                  Public Grievance
                </span>
              </div>

              {/* Heading */}

              <h2
                id="grievance-banner-title"
                className="max-w-2xl text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                नगर पंचायत से संबंधित कोई शिकायत या{" "}
                <span className="text-orange-400">
                  सुझाव है?
                </span>
              </h2>

              {/* Description */}

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/80 sm:text-base">
                अपनी समस्या या सुझाव ऑनलाइन दर्ज कराएं।
                नगर पंचायत आनंदनगर, महाराजगंज पारदर्शी और
                त्वरित समाधान के लिए सदैव तत्पर है।
              </p>

              {/* Trust points */}

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-blue-100/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online Submission
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-blue-100/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Quick Response
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-blue-100/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Citizen Support
                </div>
              </div>
            </div>

            {/* =================================================
                ACTIONS
            ================================================== */}

            <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col xl:flex-row">

              {/* Primary CTA */}

              <Link
                href="/public-grievance"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition-all duration-200 hover:bg-orange-400 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 sm:w-auto"
              >
                <MessageSquarePlus
                  aria-hidden="true"
                  className="h-4 w-4"
                />

                <span>
                  शिकायत दर्ज करें
                </span>

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary CTA */}

              <Link
                href="/contact"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 sm:w-auto"
              >
                <PhoneCall
                  aria-hidden="true"
                  className="h-4 w-4 text-blue-200"
                />

                <span>
                  संपर्क कार्यालय
                </span>
              </Link>

            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SUPPORT NOTE
        ====================================================== */}

        <div className="mt-4 flex justify-center text-center">
          <p className="text-[11px] font-medium text-slate-500">
            आपकी शिकायत संबंधित विभाग तक सुरक्षित रूप से
            भेजी जाएगी।
          </p>
        </div>

      </div>
    </section>
  )
}
