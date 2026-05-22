import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for merging Tailwind classes with clsx
 * Ensures proper className composition without conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Helper for conditional classes
 */
export function conditionalClass(condition: boolean, trueClass: string, falseClass: string = "") {
  return condition ? trueClass : falseClass;
}
