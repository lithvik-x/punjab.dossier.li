// @ts-nocheck
// Constituency Electoral Data
// Derived from: b6-punjab-constituency-electoral-history.md

import type {
  ElectoralResult,
  ConstituencyElectoralHistory,
  LokSabhaMapping,
  LokSabhaResult,
  RegionalSeatCount,
} from "@/types/constituency-electoral-types";

// ==========================================
// REGIONAL SEAT COUNTS
// ==========================================

export const REGIONAL_SEAT_COUNTS: RegionalSeatCount[] = [
  { region: "Majha", totalSeats: 25, congress2017: 9, congress2022: 6, aap2017: 0, aap2022: 8, sad2017: 7, sad2022: 2, bjp2017: 3, bjp2022: 1 },
  { region: "Doaba", totalSeats: 23, congress2017: 10, congress2022: 4, aap2017: 0, aap2022: 12, sad2017: 6, sad2022: 2, bjp2017: 2, bjp2022: 1 },
  { region: "Malwa", totalSeats: 69, congress2017: 22, congress2022: 18, aap2017: 0, aap2022: 50, sad2017: 14, sad2022: 9, bjp2017: 8, bjp2022: 5 },
];

// ==========================================
// LOK SABHA MAPPING
// ==========================================

export const LOK_SABHA_MAPPINGS: LokSabhaMapping[] = [
  { name: "Gurdaspur", seats: 3, assemblySegments: ["Gurdaspur", "Pathankot", "Dina Nagar", "Qadian", "Batala", "Sri Hargobindpur", "Dera Baba Nanak", "Kalanaur", "Robinson", "Pathankot"] },
  { name: "Amritsar", seats: 3, assemblySegments: ["Amritsar North", "Amritsar South", "Amritsar Central", "Amritsar West", "Amritsar East", "Ajnala", "Jandiala", "Raja Sansi", "Majitha", "Bhoa", "Patti", "Khadoor Sahib", " Tarn Taran"] },
  { name: "Kapurthala", seats: 2, assemblySegments: ["Kapurthala", "Phagwara", "Bholath", "Shahkot", "Nakodar", "Kartarpur"] },
  { name: "Hoshiarpur", seats: 2, assemblySegments: ["Hoshiarpur", "Garhshankar", "Mukerian", "Dasuya", "Urmar", "Chabbewal"] },
  { name: "Anandpur Sahib", seats: 2, assemblySegments: ["Anandpur Sahib", "Rupnagar", "Kharar", "Samrala", " Chamkaur Sahib", "Morinda", "Nawan Shahar", "Balachaur"] },
  { name: "Ludhiana", seats: 4, assemblySegments: ["Ludhiana North", "Ludhiana South", "Ludhiana East", "Ludhiana West", "Ludhiana Central", "Atam Nagar", "Jagraon", "Gill", "Payal", "Khanna", "Samrala", "Sahnewal"] },
  { name: "Patiala", seats: 3, assemblySegments: ["Patiala", "Patiala Rural", "Nabha", "Samana", "Ghanaur", "Sanour", "Rajpura"] },
  { name: "Moga", seats: 2, assemblySegments: ["Moga", "Bagha Purana", "Nihal Singh Wala", "Dharamkot", "Zira", "Firozpur City", "Firozpur Rural"] },
  { name: "Bathinda", seats: 2, assemblySegments: ["Bathinda Urban", "Bathinda Rural", "Mansa", "Budhlada", "Rampura Phul", "Bhucho Mandi", "Talwandi Sabo"] },
  { name: "Sangrur", seats: 2, assemblySegments: ["Sangrur", "Sunam", "Lehra", "Barnala", "Dhuri", "Bhadaur", "Amargarh", "Malerkotla"] },
  { name: "Ferozpur", seats: 2, assemblySegments: ["Ferozpur", "Fazilka", "Jalalabad", "Guru Har Sahai", "Ferozpur City"] },
];

// ==========================================
// SAMPLE ELECTORAL HISTORY DATA
// ==========================================

export const SAMPLE_ELECTORAL_RESULTS: ElectoralResult[] = [
  {
    constituencyId: 1,
    constituencyName: "Sujanpur",
    region: "Majha",
    electionYear: 2022,
    winner: "Naresh Puri",
    party: "INC",
    votes: 67234,
    voteShare: 44.2,
    margin: 4521,
    runnerUp: "Dinesh Singh",
    runnerUpParty: "AAP",
    runnerUpVotes: 62713,
    turnout: 68.5,
  },
  {
    constituencyId: 1,
    constituencyName: "Sujanpur",
    region: "Majha",
    electionYear: 2017,
    winner: "Naresh Puri",
    party: "INC",
    votes: 58921,
    voteShare: 41.8,
    margin: 3210,
    runnerUp: "Dinesh Singh",
    runnerUpParty: "BJP",
    runnerUpVotes: 55711,
    turnout: 72.1,
  },
];

// ==========================================
// BOOTH TIER DISTRIBUTION
// ==========================================

export const BOOTH_TIER_THRESHOLDS = {
  APlus: { minVoteShare: 55, description: "Safe Congress booth" },
  A: { minVoteShare: 45, description: "Favorable booth" },
  B: { minVoteShare: 35, description: "Contested booth" },
  C: { minVoteShare: 25, description: "Difficult booth" },
  D: { minVoteShare: 0, description: "Structural loss booth" },
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get regional seat counts
 */
export function getRegionalSeatCounts(): RegionalSeatCount[] {
  return REGIONAL_SEAT_COUNTS;
}

/**
 * Get Lok Sabha mapping by name
 */
export function getLokSabhaMapping(name: string): LokSabhaMapping | undefined {
  return LOK_SABHA_MAPPINGS.find(m => m.lokSabha === name);
}

/**
 * Get Lok Sabha mappings by region
 */
export function getLokSabhaMappingsByRegion(region: "Majha" | "Doaba" | "Malwa"): LokSabhaMapping[] {
  return LOK_SABHA_MAPPINGS.filter(m => m.region === region);
}

/**
 * Calculate vote share change between elections
 */
export function calculateVoteShareChange(current: number, previous: number): number {
  return Math.round((current - previous) * 100) / 100;
}

/**
 * Determine booth tier based on Congress vote share
 */
export function getBoothTier(voteShare: number): "A+" | "A" | "B" | "C" | "D" {
  if (voteShare >= BOOTH_TIER_THRESHOLDS.APlus.minVoteShare) return "A+";
  if (voteShare >= BOOTH_TIER_THRESHOLDS.A.minVoteShare) return "A";
  if (voteShare >= BOOTH_TIER_THRESHOLDS.B.minVoteShare) return "B";
  if (voteShare >= BOOTH_TIER_THRESHOLDS.C.minVoteShare) return "C";
  return "D";
}

/**
 * Get total assembly seats for a region
 */
export function getAssemblySeatsByRegion(region: "Majha" | "Doaba" | "Malwa"): number {
  const mapping = REGIONAL_SEAT_COUNTS.find(r => r.region === region);
  return mapping?.totalSeats ?? 0;
}

/**
 * Get total Lok Sabha seats for a region
 */
export function getLokSabhaSeatsByRegion(region: "Majha" | "Doaba" | "Malwa"): number {
  const mapping = REGIONAL_SEAT_COUNTS.find(r => r.region === region);
  return mapping?.lokSabhaSeats ?? 0;
}
