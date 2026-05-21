"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/MetricCard";
import {
  PriorityBadge,
  PartyBadge,
  MarginIndicator,
  CongressPositionCard,
  CasteCompositionBar,
  AttackLineCard,
  CandidateProfileCard,
  TopIssuesList,
  StrategicImplicationsList,
} from "./IntelligenceCard";
import { batch1Intelligence, batch1PriorityTiers } from "@/lib/election-intelligence";
import type { ElectionIntelligence } from "@/types/constituency-types";

interface ConstituencyAccordionProps {
  intelligence: ElectionIntelligence;
}

function ConstituencyAccordion({ intelligence }: ConstituencyAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300">
            {intelligence.acId}
          </span>
          <span className="font-medium text-slate-900 dark:text-white">
            {intelligence.name}
          </span>
          <PartyBadge party={intelligence.party} />
          <MarginIndicator margin={intelligence.margin} party={intelligence.party} />
        </div>
        <div className="flex items-center gap-3">
          <PriorityBadge tier={intelligence.priorityTier} />
          <svg
            className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-4 py-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              <CongressPositionCard position={intelligence.congressPosition} />
              <TopIssuesList issues={intelligence.topIssues} />
              <AttackLineCard attackLines={intelligence.attackLines} />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Caste Composition</h4>
                <CasteCompositionBar composition={intelligence.casteComposition} />
              </div>
              <CandidateProfileCard candidate={intelligence.recommendedCandidate} />
              <StrategicImplicationsList implications={intelligence.strategicImplications} />
            </div>
          </div>

          {/* Data Gaps */}
          {intelligence.dataGaps.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Data Gaps</h4>
              <div className="flex flex-wrap gap-2">
                {intelligence.dataGaps.map((gap, idx) => (
                  <span key={idx} className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-2 py-1 rounded">
                    {gap}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Visualization Recommendations */}
          {intelligence.visualizationRecommendations && intelligence.visualizationRecommendations.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Recommended Visualizations</h4>
              <div className="flex flex-wrap gap-2">
                {intelligence.visualizationRecommendations.map((rec, idx) => (
                  <span key={idx} className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">
                    {rec}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface PriorityTierSectionProps {
  title: string;
  tier: typeof batch1PriorityTiers[number];
  constituencies: ElectionIntelligence[];
}

function PriorityTierSection({ title, tier, constituencies }: PriorityTierSectionProps) {
  const tierColors = {
    CRITICAL: "border-red-500 bg-red-50 dark:bg-red-900/20",
    HIGH: "border-orange-500 bg-orange-50 dark:bg-orange-900/20",
    MEDIUM: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
    RECOVERY: "border-blue-500 bg-blue-50 dark:bg-blue-900/20",
  };

  return (
    <div className={`border-l-4 ${tierColors[tier.tier as keyof typeof tierColors]} rounded-lg p-4`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
        <Badge variant={tier.tier === "CRITICAL" ? "danger" : tier.tier === "HIGH" ? "warning" : "default"}>
          {tier.tier}
        </Badge>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{tier.actionUrgency}</p>
      <div className="space-y-2">
        {tier.constituencies.map((acId) => {
          const ac = constituencies.find((c) => c.acId === acId);
          if (!ac) return null;
          return <ConstituencyAccordion key={ac.acId} intelligence={ac} />;
        })}
      </div>
    </div>
  );
}

export default function ElectionIntelligenceSection() {
  const criticalSeats = batch1PriorityTiers.find((t) => t.tier === "CRITICAL");
  const highSeats = batch1PriorityTiers.find((t) => t.tier === "HIGH");
  const mediumSeats = batch1PriorityTiers.find((t) => t.tier === "MEDIUM");
  const recoverySeats = batch1PriorityTiers.find((t) => t.tier === "RECOVERY");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Election Intelligence
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Constituency-level analysis with priority tiers, attack lines, and strategic recommendations
          </p>
        </div>
        <Badge variant="success">{batch1Intelligence.length} Constituencies</Badge>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
          <p className="text-sm text-red-600 dark:text-red-400">Critical Seats</p>
          <p className="text-2xl font-bold text-red-700 dark:text-red-300">
            {criticalSeats?.constituencies.length || 0}
          </p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border-l-4 border-orange-500">
          <p className="text-sm text-orange-600 dark:text-orange-400">High Priority</p>
          <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">
            {highSeats?.constituencies.length || 0}
          </p>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500">
          <p className="text-sm text-yellow-600 dark:text-yellow-400">Medium</p>
          <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
            {mediumSeats?.constituencies.length || 0}
          </p>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-sm text-blue-600 dark:text-blue-400">Recovery Target</p>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {recoverySeats?.constituencies.length || 0}
          </p>
        </div>
      </div>

      {/* Priority Tiers */}
      <div className="space-y-4">
        {criticalSeats && (
          <PriorityTierSection
            title="CRITICAL - Immediate Action Required"
            tier={criticalSeats}
            constituencies={batch1Intelligence}
          />
        )}
        {highSeats && (
          <PriorityTierSection
            title="HIGH - Ground Mobilization Needed"
            tier={highSeats}
            constituencies={batch1Intelligence}
          />
        )}
        {mediumSeats && (
          <PriorityTierSection
            title="MEDIUM - Issue-Specific Focus"
            tier={mediumSeats}
            constituencies={batch1Intelligence}
          />
        )}
        {recoverySeats && (
          <PriorityTierSection
            title="RECOVERY - Long-Term Rebuild"
            tier={recoverySeats}
            constituencies={batch1Intelligence}
          />
        )}
      </div>

      {/* All Constituencies */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
          All Constituencies (Batch 1)
        </h3>
        <div className="space-y-2">
          {batch1Intelligence.map((ac) => (
            <ConstituencyAccordion key={ac.acId} intelligence={ac} />
          ))}
        </div>
      </div>
    </div>
  );
}
