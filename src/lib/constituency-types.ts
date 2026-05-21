// Punjab Congress Intelligence Dashboard - Constituency Data Types

export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  votePercentage?: string;
  margin: string;
}

export interface CasteComposition {
  category: string;
  percentage: string;
}

export interface LocalIssue {
  issue: string;
  description: string;
}

export interface CandidateProfile {
  profile: string;
  caste?: string;
  keyQualities: string[];
}

export interface AttackLine {
  issue: string;
  message: string;
  audience: string;
}

export interface ConstituencyData {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "General" | "SC" | "ST";
  lokSabha: string;
  electionResults: ElectionResult[];
  totalElectors?: string;
  voterTurnout?: string;
  casteComposition: CasteComposition[];
  topIssues: LocalIssue[];
  congressPosition: string;
  recommendedCandidate: CandidateProfile;
  attackLines: AttackLine[];
  margin: number;
  party: "INC" | "AAP" | "SAD" | "BJP";
  priorityTier: "CRITICAL" | "HIGH" | "MEDIUM" | "RECOVERY";
  dataGaps: string[];
  crossReferences: string[];
  strategicImplications: string[];
  visualizationRecommendations?: string[];
  uiComponentSpecs?: string[];
}

export interface BatchData {
  batchNumber: number;
  region: string;
  districts: string;
  constituencies: ConstituencyData[];
  executiveSummary: string;
}

export interface PriorityTier {
  tier: "CRITICAL" | "HIGH" | "MEDIUM" | "RECOVERY";
  constituencies: string[];
  margin: string;
  actionUrgency: string;
}

export interface RegionSummary {
  region: string;
  totalSeats: number;
  congressSeats: number;
  aapSeats: number;
  sadSeats: number;
  bjpSeats: number;
  criticalSeats: string[];
}
