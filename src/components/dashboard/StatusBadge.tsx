"use client";

import React from "react";

type BadgeStatus = "pending" | "confirmed" | "completed" | "cancelled" | "active" | "draft";

interface StatusBadgeProps {
  status: BadgeStatus;
  children?: React.ReactNode;
}

const statusStyles: Record<BadgeStatus, string> = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  confirmed: "bg-blue-50 text-blue-700 border-blue-200",
  completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  cancelled: "bg-red-50 text-red-600 border-red-200",
  active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  draft: "bg-zinc-100 text-zinc-500 border-zinc-200",
};

const statusLabels: Record<BadgeStatus, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  completed: "Completed",
  cancelled: "Cancelled",
  active: "Active",
  draft: "Draft",
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, children }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusStyles[status]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "pending"
            ? "bg-amber-500"
            : status === "confirmed"
            ? "bg-blue-500"
            : status === "completed" || status === "active"
            ? "bg-emerald-500"
            : status === "cancelled"
            ? "bg-red-500"
            : "bg-zinc-400"
        }`}
      />
      {children || statusLabels[status]}
    </span>
  );
};
