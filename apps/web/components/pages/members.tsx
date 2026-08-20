"use client"

import {
  Building2,
  CheckCircle2,
  Crown,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react"
import { useMemo, useState } from "react"

interface Member {
  id: number
  name: string
  designation: "अध्यक्ष" | "सभासद"
  ward: string
  wardName: string
  phone: string
}

/* =========================================================
   MEMBER DATA
   Source: सभासद की सूची - आदर्श नगर पंचायत आनंदनगर
========================================================= */

const members: Member[] = [
  {
    id: 1,
    name: "श्रीमती विजय लक्ष्मी देवी",
    designation: "अध्यक्ष",
    ward: "5",
    wardName: "सुभाषनगर",
    phone: "9415358839",
  },
  {
    id: 2,
    name: "श्रीमती ज्योति",
    designation: "सभासद",
    ward: "1",
    wardName: "अम्बेडकर नगर",
    phone: "8299255305",
  },
  {
    id: 3,
    name: "श्री मिथिलेश कुमार पासवान",
    designation: "सभासद",
    ward: "2",
    wardName: "कल्याणपुरम",
    phone: "9695301539",
  },
  {
    id: 4,
    name: "श्री गोरख प्रसाद",
    designation: "सभासद",
    ward: "3",
    wardName: "पंचशील नगर",
    phone: "9559748261",
  },
  {
    id: 5,
    name: "श्रीमती गुड़िया",
    designation: "सभासद",
    ward: "4",
    wardName: "गणेशपुर",
    phone: "6393547937",
  },
  {
    id: 6,
    name: "श्री सावर यादव",
    designation: "सभासद",
    ward: "5",
    wardName: "पं. दीन दयाल नगर",
    phone: "9936926783",
  },
  {
    id: 7,
    name: "श्रीमती प्रीती खटलानी",
    designation: "सभासद",
    ward: "6",
    wardName: "सिविल लाइन",
    phone: "9838251071",
  },
  {
    id: 8,
    name: "श्री गौतम पटवा",
    designation: "सभासद",
    ward: "7",
    wardName: "औद्योगिक नगर",
    phone: "7007895259",
  },
  {
    id: 9,
    name: "श्रीमती इसरावती देवी",
    designation: "सभासद",
    ward: "8",
    wardName: "गांधीनगर",
    phone: "9450511650",
  },
  {
    id: 10,
    name: "श्रीमती शांति देवी",
    designation: "सभासद",
    ward: "9",
    wardName: "स्वतंत्रता सेनानी पुरम",
    phone: "8127727118",
  },
  {
    id: 11,
    name: "श्री अजय कुमार",
    designation: "सभासद",
    ward: "10",
    wardName: "विंध्यवासिनी नगर",
    phone: "8423882609",
  },
  {
    id: 12,
    name: "श्री प्रदीप कुमार पाण्डेय",
    designation: "सभासद",
    ward: "11",
    wardName: "शास्त्री नगर",
    phone: "8924836166",
  },
  {
    id: 13,
    name: "श्री सुभाष",
    designation: "सभासद",
    ward: "12",
    wardName: "अटल नगर",
    phone: "9718307385",
  },
  {
    id: 14,
    name: "श्रीमती लीलावती देवी",
    designation: "सभासद",
    ward: "13",
    wardName: "निराला नगर",
    phone: "9580812581",
  },
  {
    id: 15,
    name: "श्री ऋषि",
    designation: "सभासद",
    ward: "14",
    wardName: "सुभाष नगर",
    phone: "9838111557",
  },
  {
    id: 16,
    name: "श्री गौरीशंकर यादव",
    designation: "सभासद",
    ward: "15",
    wardName: "विकास नगर",
    phone: "9936278044",
  },
  {
    id: 17,
    name: "श्री कैलाश",
    designation: "सभासद",
    ward: "16",
    wardName: "लक्ष्मीबाई नगर",
    phone: "9695541463",
  },
  {
    id: 18,
    name: "श्री मनोज कुमार जायसवाल",
    designation: "सभासद",
    ward: "17",
    wardName: "लाजपत नगर",
    phone: "9415378108",
  },
  {
    id: 19,
    name: "श्री विशाल जायसवाल",
    designation: "सभासद",
    ward: "18",
    wardName: "लोहिया नगर",
    phone: "9628792471",
  },
]

/* =========================================================
   MEMBER LIST PAGE
========================================================= */

export default function MemberList() {
  const [search, setSearch] = useState("")

  const filteredMembers = useMemo(() => {
    const value = search.trim().toLowerCase()

    if (!value) {
      return members
    }

    return members.filter(
      (member) =>
        member.name.toLowerCase().includes(value) ||
        member.designation.toLowerCase().includes(value) ||
        member.ward.includes(value) ||
        member.wardName.toLowerCase().includes(value) ||
        member.phone.includes(value),
    )
  }, [search])

  const chairman = members.find(
    (member) => member.designation === "अध्यक्ष",
  )

  const councillors = members.filter(
    (member) => member.designation === "सभासद",
  )

  return (
    <main className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">

        {/* Background Decoration */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl" />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            {/* Hero Content */}

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-100 backdrop-blur-md">

                <ShieldCheck className="h-4 w-4 text-emerald-400" />

                Elected Representatives

              </div>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Members List
              </h1>

              <p className="mt-3 text-xl font-bold text-blue-200">
                Adarsh Nagar Panchayat Anandnagar
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                आदर्श नगर पंचायत आनंदनगर के नवनिर्वाचित अध्यक्ष एवं
                सभासदगणों का आधिकारिक विवरण एवं संपर्क सूची।
              </p>

            </div>

            {/* Office Info */}

            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl lg:min-w-[300px]">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-400/10 ring-1 ring-orange-300/20">

                  <Building2 className="h-7 w-7 text-orange-300" />

                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Nagar Panchayat
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Anandnagar
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
          CONTENT
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* =================================================
            STATS
        ================================================== */}

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon={<Users className="h-5 w-5" />}
            label="Total Representatives"
            value="19"
            iconClass="bg-blue-50 text-blue-600"
          />

          <StatCard
            icon={<Crown className="h-5 w-5" />}
            label="Chairman"
            value="01"
            iconClass="bg-orange-50 text-orange-600"
          />

          <StatCard
            icon={<UserRound className="h-5 w-5" />}
            label="Councillors"
            value="18"
            iconClass="bg-indigo-50 text-indigo-600"
          />

          <StatCard
            icon={<MapPin className="h-5 w-5" />}
            label="Wards Covered"
            value="18"
            iconClass="bg-emerald-50 text-emerald-600"
          />

        </div>

        {/* =================================================
            SEARCH
        ================================================== */}

        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-600">
                Representative Directory
              </p>

              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
                अध्यक्ष एवं सभासदगण
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                नाम, वार्ड या मोबाइल नंबर से खोजें
              </p>

            </div>

            <div className="relative w-full lg:max-w-md">

              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="नाम, वार्ड या मोबाइल नंबर खोजें..."
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
            CHAIRMAN CARD
        ================================================== */}

        {chairman && !search && (

          <section className="mb-10">

            <div className="mb-4 flex items-center gap-3">

              <div className="h-8 w-1 rounded-full bg-gradient-to-b from-orange-500 to-amber-400" />

              <div>

                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-orange-600">
                  Leadership
                </p>

                <h2 className="text-xl font-black text-slate-900">
                  अध्यक्ष
                </h2>

              </div>

            </div>

            <ChairmanCard member={chairman} />

          </section>

        )}

        {/* =================================================
            COUNCILLORS
        ================================================== */}

        <section>

          <div className="mb-6 flex items-end justify-between gap-4">

            <div className="flex items-center gap-3">

              <div className="h-8 w-1 rounded-full bg-gradient-to-b from-blue-600 to-indigo-500" />

              <div>

                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-blue-600">
                  Ward Representatives
                </p>

                <h2 className="text-xl font-black text-slate-900">
                  सभासदगण
                </h2>

              </div>

            </div>

            <span className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-500 sm:inline-flex">
              {search ? filteredMembers.length : councillors.length} Members
            </span>

          </div>

          {filteredMembers.length > 0 ? (

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

              {filteredMembers.map((member) => (

                <MemberCard
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
                कोई सभासद नहीं मिला
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                कृपया नाम, वार्ड या मोबाइल नंबर दोबारा खोजें।
              </p>

            </div>

          )}

        </section>

        {/* =================================================
            INFORMATION NOTE
        ================================================== */}

        <div className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-orange-50 p-6 sm:p-7">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm ring-1 ring-blue-100">

              <ShieldCheck className="h-6 w-6" />

            </div>

            <div>

              <h3 className="font-bold text-slate-900">
                निर्वाचित प्रतिनिधियों की आधिकारिक सूची
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                यह सूची आदर्श नगर पंचायत आनंदनगर की उपलब्ध
                अध्यक्ष एवं सभासद सूची के आधार पर तैयार की गई है।
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
   CHAIRMAN CARD
========================================================= */

function ChairmanCard({
  member,
}: {
  member: Member
}) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-900/10">

      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative p-6 sm:p-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-5">

            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-xl shadow-orange-500/20">

              <Crown className="h-9 w-9" />

              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-white">
                <CheckCircle2 className="h-4 w-4" />
              </span>

            </div>

            <div>

              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-orange-700">

                <Crown className="h-3 w-3" />

                Hon'ble Chairman

              </div>

              <h3 className="text-2xl font-black text-slate-900">
                {member.name}
              </h3>

              <p className="mt-1 text-sm font-semibold text-slate-500">
                नगर पंचायत आनंदनगर
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

            <InfoPill
              icon={<MapPin className="h-4 w-4" />}
              label="Ward"
              value={`वार्ड ${member.ward}`}
            />

            <InfoPill
              icon={<Building2 className="h-4 w-4" />}
              label="Area"
              value={member.wardName}
            />

            <a
              href={`tel:${member.phone}`}
              className="flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-white shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:bg-emerald-600 sm:col-span-1"
            >

              <Phone className="h-4 w-4" />

              <div>

                <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-100">
                  Contact
                </p>

                <p className="text-xs font-bold">
                  {member.phone}
                </p>

              </div>

            </a>

          </div>

        </div>

      </div>

    </article>
  )
}

/* =========================================================
   MEMBER CARD
========================================================= */

function MemberCard({
  member,
}: {
  member: Member
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10">

      {/* Top Accent */}

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400 opacity-60 transition-opacity group-hover:opacity-100" />

      <div className="p-6">

        {/* Member Header */}

        <div className="flex items-start gap-4">

          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-700 ring-1 ring-blue-100 transition-all duration-300 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:shadow-lg">

            <UserRound className="h-6 w-6" />

            <span className="absolute -bottom-2 -right-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-orange-500 px-1 text-[9px] font-black text-white shadow-sm">
              {String(member.id).padStart(2, "0")}
            </span>

          </div>

          <div className="min-w-0 flex-1">

            <h3 className="text-lg font-black leading-tight text-slate-900 transition-colors group-hover:text-blue-700">
              {member.name}
            </h3>

            <span className="mt-2 inline-flex rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-blue-700">
              {member.designation}
            </span>

          </div>

        </div>

        {/* Divider */}

        <div className="my-5 h-px bg-slate-100" />

        {/* Ward */}

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">

            <MapPin className="h-4 w-4" />

          </div>

          <div className="min-w-0">

            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Ward
            </p>

            <p className="mt-0.5 text-sm font-bold text-slate-800">
              वार्ड {member.ward}
              <span className="ml-2 font-medium text-slate-500">
                • {member.wardName}
              </span>
            </p>

          </div>

        </div>

        {/* Contact */}

        <div className="mt-4 flex items-center justify-between gap-3">

          <div className="flex min-w-0 items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">

              <Phone className="h-4 w-4" />

            </div>

            <div className="min-w-0">

              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Mobile Number
              </p>

              <p className="mt-0.5 text-sm font-bold text-slate-800">
                {member.phone}
              </p>

            </div>

          </div>

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
              hover:scale-110
              hover:bg-emerald-600
              hover:shadow-lg
              active:scale-95
            "
          >
            <Phone className="h-4 w-4" />
          </a>

        </div>

      </div>

      {/* Bottom Accent */}

      <div className="h-0.5 w-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 transition-all duration-500 group-hover:w-full" />

    </article>
  )
}

/* =========================================================
   INFO PILL
========================================================= */

function InfoPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">

      <div className="text-blue-600">
        {icon}
      </div>

      <div>

        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p className="mt-0.5 text-xs font-bold text-slate-800">
          {value}
        </p>

      </div>

    </div>
  )
}
