"use client"

import { useMemo, useState } from "react"
import {
  ArrowDownToLine,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileText,
  Filter,
  HelpCircle,
  Phone,
  Search,
  ShieldCheck,
  X,
} from "lucide-react"

interface CitizenForm {
  id: number
  name: string
  department: string
  format: string
  fileUrl: string
}

const forms: CitizenForm[] = [
  {
    id: 1,
    name: "Birth Registration Form",
    department: "Health & Vital Records",
    format: "PDF • 1.2 MB",
    fileUrl: "#",
  },
  {
    id: 2,
    name: "Property Tax Assessment Form",
    department: "Revenue",
    format: "PDF • 850 KB",
    fileUrl: "#",
  },
  {
    id: 3,
    name: "Water Connection Application",
    department: "Water Works",
    format: "PDF • 2.1 MB",
    fileUrl: "#",
  },
  {
    id: 4,
    name: "Trade License Renewal",
    department: "Town Planning",
    format: "PDF • 1.5 MB",
    fileUrl: "#",
  },
  {
    id: 5,
    name: "Death Certificate Request",
    department: "Health & Vital Records",
    format: "PDF • 1.1 MB",
    fileUrl: "#",
  },
  {
    id: 6,
    name: "Building Permission Form",
    department: "Town Planning",
    format: "PDF • 980 KB",
    fileUrl: "#",
  },
  {
    id: 7,
    name: "Electricity Connection",
    department: "Town Planning",
    format: "PDF • 1.3 MB",
    fileUrl: "#",
  },
  {
    id: 8,
    name: "Marriage Registration",
    department: "Health & Vital Records",
    format: "PDF • 890 KB",
    fileUrl: "#",
  },
]

const departments = [
  "All Departments",
  "Health & Vital Records",
  "Revenue",
  "Water Works",
  "Town Planning",
]

const departmentStyles: Record<
  string,
  {
    badge: string
    icon: string
    hover: string
    accent: string
  }
> = {
  "Health & Vital Records": {
    badge: "bg-rose-50 text-rose-700 border-rose-200",
    icon: "bg-rose-50 text-rose-600",
    hover:
      "hover:border-rose-200 hover:shadow-rose-100/70",
    accent: "from-rose-500 to-pink-500",
  },

  Revenue: {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    icon: "bg-amber-50 text-amber-600",
    hover:
      "hover:border-amber-200 hover:shadow-amber-100/70",
    accent: "from-amber-500 to-orange-500",
  },

  "Water Works": {
    badge: "bg-cyan-50 text-cyan-700 border-cyan-200",
    icon: "bg-cyan-50 text-cyan-600",
    hover:
      "hover:border-cyan-200 hover:shadow-cyan-100/70",
    accent: "from-cyan-500 to-blue-500",
  },

  "Town Planning": {
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    icon: "bg-violet-50 text-violet-600",
    hover:
      "hover:border-violet-200 hover:shadow-violet-100/70",
    accent: "from-violet-500 to-indigo-500",
  },
}

