/**
 * AC030-Phillaur Assembly Constituency Types
 * Generated from AC030-Phillaur.md and AC030-Phillaur-deep.md
 * 6-Cycle Enhancement Pipeline - Cycle 3 (Enhanced Refinement)
 */

// Document metadata
export interface Ac030DocumentMetadata {
  dossierId: string;
  researchDossierId?: string;
  topic: string;
  date: string;
  dataCurrency: string;
  sources: string[];
  verificationStatus: string;
  preparedFor?: string;
  classification?: string;
}

// Basic Information
export interface Ac030BasicInfo {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  lokSabha: string;
  reservation: string;
  totalElectors2022: number;
  tehsil?: string;
  category?: string;
}

// Election Results
export interface Ac030ElectionResult {
  year: number;
  winner: string;
  party: string;
  voteShare?: string;
  margin?: string;
  marginNumeric?: number;
  runnerUp?: string;
  votes?: number;
}

// Caste Composition
export interface Ac030CasteComposition {
  category: string;
  percentage: string;
  notes?: string;
}

// Voter Turnout
export interface Ac030VoterTurnout {
  year: number;
  percentage: string;
}

// Key Local Issues
export interface Ac030KeyLocalIssue {
  id: number;
  title: string;
  description?: string;
}

// Congress Strategic Position
export interface Ac030CongressStrategicPosition {
  status: 'STRONG' | 'MODERATE' | 'WEAK' | 'VULNERABLE';
  margin: number;
  marginAsString: string;
  description: string;
  keyFactors: string[];
}

// Recommended Candidate Profile
export interface Ac030CandidateProfile {
  caste: string;
  profile: string;
  keyQualification: string;
  mustHave?: string;
}

// Attack Lines Against AAP
export interface Ac030AttackLine {
  id: number;
  text: string;
}

// Deep Research Types

// Geographic Context
export interface Ac030GeographicContext {
  description: string;
  location?: string;
  distanceFromLudhiana?: string;
  tradeHub?: string;
  borderArea?: string;
  keyCharacteristics: string[];
}

// Religious Composition
export interface Ac030ReligiousComposition {
  religion: string;
  percentage: string;
}

// Village Demographics
export interface Ac030VillageDemographic {
  villageName: string;
  scPercentage: number;
}

// Electoral History 2022
export interface Ac030ElectoralHistory2022 {
  candidate: string;
  party: string;
  votes: number | null;
  margin: number;
  runnerUp: string;
  runnerUpParty: string;
}

// Congress Development
export interface Ac030CongressDevelopment {
  year: number;
  description: string;
  implications: string;
}

// Public Sentiment
export interface Ac030PublicSentiment {
  currentMood: 'Turbulent' | 'Stable' | 'Positive' | 'Negative' | 'Mixed';
  keyDrivers: string[];
  grievances: string[];
}

// Governance Gap
export interface Ac030GovernanceGap {
  currentRepresentation: {
    mla: string;
    district: string;
    state: string;
  };
  activeSchemes: string[];
  developmentGaps: string[];
}

// Local Issue
export interface Ac030LocalIssue {
  priority: number;
  category: string;
  details: string[];
}

// Political Actor
export interface Ac030PoliticalActor {
  name: string;
  role: string;
  party?: string;
}

// Community Influencer
export interface Ac030CommunityInfluencer {
  community: string;
  influence: string;
}

// Power Structure
export interface Ac030PowerStructure {
  description: string;
  dynamics: string[];
}

// Media Landscape
export interface Ac030MediaLandscape {
  localMedia: string[];
  informationFlow: string[];
}

// Key Location
export interface Ac030KeyLocation {
  name: string;
  description?: string;
}

// Infrastructure
export interface Ac030Infrastructure {
  items: string[];
}

// SWOT Category
export interface Ac030SwotCategory {
  items: string[];
}

// SWOT Analysis
export interface Ac030Swot {
  strengths: Ac030SwotCategory;
  weaknesses: Ac030SwotCategory;
  opportunities: Ac030SwotCategory;
  threats: Ac030SwotCategory;
}

// Congress Strategy
export interface Ac030CongressStrategy {
  candidate: string;
  caste: string;
  issues: string[];
  campaign: string;
  resolve: string;
}

// AAP Strategy
export interface Ac030AapStrategy {
  candidate: string;
  caste: string;
  issues: string[];
  campaign: string;
}

// Target Segment
export interface Ac030TargetSegment {
  segment: string;
  description: string;
}

// Wildcard
export interface Ac030Wildcard {
  id: number;
  factor: string;
}

// Trigger
export interface Ac030Trigger {
  id: number;
  trigger: string;
}

// Data Gap
export interface Ac030DataGap {
  id: number;
  item: string;
  verificationNeeded: boolean;
}

// Intelligence Priority
export interface Ac030IntelligencePriority {
  id: number;
  priority: string;
}

// Deep Research
export interface Ac030DeepResearch {
  constituencyIdentity: {
    basicProfile: Ac030BasicInfo;
    geographicContext: Ac030GeographicContext;
    keyIdentifiers: string[];
  };
  demographics: {
    religiousComposition: Ac030ReligiousComposition[];
    casteComposition: Ac030CasteComposition[];
    villageDemographics: Ac030VillageDemographic[];
  };
  electoralHistory: {
    election2022: Ac030ElectoralHistory2022;
    congressDevelopment: Ac030CongressDevelopment;
    historicalTrend: string;
  };
  publicSentiment: Ac030PublicSentiment;
  governanceGap: Ac030GovernanceGap;
  localIssues: Ac030LocalIssue[];
  influencersPowerStructure: {
    politicalActors: Ac030PoliticalActor[];
    communityInfluencers: Ac030CommunityInfluencer[];
    powerStructure: Ac030PowerStructure;
  };
  mediaLandscape: Ac030MediaLandscape;
  physicalMapping: {
    keyLocations: Ac030KeyLocation[];
    infrastructure: Ac030Infrastructure;
  };
  swot: Ac030Swot;
  strategicBlueprint: {
    congressStrategy: Ac030CongressStrategy;
    aapStrategy: Ac030AapStrategy;
    targetSegments: Ac030TargetSegment[];
  };
  courseChangingFactors: {
    wildcards: Ac030Wildcard[];
    triggers: Ac030Trigger[];
  };
  dataGaps: {
    requiredVerification: Ac030DataGap[];
    intelligencePriorities: Ac030IntelligencePriority[];
  };
}

// Main Dossier Interface
export interface Ac030Dossier {
  metadata: Ac030DocumentMetadata;
  basicInfo: Ac030BasicInfo;
  electionResults: Ac030ElectionResult[];
  casteComposition: Ac030CasteComposition[];
  voterTurnout: Ac030VoterTurnout[];
  keyLocalIssues: Ac030KeyLocalIssue[];
  congressStrategicPosition: Ac030CongressStrategicPosition;
  recommendedCandidateProfile: Ac030CandidateProfile;
  attackLinesAgainstAAP: Ac030AttackLine[];
  deepResearch: Ac030DeepResearch;
}

// Type exports
export type Ac030ConstituencyDossier = Ac030Dossier;
