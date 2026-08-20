"use client";

import { UsersRound } from "lucide-react";

import AdminAccessDenied from "@/components/admin/AdminAccessDenied";
import UserTable from "@/components/admin/users/User-Table";
import {
  useCurrentUser,
  useUsers,
} from "@/hooks/use-users";
import { hasPermission } from "@/lib/admin-roles";

export default function AdminUsersPage() {
  const { data: currentUser } = useCurrentUser();
  const canReadUsers = hasPermission(
    currentUser?.role,
    "users.read"
  );

  const {
    data: users = [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useUsers({
    enabled: canReadUsers,
  });

  if (currentUser && !canReadUsers) {
    return (
      <AdminAccessDenied description="Your role does not have users.read permission." />
    );
  }

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <UsersRound className="h-6 w-6" />
            </div>

            <div>
              <p className="text-sm font-semibold text-indigo-600">
                Admin Management
              </p>

              <h1 className="text-2xl font-bold text-slate-900">
                Signup Users
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                View users captured from Clerk signup webhook.
              </p>
            </div>
          </div>

          {!isLoading && !isError && (
            <div className="rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-2">
              <p className="text-xs font-semibold text-indigo-600">
                Total Users
              </p>

              <p className="text-xl font-bold text-indigo-900">
                {users.length}
              </p>
            </div>
          )}
        </div>

        {isLoading && (
          <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-slate-200 bg-white">
            <div className="text-center">
              <div className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />

              <p className="mt-4 text-sm font-medium text-slate-500">
                Signup users loading...
              </p>
            </div>
          </div>
        )}

        {isError && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="font-semibold text-red-700">
              Does not load signup users.
            </h2>

            <p className="mt-1 text-sm text-red-600">
              {error instanceof Error
                ? error.message
                : "Something went wrong"}
            </p>

            <button
              type="button"
              onClick={() => refetch()}
              disabled={isFetching}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isFetching ? "Retrying..." : "Try Again"}
            </button>
          </div>
        )}

        {!isLoading && !isError && (
          <UserTable data={users} />
        )}
      </div>
    </main>
  );
}
