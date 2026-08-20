"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  LoaderCircle,
} from "lucide-react";

import {
  useCurrentUser,
  useUpdateUser,
} from "@/hooks/use-users";
import { useRoles } from "@/hooks/use-rbac";
import {
  ROLE_LABELS,
  getUserRoleOptions,
  hasPermission,
  normalizeRole,
} from "@/lib/admin-roles";
import type { User } from "@/types/user";

type UserRoleSelectProps = {
  user: User;
};

export default function UserRoleSelect({
  user,
}: UserRoleSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { data: currentUser } = useCurrentUser();
  const updateUserMutation = useUpdateUser();

  const currentRole = normalizeRole(user.role);
  const canUpdateRole = hasPermission(
    currentUser?.role,
    "users.update"
  );
  const { data: roles = [] } = useRoles({
    enabled: canUpdateRole,
  });
  const roleOptions = getUserRoleOptions(roles);
  const currentRoleLabel =
    roleOptions.find(
      roleOption => roleOption.key === user.role
    )?.label ??
    (user.role || ROLE_LABELS[currentRole]);

  async function handleRoleChange(role: string) {
    if (!canUpdateRole || role === user.role) {
      setIsOpen(false);
      return;
    }

    try {
      await updateUserMutation.mutateAsync({
        id: user.id,
        data: {
          role,
        },
      });

      setIsOpen(false);
    } catch (error) {
      window.alert(
        error instanceof Error
          ? error.message
          : "Role update nahi ho paya."
      );
    }
  }

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        disabled={
          !canUpdateRole ||
          updateUserMutation.isPending
        }
        onClick={() =>
          setIsOpen(previous => !previous)
        }
        className="inline-flex min-w-24 items-center justify-between gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-60"
        title={
          canUpdateRole
            ? "Change database role"
            : "You do not have permission to update users"
        }
      >
        <span>{currentRoleLabel}</span>

        {updateUserMutation.isPending ? (
          <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <ChevronDown className="h-3.5 w-3.5" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-40 mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
          {roleOptions.map(roleOption => (
            <button
              key={roleOption.key}
              type="button"
              onClick={() =>
                handleRoleChange(roleOption.key)
              }
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
            >
              <span>{roleOption.label}</span>

              {user.role === roleOption.key && (
                <Check className="h-4 w-4" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
