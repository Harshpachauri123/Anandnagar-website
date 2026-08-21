"use client"

import React from "react"
import { Award, ShieldCheck } from "lucide-react"

interface Dignitary {
  id: string
  name: string
  designation: string
  image: string
}

export default function DignitariesSection() {
  const dignitariesList: Dignitary[] = [
    {
      id: "1",
      name: "Hon. Shri Yogi Adityanath",
      designation: "Chief Minister, Uttar Pradesh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFm8hmbwanzZMT0OGeYJT-fyKujZoRGsGHGjsdCqSQfg&s=10",
    },
    {
      id: "2",
      name: "Shri Arvind Kumar Sharma",
      designation: "Minister of Urban Development, UP",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccuweW9do7mqLcHMMcW3eRvoX65bVC3oWdKmQ-xqRjA&s=10",
    },
    {
      id: "3",
      name: "Shri Rakesh Rathore Guru",
      designation: "State Minister of Urban Development, UP",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnVLNIphcD463NPf9HTUAQsytvLyQR9lcEfQnUqxUGw&s=10",
    },
    {
      id: "4",
      name: "Smt. Vijay Lakshmi Jaiswal",
      designation: "Chairman Officer of Nagar Panchayat Anadnagar,Maharajganj, UP",
      image: "/chairmanperson.png",
    },
    {
      id: "5",
      name: "Shri Anuj Kumar Bharti ",
      designation: "Executive Officer of Nagar Panchayat Anandnagar,Maharajganj, UP",
      image: "/executiveclerk.png",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50/60 via-indigo-50/30 to-emerald-50/40 px-4 py-16 font-sans md:px-8 border-b border-sky-100">
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[350px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Mini Heading */}
        <div className="mb-8 flex items-center justify-between border-b border-sky-200/60 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="rounded-xl bg-sky-500/10 p-2 text-sky-600 border border-sky-200">
              <Award className="h-5 w-5" />
            </div>
            <h2 className="text-base font-extrabold tracking-tight text-slate-900 md:text-lg">
              Patronage and Executive Leadership{" "}
              <span className="text-xs font-semibold text-sky-600">
                (Leadership Board)
              </span>
            </h2>
          </div>
          <span className="hidden text-xs font-medium text-slate-500 sm:inline-block">
            Nagar Panchayat • Official Desk
          </span>
        </div>

        {/* Main Strip Container - 3 Columns Layout */}
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-sky-100 bg-white/90 backdrop-blur-md shadow-xl shadow-sky-900/5 lg:grid-cols-3">
          {dignitariesList.map((item, index) => (
            <div
              key={item.id}
              className={`group relative flex flex-col items-center p-6 text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-sky-50/60 hover:to-transparent sm:flex-row sm:text-left ${
                index !== dignitariesList.length - 1
                  ? "border-b border-sky-100 lg:border-r lg:border-b-0"
                  : ""
              }`}
            >
              {/* Bounded & Bigger Image Box */}
              <div className="relative mb-4 h-32 w-32 shrink-0 overflow-hidden rounded-2xl border-2 border-sky-100 shadow-md transition-transform duration-300 group-hover:scale-105 sm:mb-0 sm:mr-5 sm:h-28 sm:w-28 bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
                
                {/* Official Icon Badge */}
                <div className="absolute right-1.5 bottom-1.5 rounded-full bg-blue-600 p-1 text-white shadow-md">
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>

              {/* Text Details with more space */}
              <div className="flex flex-1 flex-col justify-center space-y-1.5">
                <h3 className="text-sm font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 sm:text-base">
                  {item.name}
                </h3>
                <p className="text-xs leading-relaxed font-medium text-slate-600 sm:text-sm">
                  {item.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
