"use client"

import {
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileText,
  Hash,
  Home,
  MapPin,
  ReceiptText,
  Ruler,
  ShieldCheck,
  UserRound,
  WalletCards,
} from "lucide-react"

import { formatCurrency } from "@/lib/property-tax"

import PaymentSummary from "./PaymentSummary"

import type { PropertyRecord } from "@/types/property-tax"

interface PropertyTaxDetailsProps {
  property: PropertyRecord
}

export default function PropertyTaxDetails({
  property,
}: PropertyTaxDetailsProps) {
  return (
    <section className="relative mt-8 w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50">

      {/* =====================================================
          BACKGROUND ACCENTS
      ====================================================== */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl" />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-5 py-7 text-white sm:px-8">

        {/* Decorative grid */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Title */}

          <div className="flex items-start gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-inner backdrop-blur-md">

              <ReceiptText className="h-7 w-7 text-cyan-300" />

            </div>

            <div>

              <div className="mb-2 flex flex-wrap items-center gap-2">

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-orange-300">
                  Nagar Panchayat Anandnagar
                </span>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-300">
                  Verified Record
                </span>

              </div>

              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Property Tax Assessment
              </h2>

              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Property assessment and municipal tax demand details
              </p>

            </div>

          </div>

          {/* Financial Year */}

          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-md">

            <CalendarDays className="h-5 w-5 text-orange-300" />

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Financial Year
              </p>

              <p className="mt-0.5 text-sm font-extrabold text-white">
                2026–2027
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative space-y-8 p-5 sm:p-8">

        {/* =================================================
            PROPERTY + OWNER
        ================================================== */}

        <div className="grid gap-6 lg:grid-cols-2">

          <InformationCard
            title="Property Information"
            subtitle="Registered property details"
            icon={<Building2 className="h-5 w-5" />}
            accent="blue"
          >

            <DetailItem
              label="Property ID"
              value={property.propertyId}
              icon={<Hash className="h-3.5 w-3.5" />}
            />

            <DetailItem
              label="Parcel Number"
              value={property.parcelNo}
              icon={<FileText className="h-3.5 w-3.5" />}
            />

            <DetailItem
              label="Ward"
              value={property.ward}
              icon={<MapPin className="h-3.5 w-3.5" />}
            />

            <DetailItem
              label="Building Number"
              value={property.buildingNo}
              icon={<Home className="h-3.5 w-3.5" />}
            />

            <DetailItem
              label="Property Type"
              value={property.propertyType}
              icon={<Building2 className="h-3.5 w-3.5" />}
            />

            <DetailItem
              label="Usage Type"
              value={property.usageType}
              icon={<BadgeCheck className="h-3.5 w-3.5" />}
            />

          </InformationCard>

          <InformationCard
            title="Owner Information"
            subtitle="Registered ownership details"
            icon={<UserRound className="h-5 w-5" />}
            accent="emerald"
          >

            <DetailItem
              label="Owner Name"
              value={property.ownerName}
              icon={<UserRound className="h-3.5 w-3.5" />}
            />

            <DetailItem
              label="Father / Guardian"
              value={property.fatherName}
              icon={<UserRound className="h-3.5 w-3.5" />}
            />

            <DetailItem
              label="Mobile Number"
              value={property.mobile}
              icon={<FileText className="h-3.5 w-3.5" />}
            />

            <DetailItem
              label="Rate Zone"
              value={property.rateZone}
              icon={<MapPin className="h-3.5 w-3.5" />}
            />

          </InformationCard>

        </div>

        {/* =================================================
            ADDRESS
        ================================================== */}

        <div className="overflow-hidden rounded-[1.5rem] border border-orange-100 bg-gradient-to-br from-orange-50/60 via-white to-amber-50/40">

          <div className="border-b border-orange-100 px-5 py-4">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">

                <MapPin className="h-5 w-5" />

              </div>

              <div>

                <h3 className="text-sm font-extrabold text-slate-900">
                  Property Address
                </h3>

                <p className="text-[10px] font-medium text-slate-500">
                  Registered location of the property
                </p>

              </div>

            </div>

          </div>

          <div className="grid gap-5 p-5 md:grid-cols-2">

            <DetailItem
              label="Complete Address"
              value={property.address}
              icon={<MapPin className="h-3.5 w-3.5" />}
            />

            <DetailItem
              label="Landmark"
              value={property.landmark}
              icon={<MapPin className="h-3.5 w-3.5" />}
            />

            <DetailItem
              label="Locality"
              value={property.locality}
              icon={<Building2 className="h-3.5 w-3.5" />}
            />

            <DetailItem
              label="District"
              value="Maharajganj, Uttar Pradesh"
              icon={<MapPin className="h-3.5 w-3.5" />}
            />

          </div>

        </div>

        {/* =================================================
            ASSESSMENT
        ================================================== */}

        <div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="flex items-center gap-2">

                <Ruler className="h-5 w-5 text-violet-600" />

                <h3 className="text-lg font-extrabold text-slate-950">
                  Property Assessment Details
                </h3>

              </div>

              <p className="mt-1 text-xs text-slate-500">
                Physical and usage details used for assessment
              </p>

            </div>

            <span className="w-fit rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-violet-700">
              Assessment
            </span>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <AssessmentCard
              label="Plot Area"
              value={`${property.plotArea} sq. ft.`}
              icon={<Ruler className="h-4 w-4" />}
              accent="blue"
            />

            <AssessmentCard
              label="Built-up Area"
              value={`${property.builtUpArea} sq. ft.`}
              icon={<Building2 className="h-4 w-4" />}
              accent="violet"
            />

            <AssessmentCard
              label="Construction Year"
              value={String(property.constructionYear)}
              icon={<CalendarDays className="h-4 w-4" />}
              accent="orange"
            />

            <AssessmentCard
              label="Occupancy"
              value={property.usageType}
              icon={<UserRound className="h-4 w-4" />}
              accent="emerald"
            />

          </div>

        </div>

        {/* =================================================
            TAX DEMAND
        ================================================== */}

        <TaxDemandTable property={property} />

        {/* =================================================
            PAYMENT SUMMARY
        ================================================== */}

        <PaymentSummary property={property} />

      </div>

      {/* =====================================================
          TRUST FOOTER
      ====================================================== */}

      <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-8">

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2">

            <ShieldCheck className="h-4 w-4 text-emerald-500" />

            <span className="text-[10px] font-semibold text-slate-500">
              Official property tax assessment record
            </span>

          </div>

          <div className="flex items-center gap-2">

            <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" />

            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Anandnagar Nagar Panchayat
            </span>

          </div>

        </div>

      </div>

    </section>
  )
}

/* =========================================================
   INFORMATION CARD
========================================================= */

function InformationCard({
  title,
  subtitle,
  icon,
  children,
  accent,
}: {
  title: string
  subtitle: string
  icon: React.ReactNode
  children: React.ReactNode
  accent: "blue" | "emerald"
}) {
  const styles =
    accent === "blue"
      ? {
          wrapper:
            "border-blue-100 hover:border-blue-200 hover:shadow-blue-100/60",
          icon: "bg-blue-100 text-blue-600",
          line: "from-blue-500 to-cyan-400",
        }
      : {
          wrapper:
            "border-emerald-100 hover:border-emerald-200 hover:shadow-emerald-100/60",
          icon: "bg-emerald-100 text-emerald-600",
          line: "from-emerald-500 to-teal-400",
        }

  return (
    <div
      className={`group relative overflow-hidden rounded-[1.5rem] border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-6 ${styles.wrapper}`}
    >

      {/* Accent line */}

      <div
        className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${styles.line}`}
      />

      <div className="mb-6 flex items-center gap-3">

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles.icon}`}
        >
          {icon}
        </div>

        <div>

          <h3 className="text-sm font-extrabold text-slate-900">
            {title}
          </h3>

          <p className="mt-0.5 text-[10px] font-medium text-slate-400">
            {subtitle}
          </p>

        </div>

      </div>

      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        {children}
      </div>

    </div>
  )
}