export default function CitizenForms() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDept, setSelectedDept] =
    useState("All Departments")

  const filteredForms = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return forms.filter((form) => {
      const matchesSearch =
        !query ||
        form.name.toLowerCase().includes(query) ||
        form.department.toLowerCase().includes(query)

      const matchesDepartment =
        selectedDept === "All Departments" ||
        form.department === selectedDept

      return matchesSearch && matchesDepartment
    })
  }, [searchTerm, selectedDept])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedDept("All Departments")
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-900 bg-blue-950 px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">

        {/* Background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-200 backdrop-blur-sm">
            <FileText className="h-4 w-4 text-cyan-400" />

            Citizen Services
          </div>

          {/* Heading */}

          <h1 className="max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Citizen Forms &{" "}
            <span className="text-cyan-400">
              Documents
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-base">
            Access important Nagar Panchayat Anandnagar
            forms and application documents from one
            convenient digital portal.
          </p>

          {/* Trust indicators */}

          <div className="mt-7 flex flex-wrap gap-3">

            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-blue-100">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Official Forms
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-blue-100">
              <FileText className="h-4 w-4 text-cyan-400" />
              PDF Documents
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-blue-100">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Easy Access
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

          <div className="absolute bottom-0 right-[-100px] h-[350px] w-[350px] rounded-full bg-violet-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          {/* =================================================
              SEARCH / FILTER PANEL
          ================================================== */}

          <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

            <div className="flex flex-col gap-4 lg:flex-row">

              {/* Search */}

              <div className="relative flex-1">

                <Search
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  placeholder="Search forms by name or department..."
                  aria-label="Search citizen forms"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-200 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}

              </div>

              {/* Department */}

              <div className="relative lg:w-72">

                <Filter
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-500"
                />

                <select
                  value={selectedDept}
                  onChange={(event) =>
                    setSelectedDept(event.target.value)
                  }
                  aria-label="Filter forms by department"
                  className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                >
                  {departments.map((department) => (
                    <option
                      key={department}
                      value={department}
                    >
                      {department}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                />

              </div>

            </div>

            {/* Results */}

            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-xs font-medium text-slate-500">
                Showing{" "}
                <span className="font-bold text-slate-900">
                  {filteredForms.length}
                </span>{" "}
                of{" "}
                <span className="font-bold text-slate-900">
                  {forms.length}
                </span>{" "}
                available forms
              </p>

              {(searchTerm ||
                selectedDept !== "All Departments") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex w-fit items-center gap-1.5 text-xs font-bold text-blue-600 transition-colors hover:text-blue-800 focus:outline-none focus-visible:underline"
                >
                  Clear filters
                  <X className="h-3.5 w-3.5" />
                </button>
              )}

            </div>
          </section>

          {/* =================================================
              FORMS
          ================================================== */}

          <section
            aria-label="Available citizen forms"
            className="mb-10"
          >

            {/* Desktop table */}

            <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">

              <div className="overflow-x-auto">

                <table className="w-full border-collapse">

                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                        Document
                      </th>

                      <th className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                        Department
                      </th>

                      <th className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                        Format
                      </th>

                      <th className="px-6 py-4 text-right text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredForms.map((form) => {
                      const style =
                        departmentStyles[form.department]

                      return (
                        <tr
                          key={form.id}
                          className={`group border-b border-slate-100 transition-all duration-200 last:border-0 ${style?.hover ?? "hover:border-blue-200 hover:shadow-blue-100/50"}`}
                        >

                          {/* Document */}

                          <td className="px-6 py-5">

                            <div className="flex items-center gap-3">

                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${style?.icon ?? "bg-blue-50 text-blue-600"} transition-transform duration-200 group-hover:scale-105`}
                              >
                                <FileText className="h-5 w-5" />
                              </div>

                              <div>
                                <p className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                                  {form.name}
                                </p>

                                <p className="mt-0.5 text-[11px] text-slate-400">
                                  Citizen Application Form
                                </p>
                              </div>

                            </div>
                          </td>

                          {/* Department */}

                          <td className="px-6 py-5">

                            <span
                              className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold ${style?.badge ?? "border-blue-200 bg-blue-50 text-blue-700"}`}
                            >
                              {form.department}
                            </span>

                          </td>

                          {/* Format */}

                          <td className="px-6 py-5">

                            <span className="text-xs font-medium text-slate-500">
                              {form.format}
                            </span>

                          </td>

                          {/* Action */}

                          <td className="px-6 py-5 text-right">

                            <a
                              href={form.fileUrl}
                              download
                              aria-label={`Download ${form.name}`}
                              className={`group/button inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r ${style?.accent ?? "from-blue-600 to-indigo-600"} px-4 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                            >
                              <ArrowDownToLine className="h-4 w-4 transition-transform group-hover/button:translate-y-0.5" />

                              Download
                            </a>

                          </td>

                        </tr>
                      )
                    })}
                  </tbody>

                </table>
              </div>
            </div>

            {/* Mobile cards */}

            <div className="grid gap-4 md:hidden">

              {filteredForms.map((form) => {
                const style =
                  departmentStyles[form.department]

                return (
                  <article
                    key={form.id}
                    className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${style?.hover ?? ""}`}
                  >

                    {/* Accent */}

                    <div
                      className={`h-1 bg-gradient-to-r ${style?.accent ?? "from-blue-600 to-indigo-600"}`}
                    />

                    <div className="p-5">

                      <div className="flex items-start gap-3">

                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style?.icon ?? "bg-blue-50 text-blue-600"}`}
                        >
                          <FileText className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">

                          <h3 className="text-sm font-bold leading-5 text-slate-900">
                            {form.name}
                          </h3>

                          <span
                            className={`mt-2 inline-flex rounded-full border px-2 py-1 text-[9px] font-bold ${style?.badge ?? "border-blue-200 bg-blue-50 text-blue-700"}`}
                          >
                            {form.department}
                          </span>

                        </div>

                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                        <span className="text-xs font-medium text-slate-500">
                          {form.format}
                        </span>

                        <a
                          href={form.fileUrl}
                          download
                          className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${style?.accent ?? "from-blue-600 to-indigo-600"} px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md`}
                        >
                          <ArrowDownToLine className="h-4 w-4" />
                          Download
                        </a>

                      </div>

                    </div>
                  </article>
                )
              })}
            </div>

            {/* Empty state */}

            {filteredForms.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                  <Search className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-900">
                  No forms found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  We couldn&apos;t find any forms matching
                  your search or selected department.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Clear filters
                  <X className="h-3.5 w-3.5" />
                </button>

              </div>
            )}

          </section>

          {/* =================================================
              SUPPORT SECTION
          ================================================== */}

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Submission Guidelines */}

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-600">
                    Before Submission
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-950">
                    Submission Guidelines
                  </h3>
                </div>

              </div>

              <div className="mt-6 space-y-4">

                {[
                  "Download the relevant form from the list.",
                  "Fill all required fields marked with an asterisk (*).",
                  "Attach the required supporting documents.",
                  "Submit through the citizen portal or at the Nagar Panchayat office.",
                  "Keep your submission receipt for future reference.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-700">
                      {index + 1}
                    </span>

                    <p className="pt-0.5 text-sm leading-6 text-slate-600">
                      {item}
                    </p>

                  </div>
                ))}

              </div>
            </section>

            {/* Assistance */}

            <section className="relative overflow-hidden rounded-2xl bg-blue-950 p-6 text-white shadow-xl sm:p-7">

              {/* Decorative */}

              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl"
              />

              <div className="relative">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-400">
                      Citizen Support
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      Need Assistance?
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <HelpCircle className="h-5 w-5 text-cyan-300" />
                  </div>

                </div>

                <p className="mt-4 max-w-lg text-sm leading-6 text-blue-100/75">
                  Need help with a form, document or municipal
                  service? Contact the Nagar Panchayat office
                  for assistance.
                </p>

                {/* Phone */}

                <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-blue-200/60">
                        Citizen Help Desk
                      </p>

                      <p className="mt-0.5 text-lg font-bold">
                        Contact Office
                      </p>
                    </div>

                  </div>

                  <a
                    href="/contact"
                    className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-blue-950 transition-all hover:bg-cyan-50 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
                  >
                    Contact Nagar Panchayat

                    <ArrowRight className="h-4 w-4" />
                  </a>

                </div>

              </div>
            </section>

          </div>
        </div>
      </section>
    </main>
  )
}
