// Electoral Data Types - Punjab 2024 Lok Sabha & Assembly Composition
// Derived from: research-P3/electoral-data/A6.01_ls2024_detailed.md, A6.05_assembly_composition.md
// Research Date: May 2026 | Status: COMPLETE

import type { ACClassification, Region } from "./kpi-types";

// ==========================================
// METADATA
// ==========================================

export interface ElectoralDataMetadata {
  researchDate: string;
  sourceType: string;
  analyst: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// LOK SABHA 2024 TYPES
// ==========================================

export interface LS2024ConstituencyResult {
  id: number;
  name: string;
  winner: string;
  party: string;
  votes: number;
  percent: number;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpVotes: number;
  runnerUpPercent: number;
  margin: number;
  turnout: number;
  region: Region;
  reserved: "SC" | "GEN";
}

export interface LS2024PartyPerformance {
  party: string;
  seatsWon: number;
  voteShare: number;
  votesPolled: number;
  change?: number;
}

export interface LS2024RegionalBreakdown {
  region: Region;
  totalSeats: number;
  congress: number;
  aap: number;
  sad: number;
  independent: number;
  bjp: number;
  turnout: number;
}

export interface LS2024TurnoutAnalysis {
  constituency: string;
  turnout: number;
  changeVs2019: number;
}

export interface LS2024MarginAnalysis {
  constituency: string;
  winner: string;
  margin: number;
  winnerPercent: number;
  type: "close" | "landslide";
}

export interface LS2024AssemblySegmentLead {
  party: string;
  segmentsLed2024: number;
  assemblySeatsWon2022: number;
  change: number;
}

// ==========================================
// ASSEMBLY COMPOSITION TYPES
// ==========================================

export interface AssemblyPartyComposition {
  party: string;
  originalSeats2022: number;
  currentSeatsMay2026: number;
  change: number;
  voteShare2022: number;
  status: "GOVERNMENT" | "OPPOSITION" | "OTHER";
}

export interface AssemblyMLA {
  acNumber: number;
  constituency: string;
  name: string;
  party: string;
  position?: string;
  notes?: string;
}

export interface AssemblyLeadership {
  position: string;
  name: string;
  party: string;
  since: string;
}

export interface BypollResult {
  date: string;
  constituency: string;
  winner: string;
  winnerParty: string;
  previousWinner: string;
  previousParty: string;
  swing: string;
}

export interface DefectionEvent {
  date: string;
  description: string;
  impact: string;
  affectedParty: string;
  gainingParty?: string;
}

// ==========================================
// MAIN KPI DATA STRUCTURE
// ==========================================

export interface ElectoralDataKPI {
  metadata: ElectoralDataMetadata;

  // Lok Sabha 2024 Data
  ls2024: {
    overview: {
      totalElectors: number;
      totalVotesPolled: number;
      turnout: number;
      totalCandidates: number;
      totalConstituencies: number;
    };
    partyPerformance: LS2024PartyPerformance[];
    constituencyResults: LS2024ConstituencyResult[];
    regionalBreakdown: LS2024RegionalBreakdown[];
    turnoutAnalysis: LS2024TurnoutAnalysis[];
    marginAnalysis: {
      closest: LS2024MarginAnalysis[];
      largest: LS2024MarginAnalysis[];
    };
    assemblySegmentLeads: LS2024AssemblySegmentLead[];
    keyTakeaways: string[];
  };

  // Assembly Composition Data
  assemblyComposition: {
    currentSeats: AssemblyPartyComposition[];
    governmentSeats: number;
    oppositionSeats: number;
    assemblyLeadership: AssemblyLeadership[];
    mlasByParty: {
      party: string;
      mlas: AssemblyMLA[];
    }[];
    byPollResults: BypollResult[];
    defectionEvents: DefectionEvent[];
    timeline: {
      event: string;
      date: string;
      impact: string;
    }[];
  };

  // Sources
  sources: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const LOK_SABHA_SEATS_2024 = {
  TOTAL: 13,
  GENERAL: 9,
  SC_RESERVED: 4,
} as const;

export const REGIONS = {
  MALWA: "Malwa",
  MAJHA: "Majha",
  DOABA: "Doaba",
} as const;

export const REGION_SEAT_COUNTS: Record<Region, number> = {
  Malwa: 8,
  Majha: 3,
  Doaba: 2,
  Powadh: 10,
  Statewide: 13,
};

export const ASSEMBLY_TOTAL_SEATS = 117;
export const SC_RESERVED_SEATS = 34;
export const GENERAL_SEATS = 83;

export const MAJOR_PARTIES = [
  "INC",
  "AAP",
  "SAD",
  "BJP",
  "BSP",
  "IND",
] as const;

export const PARTY_FULL_NAMES: Record<string, string> = {
  INC: "Indian National Congress",
  AAP: "Aam Aadmi Party",
  SAD: "Shiromani Akali Dal",
  BJP: "Bharatiya Janata Party",
  BSP: "Bahujan Samaj Party",
  IND: "Independent",
};
