
import type { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminRoleGuard from "@/components/admin/AdminRoleGuard";
import AdminSidebar from "@/components/admin/adminSidebar";

interface AdminlayoutProps{
  children: ReactNode;
}

export default async function AdminLayout({
  children,
}: AdminlayoutProps) {
  await auth.protect({
    unauthenticatedUrl: "/sign-in",
  });

  return (
    <AdminRoleGuard>
      <div className="min-h-screen bg-slate-50 lg:flex">
        <AdminSidebar />
        <div className="min-w-0 flex-1">
          <AdminHeader />
          {children}
        </div>
      </div>
    </AdminRoleGuard>
  );
}
