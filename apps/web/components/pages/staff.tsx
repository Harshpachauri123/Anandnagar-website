"use client"

import {
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Phone,
  Search,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react"
import { useMemo, useState } from "react"

interface StaffMember {
  id: number
  name: string
  designation: string
  phone: string
}

/* =========================================================
   STAFF DATA
   Source: कर्मचारी की सूची
========================================================= */

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "अनुज कुमार भारती",
    designation: "अधिशासी अधिकारी",
    phone: "9990320487",
  },
  {
    id: 2,
    name: "विजय प्रताप यादव",
    designation: "अवर अभियंता (सिविल)",
    phone: "9650130047",
  },
  {
    id: 3,
    name: "श्री वेद प्रकाश गुप्त",
    designation: "लिपिक",
    phone: "9838498731",
  },
  {
    id: 4,
    name: "श्री वीरेन्द्र कुमार श्रीवास्तव",
    designation: "टंकक लिपिक",
    phone: "9451679469",
  },
  {
    id: 5,
    name: "श्री सुनीर कुमार",
    designation: "जन्म/मृत्यु",
    phone: "9621267779",
  },
  {
    id: 6,
    name: "श्री विजय कुमार",
    designation: "संग्रहकर्ता",
    phone: "7318202860",
  },
  {
    id: 7,
    name: "श्री राममूर्ति यादव",
    designation: "लाइनमैन",
    phone: "9792089834",
  },
  {
    id: 8,
    name: "श्री गज यादव",
    designation: "वरिष्ठ कम्प्यूटर ऑपरेटर",
    phone: "9621288080",
  },
  {
    id: 9,
    name: "श्री बृजेश कुमार यादव",
    designation: "कम्प्यूटर ऑपरेटर",
    phone: "9219485987",
  },
  {
    id: 10,
    name: "श्री जीतेन्द्र वर्मा",
    designation: "सहायक कम्प्यूटर ऑपरेटर",
    phone: "6392707210",
  },
]

/* =========================================================
   STAFF PAGE
========================================================= */

