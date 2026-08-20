"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  ShieldCheck,
  Zap,
} from "lucide-react"

interface QuickLink {
  label: string
  href: string
}

const quickLinks: QuickLink[] = [
  {
    label: "About Anandnagar",
    href: "/about",
  },
  {
    label: "Our Services",
    href: "/services",
  },
  {
    label: "Property Tax",
    href: "/property-tax",
  },
  {
    label: "Staff",
    href: "/staff",
  },
  {
    label: "Citizen Help Desk",
    href: "/contact",
  },
]

export default function Footer() {
  const [lastUpdated, setLastUpdated] = useState("")

  useEffect(() => {
    setLastUpdated(
      new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date()),
    )
  }, [])

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Ambient lights */}

        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />

        {/* Subtle grid */}

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_1fr]">

          {/* =================================================
              BRAND / ABOUT
          ================================================== */}

          <div className="max-w-md">

            {/* Official badge */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-300">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />

              Official Government Portal
            </div>

            {/* Title */}

            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Adarsh Nagar Panchayat
              <span className="block text-blue-300">
                Anandnagar
              </span>
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Dedicated to serving citizens with transparency,
              accessible digital governance, and modern urban
              administration across all municipal wards.
            </p>

            {/* Social / action buttons */}

            <div className="mt-6 flex items-center gap-2">

              <FooterIconButton
                href="#"
                label="Share"
              >
                <Share2 className="h-4 w-4" />
              </FooterIconButton>

              <FooterIconButton
                href="#"
                label="Message"
              >
                <MessageCircle className="h-4 w-4" />
              </FooterIconButton>

              <FooterIconButton
                href="#"
                label="Connect"
              >
                <Zap className="h-4 w-4" />
              </FooterIconButton>

            </div>

          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <FooterColumn title="Quick Links">

            <ul className="space-y-1">

              {quickLinks.map((link) => (
                <li key={link.label}>

                  <Link
                    href={link.href}
                    className="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-slate-400 transition-colors duration-200 hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <span>
                      {link.label}
                    </span>

                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-slate-600 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400 group-hover:opacity-100"
                    />
                  </Link>

                </li>
              ))}

            </ul>

          </FooterColumn>

          {/* =================================================
              CONTACT
          ================================================== */}

          <FooterColumn title="Contact Office">

            <div className="space-y-4">

              {/* Address */}

              <ContactItem
                icon={<MapPin className="h-4 w-4" />}
                title="Office Address"
              >
                <address className="not-italic">
                  Nagar Panchayat Office, Anandnagar
                  (Pharenda), Maharajganj, Uttar Pradesh -
                  273155
                </address>
              </ContactItem>

              {/* Phone */}

              <ContactItem
                icon={<Phone className="h-4 w-4" />}
                title="Phone"
              >
                <a
                  href="tel:+919621288080"
                  className="transition-colors hover:text-blue-300 focus:outline-none focus-visible:underline"
                >
                  +91 9621288080
                </a>
              </ContactItem>

              {/* Email */}

              <ContactItem
                icon={<Mail className="h-4 w-4" />}
                title="Email"
              >
                <a
                  href="mailto:npanandnagar@gmai.com"
                  className="break-all transition-colors hover:text-blue-300 focus:outline-none focus-visible:underline"
                >
                  npanandnagar@gmail.com
                </a>
              </ContactItem>

            </div>

          </FooterColumn>

        </div>

        {/* =====================================================
            LEGAL / COPYRIGHT
        ====================================================== */}

        <div className="mt-8 border-t border-white/10 pt-6">

          <div className="flex flex-col gap-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Adarsh Nagar
              Panchayat Anandnagar. All rights reserved.
            </p>

            <p className="inline-flex w-fit items-center rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 font-medium text-blue-300">
              Hosted By — SDV Edutech Pvt. Ltd.
            </p>

          </div>

          {/* Last updated */}

          <div className="mt-4 flex flex-col gap-2 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">

            <p>
              Official Government Website
            </p>

            <p>
              {lastUpdated
                ? `Last Updated: ${lastUpdated}`
                : "Last Updated"}
            </p>

          </div>

        </div>

      </div>
    </footer>
  )
}

/* ============================================================
   FOOTER COLUMN
============================================================ */

interface FooterColumnProps {
  title: string
  children: React.ReactNode
}

function FooterColumn({
  title,
  children,
}: FooterColumnProps) {
  return (
    <div>

      <div className="mb-5 flex items-center gap-2">

        <span
          aria-hidden="true"
          className="h-5 w-1 rounded-full bg-blue-500"
        />

        <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-200">
          {title}
        </h3>

      </div>

      {children}

    </div>
  )
}

/* ============================================================
   FOOTER ICON BUTTON
============================================================ */

interface FooterIconButtonProps {
  href: string
  label: string
  children: React.ReactNode
}

function FooterIconButton({
  href,
  label,
  children,
}: FooterIconButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-200 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      {children}
    </a>
  )
}

/* ============================================================
   CONTACT ITEM
============================================================ */

interface ContactItemProps {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}

function ContactItem({
  icon,
  title,
  children,
}: ContactItemProps) {
  return (
    <div className="flex items-start gap-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-400/15 bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
          {title}
        </p>

        <div className="text-sm leading-6 text-slate-400">
          {children}
        </div>

      </div>

    </div>
  )
}
