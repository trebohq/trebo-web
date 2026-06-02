import React from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const AuthInput: React.FC<AuthInputProps> = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="text-xs font-semibold tracking-wide text-foreground uppercase">
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-3 rounded-xl border bg-surface text-foreground font-medium placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all ${
          error ? "border-red-500" : "border-border-subtle focus:border-foreground"
        } ${props.className || ""}`}
      />
      {error && <span className="text-xs font-medium text-red-500 mt-1">{error}</span>}
    </div>
  );
};
