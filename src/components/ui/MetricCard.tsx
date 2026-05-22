"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: number;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  color?: "blue" | "cyan" | "emerald" | "amber" | "rose" | "purple" | "orange";
  sparkline?: number[];
  className?: string;
  animate?: boolean;
}

interface ProgressBarProps {
  label: string;
  value: number;
  max?: number;
  maxValue?: number;
  color?: "blue" | "cyan" | "emerald" | "amber" | "rose" | "purple";
  showPercentage?: boolean;
  animated?: boolean;
}

interface DataTableProps {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
  caption?: string;
  hoverable?: boolean;
  striped?: boolean;
}

interface MiniChartProps {
  data: number[];
  color?: "blue" | "cyan" | "emerald" | "amber" | "rose" | "purple";
  height?: number;
  showArea?: boolean;
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info" | "purple";
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  dot?: boolean;
  className?: string;
}

// ============================================================================
// COLOR MAPS
// ============================================================================

const colorMaps = {
  blue: {
    bg: "bg-blue-500",
    bgLight: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
    ring: "ring-blue-500/20",
    gradient: "from-blue-600 to-blue-700",
    glow: "shadow-blue-500/25",
    glowHover: "hover:shadow-blue-500/40",
  },
  cyan: {
    bg: "bg-cyan-500",
    bgLight: "bg-cyan-50 dark:bg-cyan-950/30",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-200 dark:border-cyan-800",
    ring: "ring-cyan-500/20",
    gradient: "from-cyan-600 to-cyan-700",
    glow: "shadow-cyan-500/25",
    glowHover: "hover:shadow-cyan-500/40",
  },
  emerald: {
    bg: "bg-emerald-500",
    bgLight: "bg-emerald-50 dark:bg-emerald-950/30",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800",
    ring: "ring-emerald-500/20",
    gradient: "from-emerald-600 to-emerald-700",
    glow: "shadow-emerald-500/25",
    glowHover: "hover:shadow-emerald-500/40",
  },
  amber: {
    bg: "bg-amber-500",
    bgLight: "bg-amber-50 dark:bg-amber-950/30",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800",
    ring: "ring-amber-500/20",
    gradient: "from-amber-600 to-amber-700",
    glow: "shadow-amber-500/25",
    glowHover: "hover:shadow-amber-500/40",
  },
  rose: {
    bg: "bg-rose-500",
    bgLight: "bg-rose-50 dark:bg-rose-950/30",
    text: "text-rose-600 dark:text-rose-400",
    border: "border-rose-200 dark:border-rose-800",
    ring: "ring-rose-500/20",
    gradient: "from-rose-600 to-rose-700",
    glow: "shadow-rose-500/25",
    glowHover: "hover:shadow-rose-500/40",
  },
  purple: {
    bg: "bg-purple-500",
    bgLight: "bg-purple-50 dark:bg-purple-950/30",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
    ring: "ring-purple-500/20",
    gradient: "from-purple-600 to-purple-700",
    glow: "shadow-purple-500/25",
    glowHover: "hover:shadow-purple-500/40",
  },
  orange: {
    bg: "bg-orange-500",
    bgLight: "bg-orange-50 dark:bg-orange-950/30",
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-800",
    ring: "ring-orange-500/20",
    gradient: "from-orange-600 to-orange-700",
    glow: "shadow-orange-500/25",
    glowHover: "hover:shadow-orange-500/40",
  },
};

