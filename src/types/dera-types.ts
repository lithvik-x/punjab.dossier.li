// Dera & Religious Sect Influence Types for Punjab 2027
// Derived from: MP1-foundational/demographics/dera-influence-mapping.md

// ==========================================
// CORE DERA TYPES
// ==========================================

export type DeraDisposition = "NEUTRAL" | "LEANING_BJP" | "LEANING_CONGRESS" | "LEANING_AAP" | "SHIFTING_TO_SAD_BJP" | "FORMALLY_NEUTRAL_BJP_GAINING";
export type InfluenceLevel = "HIGH" | "MEDIUM" | "LOW" | "LOW-MEDIUM";
export type CommunityBase = "Dalit" | "OBC" | "Jat Sikh" | "Ravidassia" | "Urban Middle Class" | "Cross-Caste" | "Namdhari" | "Nirankari";
export type Region = "Malwa" | "Majha" | "Doaba";

export interface DeraHead {
  name: string;
  title?: string;
  status?: string;
  since?: string;
  note?: string;
}

export interface DeraPoliticalHistory {
  election: string;
  endorsed: string;
  outcome: string;
}

export interface DeraConstituencyInfluence {
  constituency: string;
  district: string;
  influenceLevel: InfluenceLevel;
  notes: string;
}

export interface DeraProfile {
  id: string;
  name: string;
  abbreviation: string;
  headquarters: string;
  location?: string;
  head: DeraHead;
  estimatedFollowers: string;
  punjabFollowerConcentration: string;
  primaryDemographicBase: CommunityBase[];
  politicalHistory: DeraPoliticalHistory[];
  currentDisposition: DeraDisposition;
  currentStatusNotes: string[];
  constituencyInfluence: DeraConstituencyInfluence[];
  verificationNeeded?: string;
}

export interface LocalDera {
  name: string;
  location: string;
  community: string;
  influenceArea: string;
  followerRange?: string;
}

export interface ConstituencyDeraInfluence {
  constituency: string;
  region: Region;
  district: string;
  dominantDeras: string[];
  influenceLevel: "HIGH" | "MEDIUM" | "LOW";
  winner2022?: string;
}

export interface HighInfluenceConstituency extends ConstituencyDeraInfluence {
  influenceLevel: "HIGH";
}

export interface MediumInfluenceConstituency extends ConstituencyDeraInfluence {
  influenceLevel: "MEDIUM";
}

export interface DeraInfluenceSummary {
  totalDeras: string;
  formalDeras: string;
  informalEstimates: string;
  majorDeras: number;
  constituenciesImpacted: number;
  totalAssemblyConstituencies: number;
  voteSwingPotential: string;
}

export interface BJPDeraStrategy {
  dera: string;
  approach: string;
  development: string;
}

export interface CongressDeraRecommendations {
  priority: "URGENT" | "HIGH" | "MEDIUM" | "LOW";
  dera: string;
  action: string;
  warning?: string;
}

export interface DeraIntelligenceReport {
  reportDate: string;
  source: string;
  status: string;
  classification: string;
  summary: DeraInfluenceSummary;
  majorDeras: DeraProfile[];
  localDeras: LocalDera[];
  highInfluenceConstituencies: HighInfluenceConstituency[];
  mediumInfluenceConstituencies: MediumInfluenceConstituency[];
  bjpStrategy: BJPDeraStrategy[];
  congressRecommendations: CongressDeraRecommendations[];
}
