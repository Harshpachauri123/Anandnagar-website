"use client"

import {
  Building2,
  CheckCircle2,
  Hash,
  Loader2,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react"

import { PROPERTY_TAX_WARDS } from "@/constants/property-tax"
import { getPropertyLabel } from "@/lib/property-tax"

import type {
  PropertyRecord,
  SearchMode,
} from "@/types/property-tax"

interface PropertySearchFormProps {
  searchMode: SearchMode

  selectedWard: string
  selectedPropertyId: string
  searchValue: string

  wardProperties: PropertyRecord[]

  isLoading: boolean
  errorMessage: string

  onModeChange: (mode: SearchMode) => void
  onWardChange: (ward: string) => void
  onPropertyChange: (propertyId: string) => void
  onSearchValueChange: (value: string) => void
  onSearch: () => void
  onReset: () => void
}

export default function PropertySearchForm({
  searchMode,
  selectedWard,
  selectedPropertyId,
  searchValue,
  wardProperties,
  isLoading,
  errorMessage,
  onModeChange,
  onWardChange,
  onPropertyChange,
  onSearchValueChange,
  onSearch,
  onReset,
}: PropertySearchFormProps) {
  function getTabClass(mode: SearchMode) {
    const isActive = searchMode === mode

    if (isActive) {
      if (mode === "ward") {
        return "border-blue-200 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200/50"
      }

      if (mode === "property") {
        return "border-violet-200 bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-200/50"
      }

      return "border-emerald-200 bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-200/50"
    }

    return "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm"
  }

  const modeDescription =
    searchMode === "ward"
      ? "Select your ward and property to view tax details."
      : searchMode === "property"
        ? "Search directly using your Property ID or Parcel Number."
        : "Find property information using owner details."

  return (
    <section className="relative w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl" />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="relative border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 px-5 py-6 sm:px-8">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200">

              <Search className="h-5 w-5" />

            </div>

            <div>

              <div className="flex flex-wrap items-center gap-2">

                <h2 className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                  Find Your Property
                </h2>

                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-700">

                  <ShieldCheck className="h-3 w-3" />

                  Secure Search

                </span>

              </div>

              <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm">
                Search your property record and view available property tax information.
              </p>

            </div>

          </div>

          <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm sm:flex">

            <Sparkles className="h-3.5 w-3.5 text-orange-500" />

            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Citizen Portal
            </span>

          </div>

        </div>

      </div>

      {/* =====================================================
          SEARCH TABS
      ====================================================== */}

      <div className="relative border-b border-slate-200 bg-slate-50/80 p-3 sm:p-4">

        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">

          {/* Ward */}

          <button
            type="button"
            onClick={() => onModeChange("ward")}
            className={`group relative flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-xs font-bold transition-all duration-200 sm:text-sm ${getTabClass("ward")}`}
          >

            <Building2 className="h-4 w-4 transition-transform group-hover:scale-110" />

            <span>
              Search by Ward
            </span>

            {searchMode === "ward" && (
              <CheckCircle2 className="ml-auto h-4 w-4" />
            )}

          </button>

          {/* Property */}

          <button
            type="button"
            onClick={() => onModeChange("property")}
            className={`group relative flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-xs font-bold transition-all duration-200 sm:text-sm ${getTabClass("property")}`}
          >

            <Hash className="h-4 w-4 transition-transform group-hover:scale-110" />

            <span>
              Property ID / Parcel No.
            </span>

            {searchMode === "property" && (
              <CheckCircle2 className="ml-auto h-4 w-4" />
            )}

          </button>

          {/* Owner */}

          <button
            type="button"
            onClick={() => onModeChange("owner")}
            className={`group relative flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-xs font-bold transition-all duration-200 sm:text-sm ${getTabClass("owner")}`}
          >

            <UserRound className="h-4 w-4 transition-transform group-hover:scale-110" />

            <span>
              Owner Name / Mobile
            </span>

            {searchMode === "owner" && (
              <CheckCircle2 className="ml-auto h-4 w-4" />
            )}

          </button>

        </div>

      </div>

      {/* =====================================================
          FORM CONTENT
      ====================================================== */}

      <div className="relative p-5 sm:p-8">

        {/* Current search mode */}

        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">

            {searchMode === "ward" && (
              <Building2 className="h-4 w-4 text-blue-600" />
            )}

            {searchMode === "property" && (
              <Hash className="h-4 w-4 text-violet-600" />
            )}

            {searchMode === "owner" && (
              <UserRound className="h-4 w-4 text-emerald-600" />
            )}

          </div>

          <div>

            <p className="text-xs font-bold text-slate-800">
              {searchMode === "ward"
                ? "Ward Based Search"
                : searchMode === "property"
                  ? "Property ID Search"
                  : "Owner Based Search"}
            </p>

            <p className="mt-0.5 text-[11px] leading-5 text-slate-500">
              {modeDescription}
            </p>

          </div>

        </div>

        {/* Fields */}

        {searchMode === "ward" ? (
          <WardSearchFields
            selectedWard={selectedWard}
            selectedPropertyId={selectedPropertyId}
            wardProperties={wardProperties}
            onWardChange={onWardChange}
            onPropertyChange={onPropertyChange}
          />
        ) : (
          <TextSearchField
            searchMode={searchMode}
            searchValue={searchValue}
            onSearchValueChange={onSearchValueChange}
          />
        )}

        {/* =================================================
            ACTIONS
        ================================================== */}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">

          <button
            type="button"
            onClick={onSearch}
            disabled={isLoading}
            className="group flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 text-sm font-bold text-white shadow-lg shadow-orange-200 transition-all duration-200 hover:-translate-y-0.5 hover:from-orange-600 hover:to-amber-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
          >

            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Searching...
              </>
            ) : (
              <>
                <Search className="h-4 w-4 transition-transform group-hover:scale-110" />
                Search Property
              </>
            )}

          </button>

          <button
            type="button"
            onClick={onReset}
            disabled={isLoading}
            className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >

            <RotateCcw className="h-4 w-4" />

            Reset

          </button>

        </div>

        {/* =================================================
            ERROR
        ================================================== */}

        {errorMessage && (
          <div
            role="alert"
            className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4"
          >

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100">

              <span className="text-sm font-bold text-red-600">
                !
              </span>

            </div>

            <div>

              <p className="text-xs font-bold text-red-800">
                Search could not be completed
              </p>

              <p className="mt-0.5 text-xs leading-5 text-red-600">
                {errorMessage}
              </p>

            </div>

          </div>
        )}

      </div>

      {/* =====================================================
          BOTTOM TRUST BAR
      ====================================================== */}

      <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-3.5 sm:px-8">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2">

            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />

            <span className="text-[10px] font-semibold text-slate-500">
              Property information is searched securely.
            </span>

          </div>

          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Nagar Panchayat Anandnagar
          </span>

        </div>

      </div>

    </section>
  )
}

