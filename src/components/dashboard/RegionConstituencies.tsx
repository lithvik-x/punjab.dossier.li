"use client";

import { useState } from "react";
import Link from "next/link";
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
import type { ElectionIntelligence } from "@/types/constituency-types";

interface RegionConstituenciesProps {
  regionName: string;
  regionId: string;
  constituencies: ElectionIntelligence[];
  regionDescription: string;
  totalSeats: number;
}

function ConstituencyAccordion({ intelligence }: { intelligence: ElectionIntelligence }) {
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

          {/* Metadata */}
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-xs font-medium text-slate-500">District</p>
              <p className="text-sm text-slate-900 dark:text-white">{intelligence.district}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Lok Sabha</p>
              <p className="text-sm text-slate-900 dark:text-white">{intelligence.lokSabha}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Type</p>
              <p className="text-sm text-slate-900 dark:text-white">{intelligence.type}</p>
            </div>
          </div>

          {/* Election Results */}
          {intelligence.electionResults.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Election Results</h4>
              <div className="space-y-2">
                {intelligence.electionResults.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-sm">
                    <span className="font-mono text-xs text-slate-500 w-12">{result.year}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      result.party === "INC" ? "bg-blue-100 text-blue-700" :
                      result.party === "AAP" ? "bg-orange-100 text-orange-700" :
                      result.party === "SAD" ? "bg-yellow-100 text-yellow-700" :
                      result.party === "BJP" ? "bg-green-100 text-green-700" :
                      "bg-slate-100 text-slate-700"
                    }`}>
                      {result.party}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">{result.winner}</span>
                    <span className="text-slate-500 text-xs">{result.margin}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

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
        </div>
      )}
    </div>
  );
}

export default function RegionConstituencies({
  regionName,
  regionId,
  constituencies,
  regionDescription,
  totalSeats,
}: RegionConstituenciesProps) {
  // Group by priority tier
  const critical = constituencies.filter(c => c.priorityTier === "CRITICAL");
  const high = constituencies.filter(c => c.priorityTier === "HIGH");
  const medium = constituencies.filter(c => c.priorityTier === "MEDIUM");
  const recovery = constituencies.filter(c => c.priorityTier === "RECOVERY");

  // Get unique districts in this region
  const districts = [...new Set(constituencies.map(c => c.district))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-${
              regionId === "malwa" ? "orange" : regionId === "majha" ? "blue" : regionId === "doaba" ? "green" : "purple"
            }-500`}>
              {regionName}
            </span>
            <Badge variant="success">{constituencies.length} Constituencies</Badge>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            {regionDescription}
          </p>
        </div>
        <Link
          href="/dashboard/constituency"
          className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
        >
          ← Back to Overview
        </Link>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
          <p className="text-sm text-red-600 dark:text-red-400">Critical</p>
          <p className="text-2xl font-bold text-red-700 dark:text-red-300">{critical.length}</p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border-l-4 border-orange-500">
          <p className="text-sm text-orange-600 dark:text-orange-400">High Priority</p>
          <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">{high.length}</p>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500">
          <p className="text-sm text-yellow-600 dark:text-yellow-400">Medium</p>
          <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">{medium.length}</p>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-sm text-blue-600 dark:text-blue-400">Recovery</p>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{recovery.length}</p>
        </div>
      </div>

      {/* Districts in this region */}
      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Districts: {districts.join(", ")}
        </p>
      </div>

      {/* Priority Tiers Section */}
      {critical.length > 0 && (
        <div className="border-l-4 border-red-500 rounded-lg p-4 bg-red-50 dark:bg-red-900/20">
          <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3">CRITICAL - Immediate Action Required</h3>
          <div className="space-y-2">
            {critical.map(ac => (
              <ConstituencyAccordion key={ac.acId} intelligence={ac} />
            ))}
          </div>
        </div>
      )}

      {high.length > 0 && (
        <div className="border-l-4 border-orange-500 rounded-lg p-4 bg-orange-50 dark:bg-orange-900/20">
          <h3 className="font-semibold text-orange-700 dark:text-orange-400 mb-3">HIGH - Ground Mobilization Needed</h3>
          <div className="space-y-2">
            {high.map(ac => (
              <ConstituencyAccordion key={ac.acId} intelligence={ac} />
            ))}
          </div>
        </div>
      )}

      {medium.length > 0 && (
        <div className="border-l-4 border-yellow-500 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-900/20">
          <h3 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-3">MEDIUM - Issue-Specific Focus</h3>
          <div className="space-y-2">
            {medium.map(ac => (
              <ConstituencyAccordion key={ac.acId} intelligence={ac} />
            ))}
          </div>
        </div>
      )}

      {recovery.length > 0 && (
        <div className="border-l-4 border-blue-500 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
          <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-3">RECOVERY - Long-Term Rebuild</h3>
          <div className="space-y-2">
            {recovery.map(ac => (
              <ConstituencyAccordion key={ac.acId} intelligence={ac} />
            ))}
          </div>
        </div>
      )}

      {/* All Constituencies */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
          All {regionName} Constituencies
        </h3>
        <div className="space-y-2">
          {constituencies.map(ac => (
            <ConstituencyAccordion key={ac.acId} intelligence={ac} />
          ))}
        </div>
      </div>
    </div>
  );
}
