// Constituency Data Loader
// Loads and transforms extracted deep document data into ElectionIntelligence format

import type { ElectionIntelligence } from "@/types/constituency-types";
import allExtractedData from "./all-extracted-deep-data.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ExtractedConstituency = Record<string, any>;

function extractPartyFromWinner(winner?: string, party?: string): "INC" | "AAP" | "SAD" | "BJP" {
  if (!winner && !party) return "INC";
  const w = (winner || party || "").toUpperCase();
  if (w.includes("INC") || w.includes("CONGRESS")) return "INC";
  if (w.includes("AAP")) return "AAP";
  if (w.includes("SAD")) return "SAD";
  if (w.includes("BJP")) return "BJP";
  if (w.includes("BSP")) return "INC"; // Map BSP to INC as fallback
  return "INC";
}

function transformToElectionIntelligence(extracted: ExtractedConstituency): ElectionIntelligence {
  // Extract party from mlaperformance if available
  let party: "INC" | "AAP" | "SAD" | "BJP" = "INC";
  let margin = 0;
  let winner = "";

  if (extracted.mlaperformance) {
    const mlaPerf = extracted.mlaperformance;
    if (typeof mlaPerf === 'object' && !Array.isArray(mlaPerf)) {
      party = extractPartyFromWinner(mlaPerf.winner, mlaPerf.party);
      winner = mlaPerf.winner || "";
      // Parse margin - if it's a string like "NEEDS VERIFICATION" or invalid, set to 0
      const marginVal = mlaPerf.marginOfVictory;
      if (typeof marginVal === 'number' && !Number.isNaN(marginVal)) {
        margin = marginVal;
      } else if (typeof marginVal === 'string') {
        const parsed = parseInt(marginVal.replace(/[^0-9]/g, ''), 10);
        margin = Number.isNaN(parsed) ? 0 : parsed;
      } else {
        margin = 0;
      }
    }
  }

  // Transform keyIssues to topIssues format
  const topIssues = (extracted.keyIssues || []).map((ki: { rank?: number; issue: string; description: string }) => ({
    issue: ki.issue,
    description: ki.description,
  }));

  // Transform caste breakdown to casteComposition
  const casteComposition: { category: string; percentage: string }[] = [];
  if (extracted.casteBreakdown) {
    if (typeof extracted.casteBreakdown === 'object' && !Array.isArray(extracted.casteBreakdown)) {
      const cb = extracted.casteBreakdown as Record<string, string>;
      for (const [category, percentage] of Object.entries(cb)) {
        if (category !== 'total' && category !== 'SC') {
          casteComposition.push({ category, percentage });
        }
      }
    }
  }
  // Extract from demographics if casteBreakdown didn't work
  if (casteComposition.length === 0 && extracted.demographics) {
    const demo = extracted.demographics;
    if (demo.jatSikhPercentage) casteComposition.push({ category: "Jat Sikh", percentage: demo.jatSikhPercentage });
    if (demo.hinduGeneralPercentage) casteComposition.push({ category: "Hindu General", percentage: demo.hinduGeneralPercentage });
    if (demo.scPercentage) casteComposition.push({ category: "SC", percentage: demo.scPercentage });
    if (demo.obcPercentage) casteComposition.push({ category: "OBC", percentage: demo.obcPercentage });
    if (demo.muslimPercentage) casteComposition.push({ category: "Muslim", percentage: demo.muslimPercentage });
    if (demo.scheduledCastes) casteComposition.push({ category: "SC", percentage: demo.scheduledCastes });
  }

  // Transform religion breakdown
  const religionBreakdown = extracted.religionBreakdown || {};

  // Transform swotAnalysis - ensure arrays
  const swotAnalysis = extracted.swotAnalysis ? {
    strengths: Array.isArray(extracted.swotAnalysis.strengths)
      ? extracted.swotAnalysis.strengths
      : extracted.swotAnalysis.strengths ? [String(extracted.swotAnalysis.strengths)] : [],
    weaknesses: Array.isArray(extracted.swotAnalysis.weaknesses)
      ? extracted.swotAnalysis.weaknesses
      : extracted.swotAnalysis.weaknesses ? [String(extracted.swotAnalysis.weaknesses)] : [],
    opportunities: Array.isArray(extracted.swotAnalysis.opportunities)
      ? extracted.swotAnalysis.opportunities
      : extracted.swotAnalysis.opportunities ? [String(extracted.swotAnalysis.opportunities)] : [],
    threats: Array.isArray(extracted.swotAnalysis.threats)
      ? extracted.swotAnalysis.threats
      : extracted.swotAnalysis.threats ? [String(extracted.swotAnalysis.threats)] : [],
  } : undefined;

  // Transform strategicBlueprint - ensure arrays
  const strategicBlueprint = extracted.strategicBlueprint ? {
    forAAP: Array.isArray(extracted.strategicBlueprint.forAAP)
      ? extracted.strategicBlueprint.forAAP
      : extracted.strategicBlueprint.forAAP ? [String(extracted.strategicBlueprint.forAAP)] : [],
    forCongress: Array.isArray(extracted.strategicBlueprint.forCongress)
      ? extracted.strategicBlueprint.forCongress
      : extracted.strategicBlueprint.forCongress ? [String(extracted.strategicBlueprint.forCongress)] : [],
    forSADBJP: Array.isArray(extracted.strategicBlueprint.forSADBJP)
      ? extracted.strategicBlueprint.forSADBJP
      : extracted.strategicBlueprint.forSADBJP ? [String(extracted.strategicBlueprint.forSADBJP)] : [],
  } : undefined;

  // Determine priority tier based on margin and party
  let priorityTier: "CRITICAL" | "HIGH" | "MEDIUM" | "RECOVERY" = "MEDIUM";
  if (party === "AAP" && margin > 10000) {
    priorityTier = "MEDIUM"; // AAP stronghold
  } else if (party === "INC" && margin < 5000) {
    priorityTier = "CRITICAL";
  } else if (party === "INC" && margin < 10000) {
    priorityTier = "HIGH";
  } else if (margin < 3000) {
    priorityTier = "CRITICAL";
  } else if (margin < 10000) {
    priorityTier = "HIGH";
  }

  return {
    acId: extracted.acId,
    acNumber: extracted.acNumber || parseInt(String(extracted.acId || "AC001").replace("AC", "")),
    name: extracted.name,
    district: extracted.district,
    region: (extracted.region as ElectionIntelligence["region"]) || "Malwa",
    type: (extracted.category as ElectionIntelligence["type"]) || "General",
    lokSabha: extracted.lokSabha || "Unknown",

    executiveSummary: extracted.executiveSummary,

    electionResults: [],
    totalElectors: extracted.totalElectors || null,
    voterTurnout: extracted.voterTurnout || null,
    margin,
    party,
    priorityTier,

    geographicContext: extracted.geographicContext,
    borderProximity: extracted.borderProximity,
    floodRisk: extracted.floodRisk,
    topographicZone: extracted.topographicZone,

    casteComposition,
    religionBreakdown,

    demographics: extracted.demographics ? {
      totalPopulation: (() => {
        if (typeof extracted.demographics.population === 'object' && extracted.demographics.population?.total) {
          const val = String(extracted.demographics.population.total).replace(/[^0-9]/g, "");
          return val ? parseInt(val) : undefined;
        }
        return undefined;
      })(),
      sexRatio: extracted.demographics.sexRatio as string,
      urban: extracted.demographics.urban as number | undefined,
      rural: extracted.demographics.rural as number | undefined,
    } : undefined,

    topIssues,
    keyIssues: extracted.keyIssues,

    congressPosition: `Seat held by ${party} with margin of ${margin.toLocaleString()} votes.`,
    governanceGap: Array.isArray(extracted.governanceGap)
      ? extracted.governanceGap
      : extracted.governanceGap ? [String(extracted.governanceGap)] : [],
    mlaperformance: (() => {
      if (Array.isArray(extracted.mlaperformance)) return extracted.mlaperformance;
      if (typeof extracted.mlaperformance === 'object' && extracted.mlaperformance !== null) {
        const mla = extracted.mlaperformance as Record<string, string>;
        const parts: string[] = [];
        if (mla.winner && mla.winner !== "NEEDS VERIFICATION") parts.push(`Winner: ${mla.winner}`);
        if (mla.party) parts.push(`Party: ${mla.party}`);
        if (mla.marginOfVictory && mla.marginOfVictory !== "NEEDS VERIFICATION") parts.push(`Margin: ${mla.marginOfVictory}`);
        if (mla.votesSecured && mla.votesSecured !== "NEEDS VERIFICATION") parts.push(`Votes: ${mla.votesSecured}`);
        return parts.length > 0 ? parts : [];
      }
      return [];
    })(),

    influencers: extracted.influencers,
    mediaLandscape: extracted.mediaLandscape,
    swotAnalysis,
    strategicBlueprint,
    courseChangingFactors: extracted.courseChangingFactors,

    attackLines: topIssues.slice(0, 3).map((ki: { issue: string; description: string }) => ({
      issue: ki.issue,
      message: (ki.description || "").substring(0, 100),
      audience: "All voters",
    })),

    recommendedCandidate: null,

    governmentSchemes: extracted.governmentSchemes,
    voterOutreach: extracted.voterOutreach,

    dataGaps: extracted.intelligenceGaps || [],
    intelligenceGaps: extracted.intelligenceGaps,
    requiresVerification: extracted.requiresVerification,

    crossReferences: [],
    strategicImplications: [],

    sources: extracted.sources,

    visualizationRecommendations: [],
    uiComponentSpecs: [],
  };
}

