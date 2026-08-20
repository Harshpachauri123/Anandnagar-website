"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useCurrentUser } from "@/hooks/use-users";
import { isDashboardRole } from "@/lib/admin-roles";

type AdminRoleGuardProps = {
  children: ReactNode;
};

export default function AdminRoleGuard({
  children,
}: AdminRoleGuardProps) {
  const router = useRouter();
  const {
    data: currentUser,
    isLoading,
    isError,
  } = useCurrentUser();

  const canAccessAdmin =
    currentUser && isDashboardRole(currentUser.role);

  useEffect(() => {
    if (!isLoading && isError) {
      router.replace("/");
      return;
    }

    if (!isLoading && currentUser && !canAccessAdmin) {
      router.replace("/");
    }
  }, [
    canAccessAdmin,
    currentUser,
    isError,
    isLoading,
    router,
  ]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-600 shadow-sm">
          Checking database role...
        </div>
      </div>
    );
  }

  if (isError || !canAccessAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-600 shadow-sm">
          Redirecting...
        </div>
      </div>
    );
  }

  return children;
}
