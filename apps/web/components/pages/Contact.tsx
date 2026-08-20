"use client"

import {
  CheckCircle2,
  Clock3,
  LoaderCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react"

import { useCreateContact } from "@/hooks/use-contacts"

import {
  createContactSchema,
  type CreateContactData,
} from "@/types/contact"

const initialFormData: CreateContactData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
}

export default function Contact() {
  const [formData, setFormData] =
    useState<CreateContactData>(initialFormData)

  const [validationError, setValidationError] =
    useState("")

  // Existing API mutation — kept unchanged
  const createContactMutation = useCreateContact()

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target

    const updatedValue =
      name === "phone"
        ? value.replace(/\D/g, "").slice(0, 10)
        : value

    setFormData((previousData) => ({
      ...previousData,
      [name]: updatedValue,
    }))

    setValidationError("")

    if (
      createContactMutation.isError ||
      createContactMutation.isSuccess
    ) {
      createContactMutation.reset()
    }
  }

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    setValidationError("")

    // Existing Zod validation
    const validation =
      createContactSchema.safeParse(formData)

    if (!validation.success) {
      setValidationError(
        validation.error.issues[0]?.message ??
          "Please enter valid form data."
      )

      return
    }

    // Existing API request
    createContactMutation.mutate(validation.data, {
      onSuccess: () => {
        setFormData(initialFormData)
      },

      onError: (error) => {
        console.error(
          "Contact submission failed:",
          error
        )
      },
    })
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-blue-900 bg-blue-950 px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">

        {/* Ambient Background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-3xl" />

          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          {/* Official Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-200 backdrop-blur-md">

            <ShieldCheck className="h-4 w-4 text-cyan-400" />

            Official Citizen Communication Portal
          </div>

          <div className="max-w-3xl">

            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Get in touch with{" "}
              <span className="text-cyan-400">
                Anandnagar
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-base">
              Have a question, suggestion or need
              assistance with Nagar Panchayat services?
              Send us a message and our office team will
              help you with your request.
            </p>

          </div>

          {/* Hero Quick Info */}

          <div className="mt-8 flex flex-wrap gap-3">

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-medium text-blue-100 backdrop-blur-sm">
              <Clock3 className="h-4 w-4 text-cyan-400" />
              Office Hours
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-medium text-blue-100 backdrop-blur-sm">
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              Citizen Support
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-medium text-blue-100 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              Official Communication
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-16">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">

            {/* =================================================
                LEFT — CONTACT INFORMATION
            ================================================== */}

            <div className="space-y-6">

              {/* Section Heading */}

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Contact Information
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  We're here to help
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                  Reach the Nagar Panchayat Anandnagar
                  office through the official contact
                  channels below.
                </p>

              </div>

              {/* Address Card */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60">

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                      Office Address
                    </p>

                    <h3 className="mt-1 font-bold text-slate-900">
                      Nagar Panchayat Office
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Anandnagar (Pharenda),
                      <br />
                      Maharajganj, Uttar Pradesh
                      <br />
                      India - 273155
                    </p>

                  </div>

                </div>
              </div>

              {/* Phone Card */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/60">

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-600">
                      Telephone
                    </p>

                    <h3 className="mt-1 font-bold text-slate-900">
                      Nagar Panchayat Office
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Office: +91 9621288080
                      <br />
                      Citizen Support: Contact Office
                    </p>

                  </div>

                </div>
              </div>

              {/* Email Card */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/60">

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-600 group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">

                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-600">
                      Email
                    </p>

                    <h3 className="mt-1 font-bold text-slate-900">
                      Official Communication
                    </h3>

                    <p className="mt-2 break-all text-sm leading-6 text-slate-500">
                      npanandnagar@gmail.com
                    </p>

                  </div>

                </div>
              </div>

              {/* Office Hours */}

              <div className="rounded-2xl border border-amber-200/70 bg-gradient-to-br from-amber-50 to-orange-50 p-5">

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-200 bg-white text-amber-600 shadow-sm">
                    <Clock3 className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-amber-700">
                      Office Hours
                    </p>

                    <h3 className="mt-1 font-bold text-slate-900">
                      Visit the Office
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday & Holidays: Closed
                    </p>

                  </div>

                </div>
              </div>

            </div>

            {/* =================================================
                RIGHT — CONTACT FORM
            ================================================== */}

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8 lg:p-10">

              {/* Form Accent */}

              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400" />

              <div className="mb-8">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <MessageSquare className="h-5 w-5" />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Citizen Contact Form
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Send us a message
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill in the details below and submit your
                  request directly to the Nagar Panchayat
                  office.
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* =================================================
                    NAME + EMAIL
                ================================================== */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* Name */}

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold text-slate-800"
                    >
                      Full Name{" "}
                      <span className="text-rose-500">
                        *
                      </span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength={2}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>

                  {/* Email */}

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold text-slate-800"
                    >
                      Email Address{" "}
                      <span className="text-rose-500">
                        *
                      </span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>

                </div>

                {/* =================================================
                    PHONE
                ================================================== */}

                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-bold text-slate-800"
                  >
                    Phone Number{" "}
                    <span className="text-rose-500">
                      *
                    </span>
                  </label>

                  <div className="flex">

                    <div className="flex items-center rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 px-3 text-xs font-semibold text-slate-500">
                      +91
                    </div>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      inputMode="numeric"
                      pattern="[6-9][0-9]{9}"
                      minLength={10}
                      maxLength={10}
                      placeholder="9876543210"
                      className="w-full rounded-r-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>

                </div>

                {/* =================================================
                    SUBJECT
                ================================================== */}

                <div>

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-bold text-slate-800"
                  >
                    Subject{" "}
                    <span className="text-rose-500">
                      *
                    </span>
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    minLength={3}
                    placeholder="What would you like to contact us about?"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

                {/* =================================================
                    MESSAGE
                ================================================== */}

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-slate-800"
                    >
                      Message{" "}
                      <span className="text-rose-500">
                        *
                      </span>
                    </label>

                    <span className="text-[10px] text-slate-400">
                      Minimum 10 characters
                    </span>

                  </div>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    rows={6}
                    placeholder="Describe your question, suggestion or request..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

                {/* =================================================
                    VALIDATION ERROR
                ================================================== */}

                {validationError && (
                  <div className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm font-medium text-rose-700">

                    <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-rose-500" />

                    <p>
                      {validationError}
                    </p>

                  </div>
                )}

                {/* =================================================
                    API ERROR
                ================================================== */}

                {createContactMutation.isError && (
                  <div className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm font-medium text-rose-700">

                    <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-rose-500" />

                    <p>
                      {createContactMutation.error instanceof
                      Error
                        ? createContactMutation.error.message
                        : "Contact form submit nahi hua. Please try again."}
                    </p>

                  </div>
                )}

                {/* =================================================
                    SUCCESS
                ================================================== */}

                {createContactMutation.isSuccess && (
                  <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-700">

                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

                    <div>
                      <p className="font-bold">
                        Message submitted successfully.
                      </p>

                      <p className="mt-0.5 text-xs text-emerald-600">
                        The Nagar Panchayat team will
                        review your request.
                      </p>
                    </div>

                  </div>
                )}

                {/* =================================================
                    SUBMIT
                ================================================== */}

                <button
                  type="submit"
                  disabled={
                    createContactMutation.isPending
                  }
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
                >

                  {createContactMutation.isPending ? (
                    <>
                      <LoaderCircle className="h-5 w-5 animate-spin" />

                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />

                      Send Message

                      <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                    </>
                  )}

                </button>

                {/* Privacy Note */}

                <p className="text-center text-[10px] leading-5 text-slate-400">
                  Your submitted information is used only
                  for responding to your request through the
                  Nagar Panchayat communication system.
                </p>

              </form>
            </div>
          </div>

          {/* =====================================================
              MAP
          ====================================================== */}

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/50 sm:p-5">

            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                    Location
                  </p>

                  <h3 className="text-lg font-bold text-slate-950">
                    Find Nagar Panchayat Anandnagar
                  </h3>

                  <p className="text-xs text-slate-500">
                    Anandnagar (Pharenda), Maharajganj,
                    Uttar Pradesh
                  </p>

                </div>

              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Official Office Location
              </div>

            </div>

            <div className="h-[350px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 sm:h-[450px]">

              <iframe
                src="https://www.google.com/maps?q=Nagar%20Panchayat%20Anandnagar%20Maharajganj%20Uttar%20Pradesh&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nagar Panchayat Anandnagar Location"
                className="h-full w-full"
              />

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}
