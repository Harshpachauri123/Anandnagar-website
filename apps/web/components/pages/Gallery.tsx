"use client"

import { useEffect, useState } from "react"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Filter,
  Image as ImageIcon,
  Maximize2,
  Upload,
  X,
} from "lucide-react"

interface GalleryItem {
  id: number
  title: string
  category: "Events" | "Development" | "Landmarks"
  description: string
  image: string
}

const filters = [
  "All Highlights",
  "Events",
  "Development",
  "Landmarks",
] as const

type GalleryFilter = (typeof filters)[number]

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Anandnagar Civic Landscape",
    category: "Landmarks",
    description:
      "A visual glimpse of Anandnagar and its civic environment in Maharajganj district.",
    image:
      "https://images.pexels.com/photos/2047397/pexels-photo-2047397.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "Green Anandnagar Initiative",
    category: "Development",
    description:
      "Community-focused activities supporting greener public spaces and a healthier urban environment.",
    image:
      "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Community Cleanliness Drive",
    category: "Events",
    description:
      "Citizen participation in cleanliness, sanitation and public awareness initiatives.",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Digital Citizen Services",
    category: "Events",
    description:
      "Initiatives focused on making Nagar Panchayat services more accessible through digital platforms.",
    image:
      "https://images.pexels.com/photos/6347734/pexels-photo-6347734.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    title: "Modern Street Lighting",
    category: "Development",
    description:
      "Civic infrastructure improvements supporting safer and better-connected public spaces.",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    title: "Community Health Initiative",
    category: "Events",
    description:
      "Public health and citizen welfare activities aimed at strengthening community services.",
    image:
      "https://images.pexels.com/photos/3951878/pexels-photo-3951878.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
]

const categoryStyles: Record<
  GalleryItem["category"],
  {
    badge: string
    active: string
  }
