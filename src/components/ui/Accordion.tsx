"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  variant?: "default" | "colored";
  headerColor?: string;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  variant = "default",
  headerColor = "bg-slate-100 dark:bg-slate-800",
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between p-4 text-left transition-colors ${headerColor} hover:bg-slate-200 dark:hover:bg-slate-700`}
      >
        <span className="text-lg font-semibold text-slate-900 dark:text-white">{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  type?: "single" | "multiple";
}

export function Accordion({ children, className = "", type = "multiple" }: AccordionProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {children}
    </div>
  );
}

interface SectionAccordionProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: string;
  badgeVariant?: "success" | "warning" | "danger" | "info" | "default";
  children: React.ReactNode;
  defaultOpen?: boolean;
  containerClassName?: string;
}

const badgeVariants = {
  success: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400",
  warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400",
  danger: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400",
  info: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400",
  default: "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
};

export function SectionAccordion({
  title,
  subtitle,
  icon,
  badge,
  badgeVariant = "default",
  children,
  defaultOpen = false,
  containerClassName = "",
}: SectionAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800 overflow-hidden ${containerClassName}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white">
              {icon}
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-slate-900 dark:text-white">{title}</span>
              {badge && (
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badgeVariants[badgeVariant]}`}>
                  {badge}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
            )}
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="border-t border-slate-200 dark:border-slate-700 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
