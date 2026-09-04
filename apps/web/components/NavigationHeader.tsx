"use client"

import {
  ChevronDown,
  ChevronRight,
  Menu,
  Search,
  X,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface NavLink {
  name: string
  path: string
}

/* =========================================================
   PRIMARY NAVIGATION
========================================================= */

const primaryLinks: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Chairman",
    path: "/chairman",
  },
  {
    name: "Forms",
    path: "/forms",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

/* =========================================================
   CITIZEN SERVICES
========================================================= */

const serviceLinks: NavLink[] = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Our Services",
    path: "/services",
  },
  {
    name: "Public Grievance",
    path: "/publicgrievance",
  },
  {
    name: "Schemes",
    path: "/schemes",
  },
  {
    name: "Property Tax",
    path: "/propertytax",
  },
]

/* =========================================================
   STAFF DROPDOWN
========================================================= */

const staffLinks: NavLink[] = [
  {
    name: "Staff List",
    path: "/staff",
  },
  {
    name: "Member List",
    path: "/members",
  },
]

/* =========================================================
   NAVIGATION HEADER
========================================================= */

export default function NavigationHeader() {
  const pathname = usePathname()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [staffOpen, setStaffOpen] = useState(false)

  /* =======================================================
     ACTIVE ROUTE
  ======================================================== */

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }

    return pathname.startsWith(path)
  }

  const isStaffActive = isActive("/staff") || isActive("/members")

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setStaffOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* =====================================================
          MAIN HEADER
      ====================================================== */}

      <div className="border-b border-slate-200/80 bg-slate-300 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] w-full max-w-[1400px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-10">
          {/* =================================================
              LOGO + BRAND
          ================================================== */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex min-w-0 items-center gap-3 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            {/* Logo */}

            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-1 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-blue-200 group-hover:shadow-lg sm:h-14 sm:w-14">
              <img
                src="/government.png"
                alt="Adarsh Nagar Panchayat Anandnagar Logo"
                className="h-full w-full object-contain"
              />

              {/* Online indicator */}

              <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-white bg-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
            </div>

            {/* Brand text */}

            <div className="min-w-0">
              <h1 className="truncate text-[15px] font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-blue-800 sm:text-lg lg:text-xl">
                Adarsh Nagar Panchayat Anandnagar
              </h1>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="hidden h-1 w-1 rounded-full bg-orange-500 sm:block" />

                <p className="truncate text-[8px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-[10px]">
                  Maharajganj, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </Link>

          {/* =================================================
              PRIMARY NAVIGATION
          ================================================== */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center rounded-2xl border border-slate-200 bg-slate-50/80 p-1 shadow-sm lg:flex"
          >
            {primaryLinks.map((link) => {
              const active = isActive(link.path)

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  aria-current={active ? "page" : undefined}
                  className={`
                    relative rounded-xl px-4 py-2.5
                    text-sm font-bold
                    transition-all duration-200
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-500
                    focus-visible:ring-offset-1
                    ${
                      active
                        ? "bg-white text-blue-700 shadow-sm ring-1 ring-slate-200"
                        : "text-slate-600 hover:bg-white hover:text-blue-700 hover:shadow-sm"
                    }
                  `}
                >
                  {link.name}

                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-[3px] w-5 -translate-x-1/2 translate-y-[1px] rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* =================================================
              RIGHT ACTION AREA
          ================================================== */}

          <div className="flex shrink-0 items-center gap-2">
            {/* Search */}

            <button
              type="button"
              aria-label="Search"
              className="
                hidden h-10 w-10 items-center justify-center
                rounded-xl border border-slate-200
                bg-white text-slate-500
                shadow-sm
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-700
                hover:shadow-md
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                sm:flex
              "
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Mobile Menu */}

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl border border-slate-200
                bg-white text-slate-700
                shadow-sm
                transition-all duration-200
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-700
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                lg:hidden
              "
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          SECOND NAVBAR / CITIZEN SERVICES
      ====================================================== */}

      <div className="hidden border-b border-slate-200 bg-white/95 shadow-[0_4px_18px_rgba(15,23,42,0.06)] backdrop-blur-xl lg:block">
        <nav
          aria-label="Citizen services navigation"
          className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10"
        >
          <div className="flex h-[56px] items-center justify-center">
            {/* Citizen Services Label */}

            <div className="mr-5 flex shrink-0 items-center gap-2 border-r border-slate-200 pr-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                Citizen Services
              </span>
            </div>

            {/* Service Links */}

            <div className="flex items-center gap-1">
              {serviceLinks.map((link) => {
                const active = isActive(link.path)

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    aria-current={active ? "page" : undefined}
                    className={`
                      group relative flex items-center gap-1.5
                      rounded-xl
                      px-4 py-2.5
                      text-sm font-bold
                      whitespace-nowrap
                      transition-all duration-200
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-500
                      focus-visible:ring-offset-1
                      ${
                        active
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "text-slate-900 hover:bg-blue-50 hover:text-blue-700"
                      }
                    `}
                  >
                    <span>{link.name}</span>

                    <ChevronRight
                      className={`
                        h-3.5 w-3.5
                        transition-all duration-200
                        ${
                          active
                            ? "text-blue-100"
                            : "text-slate-300 group-hover:translate-x-0.5 group-hover:text-blue-500"
                        }
                      `}
                    />

                    {active && (
                      <span className="absolute -bottom-[1px] left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-orange-400" />
                    )}
                  </Link>
                )
              })}

              {/* Staff Dropdown */}

              <div className="group relative">
                <button
                  type="button"
                  aria-haspopup="menu"
                  className={`
                    flex items-center gap-1.5
                    rounded-xl px-4 py-2.5
                    text-sm font-bold
                    whitespace-nowrap
                    transition-all duration-200
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-500
                    ${
                      isStaffActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "text-slate-900 hover:bg-blue-50 hover:text-blue-700"
                    }
                  `}
                >
                  <span>Staff</span>

                  <ChevronDown
                    className="
                      h-4 w-4
                      transition-transform duration-200
                      group-hover:rotate-180
                    "
                  />
                </button>

                {/* Dropdown */}

                <div className="invisible absolute right-0 top-full z-50 w-56 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
                    <div className="mb-1 px-3 py-2">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                        Administration
                      </p>
                    </div>

                    {staffLinks.map((link) => {
                      const active = isActive(link.path)

                      return (
                        <Link
                          key={link.path}
                          href={link.path}
                          className={`
                            group/item flex items-center justify-between
                            rounded-xl px-3 py-3
                            text-sm font-bold
                            transition-all duration-200
                            ${
                              active
                                ? "bg-blue-50 text-blue-700"
                                : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                            }
                          `}
                        >
                          <span>{link.name}</span>

                          <ChevronRight
                            className={`
                              h-4 w-4
                              transition-transform
                              ${
                                active
                                  ? "text-blue-600"
                                  : "text-slate-300 group-hover/item:translate-x-1 group-hover/item:text-blue-500"
                              }
                            `}
                          />
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {mobileOpen && (
        <div className="border-b border-slate-200 bg-white shadow-2xl lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            {/* Mobile Search */}

            <div className="mb-5 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 transition-all focus-within:border-blue-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50">
              <Search className="h-4 w-4 shrink-0 text-slate-400" />

              <input
                type="search"
                placeholder="Search services..."
                aria-label="Search services"
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            {/* Main Navigation */}

            <div>
              <div className="mb-2 flex items-center gap-2 px-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                  Main Navigation
                </p>
              </div>

              <div className="grid gap-1 sm:grid-cols-2">
                {primaryLinks.map((link) => {
                  const active = isActive(link.path)

                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={closeMobileMenu}
                      className={`
                        flex items-center justify-between
                        rounded-xl px-4 py-3
                        text-sm font-bold
                        transition-all
                        ${
                          active
                            ? "bg-blue-50 text-blue-800"
                            : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                        }
                      `}
                    >
                      <span>{link.name}</span>

                      {active && (
                        <span className="h-2 w-2 rounded-full bg-orange-500" />
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Divider */}

            <div className="my-5 h-px bg-slate-100" />

            {/* Citizen Services */}

            <div>
              <div className="mb-2 flex items-center gap-2 px-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                  Citizen Services
                </p>
              </div>

              <div className="grid gap-1 sm:grid-cols-2">
                {serviceLinks.map((link) => {
                  const active = isActive(link.path)

                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={closeMobileMenu}
                      className={`
                        flex items-center justify-between
                        rounded-xl px-4 py-3
                        text-sm
                        transition-all
                        ${
                          active
                            ? "bg-blue-50 font-bold text-blue-800"
                            : "font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                        }
                      `}
                    >
                      <span>{link.name}</span>

                      <ChevronRight
                        className={`
                          h-4 w-4
                          ${
                            active
                              ? "text-blue-600"
                              : "text-slate-300"
                          }
                        `}
                      />
                    </Link>
                  )
                })}

                {/* Mobile Staff Dropdown */}

                <div className="sm:col-span-2">
                  <button
                    type="button"
                    onClick={() => setStaffOpen((value) => !value)}
                    aria-expanded={staffOpen}
                    className={`
                      flex w-full items-center justify-between
                      rounded-xl px-4 py-3
                      text-sm font-bold
                      transition-all
                      ${
                        isStaffActive
                          ? "bg-blue-50 text-blue-800"
                          : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                      }
                    `}
                  >
                    <span>Staff</span>

                    <ChevronDown
                      className={`
                        h-4 w-4
                        transition-transform duration-200
                        ${
                          staffOpen
                            ? "rotate-180 text-blue-600"
                            : "text-slate-400"
                        }
                      `}
                    />
                  </button>

                  {/* Staff submenu */}

                  {staffOpen && (
                    <div className="mt-1 ml-3 space-y-1 border-l-2 border-blue-100 pl-3">
                      {staffLinks.map((link) => {
                        const active = isActive(link.path)

                        return (
                          <Link
                            key={link.path}
                            href={link.path}
                            onClick={closeMobileMenu}
                            className={`
                              flex items-center justify-between
                              rounded-xl px-4 py-3
                              text-sm font-semibold
                              transition-all
                              ${
                                active
                                  ? "bg-blue-50 text-blue-700"
                                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                              }
                            `}
                          >
                            <span>{link.name}</span>

                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