/* =========================================================
   DETAIL ITEM
========================================================= */

function DetailItem({
  label,
  value,
  icon,
}: {
  label: string
  value: string
  icon?: React.ReactNode
}) {
  return (
    <div className="group/item min-w-0">

      <div className="flex items-center gap-1.5">

        {icon && (
          <span className="text-slate-400 transition-colors group-hover/item:text-blue-500">
            {icon}
          </span>
        )}

        <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
          {label}
        </p>

      </div>

      <p className="mt-1.5 break-words text-sm font-bold leading-5 text-slate-800 transition-colors group-hover/item:text-slate-950">
        {value || "—"}
      </p>

    </div>
  )
}

/* =========================================================
   ASSESSMENT CARD
========================================================= */

function AssessmentCard({
  label,
  value,
  icon,
  accent,
}: {
  label: string
  value: string
  icon: React.ReactNode
  accent: "blue" | "violet" | "orange" | "emerald"
}) {
  const styles = {
    blue: {
      wrapper:
        "border-blue-100 bg-blue-50/50 hover:border-blue-200 hover:bg-blue-50",
      icon: "bg-blue-100 text-blue-600",
    },

    violet: {
      wrapper:
        "border-violet-100 bg-violet-50/50 hover:border-violet-200 hover:bg-violet-50",
      icon: "bg-violet-100 text-violet-600",
    },

    orange: {
      wrapper:
        "border-orange-100 bg-orange-50/50 hover:border-orange-200 hover:bg-orange-50",
      icon: "bg-orange-100 text-orange-600",
    },

    emerald: {
      wrapper:
        "border-emerald-100 bg-emerald-50/50 hover:border-emerald-200 hover:bg-emerald-50",
      icon: "bg-emerald-100 text-emerald-600",
    },
  }

  return (
    <div
      className={`group rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${styles[accent].wrapper}`}
    >

      <div className="flex items-center justify-between">

        <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
          {label}
        </p>

        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${styles[accent].icon}`}
        >
          {icon}
        </div>

      </div>

      <p className="mt-4 text-base font-extrabold tracking-tight text-slate-900">
        {value}
      </p>

    </div>
  )
}

/* =========================================================
   TAX DEMAND TABLE
========================================================= */

function TaxDemandTable({
  property,
}: {
  property: PropertyRecord
}) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex flex-col gap-3 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">

            <WalletCards className="h-5 w-5" />

          </div>

          <div>

            <h3 className="text-sm font-extrabold text-slate-900">
              Tax Demand Details
            </h3>

            <p className="mt-0.5 text-[10px] font-medium text-slate-400">
              Current demand, arrears and payable amount
            </p>

          </div>

        </div>

        <span className="w-fit rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-orange-700">
          FY 2026–27
        </span>

      </div>

      {/* Desktop Table */}

      <div className="hidden overflow-x-auto md:block">

        <table className="min-w-full text-sm">

          <thead className="bg-slate-50">

            <tr className="border-b border-slate-200">

              <th className="px-5 py-4 text-left text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                Tax Head
              </th>

              <th className="px-5 py-4 text-right text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                Current Demand
              </th>

              <th className="px-5 py-4 text-right text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                Arrears
              </th>

              <th className="px-5 py-4 text-right text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                Total
              </th>

            </tr>

          </thead>

          <tbody className="divide-y divide-slate-100">

            <TaxRow
              name="Property Tax"
              current={property.tax.propertyTax}
              arrears={property.tax.arrears}
              accent="orange"
            />

            <TaxRow
              name="Water Tax"
              current={property.tax.waterTax}
              arrears={0}
              accent="blue"
            />

            <TaxRow
              name="Drainage Tax"
              current={property.tax.drainageTax}
              arrears={0}
              accent="cyan"
            />

            <TaxRow
              name="Lighting Tax"
              current={property.tax.lightingTax}
              arrears={0}
              accent="violet"
            />

            <TaxRow
              name="Other Tax"
              current={property.tax.otherTax}
              arrears={0}
              accent="slate"
            />

            <TaxRow
              name="Late Payment Penalty"
              current={property.tax.penalty}
              arrears={0}
              accent="red"
            />

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}

      <div className="space-y-3 p-4 md:hidden">

        <MobileTaxRow
          name="Property Tax"
          current={property.tax.propertyTax}
          arrears={property.tax.arrears}
        />

        <MobileTaxRow
          name="Water Tax"
          current={property.tax.waterTax}
          arrears={0}
        />

        <MobileTaxRow
          name="Drainage Tax"
          current={property.tax.drainageTax}
          arrears={0}
        />

        <MobileTaxRow
          name="Lighting Tax"
          current={property.tax.lightingTax}
          arrears={0}
        />

        <MobileTaxRow
          name="Other Tax"
          current={property.tax.otherTax}
          arrears={0}
        />

        <MobileTaxRow
          name="Late Payment Penalty"
          current={property.tax.penalty}
          arrears={0}
        />

      </div>

    </div>
  )
}

/* =========================================================
   TAX ROW
========================================================= */

function TaxRow({
  name,
  current,
  arrears,
  accent,
}: {
  name: string
  current: number
  arrears: number
  accent:
    | "orange"
    | "blue"
    | "cyan"
    | "violet"
    | "slate"
    | "red"
}) {
  const accentStyles = {
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    cyan: "bg-cyan-500",
    violet: "bg-violet-500",
    slate: "bg-slate-400",
    red: "bg-red-500",
  }

  return (
    <tr className="group text-slate-700 transition-colors hover:bg-slate-50">

      <td className="px-5 py-4">

        <div className="flex items-center gap-3">

          <span
            className={`h-2 w-2 rounded-full ${accentStyles[accent]}`}
          />

          <span className="font-semibold">
            {name}
          </span>

        </div>

      </td>

      <td className="px-5 py-4 text-right font-medium text-slate-600">
        {formatCurrency(current)}
      </td>

      <td className="px-5 py-4 text-right font-medium text-slate-600">
        {formatCurrency(arrears)}
      </td>

      <td className="px-5 py-4 text-right">

        <span className="font-extrabold text-slate-950">
          {formatCurrency(current + arrears)}
        </span>

      </td>

    </tr>
  )
}

/* =========================================================
   MOBILE TAX ROW
========================================================= */

function MobileTaxRow({
  name,
  current,
  arrears,
}: {
  name: string
  current: number
  arrears: number
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">

      <div className="flex items-center justify-between gap-3">

        <span className="text-xs font-bold text-slate-800">
          {name}
        </span>

        <span className="text-sm font-extrabold text-slate-950">
          {formatCurrency(current + arrears)}
        </span>

      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 border-t border-slate-200 pt-3">

        <div>

          <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
            Current
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-600">
            {formatCurrency(current)}
          </p>

        </div>

        <div>

          <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
            Arrears
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-600">
            {formatCurrency(arrears)}
          </p>

        </div>

      </div>

    </div>
  )
}
