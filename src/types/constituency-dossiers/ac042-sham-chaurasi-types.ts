/**
 * AC-042 Sham Chaurasi Assembly Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source: AC042-Sham-Chaurasi.md + AC042-ShamChaurasi-deep.md
 *
 * NOTE: User requested AC039 but ShamChaurasi is AC042 (AC039 is Mukerian).
 *       Files created as AC042 accordingly.
 */

// =============================================================================
// ENUMS & UNIONS
// =============================================================================

export type Party = "AAP" | "INC" | "SAD" | "BSP" | "OTHERS";
export type Region = "Doaba";
export type Category = "SC";
export type LokSabhaSeat = "Hoshiarpur";
export type VerificationStatus = "VERIFIED" | "PARTIALLY_VERIFIED" | "NEEDS_VERIFICATION";
export type Priority = "HIGH" | "MEDIUM" | "LOW";
export type IssuePriority = 1 | 2 | 3 | 4 | 5;
export type SCSubCategory = "Mazhabi Sikh" | "Ravidasia Sikh" | "Ad-Dharmi" | "Ramdasia";
export type InfluencerCategoryType = "Community Leaders" | "Religious" | "Local Governance" | "Youth";
export type BlueprintParty = Party | "BSP";

// =============================================================================
// CORE CONSTITUENCY IDENTITY
// =============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: Region;
  category: Category;
  lokSabhaSeat: LokSabhaSeat;
  location: string;
}

export interface ResearchMetadata {
  researchMicroTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

// =============================================================================
// EXECUTIVE SUMMARY
// =============================================================================

export interface ExecutiveSummary {
  description: string;
  winner: string;
  margin: number;
  runnerUp: string;
  runnerUpParty: Party;
  keyInsight: string;
}

// =============================================================================
// ELECTION RESULTS
// =============================================================================

export interface ElectionResult {
  year: number;
  winner: string;
  winnerParty: Party;
  margin: number;
  marginDescription?: string;
  runnerUp: string;
  runnerUpParty: Party;
  totalCandidates?: number;
  notes?: string;
}

export interface ElectionResultPartial {
  year: number;
  winner: string;
  winnerParty: Party;
  votes?: number; // undefined when marked [Votes] in source
  margin: number;
  runnerUp?: string; // undefined when marked [NEEDS VERIFICATION]
  runnerUpParty?: Party;
  notes?: string;
}

export interface VoteShareEntry {
  party: Party;
  voteSharePercent: number;
}

export interface VoteShareAnalysis {
  entries: VoteShareEntry[];
  congressGapToWin: number;
  congressGapDescription: string;
}

// =============================================================================
// DEMOGRAPHICS & CASTE COMPOSITION
// =============================================================================

export interface CasteCategoryEntry {
  category: string;
  estimatedPercent: number;
}

export interface CasteComposition {
  entries: CasteCategoryEntry[];
  keyDemographics: string[];
}

export interface ScDemographicsPunjab {
  scPopulationPercent: number;
  ruralScPopulationPercent: number;
  communities: string[];
  description: string;
}

export interface HoshiarpurDistrict {
  scConcentration: string;
  laborForce: string;
}

// =============================================================================
// ELECTORATE DATA
// =============================================================================

export interface ElectorateEntry {
  electionYear: number;
  totalElectors: number;
  voterTurnout: number;
  turnoutPercent: number;
}

// =============================================================================
// LOCAL ISSUES
// =============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description?: string;
}

export interface LocalIssueFull extends LocalIssue {
  priorityOrder: number;
}

// =============================================================================
// STRATEGIC POSITIONING
// =============================================================================

export interface CongressStrategicPosition {
  currentStatus: {
    lossIn2022: string;
    history: string;
    challenge: string;
  };
  strategicAssessment: {
    points: string[];
  };
  recommendations: string[];
}

export interface CandidateProfile {
  caste: string;
  background: string;
  age: string;
  connect: string;
  priority: string;
}

export interface AttackLine {
  rank: number;
  title: string;
  description: string;
}

export interface RiskFactor {
  factor: string;
  description: string;
}

// =============================================================================
// INFLUENCERS & POWER STRUCTURE
// =============================================================================

export interface InfluencerCategory {
  category: InfluencerCategoryType;
  examples: string[];
}

// =============================================================================
// GOVERNANCE
// =============================================================================

export interface AdministrativeStructure {
  dc: string;
  blockDevelopmentOffices: string;
  panchayats: string;
}

export interface GovernanceGaps {
  gaps: string[];
}

// =============================================================================
// PUBLIC SENTIMENT
// =============================================================================

export interface SentimentIndicator {
  indicator: string;
  description: string;
}

// =============================================================================
// STRATEGIC BLUEPRINTS
// =============================================================================

export interface StrategicBlueprint {
  party: BlueprintParty;
  strategy: string[];
}

// =============================================================================
// DEEP RESEARCH SUPPLEMENT
// =============================================================================

export interface DeepResearchData {
  identity: {
    constituency: ConstituencyIdentity;
    research: ResearchMetadata;
  };
  demographics: {
    punjabSc: ScDemographicsPunjab;
    hoshiarpur: HoshiarpurDistrict;
  };
  electoralHistory: {
    results2022: ElectionResultPartial[];
    historicalPattern: string;
  };
  publicSentiment: SentimentIndicator[];
  governance: {
    administrative: AdministrativeStructure;
    gaps: GovernanceGaps;
  };
  localIssues: LocalIssueFull[];
  influencers: InfluencerCategory[];
  strategicBlueprints: StrategicBlueprint[];
}

// =============================================================================
// MAIN DOSSIER
// =============================================================================

export interface RecommendationsSummary {
  priority: Priority;
  priorityRationale: string;
  candidate: string;
  narrative: string;
  outreach: string;
  coalition: string;
}

export interface MainDossierData {
  executiveSummary: ExecutiveSummary;
  constituencyProfile: ConstituencyIdentity;
  electionResults: ElectionResult[];
  casteComposition: CasteComposition;
  electorateData: ElectorateEntry[];
  keyLocalIssues: LocalIssue[];
  congressPosition: CongressStrategicPosition;
  recommendedCandidate: CandidateProfile;
  attackLines: AttackLine[];
  voteShareAnalysis: VoteShareAnalysis;
  riskFactors: RiskFactor[];
  recommendations: RecommendationsSummary;
}

// =============================================================================
// COMBINED TYPES (for both files)
// =============================================================================

export interface ShamChaurasiDossierComplete {
  researchId: string;
  deepResearchId: string;
  main: MainDossierData;
  deep: DeepResearchData;
  sources: string[];
  compiledDate: string;
}

// =============================================================================
// CONSTITUENCY REFERENCE (shortcut type)
// =============================================================================

export interface ConstituencyReference {
  acNumber: number;
  name: string;
  district: string;
  region: Region;
  category: Category;
  winner2022: string;
  winnerParty2022: Party;
  margin2022: number;
}
