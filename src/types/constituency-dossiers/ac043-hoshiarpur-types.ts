/**
 * AC043-Hoshiarpur Assembly Constituency Dossier Types
 * Generated from AC043-Hoshiarpur.md and AC043-Hoshiarpur-deep.md
 * Research Date: 20 May 2026
 */

// ============================================================================
// CONSTITUENCY IDENTITY & PROFILE
// ============================================================================

export interface ConstituencyProfile {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "OBC";
  lokSabhaSeat: string;
  townType: string;
  location?: string; // District headquarters, semi-urban
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: number;
  runnerUp: string;
  runnerUpParty: string;
  note: string;
}

export interface HistoricalElection {
  year: number;
  winner: string;
  party: string;
  margin?: string;
}

export interface ElectoralHistory {
  2022: ElectionResult2022;
  2017: HistoricalElection;
  2012: HistoricalElection;
}

// ============================================================================
// DEMOGRAPHICS & CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  sikhs: number; // ~60%
  hindu: number; // ~32%
  sc: number; // ~26-28%
  other: number; // ~8%
}

export interface DistrictDemographics {
  totalPopulation: number;
  scPopulation: number;
  sexRatio: number;
  literacyRate: number;
  area: number; // sq km
}

// ============================================================================
// ELECTORATE DATA
// ============================================================================

export interface ElectionElectorate {
  year: number;
  totalElectors: number;
  voterTurnout: number;
  turnoutPercentage: number;
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssues {
  primaryIssues: string[];
  top5Issues?: string[]; // From deep research
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: {
    lossIn2022: boolean;
    margin: number;
    history: string;
    opportunity: string;
  };
  strategicRecommendations: string[];
}

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

export interface CandidateProfile {
  caste: string;
  background: string;
  age: string;
  base: string;
  image: string;
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLines {
  lines: string[];
}

// ============================================================================
// VOTE SHARE ANALYSIS
// ============================================================================

export interface PartyVoteShare {
  party: string;
  voteShare: number;
}

export interface VoteShareAnalysis {
  parties: PartyVoteShare[];
  congressGapToWin: number;
}

// ============================================================================
// GOVERNANCE & DEVELOPMENT
// ============================================================================

export interface DevelopmentPackage {
  amount: number; // in crores
  focus: string;
  announcementDate?: string;
}

export interface GovernanceGap {
  administrativeStructure: string[];
  developmentPackages: DevelopmentPackage[];
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface StrategicBlueprint {
  aapStrategy: string[];
  congressStrategy: string[];
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface Influencers {
  categories: string[];
}

// ============================================================================
// PUBLIC SENTIMENT
// ============================================================================

export interface PublicSentiment {
  indicators: string[];
}

// ============================================================================
// RECOMMENDATIONS SUMMARY
// ============================================================================

export interface RecommendationsSummary {
  priority: string;
  candidate: string;
  narrative: string;
  voterCoalition: string;
  marginReversalPotential: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC043HoshiarpurDossier {
  // Metadata
  researchMicroTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: string;
  dataCurrency: string;

  // Core Sections
  constituencyProfile: ConstituencyProfile;
  electoralHistory: ElectoralHistory;
  casteComposition: CasteComposition;
  districtDemographics: DistrictDemographics;
  electorateData: ElectionElectorate[];
  localIssues: LocalIssues;
  congressStrategicPosition: CongressStrategicPosition;
  candidateProfile: CandidateProfile;
  attackLines: AttackLines;
  voteShareAnalysis: VoteShareAnalysis;
  governanceGap: GovernanceGap;
  influencers: Influencers;
  publicSentiment: PublicSentiment;
  strategicBlueprint: StrategicBlueprint;
  recommendationsSummary: RecommendationsSummary;

  // Sources
  sources: string[];
  compiledDate: string;
}