/* =========================================================
   WARD SEARCH
========================================================= */

interface WardSearchFieldsProps {
  selectedWard: string
  selectedPropertyId: string
  wardProperties: PropertyRecord[]

  onWardChange: (ward: string) => void
  onPropertyChange: (propertyId: string) => void
}

function WardSearchFields({
  selectedWard,
  selectedPropertyId,
  wardProperties,
  onWardChange,
  onPropertyChange,
}: WardSearchFieldsProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">

      {/* Ward */}

      <div>

        <label
          htmlFor="ward"
          className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-slate-600"
        >
          Select Ward
        </label>

        <div className="relative">

          <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <select
            id="ward"
            value={selectedWard}
            onChange={(event) =>
              onWardChange(event.target.value)
            }
            className="h-13 w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white pl-11 pr-10 text-sm font-medium text-slate-700 outline-none transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >

            <option value="">
              Select Ward Number
            </option>

            {PROPERTY_TAX_WARDS.map((ward) => (
              <option
                key={ward}
                value={ward}
              >
                {ward}
              </option>
            ))}

          </select>

          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            ↓
          </div>

        </div>

        <p className="mt-2 text-[10px] text-slate-400">
          Choose the ward where your property is located.
        </p>

      </div>

      {/* Property */}

      <div>

        <label
          htmlFor="property"
          className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-slate-600"
        >
          Select Building / House / Plot
        </label>

        <div className="relative">

          <Hash className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <select
            id="property"
            value={selectedPropertyId}
            disabled={!selectedWard}
            onChange={(event) =>
              onPropertyChange(event.target.value)
            }
            className="h-13 w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white pl-11 pr-10 text-sm font-medium text-slate-700 outline-none transition-all duration-200 hover:border-violet-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400"
          >

            <option value="">
              {selectedWard
                ? "Select Property"
                : "First select a ward"}
            </option>

            {wardProperties.map((property) => (
              <option
                key={property.id}
                value={property.id}
              >
                {getPropertyLabel(property)}
              </option>
            ))}

          </select>

          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            ↓
          </div>

        </div>

        <p className="mt-2 text-[10px] text-slate-400">
          Select the property associated with the chosen ward.
        </p>

      </div>

    </div>
  )
}

/* =========================================================
   TEXT SEARCH
========================================================= */

interface TextSearchFieldProps {
  searchMode: SearchMode
  searchValue: string

  onSearchValueChange: (value: string) => void
}

function TextSearchField({
  searchMode,
  searchValue,
  onSearchValueChange,
}: TextSearchFieldProps) {
  const isPropertyMode =
    searchMode === "property"

  return (
    <div>

      <label
        htmlFor="property-search"
        className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-slate-600"
      >
        {isPropertyMode
          ? "Property ID or Parcel Number"
          : "Owner Name or Mobile Number"}
      </label>

      <div className="group relative">

        {isPropertyMode ? (
          <Hash className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-violet-500" />
        ) : (
          <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-emerald-500" />
        )}

        <input
          id="property-search"
          type="text"
          value={searchValue}
          onChange={(event) =>
            onSearchValueChange(event.target.value)
          }
          placeholder={
            isPropertyMode
              ? "Example: Aanandnagar-01-0001 or PAR-01-1001"
              : "Enter owner name or mobile number"
          }
          className={`h-13 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 ${
            isPropertyMode
              ? "hover:border-violet-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              : "hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          }`}
        />

      </div>

      <div className="mt-3 flex items-center gap-2">

        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100">

          <Search className="h-2.5 w-2.5 text-slate-500" />

        </div>

        <p className="text-[10px] text-slate-400">

          {isPropertyMode
            ? "Enter a valid Property ID or Parcel Number."
            : "You can search using the registered owner's name or mobile number."}

        </p>

      </div>

    </div>
  )
}
