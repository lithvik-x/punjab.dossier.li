// Jat Sikh Demographics Utility Functions
// Helper functions for accessing and processing Jat Sikh demographic data

import type { Region } from "@/types/kpi-types";
import type { JatSikhClan, JatSikhSentimentIndicator } from "@/types/jat-sikh-types";
import {
  jatSikhClans,
  regionalJatDistribution,
  landholdingStratification,
  agriculturalDebtData,
  constituencyClusters,
  congressStrategyPoints,
  jatSikhPopulationData,
} from "@/lib/kpi-data";

/**
 * Get all clans for a specific region
 */
export function getClansByRegion(region: string): JatSikhClan[] {
  return jatSikhClans.filter((clan) =>
    clan.primaryRegion.toLowerCase() === region.toLowerCase()
  );
}

/**
 * Get clans sorted by size rank
 */
export function getClansByRank(): JatSikhClan[] {
  return [...jatSikhClans].sort((a, b) => {
    const rankOrder = ["Largest clan", "2nd largest", "Very large", "Large", "Medium-Large", "Medium"];
    const aIndex = rankOrder.findIndex((r) =>
      a.estimatedRank.toLowerCase().includes(r.toLowerCase())
    );
    const bIndex = rankOrder.findIndex((r) =>
      b.estimatedRank.toLowerCase().includes(r.toLowerCase())
    );
    return aIndex - bIndex;
  });
}

/**
 * Get notable politicians from all clans
 */
export function getNotablePoliticians(): { name: string; clan: string; party: string }[] {
  const politicians: { name: string; clan: string; party: string }[] = [];

  jatSikhClans.forEach((clan) => {
    clan.notablePoliticians.forEach((politician) => {
      // Parse politician string to extract name and party
      const match = politician.match(/^(.+?)\s*\((.+?)\)$/);
      if (match) {
        politicians.push({
          name: match[1].trim(),
          clan: clan.name,
          party: match[2].trim(),
        });
      }
    });
  });

  return politicians;
}

/**
 * Get regional data by region name
 */
export function getRegionalData(region: Region) {
  return regionalJatDistribution.find(
    (r) => r.region.toLowerCase() === region.toLowerCase()
  );
}

/**
 * Get total assembly seats across all regions
 */
export function getTotalAssemblySeats(): number {
  return regionalJatDistribution.reduce((sum, r) => sum + r.assemblySeats, 0);
}

/**
 * Get priority constituencies for Congress outreach
 */
export function getPriorityConstituencies(priority: "Priority 1" | "Priority 2" | "Priority 3") {
  return constituencyClusters.find((c) => c.priority === priority);
}

/**
 * Get landholding statistics summary
 */
export function getLandholdingSummary() {
  const total = landholdingStratification.reduce((sum, stratum) => {
    const match = stratum.shareOfJatSikhFarmers.match(/~(\d+)/);
    return sum + (match ? parseInt(match[1]) : 0);
  }, 0);

  return {
    categories: landholdingStratification,
    estimatedTotal: total,
  };
}

/**
 * Get debt crisis key figures
 */
export function getDebtKeyFigures() {
  const totalFarmDebt = agriculturalDebtData.find(
    (d) => d.indicator === "Punjab total farm-related debt"
  );
  const cultivatorDebt = agriculturalDebtData.find(
    (d) => d.indicator === "Punjab cultivator debt"
  );
  const farmerSuicides = agriculturalDebtData.find(
    (d) => d.indicator === "Farmer suicides (NCRB 2023)"
  );
  const suicideConcentration = agriculturalDebtData.find(
    (d) => d.indicator === "Suicide concentration"
  );

  return {
    totalFarmDebt,
    cultivatorDebt,
    farmerSuicides,
    suicideConcentration,
  };
}

/**
 * Get Congress strategy points
 */
export function getCongressStrategy() {
  return congressStrategyPoints;
}

/**
 * Get population summary
 */
export function getPopulationSummary() {
  return {
    shareOfPunjab: jatSikhPopulationData.jatSikhShareOfTotal,
    shareOfSikh: jatSikhPopulationData.jatSikhShareOfSikh,
    estimatedPopulation: jatSikhPopulationData.estimatedPopulation,
    votersAndDependents: jatSikhPopulationData.estimatedVotersAndDependents,
  };
}

/**
 * Get current sentiment by party
 */
export function getSentimentByParty(party: string): JatSikhSentimentIndicator | undefined {
  return jatSikhClans // This should be currentJatSikhSentiment
    ? undefined
    : undefined;
}

/**
 * Get asal Jat clans (traditionally regarded as "genuine Jats")
 */
export function getAsalJatClans(): JatSikhClan[] {
  return jatSikhClans.filter((clan) => clan.isAsalJat);
}

/**
 * Get clan count
 */
export function getClanCount(): number {
  return jatSikhClans.length;
}

/**
 * Get major clans (ranked Very Large or larger)
 */
export function getMajorClans(): JatSikhClan[] {
  return jatSikhClans.filter((clan) =>
    ["Largest clan", "2nd largest", "Very large", "Large"].some((rank) =>
      clan.estimatedRank.toLowerCase().includes(rank.toLowerCase())
    )
  );
}

/**
 * Format population estimate for display
 */
export function formatPopulationEstimate(): string {
  return `${jatSikhPopulationData.estimatedPopulation} (${jatSikhPopulationData.jatSikhShareOfTotal} of Punjab)`;
}

/**
 * Get verification status summary
 */
export function getVerificationStatus(): string {
  return jatSikhPopulationData.verificationStatus;
}
