"use client"

import React from "react"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"

const staffMembers = [
  {
    name: "श्रीमती विजय लक्ष्मी जायसवाल",
    designation: "अध्यक्ष",
    image: "/chairmanperson.png",
    description:
      "समग्र प्रशासन, नगर पालिका सेवाओं, विकास गतिविधियों और नागरिक कार्यक्रमों के प्रभावी क्रियान्वयन के लिए जिम्मेदार।",
  },
  {
    name: "श्री अनुज कुमार भारती",
    designation: "अधिशासी अधिकारी",
    image: "/executiveclerk.png",
    description:
      "प्रशासनिक संचालन, आधिकारिक रिकॉर्ड, नागरिक सेवाओं और नगर पालिका कार्यालय की गतिविधियों के समन्वय का संचालन।",
  },
  {
    name: "प्रधान लिपिक",
    designation: "प्रधान लिपिक (Head Clerk)",
    image: "#executive.png",
    description:
      "प्रशासनिक कार्यों, आधिकारिक अभिलेखों, नागरिक सेवाओं और कार्यालयीन गतिविधियों में सहायता प्रदान करना।",
  },
]

const highlights = [
  "नागरिक-केंद्रित नगर पालिका सेवाएं",
  "पारदर्शी और जवाबदेह शासन",
  "महत्वपूर्ण नागरिक सेवाओं तक डिजिटल पहुंच",
  "स्वच्छ, टिकाऊ और सुव्यवस्थित शहरी विकास",
]