// Transform all extracted data
export function loadAllConstituencyData(): ElectionIntelligence[] {
  const entries = Object.values(allExtractedData) as ExtractedConstituency[];
  // Filter out entries that don't have valid constituency data (placeholder entries with research metadata)
  const validEntries = entries.filter(e => e.acId && e.acId.startsWith('AC') && e.name);
  return validEntries.map(transformToElectionIntelligence);
}

// Get data by region
export function getConstituenciesByRegion(region: string): ElectionIntelligence[] {
  return loadAllConstituencyData().filter(c => c.region.toLowerCase() === region.toLowerCase());
}

// Get data by AC ID
export function getConstituencyById(acId: string): ElectionIntelligence | undefined {
  return loadAllConstituencyData().find(c => c.acId === acId);
}

// Export all data for direct use
export const allConstituencyData = loadAllConstituencyData();

// Export by region for convenience (use startsWith to handle variants like "Malwa (Border)")
export const malwaData = allConstituencyData.filter(c => c.region.startsWith("Malwa"));
export const majhaData = allConstituencyData.filter(c => c.region === "Majha");
export const doabaData = allConstituencyData.filter(c => c.region.startsWith("Doaba"));
export const powadhData = allConstituencyData.filter(c => c.region.startsWith("Powadh"));