> = {
  Events: {
    badge: "border-rose-200 bg-rose-50 text-rose-700",
    active: "border-rose-500 bg-rose-500 text-white",
  },

  Development: {
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    active: "border-emerald-500 bg-emerald-500 text-white",
  },

  Landmarks: {
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    active: "border-amber-500 bg-amber-500 text-white",
  },
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] =
    useState<GalleryFilter>("All Highlights")

  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null)

  const [imageIndex, setImageIndex] = useState(0)

  const filteredItems: GalleryItem[] =
    activeFilter === "All Highlights"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter,
        )

  /* =====================================================
     OPEN LIGHTBOX
  ====================================================== */

  const openLightbox = (
    item: GalleryItem,
    index: number,
  ) => {
    setImageIndex(index)
    setSelectedImage(item)
  }

  /* =====================================================
     CLOSE LIGHTBOX
  ====================================================== */

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  /* =====================================================
     PREVIOUS IMAGE
  ====================================================== */

  const previousImage = () => {
    if (filteredItems.length === 0) return

    const previous =
      imageIndex === 0
        ? filteredItems.length - 1
        : imageIndex - 1

    const item = filteredItems[previous]

    if (!item) return

    setImageIndex(previous)
    setSelectedImage(item)
  }

  /* =====================================================
     NEXT IMAGE
  ====================================================== */

  const nextImage = () => {
    if (filteredItems.length === 0) return

    const next =
      imageIndex === filteredItems.length - 1
        ? 0
        : imageIndex + 1

    const item = filteredItems[next]

    if (!item) return

    setImageIndex(next)
    setSelectedImage(item)
  }

  /* =====================================================
     KEYBOARD CONTROLS
  ====================================================== */

  useEffect(() => {
    if (!selectedImage) return

    const handleKeyboard = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        closeLightbox()
      }

      if (event.key === "ArrowLeft") {
        previousImage()
      }

      if (event.key === "ArrowRight") {
        nextImage()
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyboard,
    )

    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyboard,
      )

      document.body.style.overflow = ""
    }
  }, [
    selectedImage,
    imageIndex,
    filteredItems,
  ])

  return (
    <main className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-900 bg-blue-950 px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">

        {/* Background Effects */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-200 backdrop-blur-sm">
            <ImageIcon className="h-4 w-4 text-cyan-400" />

            Anandnagar Gallery
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            {/* Heading */}

            <div className="max-w-3xl">

              <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Visual Stories of{" "}
                <span className="text-cyan-400">
                  Anandnagar
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-base">
                Explore events, civic initiatives,
                development activities and landmarks of
                Nagar Panchayat Anandnagar, Maharajganj.
              </p>

            </div>

            {/* Statistics */}

            <div className="flex gap-3">

              <div className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-sm">
                <p className="text-lg font-bold">
                  {galleryItems.length}
                </p>

                <p className="text-[10px] uppercase tracking-wider text-blue-200/60">
                  Highlights
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-sm">
                <p className="text-lg font-bold">
                  3
                </p>

                <p className="text-[10px] uppercase tracking-wider text-blue-200/60">
                  Categories
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

        {/* Background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          {/* =================================================
              FILTER BAR
          ================================================== */}

          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                Explore
              </p>

              <h2 className="mt-1 text-lg font-bold text-slate-950">
                Gallery Highlights
              </h2>

            </div>

            {/* Filters */}

            <div
              className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Gallery categories"
            >
              {filters.map((filter) => {
                const isActive =
                  activeFilter === filter

                const categoryStyle =
                  filter !== "All Highlights"
                    ? categoryStyles[
                        filter as GalleryItem["category"]
                      ]
                    : null

                return (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() =>
                      setActiveFilter(filter)
                    }
                    className={[
                      "shrink-0 rounded-xl border px-4 py-2.5 text-xs font-bold transition-all duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                      isActive
                        ? filter === "All Highlights"
                          ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200"
                          : categoryStyle?.active
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          </div>

          {/* =================================================
              RESULTS INFO
          ================================================== */}

          <div className="mb-6 flex items-center justify-between">

            <p className="text-xs font-medium text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-900">
                {filteredItems.length}
              </span>{" "}
              visual highlights
            </p>

            <div className="hidden items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:flex">
              <Filter className="h-3.5 w-3.5" />
              Filtered Gallery
            </div>

          </div>

          {/* =================================================
              GALLERY GRID
          ================================================== */}

          {filteredItems.length > 0 ? (
            <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {filteredItems.map((item, index) => {

                const categoryStyle =
                  categoryStyles[item.category]

                const isFeatured =
                  index === 0 || index === 3

                return (
                  <article
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      openLightbox(item, index)
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {
                        event.preventDefault()

                        openLightbox(
                          item,
                          index,
                        )
                      }
                    }}
                    className={[
                      "group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm transition-all duration-300",
                      "hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/60",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                      isFeatured
                        ? "lg:row-span-2"
                        : "",
                    ].join(" ")}
                  >

                    {/* Placeholder */}

                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                      <ImageIcon className="h-10 w-10 text-slate-700" />
                    </div>

                    {/* Image */}

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none"
                      }}
                    />

                    {/* Main Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                    {/* Hover Color Glow */}

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-400/0 transition-all duration-500 group-hover:from-blue-500/10 group-hover:to-cyan-400/10" />

                    {/* Category Badge */}

                    <div className="absolute left-4 top-4 z-10">

                      <span
                        className={`inline-flex rounded-lg border px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] shadow-lg backdrop-blur-sm ${categoryStyle.badge}`}
                      >
                        {item.category}
                      </span>

                    </div>

                    {/* Expand Button */}

                    <div className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </div>

                    {/* Card Content */}

                    <div className="absolute inset-x-0 bottom-0 z-10 p-5">

                      <h3 className="text-base font-bold leading-tight text-white sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-200/80">
                        {item.description}
                      </p>

                      <div className="mt-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        View image

                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>

                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            /* =================================================
               EMPTY STATE
            ================================================== */

            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <Filter className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-base font-bold text-slate-900">
                No highlights found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                There are currently no gallery items in
                this category.
              </p>

              <button
                type="button"
                onClick={() =>
                  setActiveFilter("All Highlights")
                }
                className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                View all highlights
              </button>

            </div>
          )}

          {/* =================================================
              CONTRIBUTION CTA
          ================================================== */}

          <section className="relative mt-14 overflow-hidden rounded-3xl bg-blue-950 p-8 text-center text-white shadow-xl sm:p-12 lg:p-14">

            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-2xl">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300">
                <Upload className="h-6 w-6" />
              </div>

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-400">
                Community Participation
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Help Us Capture Anandnagar
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100/75">
                Have a photograph from a public event,
                development initiative or community activity?
                Help document the story of Anandnagar.
              </p>

              <button
                type="button"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-blue-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
              >
                <Upload className="h-4 w-4" />

                Submit Photos

                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          </section>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={closeLightbox}
        >

          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* Lightbox Header */}

            <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/95 px-4 py-3 sm:px-5">

              <div className="min-w-0 pr-4">

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-400">
                  {selectedImage.category}
                </span>

                <h3 className="mt-1 truncate text-sm font-bold text-white sm:text-base">
                  {selectedImage.title}
                </h3>

              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close image preview"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            {/* Image */}

            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black p-4 sm:p-8">

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[65vh] max-w-full rounded-lg object-contain"
              />

              {/* Previous */}

              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:left-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Next */}

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:right-5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

            </div>

            {/* Lightbox Footer */}

            <div className="border-t border-white/10 bg-slate-950 px-4 py-4 sm:px-5">

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <p className="max-w-2xl text-xs leading-5 text-slate-400">
                  {selectedImage.description}
                </p>

                <span className="shrink-0 text-[10px] font-bold text-slate-500">
                  {imageIndex + 1} / {filteredItems.length}
                </span>

              </div>

            </div>

          </div>
        </div>
      )}
    </main>
  )
}