export default function Staff() {
  const [search, setSearch] = useState("")

  const filteredStaff = useMemo(() => {
    const value = search.trim().toLowerCase()

    if (!value) {
      return staffMembers
    }

    return staffMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(value) ||
        member.designation.toLowerCase().includes(value) ||
        member.phone.includes(value),
    )
  }, [search])

  return (
    <main className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">

        {/* Decorative Background */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            {/* Hero Content */}

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-100 backdrop-blur-md">

                <ShieldCheck className="h-4 w-4 text-emerald-400" />

                Official Staff Directory

              </div>

              <h1 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">

              Staff List

              </h1>

              <p className="mt-3 text-xl font-bold text-blue-200">
                Adarsh Nagar Panchayat Anandnagar
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">

                आदर्शनगर पंचायत आनंदनगर, जनपद महाराजगंज के अधिकारियों एवं
                कर्मचारियों की आधिकारिक संपर्क सूची।

              </p>

            </div>

            {/* Office Card */}

            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl lg:min-w-[290px]">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">

                  <Building2 className="h-7 w-7 text-orange-300" />

                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Office
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Nagar Panchayat Anandnagar
                  </p>

                  <p className="mt-1 text-xs text-blue-200">
                    Maharajganj, Uttar Pradesh
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* =================================================
            STATS
        ================================================== */}

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon={<Users className="h-5 w-5" />}
            label="Total Employees"
            value="10"
            iconClass="bg-blue-50 text-blue-600"
          />

          <StatCard
            icon={<ShieldCheck className="h-5 w-5" />}
            label="Administrative"
            value="2"
            iconClass="bg-indigo-50 text-indigo-600"
          />

          <StatCard
            icon={<BriefcaseBusiness className="h-5 w-5" />}
            label="Office Staff"
            value="5"
            iconClass="bg-orange-50 text-orange-600"
          />

          <StatCard
            icon={<CheckCircle2 className="h-5 w-5" />}
            label="Listed Contacts"
            value="10"
            iconClass="bg-emerald-50 text-emerald-600"
          />

        </div>

        {/* =================================================
            SEARCH HEADER
        ================================================== */}

        <div className="mb-7 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-600">
                Directory
              </p>

              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
                Our Staff
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                अधिकारी एवं कर्मचारी संपर्क विवरण
              </p>

            </div>

            {/* Search */}

            <div className="relative w-full lg:max-w-md">

              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="नाम, पद या मोबाइल नंबर खोजें..."
                className="
                  h-12 w-full rounded-2xl
                  border border-slate-200
                  bg-slate-50
                  pl-12 pr-4
                  text-sm font-medium text-slate-900
                  outline-none
                  transition-all duration-200
                  placeholder:text-slate-400
                  focus:border-blue-400
                  focus:bg-white
                  focus:ring-4
                  focus:ring-blue-100
                "
              />

            </div>

          </div>

        </div>

        {/* =================================================
            STAFF GRID
        ================================================== */}

        {filteredStaff.length > 0 ? (

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {filteredStaff.map((member) => (

              <StaffCard
                key={member.id}
                member={member}
              />

            ))}

          </div>

        ) : (

          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">

              <Search className="h-7 w-7 text-slate-400" />

            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              कोई कर्मचारी नहीं मिला
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              कृपया नाम, पद या मोबाइल नंबर दोबारा खोजें।
            </p>

          </div>

        )}

        {/* =================================================
            FOOTER NOTE
        ================================================== */}

        <div className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-orange-50 p-6 sm:p-7">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm ring-1 ring-blue-100">

              <ShieldCheck className="h-6 w-6" />

            </div>

            <div>

              <h3 className="font-bold text-slate-900">
                आधिकारिक कर्मचारी संपर्क सूची
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                किसी भी नगर पंचायत संबंधी कार्य के लिए संबंधित अधिकारी या
                कर्मचारी से निर्धारित कार्यालय समय में संपर्क करें।
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  label,
  value,
  iconClass,
}: {
  icon: React.ReactNode
  label: string
  value: string
  iconClass: string
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass} transition-transform duration-300 group-hover:scale-110`}
        >
          {icon}
        </div>

        <span className="text-2xl font-black text-slate-900">
          {value}
        </span>

      </div>

      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>

    </div>
  )
}

/* =========================================================
   STAFF CARD
========================================================= */

function StaffCard({
  member,
}: {
  member: StaffMember
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10">

      {/* Top Gradient */}

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-400 opacity-70 transition-opacity group-hover:opacity-100" />

      <div className="p-6">

        {/* Header */}

        <div className="flex items-start justify-between gap-4">

          <div className="flex items-center gap-4">

            {/* Employee Number */}

            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-700 ring-1 ring-blue-100 transition-all duration-300 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:shadow-lg">

              <UserRound className="h-6 w-6" />

              <span className="absolute -bottom-2 -right-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-orange-500 px-1 text-[9px] font-black text-white shadow-sm">
                {String(member.id).padStart(2, "0")}
              </span>

            </div>

            {/* Name */}

            <div className="min-w-0">

              <h3 className="text-lg font-black leading-tight text-slate-900 transition-colors group-hover:text-blue-700">
                {member.name}
              </h3>

              <span className="mt-2 inline-flex rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-blue-700">
                {member.designation}
              </span>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-5 h-px bg-slate-100" />

        {/* Contact */}

        <div className="flex items-center justify-between gap-3">

          <div className="flex min-w-0 items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">

              <Phone className="h-4 w-4" />

            </div>

            <div className="min-w-0">

              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Contact Number
              </p>

              <p className="mt-0.5 truncate text-sm font-bold text-slate-800">
                {member.phone}
              </p>

            </div>

          </div>

          {/* Call Button */}

          <a
            href={`tel:${member.phone}`}
            aria-label={`Call ${member.name}`}
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl
              bg-emerald-500
              text-white
              shadow-md shadow-emerald-500/20
              transition-all duration-200
              hover:scale-105
              hover:bg-emerald-600
              hover:shadow-lg
              active:scale-95
            "
          >
            <Phone className="h-4 w-4" />
          </a>

        </div>

      </div>

      {/* Bottom Hover Accent */}

      <div className="h-0.5 w-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 transition-all duration-500 group-hover:w-full" />

    </article>
  )
}
