"use client";

import { FormEvent, useState } from "react";
import {
  Eye,
  LoaderCircle,
  Trash2,
  X,
} from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  useDeleteGrievance,
  useUpdateGrievance,
} from "@/hooks/use-grievances";
import { useCurrentUser } from "@/hooks/use-users";
import { hasPermission } from "@/lib/admin-roles";
import type { Grievance } from "@/types/public-grievance";

type GrievanceActionsProps = {
  grievance: Grievance;
};

export default function GrievanceActions({
  grievance,
}: GrievanceActionsProps) {
  const { data: currentUser } = useCurrentUser();
  const canUpdate = hasPermission(
    currentUser?.role,
    "grievances.update"
  );
  const canDelete = hasPermission(
    currentUser?.role,
    "grievances.delete"
  );

  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(
    grievance.full_name
  );
  const [mobileNumber, setMobileNumber] = useState(
    grievance.mobile_number
  );
  const [email, setEmail] = useState(grievance.email);
  const [complaintCategory, setComplaintCategory] =
    useState(grievance.complaint_category);
  const [municipalWard, setMunicipalWard] = useState(
    grievance.municipal_ward
  );
  const [incidentAddress, setIncidentAddress] =
    useState(grievance.incident_address);
  const [description, setDescription] = useState(
    grievance.description
  );

  const updateGrievanceMutation = useUpdateGrievance();
  const deleteGrievanceMutation = useDeleteGrievance();

  function openEditDialog() {
    setFullName(grievance.full_name);
    setMobileNumber(grievance.mobile_number);
    setEmail(grievance.email);
    setComplaintCategory(grievance.complaint_category);
    setMunicipalWard(grievance.municipal_ward);
    setIncidentAddress(grievance.incident_address);
    setDescription(grievance.description);
    setIsEditing(true);
  }

  async function handleUpdate(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!canUpdate) {
      return;
    }

    try {
      await updateGrievanceMutation.mutateAsync({
        id: grievance.id,
        data: {
          full_name: fullName.trim(),
          mobile_number: mobileNumber.trim(),
          email: email.trim(),
          complaint_category:
            complaintCategory.trim(),
          municipal_ward: municipalWard.trim(),
          incident_address: incidentAddress.trim(),
          description: description.trim(),
        },
      });

      setIsEditing(false);
    } catch {
      // Error message is shown from the mutation state.
    }
  }

  async function handleDelete() {
    if (!canDelete) {
      return;
    }

    const confirmed = window.confirm(
      `Delete ${grievance.full_name || grievance.email || "this grievance"}?`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteGrievanceMutation.mutateAsync(
        grievance.id
      );
    } catch (error) {
      window.alert(
        error instanceof Error
          ? error.message
          : "Grievance delete nahi ho payi."
      );
    }
  }

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          title="View and edit grievance"
          aria-label="View and edit grievance"
          onClick={openEditDialog}
        >
          <Eye />
        </Button>

        <Button
          type="button"
          variant="destructive"
          size="icon-sm"
          title={
            canDelete
              ? "Delete grievance"
              : "Only admin can delete grievances"
          }
          aria-label="Delete grievance"
          disabled={
            !canDelete ||
            deleteGrievanceMutation.isPending
          }
          onClick={handleDelete}
        >
          {deleteGrievanceMutation.isPending ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <Trash2 />
          )}
        </Button>
      </div>

      {isEditing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`edit-grievance-${grievance.id}`}
        >
          <form
            onSubmit={handleUpdate}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-5 text-slate-900 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id={`edit-grievance-${grievance.id}`}
                  className="text-lg font-semibold"
                >
                  View / Edit Grievance
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Database ID yahin dikhegi.
                </p>
              </div>

              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                title="Close"
                aria-label="Close"
                onClick={() => setIsEditing(false)}
              >
                <X />
              </Button>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 md:col-span-2">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Database ID
                </p>
                <p className="mt-1 font-mono text-sm font-semibold text-slate-900">
                  {grievance.id}
                </p>
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor={`grievance-name-${grievance.id}`}
                >
                  Citizen Name
                </Label>
                <Input
                  id={`grievance-name-${grievance.id}`}
                  value={fullName}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setFullName(event.target.value)
                  }
                  placeholder="Enter citizen name"
                />
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor={`grievance-mobile-${grievance.id}`}
                >
                  Mobile Number
                </Label>
                <Input
                  id={`grievance-mobile-${grievance.id}`}
                  value={mobileNumber}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setMobileNumber(event.target.value)
                  }
                  placeholder="Enter mobile number"
                />
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor={`grievance-email-${grievance.id}`}
                >
                  Email
                </Label>
                <Input
                  id={`grievance-email-${grievance.id}`}
                  type="email"
                  value={email}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="Enter email"
                />
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor={`grievance-category-${grievance.id}`}
                >
                  Category
                </Label>
                <Input
                  id={`grievance-category-${grievance.id}`}
                  value={complaintCategory}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setComplaintCategory(
                      event.target.value
                    )
                  }
                  placeholder="Enter category"
                />
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor={`grievance-ward-${grievance.id}`}
                >
                  Municipal Ward
                </Label>
                <Input
                  id={`grievance-ward-${grievance.id}`}
                  value={municipalWard}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setMunicipalWard(event.target.value)
                  }
                  placeholder="Enter municipal ward"
                />
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor={`grievance-address-${grievance.id}`}
                >
                  Incident Address
                </Label>
                <Input
                  id={`grievance-address-${grievance.id}`}
                  value={incidentAddress}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setIncidentAddress(
                      event.target.value
                    )
                  }
                  placeholder="Enter incident address"
                />
              </div>

              <div className="grid gap-2 md:col-span-2">
                <Label
                  htmlFor={`grievance-description-${grievance.id}`}
                >
                  Description
                </Label>
                <textarea
                  id={`grievance-description-${grievance.id}`}
                  value={description}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                  placeholder="Enter description"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              </div>
            </div>

            {updateGrievanceMutation.error && (
              <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                {updateGrievanceMutation.error.message}
              </p>
            )}

            <div className="mt-6 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={
                  !canUpdate ||
                  updateGrievanceMutation.isPending
                }
              >
                {updateGrievanceMutation.isPending && (
                  <LoaderCircle className="animate-spin" />
                )}
                Save
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
