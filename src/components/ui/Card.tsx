"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

// ============================================================================
// TYPES
// ============================================================================

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  border?: boolean;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  border?: boolean;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
  border?: boolean;
}

// ============================================================================
// CARD
// ============================================================================

export function Card({
  children,
  className,
  hover = false,
  glass = false,
  padding = "md",
  border = true,
}: CardProps) {
  const paddingStyles = {
    none: "",
    sm: "p-3",
    md: "p-5",
    lg: "p-6",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-xl bg-white shadow-sm dark:bg-slate-900",
        border && "border border-slate-200 dark:border-slate-800",
        glass && "glass",
        paddingStyles[padding],
        hover && [
          "cursor-pointer transition-all duration-200",
          "hover:border-slate-300 hover:shadow-lg",
          "dark:hover:border-slate-600",
          "[&:hover]:shadow-blue-500/10",
        ],
        className
      )}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// CARD HEADER
// ============================================================================

export function CardHeader({ children, className, border = false }: CardHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5",
        border && "border-b border-slate-200 pb-4 dark:border-slate-800",
        className
      )}
    >
      {children}
    </div>
  );
}

// ============================================================================
// CARD TITLE
// ============================================================================

export function CardTitle({ children, className, as: Component = "h3" }: CardTitleProps) {
  return (
    <Component
      className={cn(
        "text-lg font-bold text-slate-900 dark:text-white",
        "tracking-tight",
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================================================
// CARD DESCRIPTION
// ============================================================================

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-slate-500 dark:text-slate-400", className)}>
      {children}
    </p>
  );
}

// ============================================================================
// CARD CONTENT
// ============================================================================

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("", className)}>{children}</div>;
}

// ============================================================================
// CARD FOOTER
// ============================================================================

export function CardFooter({ children, className, border = false }: CardFooterProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 pt-4",
        border && "border-t border-slate-200 dark:border-slate-800",
        className
      )}
    >
      {children}
    </div>
  );
}

// ============================================================================
// PREMIUM INTELLIGENCE CARD (Special variant for dashboard)
// ============================================================================

interface IntelligenceCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: "blue" | "cyan" | "emerald" | "amber" | "rose" | "purple";
  status?: "live" | "updated" | "stale";
  timestamp?: string;
}

export function IntelligenceCard({
  children,
  className,
  accentColor = "blue",
  status,
  timestamp,
}: IntelligenceCardProps) {
  const accentColors = {
    blue: "border-l-blue-500",
    cyan: "border-l-cyan-500",
    emerald: "border-l-emerald-500",
    amber: "border-l-amber-500",
    rose: "border-l-rose-500",
    purple: "border-l-purple-500",
  };

  const statusColors = {
    live: "text-emerald-500",
    updated: "text-cyan-500",
    stale: "text-slate-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-slate-200 bg-white",
        "shadow-sm dark:border-slate-700 dark:bg-slate-900",
        "border-l-4",
        accentColors[accentColor],
        className
      )}
    >
      {/* Status indicator */}
      {status && (
        <div className="absolute right-3 top-3 flex items-center gap-2">
          <span className={cn("flex items-center gap-1.5 text-xs font-medium", statusColors[status])}>
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                status === "live" && "bg-emerald-500 animate-pulse",
                status === "updated" && "bg-cyan-500",
                status === "stale" && "bg-slate-400"
              )}
            />
            {status === "live" && "Live"}
            {status === "updated" && "Updated"}
            {status === "stale" && "Stale"}
          </span>
          {timestamp && (
            <span className="text-xs text-slate-400 dark:text-slate-500">{timestamp}</span>
          )}
        </div>
      )}

      <div className="p-5">{children}</div>
    </motion.div>
  );
}
