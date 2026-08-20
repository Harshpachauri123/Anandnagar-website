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
  useDeleteContact,
  useUpdateContact,
} from "@/hooks/use-contacts";
import { useCurrentUser } from "@/hooks/use-users";
import { hasPermission } from "@/lib/admin-roles";
import type { Contact } from "@/types/contact";

type ContactActionsProps = {
  contact: Contact;
};

export default function ContactActions({
  contact,
}: ContactActionsProps) {
  const { data: currentUser } = useCurrentUser();
  const canUpdate = hasPermission(
    currentUser?.role,
    "contacts.update"
  );
  const canDelete = hasPermission(
    currentUser?.role,
    "contacts.delete"
  );

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);
  const [subject, setSubject] = useState(contact.subject);
  const [message, setMessage] = useState(contact.message);

  const updateContactMutation = useUpdateContact();
  const deleteContactMutation = useDeleteContact();

  function openEditDialog() {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
    setSubject(contact.subject);
    setMessage(contact.message);
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
      await updateContactMutation.mutateAsync({
        id: contact.id,
        data: {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          subject: subject.trim(),
          message: message.trim(),
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
      `Delete ${contact.name || contact.email || "this contact"}?`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteContactMutation.mutateAsync(contact.id);
    } catch (error) {
      window.alert(
        error instanceof Error
          ? error.message
          : "Contact delete nahi ho paya."
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
          title="View and edit contact"
          aria-label="View and edit contact"
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
              ? "Delete contact"
              : "Only admin can delete contacts"
          }
          aria-label="Delete contact"
          disabled={
            !canDelete || deleteContactMutation.isPending
          }
          onClick={handleDelete}
        >
          {deleteContactMutation.isPending ? (
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
          aria-labelledby={`edit-contact-${contact.id}`}
        >
          <form
            onSubmit={handleUpdate}
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-5 text-slate-900 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id={`edit-contact-${contact.id}`}
                  className="text-lg font-semibold"
                >
                  View / Edit Contact
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

            <div className="mt-5 grid gap-4">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Database ID
                </p>
                <p className="mt-1 font-mono text-sm font-semibold text-slate-900">
                  {contact.id}
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor={`contact-name-${contact.id}`}>
                  Name
                </Label>
                <Input
                  id={`contact-name-${contact.id}`}
                  value={name}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="Enter name"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor={`contact-email-${contact.id}`}>
                  Email
                </Label>
                <Input
                  id={`contact-email-${contact.id}`}
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
                <Label htmlFor={`contact-phone-${contact.id}`}>
                  Phone
                </Label>
                <Input
                  id={`contact-phone-${contact.id}`}
                  value={phone}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setPhone(event.target.value)
                  }
                  placeholder="Enter phone number"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor={`contact-subject-${contact.id}`}>
                  Subject
                </Label>
                <Input
                  id={`contact-subject-${contact.id}`}
                  value={subject}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setSubject(event.target.value)
                  }
                  placeholder="Enter subject"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor={`contact-message-${contact.id}`}>
                  Message
                </Label>
                <textarea
                  id={`contact-message-${contact.id}`}
                  value={message}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  placeholder="Enter message"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              </div>
            </div>

            {updateContactMutation.error && (
              <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                {updateContactMutation.error.message}
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
                  updateContactMutation.isPending
                }
              >
                {updateContactMutation.isPending && (
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
