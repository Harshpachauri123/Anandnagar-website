import { LockKeyhole } from "lucide-react";

type AdminAccessDeniedProps = {
  title?: string;
  description?: string;
};

export default function AdminAccessDenied({
  title = "Access denied",
  description = "Your database role does not have permission to open this admin section.",
}: AdminAccessDeniedProps) {
  return (
    <main className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-800">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <LockKeyhole className="h-5 w-5" />
            </div>

            <div>
              <h1 className="font-bold">
                {title}
              </h1>

              <p className="mt-1 text-sm font-medium">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