export default function AboutUs() {
  return (
    <main className="min-h-screen w-full bg-slate-50 text-slate-900">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[10%] top-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute right-[8%] bottom-0 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              <ShieldCheck className="h-4 w-4" />
              आधिकारिक नगर पालिका पोर्टल
            </div>

            <h1 className="text-4xl font-black tracking-tight text-blue-750 sm:text-5xl lg:text-6xl">
              नगर पंचायत आनंदनगर 
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              नगर पंचायत आनंदनगर, महराजगंज, उत्तर प्रदेश पारदर्शी, सुलभ और नागरिक-केंद्रित
              नगर पालिका सेवाएं प्रदान करने के साथ-साथ सतत विकास और बेहतर शहरी जीवन के लिए प्रतिबद्ध है।
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
              >
                हमारे बारे में जानें
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#staff"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                <Users className="h-4 w-4" />
                हमारे अधिकारियों से मिलें
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================== */}
      <section
        id="about"
        className="relative overflow-hidden bg-slate-50 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

            {/* LEFT CONTENT */}
            <div>

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700">
                <Landmark className="h-4 w-4" />
                आनंदनगर का परिचय
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                पारदर्शिता और समर्पण के साथ
                <span className="text-blue-700">
                  {" "}नागरिकों की सेवा
                </span>
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">

                <p>
                  नगर पंचायत आनंदनगर आवश्यक नागरिक सेवाएं प्रदान करने और आनंदनगर के निवासियों के लिए एक उत्तरदायी नगर पालिका प्रशासन बनाने की दिशा में कार्य करता है।
                </p>

                <p>
                  नगर पंचायत कुशल प्रशासन के माध्यम से सार्वजनिक बुनियादी ढांचे, स्वच्छता, जल आपूर्ति, नागरिक सुविधाओं और नागरिक सेवा वितरण में सुधार पर ध्यान केंद्रित करती है।
                </p>

                <p>
                  डिजिटल गवर्नेंस पहलों के माध्यम से, नागरिक पारदर्शिता और जवाबदेही को बढ़ावा देते हुए अधिक सुविधा के साथ महत्वपूर्ण नगर पालिका जानकारी और सेवाओं तक पहुँच प्राप्त कर सकते हैं।
                </p>

              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 transition-transform group-hover:scale-110" />

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT INFORMATION CARD */}
            <div className="relative">

              <div className="absolute -inset-4 rounded-[2rem] bg-blue-100/50 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">

                <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-7 text-white">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                    <Building2 className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    नगर पंचायत आनंदनगर
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    महराजगंज, उत्तर प्रदेश
                  </p>

                </div>

                <div className="space-y-5 p-7">

                  <InfoRow
                    icon={<MapPin className="h-5 w-5" />}
                    title="स्थान"
                    value="आनंदनगर, महराजगंज, उत्तर प्रदेश"
                  />

                  <InfoRow
                    icon={<ShieldCheck className="h-5 w-5" />}
                    title="शासन"
                    value="नागरिक-केंद्रित स्थानीय प्रशासन"
                  />

                  <InfoRow
                    icon={<Users className="h-5 w-5" />}
                    title="जन सेवा"
                    value="निवासियों के लिए सुलभ नागरिक सेवाएं"
                  />

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================== */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-600">
              हमारी दिशा
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              लक्ष्य एवं दृष्टि (Mission & Vision)
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              प्रत्येक नागरिक के लिए एक स्वच्छ, अधिक पारदर्शी, समावेशी और डिजिटल रूप से सशक्त आनंदनगर का निर्माण।
            </p>

          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            {/* MISSION */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl transition-transform duration-500 group-hover:scale-125" />

              <div className="relative">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                    <Target className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                      मिशन
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-slate-950">
                      हमारा लक्ष्य (Mission)
                    </h3>
                  </div>

                </div>

                <p className="mt-7 text-sm leading-8 text-slate-600 sm:text-base">
                  आनंदनगर के लोगों के लिए नागरिक बुनियादी ढांचे, स्वच्छता, सार्वजनिक सुविधाओं और डिजिटल पहुंच में लगातार सुधार करते हुए कुशल, पारदर्शी और नागरिक-केंद्रित नगर पालिका सेवाएं प्रदान करना।
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  <span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold text-blue-700">
                    पारदर्शिता
                  </span>

                  <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    नागरिक सर्वोपरि
                  </span>

                  <span className="rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold text-orange-700">
                    बेहतर सेवाएं
                  </span>

                </div>

              </div>
            </div>

            {/* VISION */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl">

              <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-emerald-200/30 blur-3xl transition-transform duration-500 group-hover:scale-125" />

              <div className="relative">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                    <Eye className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                      विज़न
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-slate-950">
                      हमारी दृष्टि (Vision)
                    </h3>
                  </div>

                </div>

                <p className="mt-7 text-sm leading-8 text-slate-600 sm:text-base">
                  आनंदनगर को एक स्वच्छ, टिकाऊ, समावेशी और डिजिटल रूप से सशक्त नगर पंचायत के रूप में विकसित करना, जहां आधुनिक नागरिक बुनियादी ढांचा और उत्तरदायी शासन हर निवासी के जीवन स्तर को बेहतर बनाने में योगदान दे।
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    स्वच्छ आनंदनगर
                  </span>

                  <span className="rounded-full bg-teal-100 px-3 py-1.5 text-xs font-bold text-teal-700">
                    डिजिटल गवर्नेंस
                  </span>

                  <span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold text-blue-700">
                    सतत विकास
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          STAFF
      ========================================================== */}
      <section
        id="staff"
        className="relative overflow-hidden bg-slate-50 py-16 lg:py-20"
      >

        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                <Users className="h-4 w-4" />
                नगर पालिका प्रशासन
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Our Official Staff Members
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                आनंदनगर में कुशल नगर पालिका सेवाओं और बेहतर नागरिक सहायता के लिए समर्पित हमारी प्रशासनिक टीम से मिलें।
              </p>

            </div>

            <div className="hidden rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm md:block">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                प्रशासन
              </p>

              <p className="mt-1 font-black text-slate-900">
                नगर पंचायत आनंदनगर
              </p>
            </div>

          </div>

          {/* STAFF GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {staffMembers.map((staff) => (

              <article
                key={staff.designation}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100"
              >

                {/* STAFF IMAGE */}
                <div className="relative flex h-72 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-slate-100 to-orange-50">

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-xl" />

                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="relative z-10 h-full w-full object-contain object-center p-4 transition-transform duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none"
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                </div>

                {/* STAFF DETAILS */}
                <div className="p-6">

                  <h3 className="text-lg font-black text-slate-950 transition-colors group-hover:text-blue-700">
                    {staff.name}
                  </h3>

                  <p className="mt-1 text-sm font-bold text-orange-600">
                    {staff.designation}
                  </p>

                  <p className="mt-4 text-xs leading-6 text-slate-500">
                    {staff.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-slate-500">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    नगर पालिका प्रशासन
                  </div>

                </div>

              </article>

            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================== */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-8 text-white shadow-2xl shadow-blue-900/20 sm:p-10 lg:p-12">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                  नागरिक सहायता
                </span>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  नगर पंचायत से सहायता चाहिए?
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100">
                  नगर पालिका सेवाओं, नागरिक सूचना या सहायता के लिए नागरिक नगर पंचायत कार्यालय से संपर्क कर सकते हैं।
                </p>

              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-blue-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  <Mail className="h-4 w-4" />
                  कार्यालय से संपर्क करें
                </a>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" />
                  कार्यालय में कॉल करें
                </a>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

/* =========================================================
   INFORMATION ROW
========================================================= */

function InfoRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-700">
        {icon}
      </div>

      <div>

        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {title}
        </p>

        <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">
          {value}
        </p>

      </div>
    </div>
  )
}
