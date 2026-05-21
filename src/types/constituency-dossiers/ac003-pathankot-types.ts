// AC003-Pathankot Constituency Dossier Types
// Derived from: AC003-Pathankot.md and AC003-Pathankot-deep.md
// Research Date: 20 May 2026 | Status: PARTIAL (verification needed)
// Cycles: 1-6 Enhancement Pipeline Complete

// ==========================================
// METADATA
// ==========================================

export interface AC003Metadata {
  acNumber: 3;
  name: "Pathankot";
  district: "Pathankot";
  region: "Majha";
  type: "General";
  date: string;
  researchSource: string;
}

// Union types for constrained values
export type Region = "Majha" | "Malwa" | "Doaba";
export type ConstituencyType = "General" | "SC" | "ST";
export type ReservationType = "GEN" | "SC" | "ST";

// ==========================================
// CONSTITUENCY IDENTITY & BASELINE
// ==========================================

export interface AdministrativeGeographic {
  acNumber: number;
  parliamentarySegment: string;
  district: string;
  type: "GEN" | "SC" | "ST";
  city: string;
  area: string;
  terrain: string;
}

export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  modernEra: string;
  importance: string;
}

export interface EconomicIdentity {
  primaryActivities: string[];
  employment: string[];
  keySectors: string[];
}

export interface SocioCulturalIdentity {
  language: string;
  religiousComposition: {
    hindu: number;
    sikh: number;
    others: number;
  };
  casteComposition: string;
  cultural: string;
}

export interface AdministrativeSetup {
  municipalCorporation: string;
  health: string;
  education: string;
  banking: string;
}

export interface ConstituencyBaseline {
  administrativeGeographic: AdministrativeGeographic;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;
  administrativeSetup: AdministrativeSetup;
}

// ==========================================
// DEMOGRAPHIC DEEP-DIVE
// ==========================================

export interface CensusData {
  cityPopulation2011: number;
  metroArea2026Estimate: number;
  sexRatio: string;
  literacy: string;
  migration: string;
}

export interface ElectoralRollAnalytics {
  totalElectors: number;
  voterTurnout2022: number;
  genderGap: string;
}

export interface SchemePenetration {
  pds: string;
  mgnrega: string;
  ayushmanBharat: string;
}

export interface DemographicDeepDive {
  censusData: CensusData;
  electoralRollAnalytics: ElectoralRollAnalytics;
  schemePenetration: SchemePenetration;
}

// ==========================================
// ELECTORAL HISTORY
// ==========================================

export interface ElectionResultRow {
  year: number;
  winner: string;
  party: string;
  votePercent: number;
  margin: string;
  votes?: number;
}

export interface FullResults2022 {
  winner: string;
  votes: number;
  percent: number;
  turnout: number;
  swingFrom2017: string;
}

export interface VoterBehaviour {
  turnout: string;
  urbanVoter: string;
  swingPattern: string;
}

export interface ElectoralHistory {
  pastThreeElections: ElectionResultRow[];
  fullResults2022: FullResults2022;
  voterBehaviour: VoterBehaviour;
}

// Deep file specific election types
export interface DeepFileElectionResult {
  year: number;
  winner: string;
  party: string;
  voteShare: number;
  margin: string;
  totalElectors: number;
  voterTurnout: number;
}

export interface ElectionSwing {
  fromParty: string;
  toParty: string;
  magnitude: string;
  swingPercentage?: number;
}

// ==========================================
// PUBLIC SENTIMENT
// ==========================================

export interface CurrentMood {
  mla: string;
  party: string;
  expectations: string[];
}

export interface KeyIssue {
  issue: string;
  description: string;
  segment: string;
}

export interface PublicSentiment {
  currentMood: CurrentMood;
  keyIssues: KeyIssue[];
}

// ==========================================
// GOVERNANCE GAP
// ==========================================

export interface ServiceDelivery {
  health: string;
  education: string;
  municipal: string;
}

export interface UrbanIssues {
  powerCuts: string;
  waterSupply: string;
  solidWaste: string;
}

export interface GovernanceGap {
  serviceDelivery: ServiceDelivery;
  urbanIssues: UrbanIssues;
}

// ==========================================
// LOCAL ISSUES
// ==========================================

export type IssueCategory =
  | "Tourism"
  | "Urban Services"
  | "Drug Prevention"
  | "Defense Security"
  | "Employment"
  | "Infrastructure"
  | "Governance";

export type VoterSegment =
  | "Youth"
  | "Business Community"
  | "Urban Residents"
  | "Parents"
  | "Military Families"
  | "General";

export interface IssueVoterMapping {
  issue: string;
  segment: string;
  category: IssueCategory;
}

export interface LocalIssues {
  issueVoterMapping: IssueVoterMapping[];
}

// ==========================================
// INFLUENCERS & POWER STRUCTURE
// ==========================================

export interface NonPoliticalInfluencers {
  businessLeaders: string;
  tourismIndustry: string;
  defense: string;
}

export interface PoliticalInfluencers {
  currentMLA: string;
  historical: string;
}

export interface InfluencersPowerStructure {
  nonPolitical: NonPoliticalInfluencers;
  political: PoliticalInfluencers;
}

// ==========================================
// SWOT ANALYSIS
// ==========================================

export interface SWOTStrengths {
  strengths: string[];
}

export interface SWOTWeaknesses {
  weaknesses: string[];
}

export interface SWOTOpportunities {
  opportunities: string[];
}

export interface SWOTThreats {
  threats: string[];
}

export interface SWOTAnalysis {
  strengths: SWOTStrengths;
  weaknesses: SWOTWeaknesses;
  opportunities: SWOTOpportunities;
  threats: SWOTThreats;
}

// ==========================================
// STRATEGIC BLUEPRINT
// ==========================================

export interface Narrative {
  title: string;
  description: string;
}

export interface PrioritySegment {
  segment: string;
  focus: string;
}

export interface StrategicBlueprint {
  topNarratives: Narrative[];
  prioritySegments: PrioritySegment[];
}

// ==========================================
// CASTE COMPOSITION (from deep file)
// ==========================================

export interface CasteComposition {
  jatSikh: number;
  sc: number;
  obc: number;
  upperCaste: number;
  minority: number;
  other: number;
}

// ==========================================
// KEY LOCAL ISSUES (from deep file)
// ==========================================

export interface KeyLocalIssue {
  issue: string;
  description: string;
}

export interface CongressStrategicPosition {
  currentHolder: string;
  situation: string;
  urbanVoteSplit: string;
}

export interface RecommendedCandidateProfile {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

export interface AttackLine {
  line: string;
  description: string;
}

export interface CongressStrategy {
  strategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLine[];
}

// ==========================================
// DATA QUALITY FLAGS
// ==========================================

export type DataVerificationStatus = "VERIFIED" | "NEEDS_VERIFICATION" | "PARTIAL" | "NOT_FOUND";

export interface DataQualityFlag {
  field: string;
  status: DataVerificationStatus;
  source?: string;
  notes?: string;
}

// ==========================================
// COMPLETE AC003 REPORT
// ==========================================

export interface AC003PathankotDossier {
  metadata: AC003Metadata;
  baseline: ConstituencyBaseline;
  demographic: DemographicDeepDive;
  electoral: ElectoralHistory;
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;
  localIssues: LocalIssues;
  influencers: InfluencersPowerStructure;
  swot: SWOTAnalysis;
  strategicBlueprint: StrategicBlueprint;
  casteComposition: CasteComposition;
  congressStrategy: CongressStrategy;
  dataQualityFlags: DataQualityFlag[];
  sources: string[];
}