const trendConfig = {
  up: {
    icon: TrendingUp,
    text: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  down: {
    icon: TrendingDown,
    text: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/30",
  },
  neutral: {
    icon: Minus,
    text: "text-slate-500 dark:text-slate-400",
    bg: "bg-slate-50 dark:bg-slate-800/30",
  },
};

// ============================================================================
// ANIMATED METRIC CARD
// ============================================================================

export function MetricCard({
  title,
  value,
  subtitle,
  change,
  trend = "neutral",
  icon,
  color = "blue",
  sparkline,
  className,
  animate = true,
}: MetricCardProps) {
  const colors = colorMaps[color];
  const trendInfo = trendConfig[trend];

  const cardContent = (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-white p-5 shadow-sm",
        "transition-all duration-200 ease-out",
        "hover:border-slate-300 hover:shadow-md dark:bg-slate-900 dark:hover:border-slate-600",
        className
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-200",
          "bg-gradient-to-br from-white to-transparent",
          "group-hover:opacity-5 dark:from-slate-800 dark:to-transparent"
        )}
      />

      <div className="relative flex items-start justify-between gap-4">
        {/* Content */}
        <div className="flex-1 space-y-1">
          {/* Title */}
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {title}
          </p>

          {/* Value */}
          <div className="flex items-baseline gap-3">
            <motion.p
              className="metric-value text-slate-900 dark:text-white"
              initial={animate ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {value}
            </motion.p>

            {/* Sparkline */}
            {sparkline && sparkline.length > 0 && (
              <MiniChart data={sparkline} color={color} height={32} showArea />
            )}
          </div>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
          )}

          {/* Change indicator */}
          {change !== undefined && (
            <motion.div
              initial={animate ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className={cn(
                "mt-2 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-sm font-semibold",
                trendInfo.bg,
                trendInfo.text
              )}
            >
              <trendInfo.icon className="h-4 w-4" />
              <span>{Math.abs(change)}%</span>
              <span className="text-xs font-normal opacity-75">vs last week</span>
            </motion.div>
          )}
        </div>

        {/* Icon */}
        {icon && (
          <motion.div
            initial={animate ? { scale: 0.8, opacity: 0 } : false}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
              "bg-gradient-to-br shadow-lg",
              colors.gradient,
              colors.glow,
              "text-white"
            )}
          >
            {icon}
          </motion.div>
        )}
      </div>
    </div>
  );

  return cardContent;
}

// ============================================================================
// PROGRESS BAR
// ============================================================================

export function ProgressBar({
  label,
  value,
  max = 100,
  maxValue,
  color = "blue",
  showPercentage = true,
  animated = true,
}: ProgressBarProps) {
  const effectiveMax = maxValue ?? max;
  const percentage = Math.round((value / effectiveMax) * 100);
  const colors = colorMaps[color];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </span>
        {showPercentage && (
          <span className="text-sm font-semibold tabular-nums text-slate-500 dark:text-slate-400">
            {percentage}%
          </span>
        )}
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <motion.div
          className={cn("h-full rounded-full", colors.bg)}
          initial={animated ? { width: 0 } : false}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

// ============================================================================
// DATA TABLE
// ============================================================================

export function DataTable({
  headers,
  rows,
  caption,
  hoverable = true,
  striped = false,
}: DataTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
      {caption && (
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {caption}
          </p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn(
                  "transition-colors duration-150",
                  hoverable && "hover:bg-slate-50 dark:hover:bg-slate-800/50",
                  striped && rowIndex % 2 === 1 && "bg-slate-50/50 dark:bg-slate-800/20"
                )}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="whitespace-nowrap px-4 py-3.5 text-sm text-slate-700 dark:text-slate-300"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================================
// MINI CHART (SPARKLINE)
// ============================================================================

export function MiniChart({
  data,
  color = "cyan",
  height = 40,
  showArea = false,
}: MiniChartProps) {
  const colors = colorMaps[color];
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  return (
    <div className="flex items-end gap-0.5" style={{ height: `${height}px` }}>
      {data.map((value, i) => {
        const barHeight = ((value - min) / range) * 100;
        return (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: i * 0.02 }}
            className={cn(
              "w-full rounded-t transition-all duration-200 hover:opacity-80",
              colors.bg
            )}
            style={{
              height: `${Math.max(barHeight, 5)}%`,
              transformOrigin: "bottom",
            }}
          />
        );
      })}
    </div>
  );
}

// ============================================================================
// BADGE
// ============================================================================

export function Badge({
  children,
  variant = "default",
  size = "md",
  pulse = false,
  dot = false,
  className,
}: BadgeProps) {
  const variantStyles = {
    default: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800/50",
    warning: "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800/50",
    danger: "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-800/50",
    info: "bg-cyan-50 text-cyan-700 border border-cyan-200 dark:bg-cyan-950/30 dark:text-cyan-400 dark:border-cyan-800/50",
    purple: "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-800/50",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md font-semibold",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          {pulse && (
            <span
              className={cn(
                "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
                variant === "success" && "bg-emerald-400",
                variant === "warning" && "bg-amber-400",
                variant === "danger" && "bg-rose-400",
                variant === "info" && "bg-cyan-400",
                variant === "purple" && "bg-purple-400",
                variant === "default" && "bg-slate-400"
              )}
            />
          )}
          <span
            className={cn(
              "relative inline-flex h-2 w-2 rounded-full",
              variant === "success" && "bg-emerald-500",
              variant === "warning" && "bg-amber-500",
              variant === "danger" && "bg-rose-500",
              variant === "info" && "bg-cyan-500",
              variant === "purple" && "bg-purple-500",
              variant === "default" && "bg-slate-500"
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}
