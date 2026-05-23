"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { ReactNode } from "react";
import { Loader2 } from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive" | "outline";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children?: ReactNode;
}

// ============================================================================
// VARIANT STYLES
// ============================================================================

const variantStyles: Record<ButtonVariant, string | string[]> = {
  primary: [
    // Light mode
    "bg-gradient-to-br from-blue-600 to-blue-700 text-white",
    "shadow-lg shadow-blue-500/25",
    "hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5",
    "active:translate-y-0 active:shadow-lg",
    // Dark mode
    "dark:from-blue-500 dark:to-blue-600",
    "dark:shadow-lg dark:shadow-blue-500/20",
    "dark:hover:shadow-xl dark:hover:shadow-blue-500/30",
  ],
  secondary: [
    // Light mode
    "bg-slate-100 text-slate-900",
    "hover:bg-slate-200 hover:text-slate-900",
    "active:bg-slate-300",
    // Dark mode
    "dark:bg-slate-800 dark:text-slate-100",
    "dark:hover:bg-slate-700 dark:hover:text-slate-100",
    "dark:active:bg-slate-600",
  ],
  ghost: [
    // Light mode
    "text-slate-700",
    "hover:bg-slate-100 hover:text-slate-900",
    "active:bg-slate-200",
    // Dark mode
    "dark:text-slate-300",
    "dark:hover:bg-slate-800 dark:hover:text-slate-100",
    "dark:active:bg-slate-700",
  ],
  destructive: [
    // Light mode
    "bg-gradient-to-br from-rose-600 to-rose-700 text-white",
    "shadow-lg shadow-rose-500/25",
    "hover:shadow-xl hover:shadow-rose-500/30 hover:-translate-y-0.5",
    "active:translate-y-0 active:shadow-lg",
    // Dark mode
    "dark:from-rose-500 dark:to-rose-600",
    "dark:shadow-lg dark:shadow-rose-500/20",
    "dark:hover:shadow-xl dark:hover:shadow-rose-500/30",
  ],
  outline: [
    // Light mode
    "border-2 border-slate-300 text-slate-700",
    "hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900",
    "active:bg-slate-100",
    // Dark mode
    "dark:border-slate-600 dark:text-slate-300",
    "dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-100",
    "dark:active:bg-slate-700",
  ],
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm gap-1.5 rounded-md",
  md: "h-10 px-4 text-sm gap-2 rounded-lg",
  lg: "h-12 px-6 text-base gap-2 rounded-lg",
  icon: "h-10 w-10 rounded-lg p-0",
};

// ============================================================================
// BUTTON COMPONENT
// ============================================================================

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  iconPosition = "left",
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      whileHover={{ scale: isDisabled ? 1 : 1.02 }}
      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
      transition={{ duration: 0.15 }}
      className={cn(
        // Base styles
        "inline-flex items-center justify-center gap-2 font-semibold",
        "rounded-lg transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",

        // Variant
        variantStyles[variant],

        // Size
        sizeStyles[size],

        className
      )}
      disabled={isDisabled}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          {children}
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </motion.button>
  );
}

// ============================================================================
// ICON BUTTON (Specialized)
// ============================================================================

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  tooltip?: string;
}

export function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  tooltip,
  className,
  ...props
}: IconButtonProps) {
  const iconSizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const iconSizesInner = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={tooltip}
      className={cn(
        "inline-flex items-center justify-center rounded-lg",
        "bg-transparent transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",

        // Icon container
        iconSizes[size],

        // Variant (using ghost as base for icon buttons)
        variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
        variant === "secondary" && "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700",
        variant === "ghost" && "hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-300",
        variant === "destructive" && "bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600",
        variant === "outline" && "border border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800",

        className
      )}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      <span className={iconSizesInner[size]}>{icon}</span>
    </motion.button>
  );
}

// ============================================================================
// BUTTON GROUP
// ============================================================================

interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  attached?: boolean;
}

export function ButtonGroup({ children, className, attached = false }: ButtonGroupProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        attached && "[&>button]:rounded-none [&>button:first-child]:rounded-l-lg [&>button:last-child]:rounded-r-lg [&>button:not(:first-child):not(:last-child)]:border-l-0",
        attached && "[&>button]:focus:z-10",
        className
      )}
    >
      {children}
    </div>
  );
}
