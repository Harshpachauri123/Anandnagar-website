'use client'

import React from 'react'
import { FileText, DollarSign, Clock } from 'lucide-react'

interface RtiStep {
  number: number
  titleKey: string
  descKey: string
}

export default function RtiAct() {
  // Ordered step sequences from the screen layouts
  const steps: RtiStep[] = [
    {
      number: 1,
      titleKey: 'Download Form',
      descKey: 'Download FormDesc',
    },
    {
      number: 2,
      titleKey: 'Submit Application',
      descKey: 'Submit AppDesc',
    },
    {
      number: 3,
      titleKey: 'Pay Fee',
      descKey: 'Pay FeeDesc',
    },
    {
      number: 4,
      titleKey: 'Receive Info',
      descKey: 'Receive InfoDesc',
    },
  ]

  // Document list items
  const requiredDocs = [
    'Identity Proof',
    'Address Proof',
    'Application Form',
    'Fee Receipt',
  ]

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-16">
      
      {/* Orange Hero Header Banner */}
      <section className="w-full bg-[#ea580c] text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">RtiAct</h1>
          <p className="text-orange-100 text-lg">Rti Description</p>
        </div>
      </section>

      {/* Main Grid Content Block */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Left Column: Process Steps */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 tracking-wide">RtiProcess</h2>
            
            <div className="space-y-8 relative pl-2">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5 items-start">
                  {/* Step Badge */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ea580c] text-white font-bold flex items-center justify-center shadow-sm">
                    {step.number}
                  </div>
                  {/* Step Copy Text */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-0.5">{step.titleKey}</h3>
                    <p className="text-gray-500 text-sm font-medium">{step.descKey}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Information Sidecards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Required Documents Card */}
            <div className="bg-orange-50/50 border-l-4 border-[#ea580c] rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-[#ea580c] font-bold text-lg mb-4">
                <FileText className="h-5 w-5 stroke-[2]" />
                <h3 className="tracking-wide">Required Documents</h3>
              </div>
              <ul className="space-y-3 pl-2">
                {requiredDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Fee Card */}
            <div className="bg-blue-50/60 border-l-4 border-blue-600 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-blue-900 font-bold text-lg mb-2">
                <DollarSign className="h-5 w-5 stroke-[2.5]" />
                <h3 className="tracking-wide">Application Fee</h3>
              </div>
              <p className="text-gray-700 font-semibold text-sm mb-1">Fee Amount: Rs. 10/-</p>
              <p className="text-gray-500 text-xs font-medium">Fee Description</p>
            </div>

            {/* Processing Time Card */}
            <div className="bg-emerald-50/40 border-l-4 border-emerald-600 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-emerald-900 font-bold text-lg mb-2">
                <Clock className="h-5 w-5 stroke-[2]" />
                <h3 className="tracking-wide">ProcessingT ime</h3>
              </div>
              <p className="text-gray-500 text-sm font-medium">Processing TimeDesc</p>
            </div>

          </div>
        </div>

        {/* Lower Call-to-Action Footer Section */}
        <div className="mt-12 bg-[#ea580c] rounded-2xl p-8 text-center text-white flex flex-col items-center justify-center gap-5 shadow-md">
          <h2 className="text-2xl font-bold tracking-wide">Apply For RTI</h2>
          <button 
            suppressHydrationWarning
            type="button"
            className="bg-white text-[#ea580c] hover:bg-orange-50 font-bold py-3 px-8 rounded-xl transition shadow-sm text-sm tracking-wide"
          >
            Download Application
          </button>
        </div>

      </main>
    </div>
  )
}
