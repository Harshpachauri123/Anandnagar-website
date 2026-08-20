"use client"

import React, { useEffect, useState } from "react"
import {
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
  X,
} from "lucide-react"

interface Certification {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const certificationsData: Certification[] = [
  {
    id: 1,
    title: "MSME Certified",
    category: "Government Registration",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    description:
      "Certified under Ministry of Micro, Small and Medium Enterprises.",
  },
  {
    id: 2,
    title: "Enterprise Partner",
    category: "ISO/IEC 27001:2022",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800",
    description:
      "Information Security Management System compliance certified.",
  },
  {
    id: 3,
    title: "Technology Leader",
    category: "ISO 9001:2015",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    description:
      "Quality Management System for standard service delivery.",
  },
  {
    id: 4,
    title: "Swachh Bharat Award",
    category: "Municipal Excellence",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    description:
      "Recognition for outstanding cleanliness and sanitation initiatives.",
  },
  {
    id: 5,
    title: "Digital Governance",
    category: "State Innovation",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    description:
      "Awarded for transparent and fast digital citizen services.",
  },
  {
    id: 6,
    title: "Green Energy Pioneer",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    description:
      "Appreciation for adopting eco-friendly municipal infrastructure.",
  },
  {
    id: 7,
    title: "Financial Transparency",
    category: "Auditing Excellence",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    description:
      "Certified for 100% transparent budget allocation and utilization.",
  },
]

export default function CertificationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] =
    useState<Certification | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const itemsPerPage = 3

  const maxIndex = Math.max(
    0,
    certificationsData.length - itemsPerPage,
  )

  /* ==========================================================
     REDUCED MOTION
  ========================================================== */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    )

    const updateMotionPreference = () => {
      setReduceMotion(mediaQuery.matches)
    }

    updateMotionPreference()

    mediaQuery.addEventListener(
      "change",
      updateMotionPreference,
    )

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMotionPreference,
      )
    }
  }, [])

  /* ==========================================================
     SLIDER CONTROLS
  ========================================================== */

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? maxIndex : prev - 1,
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1,
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  /* ==========================================================
     AUTO SLIDE
  ========================================================== */

  useEffect(() => {
    if (
      isPaused ||
      selectedImage ||
      reduceMotion ||
      maxIndex === 0
    ) {
      return
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1,
      )
    }, 4000)

    return () => {
      window.clearInterval(interval)
    }
  }, [
    isPaused,
    selectedImage,
    reduceMotion,
    maxIndex,
  ])

  /* ==========================================================
     KEYBOARD CONTROL
  ========================================================== */

  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null)
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown,
    )

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      )
    }
  }, [selectedImage])

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <section
      aria-labelledby="certifications-title"
      className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* ======================================================
          BACKGROUND
      ======================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-100px] h-[350px] w-[350px] rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto mb-12 max-w-3xl text-center">

          {/* Eyebrow */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-600 shadow-sm">
            <Award className="h-4 w-4 text-orange-500" />

            <span>Achievements & Recognition</span>
          </div>

          {/* Heading */}

          <h2
            id="certifications-title"
            className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Our Achievements & Recognitions
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-7 text-slate-600 sm:text-base">
            Recognitions highlighting excellence, compliance,
            transparency, sustainability, and quality service
            delivery.
          </p>

          {/* Accent */}

          <div
            aria-hidden="true"
            className="mt-6 flex items-center justify-center gap-1.5"
          >
            <span className="h-1 w-10 rounded-full bg-orange-500" />
            <span className="h-1 w-5 rounded-full bg-blue-600" />
            <span className="h-1 w-3 rounded-full bg-emerald-500" />
          </div>
        </div>

        {/* ====================================================
            SLIDER
        ===================================================== */}

        <div
          className="relative px-0 sm:px-8 lg:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous achievements"
            className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:-left-1 lg:-left-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Viewport */}

          <div className="overflow-hidden rounded-2xl">
            <div
              className={`flex gap-5 ${
                reduceMotion
                  ? ""
                  : "transition-transform duration-500 ease-out"
              }`}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="min-w-full flex-shrink-0 sm:min-w-[calc(50%-10px)] lg:min-w-[calc(33.333333%-13.333px)]"
                >
                  <article
                    className="group flex h-full min-h-[420px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/70"
                    onClick={() => setSelectedImage(cert)}
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {
                        event.preventDefault()
                        setSelectedImage(cert)
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${cert.title}`}
                  >
                    {/* Accent */}

                    <div
                      aria-hidden="true"
                      className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400"
                    />

                    <div className="flex flex-1 flex-col p-4 sm:p-5">

                      {/* Image */}

                      <div className="relative h-56 overflow-hidden rounded-xl border border-slate-100 bg-slate-100 sm:h-60">

                        <img
                          src={cert.image}
                          alt={cert.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                        />

                        {/* Image overlay */}

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4 pt-12">
                          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1.5 text-[10px] font-bold text-slate-700 shadow-sm backdrop-blur-sm">
                            <Maximize2 className="h-3 w-3" />

                            View certificate
                          </span>
                        </div>

                      </div>

                      {/* Content */}

                      <div className="mt-5 flex flex-1 flex-col">

                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                          {cert.category}
                        </span>

                        <h3 className="mt-1.5 text-lg font-bold tracking-tight text-slate-950">
                          {cert.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {cert.description}
                        </p>

                        {/* Bottom */}

                        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                          <span className="text-xs font-semibold text-slate-500">
                            Recognition
                          </span>

                          <span className="flex items-center gap-1 text-xs font-bold text-blue-600 transition-colors group-hover:text-blue-700">
                            View

                            <ExternalLink
                              aria-hidden="true"
                              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </span>
                        </div>

                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next achievements"
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-md transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:-right-1 lg:-right-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* ====================================================
            PAGINATION
        ===================================================== */}

        <div
          className="mt-8 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Achievement slides"
        >
          {Array.from({
            length: maxIndex + 1,
          }).map((_, index) => {
            const active = currentIndex === index

            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={[
                  "h-2 rounded-full transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2",
                  "focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                  active
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400",
                ].join(" ")}
              />
            )
          })}
        </div>

        {/* Slide status */}

        <p
          aria-live="polite"
          className="mt-3 text-center text-[11px] font-medium text-slate-400"
        >
          {currentIndex + 1} of {maxIndex + 1}
        </p>
      </div>

      {/* ======================================================
          LIGHTBOX
      ======================================================= */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal header */}

            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
              <div className="min-w-0 pr-4">

                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                  {selectedImage.category}
                </span>

                <h3
                  id="certificate-modal-title"
                  className="mt-1 truncate text-lg font-bold text-slate-950"
                >
                  {selectedImage.title}
                </h3>

              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close certificate preview"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal image */}

            <div className="flex max-h-[65vh] items-center justify-center overflow-auto bg-slate-950 p-4 sm:p-8">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[58vh] max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>

            {/* Modal description */}

            <div className="border-t border-slate-200 bg-white px-5 py-4">
              <p className="text-center text-sm leading-6 text-slate-600">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
