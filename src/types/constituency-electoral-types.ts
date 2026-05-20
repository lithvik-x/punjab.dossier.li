// Constituency Electoral Types
// Derived from: b6-punjab-constituency-electoral-history.md

import type { Region } from "./kpi-types";

// ==========================================
// ELECTORAL HISTORY
// ==========================================

export interface ElectoralResult {
  year: 2017 | 2022;
  congress: number;
  aap: number;
  sad: number;
  bjp: number;
  others: number;
}

export interface ConstituencyElectoralHistory {
  id: number;
  name: string;
  district: string;
  region: Region;
  reservation: "General" | "SC" | "ST";
  results: {
    2017: {
      congressSeats: number;
      aapSeats: number;
      sadSeats: number;
      bjpSeats: number;
      othersSeats: number;
      margin?: number;
      voteShare?: number;
    };
    2022: {
      congressSeats: number;
      aapSeats: number;
      sadSeats: number;
      bjpSeats: number;
      othersSeats: number;
      margin?: number;
      voteShare?: number;
    };
  };
  swing?: {
    direction: "to_congress" | "to_aap" | "to_sad" | "to_bjp" | "stable";
    magnitude: string; // e.g., "15-20%", "25-30%"
  };
}

export interface LokSabhaMapping {
  name: string;
  seats: number;
  assemblySegments: string[];
}

export interface LokSabhaResult {
  year: 2019 | 2024;
  constituency: string;
  winner: string;
  party: "Congress" | "AAP" | "SAD" | "BJP" | "Others";
  voteShare: number;
}

// ==========================================
// REGIONAL SEAT COUNTS
// ==========================================

export interface RegionalSeatCount {
  region: Region;
  totalSeats: number;
  congress2017: number;
  congress2022: number;
  aap2017: number;
  aap2022: number;
  sad2017: number;
  sad2022: number;
  bjp2017: number;
  bjp2022: number;
}

// ==========================================
// ELECTION OUTCOME PATTERNS
// ==========================================

export interface MCOutcomePattern {
  mcResult: string;
  assemblyImpact: string;
  signal: string;
}

export interface AssemblyMCResult {
  mcResult: string;
  assemblySeatImpact: string;
}
