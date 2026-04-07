import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "flex h-10 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-electric-400",
        className
      )}
      aria-label="select"
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectOption({
  children,
  ...props
}: React.OptionHTMLAttributes<HTMLOptionElement>) {
  return (
    <option className="bg-black" {...props}>
      {children}
    </option>
  );
}
