"use client"

import React, { useState } from "react"
import {
  Accessibility,
  Mail,
  Phone,
} from "lucide-react"

export default function TopUtilityBar() {
  const [fontSize, setFontSize] = useState<"small" | "normal" | "large">(
    "normal",
  )

  const toggleScreenReader = () => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(
        "Screen Reader Access enabled. Welcome to Adarsh Nagar Panchayat Anandnagar, Maharajganj, Uttar Pradesh.",
      )

      speech.rate = 1.0
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(speech)

      alert("Screen Reader Announcement activated!")
    } else {
      alert("Text-to-speech is not supported on this browser.")
    }
  }

  const setPageFontSize = (
    size: "small" | "normal" | "large",
    value: string,
  ) => {
    document.documentElement.style.fontSize = value
    setFontSize(size)
  }

  return (
    <div className="relative z-[60] w-full border-b border-slate-200 bg-slate-200 text-black">

      {/* Background Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-16 w-64 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-0 top-0 h-16 w-64 rounded-full bg-orange-100/30 blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto flex min-h-[40px] w-full max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-1.5 sm:px-6 lg:px-10">

        {/* LEFT — CONTACT */}
        <div className="flex items-center gap-2 sm:gap-5">

          {/* Phone */}
          <a
            href="tel:+91xxxxxxxxx"
            className="
              group flex items-center gap-1.5
              rounded-lg px-1.5 py-1
              text-[11px] font-extrabold
              text-black
              transition-all duration-200
              hover:bg-blue-50
              hover:text-blue-700
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
            "
          >
            <span
              className="
                flex h-6 w-6 items-center justify-center
                rounded-md
                border border-blue-100
                bg-blue-50
                text-black
                transition-all
                group-hover:border-blue-200
                group-hover:bg-blue-100
                group-hover:text-blue-700
              "
            >
              <Phone className="h-3.5 w-3.5" />
            </span>

            <span className="hidden sm:inline">
              +91 9621288080
            </span>

            <span className="sm:hidden">
              Contact Office
            </span>
          </a>

          {/* Divider */}
          <span className="hidden h-5 w-px bg-slate-200 sm:block" />

          {/* Email */}
          <a
            href="mailto:npaanandnagar@gmail.com"
            className="
              group hidden items-center gap-1.5
              rounded-lg px-1.5 py-1
              text-[11px] font-extrabold
              text-black
              transition-all duration-200
              hover:bg-orange-50
              hover:text-orange-700
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-orange-500
              sm:flex
            "
          >
            <span
              className="
                flex h-6 w-6 items-center justify-center
                rounded-md
                border border-orange-100
                bg-orange-50
                text-black
                transition-all
                group-hover:border-orange-200
                group-hover:bg-orange-100
                group-hover:text-orange-700
              "
            >
              <Mail className="h-3.5 w-3.5" />
            </span>

            <span>
              npanandnagar@gmail.com
            </span>
          </a>
        </div>

        {/* RIGHT — ACCESSIBILITY */}
        <div className="ml-auto flex items-center gap-2 sm:gap-4">

          {/* Skip to Main Content */}
          {/* <a
            href="main-content"
            className="
              hidden
              rounded-lg
              px-2 py-1
              text-[10px]
              font-extrabold
              text-black
              transition-colors
              hover:bg-blue-50
              hover:text-blue-700
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              md:inline-flex
            "
          >
            Skip to Main Content
          </a> */}

          {/* Divider */}
          <span className="hidden h-5 w-px bg-slate-200 md:block" />

          {/* Screen Reader */}
          <button
            type="button"
            onClick={toggleScreenReader}
            title="Enable screen reader access"
            aria-label="Enable screen reader access"
            className="
              group flex items-center gap-1.5
              rounded-lg
              px-2 py-1
              text-[10px]
              font-extrabold
              text-black
              transition-all duration-200
              hover:bg-blue-50
              hover:text-blue-700
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
            "
          >
            <span
              className="
                flex h-6 w-6 items-center justify-center
                rounded-md
                border border-slate-200
                bg-white
                text-black
                shadow-sm
                transition-all
                group-hover:border-blue-200
                group-hover:bg-blue-50
                group-hover:text-blue-700
              "
            >
              <Accessibility className="h-3.5 w-3.5" />
            </span>

            <span className="hidden sm:inline">
              Screen Reader Access
            </span>
          </button>

          {/* Divider */}
          <span className="hidden h-5 w-px bg-slate-200 lg:block" />

          {/* FONT SIZE CONTROLS */}
          <div className="hidden items-center rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm lg:flex">

            {/* A- */}
            <button
              type="button"
              onClick={() => setPageFontSize("small", "14px")}
              title="Decrease text size"
              aria-label="Decrease text size"
              aria-pressed={fontSize === "small"}
              className={`
                flex h-7 min-w-7 items-center justify-center
                rounded-md px-1
                text-[10px] font-black
                transition-all duration-200
                ${
                  fontSize === "small"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-black hover:bg-blue-50 hover:text-blue-700"
                }
              `}
            >
              A-
            </button>

            {/* A */}
            <button
              type="button"
              onClick={() => setPageFontSize("normal", "16px")}
              title="Normal text size"
              aria-label="Normal text size"
              aria-pressed={fontSize === "normal"}
              className={`
                flex h-7 min-w-7 items-center justify-center
                rounded-md px-1
                text-[11px] font-black
                transition-all duration-200
                ${
                  fontSize === "normal"
                    ? "bg-slate-100 text-black"
                    : "text-black hover:bg-blue-50 hover:text-blue-700"
                }
              `}
            >
              A
            </button>

            {/* A+ */}
            <button
              type="button"
              onClick={() => setPageFontSize("large", "18px")}
              title="Increase text size"
              aria-label="Increase text size"
              aria-pressed={fontSize === "large"}
              className={`
                flex h-7 min-w-7 items-center justify-center
                rounded-md px-1
                text-xs font-black
                transition-all duration-200
                ${
                  fontSize === "large"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-black hover:bg-blue-50 hover:text-blue-700"
                }
              `}
            >
              A+
            </button>

          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
    </div>
  )
}
