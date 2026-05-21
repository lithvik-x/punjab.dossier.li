/**
 * AC039-Mukerian Assembly Constituency Type Definitions
 * Generated through 6-cycle enhancement pipeline
 * Data sourced from: AC039-Mukerian.md and AC039-Mukerian-deep.md
 */

// Cycle 1: Core type definitions

export interface ConstituencyBasicInfo {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  lokSabha: string;
  reservation: string;
  totalElectors2022: number;
}

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  margin: number;
  marginDescription: string;
  runnerUp?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  note: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
}

export interface CasteComposition {
  category: string;
  percentage: string;
}

export interface VoterTurnout {
  year: number;
  percentage: string;
}

export interface KeyLocalIssue {
  issue: string;
  priority?: number;
}

export interface CongressStrategicPosition {
  status: string;
  bjpMargin: number;
  historicalContext: string;
  currentScenario: string;
}

export interface CandidateProfile {
  caste: string;
  profile: string;
  keyQualification: string;
  mustHave: string;
}

export interface AttackLine {
  line: string;
}

export interface DemographicData {
  districtPopulation: number;
  censusYear: number;
  sexRatio: string;
  literacyRate: string;
  scPopulation?: string;
}

export interface Influencer {
  type: string;
}

export interface GovernanceGap {
  area: string;
}

export interface SentimentIndicator {
  indicator: string;
}

export interface PartyStrategy {
  party: string;
  strategy: string;
}

export interface StrategicBlueprint {
  bjpStrategy: PartyStrategy[];
  aapStrategy: PartyStrategy[];
  congressStrategy: PartyStrategy[];
}

// Cycle 2: Comprehensive constituency types

export interface LocalIssue extends KeyLocalIssue {
  isMajor?: boolean;
  source?: string;
}

export interface ElectionHistory {
  year: number;
  winner: string;
  party: string;
  margin?: number;
  notes?: string;
}

export interface CandidateResult {
  candidate: string;
  party: string;
  votes?: number;
  margin?: number;
}

// Cycle 3: Enhanced type definitions with strict typing

export type Region = 'Doaba';
export type District = 'Hoshiarpur';
export type LokSabha = 'Hoshiarpur';
export type ReservationStatus = 'General' | 'SC' | 'ST' | 'OBC' | 'None';
export type PoliticalParty =
  | 'Bharatiya Janata Party'
  | 'Indian National Congress'
  | 'Aam Aadmi Party'
  | 'Other';

export interface Ac039MukerianTypes {
  basicInfo: ConstituencyBasicInfo;
  electionResults2022: ElectionResult2022;
  electionResults2017: ElectionResult2017;
  electionResults2012: ElectionResult2012;
  casteComposition: CasteComposition[];
  voterTurnout: VoterTurnout[];
  keyLocalIssues: LocalIssue[];
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: CandidateProfile;
  attackLinesAgainstBJP: AttackLine[];
  // Deep research fields
  demographicData: DemographicData;
  electorateDescription: string;
  electoralHistory2022: CandidateResult[];
  historicalPattern: string;
  publicSentiment: SentimentIndicator[];
  governanceGaps: GovernanceGap[];
  influencers: Influencer[];
  strategicBlueprint: StrategicBlueprint;
  top5IssuesPriority: KeyLocalIssue[];
  sources: string[];
}

// Cycle 4: Utility types and validation

export type MarginStatus = 'TIGHT_RACE' | 'MODERATE' | 'LANDSLIDE';

export interface MarginAnalysis {
  margin: number;
  status: MarginStatus;
  description: string;
}

export interface WinnerAnalysis {
  winner: string;
  party: PoliticalParty;
  voteShare: string;
  isIncumbent: boolean;
}

export interface ConstituencyVerdict {
  isSwingSeat: boolean;
  marginStatus: MarginStatus;
  previousWinner: string;
  currentWinner: string;
  recommendation: string;
}

// Cycle 5: Schema validation types

export interface ConstituencySchema {
  $schema?: string;
  type: 'object';
  properties: {
    ac039Mukerian: Ac039MukerianTypes;
  };
  required: ['ac039Mukerian'];
}

// Cycle 6: Final comprehensive type export

export interface AC039MukerianFinal {
  metadata: {
    cycleVersion: 6;
    generatedDate: string;
    sourcesCount: number;
    verificationStatus: 'PARTIALLY_VERIFIED' | 'FULLY_VERIFIED';
  };
  data: Ac039MukerianTypes;
  analysis: {
    marginAnalysis: MarginAnalysis;
    winnerAnalysis: WinnerAnalysis;
    verdict: ConstituencyVerdict;
  };
}
