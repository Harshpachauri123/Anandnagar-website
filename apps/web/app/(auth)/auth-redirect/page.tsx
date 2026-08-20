"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { useCurrentUser } from "@/hooks/use-users";
import { isDashboardRole } from "@/lib/admin-roles";

export default function AuthRedirectPage() {
  const router = useRouter();
  const {
    isLoaded,
    isSignedIn,
  } = useAuth();
  const {
    data: currentUser,
    isError,
  } = useCurrentUser();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      router.replace("/sign-in");
      return;
    }

    if (currentUser) {
      router.replace(
        isDashboardRole(currentUser.role)
          ? "/admin"
          : "/"
      );
      return;
    }

    if (isError) {
      router.replace("/");
    }
  }, [
    currentUser,
    isError,
    isLoaded,
    isSignedIn,
    router,
  ]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-600 shadow-sm">
        Redirecting...
      </div>
    </div>
  );
}
