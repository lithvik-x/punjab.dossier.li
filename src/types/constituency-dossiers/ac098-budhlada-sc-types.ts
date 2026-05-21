/**
 * AC098 - Budhlada (SC) Assembly Constituency Type Definitions
 * Process through 6-Cycle Enhancement Pipeline
 */

// =============================================================================
// Verification & Research Metadata
// =============================================================================

export type VerificationStatus = 'VERIFIED' | 'PARTIALLY VERIFIED' | 'NEEDS VERIFICATION';

export type DataQuality = 'High' | 'Medium' | 'Low';

export interface ResearchMetadata {
  researchMicroTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

export interface SourceMetadata {
  name: string;
  url: string;
}

// =============================================================================
// Constituency Identity
// =============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  type: 'Scheduled Caste (SC)';
  lokSabhaSeat: string;
}

export interface ConstituencyHeader {
  researchMicroTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

export interface GeographicProfile {
  description: string;
  cottonBeltContext?: string;
  agriculturalContext?: string;
  groundwaterContext?: string;
}

// =============================================================================
// Election Results
// =============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  margin: string;
  marginVotes: number;
  runnerUp?: string;
  runnerUpParty?: string;
  totalElectors: string;
  voterTurnout?: string;
}

export interface ElectionResult2017 {
  winner?: string;
  party?: string;
  voteShare?: string;
  margin?: string;
  marginVotes?: number;
  runnerUp?: string;
  runnerUpParty?: string;
  totalElectors: string;
}

export interface ElectionResults {
  year2022: ElectionResult2022;
  year2017?: ElectionResult2017;
}

export interface ElectoralHistory {
  electionYear: number;
  winner: string;
  party: string;
  voteShare?: string;
  margin?: string;
  marginVotes?: number;
  totalElectors?: string;
  runnerUp?: string;
  runnerUpParty?: string;
}

// =============================================================================
// Demographics
// =============================================================================

export interface DistrictDemographics {
  totalPopulation: number;
  male: number;
  female: number;
  urban: number;
  urbanPercentage: string;
  rural: number;
  ruralPercentage: string;
  sexRatio: string;
}

export interface CasteComposition {
  scPopulation: string;
  dominantSCGroups: string[];
  sikhMajority: string;
  hinduMinority: string;
  obc: string;
}

export interface VoterDemographics {
  totalElectors: string;
  voterTurnout: string;
  ruralSC: string;
}

export interface Demographics {
  district: DistrictDemographics;
  casteComposition: CasteComposition;
  voterDemographics: VoterDemographics;
}

// =============================================================================
// Key Local Issues
// =============================================================================

export interface KeyLocalIssue {
  rank: number;
  issue: string;
  description: string;
  affectedVoterSegment?: string;
}

export interface KeyLocalIssues {
  issues: KeyLocalIssue[];
}

// =============================================================================
// Political Positioning
// =============================================================================

export interface CongressStrategicPosition {
  currentHolder: string;
  party: string;
  margin: string;
  marginVotes: number;
  strategicOptions: string[];
  recommendedApproach?: string[];
}

export interface RecommendedCandidateProfile {
  profile: string;
  background: string;
  keyTraits: string;
  targetVoter: string;
}

export interface AttackLine {
  number: number;
  message: string;
}

export interface AttackLines {
  lines: AttackLine[];
}

// =============================================================================
// Strategic Data
// =============================================================================

export interface StrategicData {
  congressPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLine[];
}

// =============================================================================
// Deep Research Data (from Tier 2 file)
// =============================================================================

export interface DeepResearchData {
  header: ResearchMetadata;
  executiveSummary: string;
  geographicContext: GeographicProfile;
  casteCompositionNotes?: string;
  intelligenceGaps: string[];
  recommendations: string[];
  sources: SourceMetadata[];
}

export interface MainDossierData {
  header: ResearchMetadata;
  identity: ConstituencyIdentity;
  electionResults: ElectionResults;
  casteComposition: CasteComposition;
  voterDemographics: VoterDemographics;
  keyLocalIssues: KeyLocalIssues;
  strategicData: StrategicData;
}

// =============================================================================
// Complete Dossier
// =============================================================================

export interface AC098BudhladaSCDossier {
  mainDossier: MainDossierData;
  deepResearch: DeepResearchData;
}

export interface AC098BudhladaSCData {
  mainDossier: MainDossierData;
  deepResearch: DeepResearchData;
}

// =============================================================================
// Export all types for index.ts
// =============================================================================

export type AC098BudhladaSCTypes = {
  VerificationStatus: VerificationStatus;
  DataQuality: DataQuality;
  ResearchMetadata: ResearchMetadata;
  SourceMetadata: SourceMetadata;
  ConstituencyIdentity: ConstituencyIdentity;
  ConstituencyHeader: ConstituencyHeader;
  GeographicProfile: GeographicProfile;
  ElectionResult2022: ElectionResult2022;
  ElectionResult2017: ElectionResult2017;
  ElectionResults: ElectionResults;
  ElectoralHistory: ElectoralHistory;
  DistrictDemographics: DistrictDemographics;
  CasteComposition: CasteComposition;
  VoterDemographics: VoterDemographics;
  Demographics: Demographics;
  KeyLocalIssue: KeyLocalIssue;
  KeyLocalIssues: KeyLocalIssues;
  CongressStrategicPosition: CongressStrategicPosition;
  RecommendedCandidateProfile: RecommendedCandidateProfile;
  AttackLine: AttackLine;
  AttackLines: AttackLines;
  StrategicData: StrategicData;
  DeepResearchData: DeepResearchData;
  MainDossierData: MainDossierData;
  AC098BudhladaSCDossier: AC098BudhladaSCDossier;
  AC098BudhladaSCData: AC098BudhladaSCData;
};
