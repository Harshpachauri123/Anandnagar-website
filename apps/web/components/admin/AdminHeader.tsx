
"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import {
  Bell,
} from "lucide-react";

import { useCurrentUser } from "@/hooks/use-users";
import { ROLE_LABELS, normalizeRole } from "@/lib/admin-roles";

export default function AdminHeader() {
  const { user } = useUser();
  const { data: currentUser } = useCurrentUser();

  const displayName =
    currentUser?.name ||
    user?.fullName ||
    user?.primaryEmailAddress?.emailAddress ||
    "Admin User";

  const role = normalizeRole(currentUser?.role);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-bold text-slate-900">
            Admin Portal
          </h2>

          <p className="text-xs text-slate-500">
            Etah Nagar Palika Parishad
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Notification button */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-50"
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9",
                },
              }}
            />

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">
                {displayName}
              </p>

              <p className="text-xs text-slate-500">
                {ROLE_LABELS[role]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
