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
import { allConstituencyData } from "@/lib/constituency-data-loader";
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
        <div className="px-4 py-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 space-y-6">
          {/* Executive Summary */}
          {intelligence.executiveSummary && (
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">Executive Summary</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">{intelligence.executiveSummary}</p>
            </div>
          )}

          {/* Key Issues - ALL with full descriptions */}
          {(intelligence.keyIssues && intelligence.keyIssues.length > 0) && (
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                Key Issues ({intelligence.keyIssues.length} issues)
              </h4>
              <div className="space-y-3">
                {intelligence.keyIssues.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 text-xs font-bold flex items-center justify-center">
                        {(item as { rank?: number }).rank || idx + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.issue}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fallback to topIssues if keyIssues not available */}
          {!intelligence.keyIssues?.length && intelligence.topIssues?.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                Top Issues ({intelligence.topIssues.length})
              </h4>
              <div className="space-y-3">
                {intelligence.topIssues.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.issue}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              <CongressPositionCard position={intelligence.congressPosition} />

              {/* Governance Gap */}
              {intelligence.governanceGap && intelligence.governanceGap.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Governance Gap</h4>
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 space-y-1">
                    {Array.isArray(intelligence.governanceGap)
                      ? intelligence.governanceGap.map((gap, idx) => (
                          <p key={idx} className="text-xs text-slate-700 dark:text-slate-300">• {gap}</p>
                        ))
                      : <p className="text-xs text-slate-700 dark:text-slate-300">{intelligence.governanceGap}</p>
                    }
                  </div>
                </div>
              )}

              {/* MLA Performance */}
              {intelligence.mlaperformance && intelligence.mlaperformance.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">MLA Performance</h4>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 space-y-1">
                    {Array.isArray(intelligence.mlaperformance)
                      ? intelligence.mlaperformance.map((perf, idx) => (
                          <p key={idx} className="text-xs text-slate-700 dark:text-slate-300">{perf}</p>
                        ))
                      : <p className="text-xs text-slate-700 dark:text-slate-300">{intelligence.mlaperformance}</p>
                    }
                  </div>
                </div>
              )}

              {/* Influencers */}
              {intelligence.influencers && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Influencers</h4>
                  <div className="space-y-2">
                    {intelligence.influencers.political && intelligence.influencers.political.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Political:</p>
                        <div className="flex flex-wrap gap-1">
                          {intelligence.influencers.political.map((inf, idx) => (
                            <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
                              {inf}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {intelligence.influencers.social && intelligence.influencers.social.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Social:</p>
                        <div className="flex flex-wrap gap-1">
                          {intelligence.influencers.social.map((inf, idx) => (
                            <span key={idx} className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">
                              {inf}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {intelligence.influencers.religious && intelligence.influencers.religious.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Religious:</p>
                        <div className="flex flex-wrap gap-1">
                          {intelligence.influencers.religious.map((inf, idx) => (
                            <span key={idx} className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded">
                              {inf}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <AttackLineCard attackLines={intelligence.attackLines} />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Caste Composition</h4>
                <CasteCompositionBar composition={intelligence.casteComposition} />
              </div>

              {/* Religion Breakdown */}
              {intelligence.religionBreakdown && Object.keys(intelligence.religionBreakdown).length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Religion Breakdown</h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(intelligence.religionBreakdown).map(([religion, pct]) => (
                      <span key={religion} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">
                        {religion}: {pct}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <CandidateProfileCard candidate={intelligence.recommendedCandidate} />
              <StrategicImplicationsList implications={intelligence.strategicImplications} />
            </div>
          </div>

          {/* Demographics & Geographic Context */}
          {intelligence.demographics && (
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Demographics</h4>
              <div className="grid gap-4 md:grid-cols-4">
                {intelligence.demographics.totalPopulation && (
                  <div>
                    <p className="text-xs text-slate-500">Total Population</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {typeof intelligence.demographics.totalPopulation === 'number'
                        ? intelligence.demographics.totalPopulation.toLocaleString()
                        : intelligence.demographics.totalPopulation}
                    </p>
                  </div>
                )}
                {intelligence.demographics.sexRatio && (
                  <div>
                    <p className="text-xs text-slate-500">Sex Ratio</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{intelligence.demographics.sexRatio}</p>
                  </div>
                )}
                {intelligence.demographics.urban !== undefined && (
                  <div>
                    <p className="text-xs text-slate-500">Urban</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{intelligence.demographics.urban}%</p>
                  </div>
                )}
                {intelligence.demographics.rural !== undefined && (
                  <div>
                    <p className="text-xs text-slate-500">Rural</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{intelligence.demographics.rural}%</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Geographic Context */}
          {intelligence.geographicContext && (
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Geographic Context</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">{intelligence.geographicContext}</p>
            </div>
          )}

          {/* SWOT Analysis - ALL sections */}
          {intelligence.swotAnalysis && (
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-4 py-2">
                SWOT Analysis
              </h4>
              <div className="grid gap-4 md:grid-cols-2 p-4">
                {intelligence.swotAnalysis.strengths && intelligence.swotAnalysis.strengths.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2">Strengths</p>
                    <ul className="space-y-1">
                      {intelligence.swotAnalysis.strengths.map((s, idx) => (
                        <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1">
                          <span className="text-green-500">+</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {intelligence.swotAnalysis.weaknesses && intelligence.swotAnalysis.weaknesses.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-2">Weaknesses</p>
                    <ul className="space-y-1">
                      {intelligence.swotAnalysis.weaknesses.map((w, idx) => (
                        <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1">
                          <span className="text-red-500">−</span> {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {intelligence.swotAnalysis.opportunities && intelligence.swotAnalysis.opportunities.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">Opportunities</p>
                    <ul className="space-y-1">
                      {intelligence.swotAnalysis.opportunities.map((o, idx) => (
                        <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1">
                          <span className="text-blue-500">◇</span> {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {intelligence.swotAnalysis.threats && intelligence.swotAnalysis.threats.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">Threats</p>
                    <ul className="space-y-1">
                      {intelligence.swotAnalysis.threats.map((t, idx) => (
                        <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1">
                          <span className="text-amber-500">!</span> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Strategic Blueprint - ALL parties */}
          {intelligence.strategicBlueprint && (
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-4 py-2">
                Strategic Blueprint
              </h4>
              <div className="p-4 space-y-4">
                {intelligence.strategicBlueprint.forAAP && intelligence.strategicBlueprint.forAAP.length > 0 && (
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                    <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-2">For AAP</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line">
                      {typeof intelligence.strategicBlueprint.forAAP === 'string'
                        ? intelligence.strategicBlueprint.forAAP
                        : intelligence.strategicBlueprint.forAAP.join('. ')}
                    </p>
                  </div>
                )}
                {intelligence.strategicBlueprint.forCongress && intelligence.strategicBlueprint.forCongress.length > 0 && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">For Congress</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line">
                      {typeof intelligence.strategicBlueprint.forCongress === 'string'
                        ? intelligence.strategicBlueprint.forCongress
                        : intelligence.strategicBlueprint.forCongress.join('. ')}
                    </p>
                  </div>
                )}
                {intelligence.strategicBlueprint.forSADBJP && intelligence.strategicBlueprint.forSADBJP.length > 0 && (
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                    <p className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 mb-2">For SAD-BJP</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line">
                      {typeof intelligence.strategicBlueprint.forSADBJP === 'string'
                        ? intelligence.strategicBlueprint.forSADBJP
                        : intelligence.strategicBlueprint.forSADBJP.join('. ')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Course Changing Factors */}
          {intelligence.courseChangingFactors && intelligence.courseChangingFactors.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Course Changing Factors</h4>
              <div className="space-y-2">
                {intelligence.courseChangingFactors.map((factor, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{factor.factor}</span>
                    </div>
                    <div className="flex gap-4 text-xs text-slate-500">
                      {factor.probability && <span>Probability: {factor.probability}</span>}
                      {factor.impact && <span>Impact: {factor.impact}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Media Landscape */}
          {intelligence.mediaLandscape && (
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Media Landscape</h4>
              <div className="grid gap-4 md:grid-cols-2">
                {intelligence.mediaLandscape.local && intelligence.mediaLandscape.local.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-1">Local Media:</p>
                    <ul className="space-y-1">
                      {intelligence.mediaLandscape.local.map((m, idx) => (
                        <li key={idx} className="text-xs text-slate-700 dark:text-slate-300">{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {intelligence.mediaLandscape.social && intelligence.mediaLandscape.social.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-1">Social Media:</p>
                    <ul className="space-y-1">
                      {intelligence.mediaLandscape.social.map((m, idx) => (
                        <li key={idx} className="text-xs text-slate-700 dark:text-slate-300">{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Government Schemes */}
          {intelligence.governmentSchemes && intelligence.governmentSchemes.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Government Schemes</h4>
              <div className="flex flex-wrap gap-2">
                {intelligence.governmentSchemes.map((scheme, idx) => (
                  <span key={idx} className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                    {scheme}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Voter Outreach */}
          {intelligence.voterOutreach && (
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Voter Outreach</h4>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 space-y-2">
                {intelligence.voterOutreach.voterTurnout && (
                  <div>
                    <span className="text-xs font-medium text-slate-500">Voter Turnout: </span>
                    <span className="text-xs text-slate-700 dark:text-slate-300">{intelligence.voterOutreach.voterTurnout}</span>
                  </div>
                )}
                {intelligence.voterOutreach.voterProfile && intelligence.voterOutreach.voterProfile.length > 0 && (
                  <div>
                    <span className="text-xs font-medium text-slate-500 mb-1">Voter Profile:</span>
                    <ul className="space-y-1 mt-1">
                      {intelligence.voterOutreach.voterProfile.map((v, idx) => (
                        <li key={idx} className="text-xs text-slate-700 dark:text-slate-300">• {v}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Intelligence Gaps */}
          {intelligence.intelligenceGaps && intelligence.intelligenceGaps.length > 0 && (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-semibold text-amber-700 dark:text-amber-300 mb-2">Intelligence Gaps</h4>
              <div className="flex flex-wrap gap-2">
                {intelligence.intelligenceGaps.map((gap, idx) => (
                  <span key={idx} className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-2 py-1 rounded">
                    {gap}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Data Gaps */}
          {intelligence.dataGaps.length > 0 && (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
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

          {/* Sources */}
          {intelligence.sources && intelligence.sources.length > 0 && (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Sources</h4>
              <ul className="space-y-1">
                {intelligence.sources.map((source, idx) => (
                  <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <span className="text-slate-400">→</span>
                    {source}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Visualization Recommendations */}
          {intelligence.visualizationRecommendations && intelligence.visualizationRecommendations.length > 0 && (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
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
  tier: "CRITICAL" | "HIGH" | "MEDIUM" | "RECOVERY";
  constituencies: ElectionIntelligence[];
}

function PriorityTierSection({ title, tier, constituencies }: PriorityTierSectionProps) {
  const tierColors = {
    CRITICAL: "border-red-500 bg-red-50 dark:bg-red-900/20",
    HIGH: "border-orange-500 bg-orange-50 dark:bg-orange-900/20",
    MEDIUM: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
    RECOVERY: "border-blue-500 bg-blue-50 dark:bg-blue-900/20",
  };

  const tierActionUrgency = {
    CRITICAL: "Immediate intervention required - margin under 5,000 or opposition held",
    HIGH: "Ground mobilization needed - margin under 10,000",
    MEDIUM: "Issue-specific focus required",
    RECOVERY: "Long-term rebuild strategy needed",
  };

  if (constituencies.length === 0) return null;

  return (
    <div className={`border-l-4 ${tierColors[tier]} rounded-lg p-4`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
        <Badge variant={tier === "CRITICAL" ? "danger" : tier === "HIGH" ? "warning" : "default"}>
          {tier} ({constituencies.length})
        </Badge>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{tierActionUrgency[tier]}</p>
      <div className="space-y-2">
        {constituencies.map((ac) => (
          <ConstituencyAccordion key={ac.acId} intelligence={ac} />
        ))}
      </div>
    </div>
  );
}

export default function ElectionIntelligenceSection() {
  // Group constituencies by priority tier from the data
  const critical = allConstituencyData.filter(c => c.priorityTier === "CRITICAL");
  const high = allConstituencyData.filter(c => c.priorityTier === "HIGH");
  const medium = allConstituencyData.filter(c => c.priorityTier === "MEDIUM");
  const recovery = allConstituencyData.filter(c => c.priorityTier === "RECOVERY");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Election Intelligence
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Complete analysis of all 117 constituencies with key issues, SWOT, strategic blueprints
          </p>
        </div>
        <Badge variant="success">{allConstituencyData.length} Constituencies</Badge>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
          <p className="text-sm text-red-600 dark:text-red-400">Critical Seats</p>
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
          <p className="text-sm text-blue-600 dark:text-blue-400">Recovery Target</p>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{recovery.length}</p>
        </div>
      </div>

      {/* Priority Tiers */}
      <div className="space-y-4">
        <PriorityTierSection
          title="CRITICAL - Immediate Action Required"
          tier="CRITICAL"
          constituencies={critical}
        />
        <PriorityTierSection
          title="HIGH - Ground Mobilization Needed"
          tier="HIGH"
          constituencies={high}
        />
        <PriorityTierSection
          title="MEDIUM - Issue-Specific Focus"
          tier="MEDIUM"
          constituencies={medium}
        />
        <PriorityTierSection
          title="RECOVERY - Long-Term Rebuild"
          tier="RECOVERY"
          constituencies={recovery}
        />
      </div>

      {/* All Constituencies */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
          All 117 Constituencies
        </h3>
        <div className="space-y-2">
          {allConstituencyData.map((ac) => (
            <ConstituencyAccordion key={ac.acId} intelligence={ac} />
          ))}
        </div>
      </div>
    </div>
  );
}
