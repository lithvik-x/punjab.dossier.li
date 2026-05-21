"use client";

import { Badge } from "@/components/ui/MetricCard";
import type { ElectionIntelligence, PriorityTier, Party } from "@/types/constituency-types";

interface PriorityBadgeProps {
  tier: PriorityTier;
  className?: string;
}

export function PriorityBadge({ tier, className = "" }: PriorityBadgeProps) {
  const config = {
    CRITICAL: { variant: "error" as const, label: "CRITICAL", bg: "bg-red-100", text: "text-red-700" },
    HIGH: { variant: "warning" as const, label: "HIGH", bg: "bg-orange-100", text: "text-orange-700" },
    MEDIUM: { variant: "default" as const, label: "MEDIUM", bg: "bg-yellow-100", text: "text-yellow-700" },
    RECOVERY: { variant: "default" as const, label: "RECOVERY", bg: "bg-blue-100", text: "text-blue-700" },
  };

  const { bg, text, label } = config[tier];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${bg} ${text} ${className}`}>
      {label}
    </span>
  );
}

interface PartyBadgeProps {
  party: Party;
  className?: string;
}

export function PartyBadge({ party, className = "" }: PartyBadgeProps) {
  const config: Record<Party, { bg: string; text: string }> = {
    INC: { bg: "bg-blue-500", text: "text-white" },
    AAP: { bg: "bg-orange-500", text: "text-white" },
    SAD: { bg: "bg-yellow-500", text: "text-black" },
    BJP: { bg: "bg-green-500", text: "text-white" },
  };

  const { bg, text } = config[party];

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${bg} ${text} ${className}`}>
      {party}
    </span>
  );
}

interface MarginIndicatorProps {
  margin: number;
  party: Party;
  className?: string;
}

export function MarginIndicator({ margin, party, className = "" }: MarginIndicatorProps) {
  const isNegative = margin < 0;
  const absMargin = Math.abs(margin);
  const formatted = absMargin >= 1000 ? `${(absMargin / 1000).toFixed(1)}K` : absMargin.toString();

  const colorClass = isNegative
    ? "text-orange-600"
    : party === "INC"
    ? "text-blue-600"
    : "text-slate-600";

  return (
    <div className={`font-mono ${className}`}>
      <span className={colorClass}>
        {isNegative ? "-" : "+"}{formatted}
      </span>
      <span className="text-slate-400 text-sm ml-1">votes</span>
    </div>
  );
}

interface CongressPositionCardProps {
  position: string;
  className?: string;
}

export function CongressPositionCard({ position, className = "" }: CongressPositionCardProps) {
  const isHold = position.toUpperCase().includes("HOLD");
  const isCritical = position.toUpperCase().includes("CRITICAL") || position.toUpperCase().includes("RAZOR");
  const isFlipped = position.toUpperCase().includes("FLIPPED");

  const borderColor = isCritical
    ? "border-l-red-500"
    : isFlipped
    ? "border-l-orange-500"
    : isHold
    ? "border-l-blue-500"
    : "border-l-slate-300";

  return (
    <div className={`border-l-4 ${borderColor} pl-3 py-1 ${className}`}>
      <p className="text-sm text-slate-700 dark:text-slate-300">{position}</p>
    </div>
  );
}

interface CasteCompositionBarProps {
  composition: { category: string; percentage: string }[];
  className?: string;
}

export function CasteCompositionBar({ composition, className = "" }: CasteCompositionBarProps) {
  const getColor = (index: number) => {
    const colors = [
      "bg-purple-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-indigo-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className={className}>
      <div className="flex h-4 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700">
        {composition.map((item, idx) => {
          const pct = parseFloat(item.percentage.replace(/[^0-9.]/g, "")) || 0;
          return (
            <div
              key={item.category}
              className={`${getColor(idx)} transition-all`}
              style={{ width: `${pct}%` }}
              title={`${item.category}: ${item.percentage}`}
            />
          );
        })}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {composition.map((item, idx) => (
          <div key={item.category} className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-full ${getColor(idx)}`} />
            <span className="text-xs text-slate-600 dark:text-slate-400">
              {item.category} {item.percentage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface AttackLineCardProps {
  attackLines: { issue: string; message: string; audience: string }[];
  className?: string;
}

export function AttackLineCard({ attackLines, className = "" }: AttackLineCardProps) {
  return (
    <div className={className}>
      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Attack Lines</h4>
      <div className="space-y-2">
        {attackLines.map((line, idx) => (
          <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2">
            <div className="flex items-start justify-between gap-2">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded">
                {line.audience}
              </span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">{line.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CandidateProfileCardProps {
  candidate: ElectionIntelligence["recommendedCandidate"];
  className?: string;
}

export function CandidateProfileCard({ candidate, className = "" }: CandidateProfileCardProps) {
  return (
    <div className={className}>
      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Recommended Candidate</h4>
      <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 space-y-2">
        <div>
          <span className="text-xs text-slate-500 dark:text-slate-400">Profile:</span>
          <p className="text-sm text-slate-700 dark:text-slate-300">{candidate.profile}</p>
        </div>
        {candidate.caste && (
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400">Caste:</span>
            <p className="text-sm text-slate-700 dark:text-slate-300">{candidate.caste}</p>
          </div>
        )}
        <div>
          <span className="text-xs text-slate-500 dark:text-slate-400">Key Qualities:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {candidate.keyQualities.map((q, idx) => (
              <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded">
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface TopIssuesListProps {
  issues: { issue: string; description: string }[];
  className?: string;
}

export function TopIssuesList({ issues, className = "" }: TopIssuesListProps) {
  return (
    <div className={className}>
      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Top Issues</h4>
      <div className="space-y-1.5">
        {issues.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 text-xs font-bold flex items-center justify-center">
              {idx + 1}
            </span>
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.issue}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface StrategicImplicationsListProps {
  implications: string[];
  className?: string;
}

export function StrategicImplicationsList({ implications, className = "" }: StrategicImplicationsListProps) {
  return (
    <div className={className}>
      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Strategic Implications</h4>
      <ul className="space-y-1">
        {implications.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="text-blue-500 mt-0.5">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
