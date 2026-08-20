
"use client";

import Link from "next/link";
import {
  ArrowRight,
  KeyRound,
  MessageSquareText,
  TriangleAlert,
  UsersRound,
} from "lucide-react";

import AdminStatCard from "@/components/admin/AdminStatCard";
import { useContacts } from "@/hooks/use-contacts";
import { useGrievances } from "@/hooks/use-grievances";
import { useRoles } from "@/hooks/use-rbac";
import {
  useCurrentUser,
  useUsers,
} from "@/hooks/use-users";
import { hasPermission } from "@/lib/admin-roles";

function getStatValue(
  isLoading: boolean,
  isError: boolean,
  value: number | string
) {
  if (isLoading) {
    return "...";
  }

  if (isError) {
    return "!";
  }

  return value;
}

export default function AdminDashboardPage() {
  const { data: currentUser } = useCurrentUser();
  const canReadContacts = hasPermission(
    currentUser?.role,
    "contacts.read"
  );
  const canReadGrievances = hasPermission(
    currentUser?.role,
    "grievances.read"
  );
  const canReadUsers = hasPermission(
    currentUser?.role,
    "users.read"
  );
  const canReadRoles = hasPermission(
    currentUser?.role,
    "roles.read"
  );

  const contactsQuery = useContacts({
    enabled: canReadContacts,
  });
  const grievancesQuery = useGrievances({
    enabled: canReadGrievances,
  });
  const usersQuery = useUsers({
    enabled: canReadUsers,
  });
  const rolesQuery = useRoles({
    enabled: canReadRoles,
  });

  const contacts =
    contactsQuery.data ?? [];
  const grievances =
    grievancesQuery.data ?? [];
  const users =
    usersQuery.data ?? [];
  const roles =
    rolesQuery.data ?? [];

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            Nagar Palika Parishad, Etah
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage contact submissions, public grievances, signed-up users,
            and access control from here.
          </p>
        </div>
        {/* Stat card */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <AdminStatCard
            title="Total Contacts"
            value={
              canReadContacts
                ? getStatValue(
                    contactsQuery.isLoading,
                    contactsQuery.isError,
                    contacts.length
                  )
                : "No access"
            }
            description="Contact form submissions"
            icon={MessageSquareText}
            iconClassName="bg-blue-100 text-blue-600"
          /><AdminStatCard
            title="Total Grievances"
            value={
              canReadGrievances
                ? getStatValue(
                    grievancesQuery.isLoading,
                    grievancesQuery.isError,
                    grievances.length
                  )
                : "No access"
            }
            description="Public grievance submissions"
            icon={TriangleAlert}
            iconClassName="bg-purple-100 text-purple-600"
          />

          <AdminStatCard
            title="Signup Users"
            value={
              canReadUsers
                ? getStatValue(
                    usersQuery.isLoading,
                    usersQuery.isError,
                    users.length
                  )
                : "No access"
            }
            description="Clerk webhook users"
            icon={UsersRound}
            iconClassName="bg-indigo-100 text-indigo-600"
          />

          <AdminStatCard
            title="Roles"
            value={
              canReadRoles
                ? getStatValue(
                    rolesQuery.isLoading,
                    rolesQuery.isError,
                    roles.length
                  )
                : "No access"
            }
            description="Database permission roles"
            icon={KeyRound}
            iconClassName="bg-fuchsia-100 text-fuchsia-600"
          />
        </div>

        {/* Management cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Contact card */}
          <Link
            href="/admin/contacts"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <MessageSquareText className="h-6 w-6" />
              </div>

              <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-900">
              Contact Submissions
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              View enquiries received from the website contact form in a
              table.
            </p>

            <p className="mt-5 text-sm font-semibold text-blue-600">
              View contacts
            </p>
          </Link>

          {/* Grievance card */}
          <Link
            href="/admin/grievances"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <TriangleAlert className="h-6 w-6" />
              </div>

              <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-purple-600" />
            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-900">
              Public Grievances
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              View public grievances submitted by citizens in a table.
            </p>

            <p className="mt-5 text-sm font-semibold text-purple-600">
              View grievances
            </p>
          </Link>

          <Link
            href="/admin/users"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <UsersRound className="h-6 w-6" />
              </div>

              <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600" />
            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-900">
              Signup Users
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              View users saved through the Clerk signup webhook.
            </p>

            <p className="mt-5 text-sm font-semibold text-indigo-600">
              View users
            </p>
          </Link>

          <Link
            href="/admin/roles"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-fuchsia-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-600">
                <KeyRound className="h-6 w-6" />
              </div>

              <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-fuchsia-600" />
            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-900">
              Roles & Permissions
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Create database roles and decide which operations each role can
              perform.
            </p>

            <p className="mt-5 text-sm font-semibold text-fuchsia-600">
              Manage roles
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
