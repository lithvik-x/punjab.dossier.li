"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);

    // Set DOM class directly first
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Then update state
    setIsDark(shouldBeDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDark(newIsDark);
  };

  // Prevent hydration mismatch by showing consistent UI until mounted
  const buttonContent = mounted ? (isDark ? "Light Mode" : "Dark Mode") : "Dark Mode";
  const Icon = mounted ? (isDark ? Sun : Moon) : Moon;

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white hover:bg-slate-200 hover:text-slate-900 transition-colors"
      aria-label="Toggle theme"
    >
      <Icon className="h-4 w-4" />
      <span>{buttonContent}</span>
    </button>
  );
}
