"use client";

import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, action }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white border border-[#eae6df] border-dashed rounded-2xl">
      <div className="p-4 rounded-2xl bg-[#f3f4f6] text-[#0a1a3b]/30 mb-4">
        {icon || <MagnifyingGlass size={24} />}
      </div>
      <h3 className="text-lg font-bold text-[#0a1a3b] mb-1">{title}</h3>
      <p className="text-[#0a1a3b]/60 text-sm max-w-sm mb-6">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="bg-[#0a1a3b] hover:bg-[#1b9cda] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};
