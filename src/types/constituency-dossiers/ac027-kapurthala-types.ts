/**
 * AC027-Kapurthala Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC027-Kapurthala.md, AC027-Kapurthala-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "General" | "SC" | "ST" | "BC";
  lokSabha: string;
  districtHQ: boolean;
  date: string;
}

export interface GeographicProfile {
  areaCharacter: string;
  terrain: string;
  keyIdentifiers: string[];
}

export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  localHeritage: string[];
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface ReligiousComposition {
  sikh: string;
  hindu: string;
  other: string;
}

export interface CasteBreakdown {
  category: string;
  percentage: string;
  notes?: string;
}

export interface CasteComposition {
  source: string;
  jathSikh: string;
  sc: string;
  obc: string;
  khatriArora: string;
  minority: string;
  other: string;
  breakdown: CasteBreakdown[];
}

export interface UrbanDemographics {
  townName: string;
  majorityReligion: string;
  scPopulation: string;
  businessCommunity: string;
}

export interface Demographics {
  religiousComposition: ReligiousComposition;
  casteComposition: CasteComposition;
  urbanDemographics: UrbanDemographics[];
  scPopulationDistrict: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult {
  candidate: string;
  party: string;
  votes: number;
  margin?: string;
  voteShare?: string;
}

export interface ElectionResult2022 {
  winner: string;
  party: string;
  votes: number;
  margin: string;
  voteShare: string;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpVotes: number;
  totalElectors: string;
  voterTurnout: string;
  votesPolled: number;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  historicalTrend: string;
  congressHold: boolean;
  margin: string;
}

export interface VoterTurnout {
  year: number;
  percentage: string;
  votesPolled?: number;
}

// ============================================================================
// PUBLIC SENTIMENT
// ============================================================================

export interface SentimentDriver {
  rank: number;
  title: string;
  description: string;
}

export interface Grievance {
  issue: string;
}

export interface PublicSentiment {
  currentMood: string;
  satisfactionLevel: string;
  keyDrivers: SentimentDriver[];
  grievances: Grievance[];
  sentimentNotes: string;
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface ActiveScheme {
  name: string;
}

export interface DevelopmentGap {
  area: string;
  status: string;
}

export interface GovernanceGap {
  currentMLA: string;
  party: string;
  district: string;
  stateGovernment: string;
  activeSchemes: ActiveScheme[];
  developmentGaps: DevelopmentGap[];
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface KapurthalaSpecific {
  issue: string;
}

export interface LocalIssues {
  topIssues: LocalIssue[];
  kapurthalaSpecific: KapurthalaSpecific[];
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalActor {
  name: string;
  role: string;
  party?: string;
  notes?: string;
}

export interface CommunityInfluencer {
  name: string;
  type: string;
}

export interface PowerStructure {
  politicalActors: PoliticalActor[];
  communityInfluencers: CommunityInfluencer[];
  congressHold: boolean;
  mainOpposition: string;
  localIdentity: string[];
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaOutlet {
  type: string;
  name: string;
}

export interface MediaLandscape {
  localMedia: string[];
  informationFlow: string[];
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface KeyLocation {
  name: string;
  type: string;
}

export interface Infrastructure {
  connectivity: string[];
  facilities: string[];
}

export interface PhysicalMapping {
  keyLocations: KeyLocation[];
  infrastructure: Infrastructure;
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SWOTStrengths {
  items: string[];
}

export interface SWOTWeaknesses {
  items: string[];
}

export interface SWOTOpportunities {
  items: string[];
}

export interface SWOTThreats {
  items: string[];
}

export interface SWOTAnalysis {
  strengths: SWOTStrengths;
  weaknesses: SWOTWeaknesses;
  opportunities: SWOTOpportunities;
  threats: SWOTThreats;
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface CongressStrategy {
  candidate: string;
  caste: string;
  issues: string[];
  campaign: string;
  defense: string;
}

export interface AAPStrategy {
  candidate: string;
  caste: string;
  issues: string[];
  campaign: string;
}

export interface StrategicBlueprint {
  congress: CongressStrategy;
  aap: AAPStrategy;
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface Wildcard {
  factor: string;
}

export interface Trigger {
  event: string;
}

export interface CourseChangingFactors {
  wildcards: Wildcard[];
  triggers: Trigger[];
}

// ============================================================================
// DATA GAPS & RECOMMENDATIONS
// ============================================================================

export interface IntelligencePriority {
  priority: string;
}

export interface RequiredVerification {
  item: string;
}

export interface DataGaps {
  requiredVerification: RequiredVerification[];
  intelligencePriorities: IntelligencePriority[];
}

// ============================================================================
// POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  caste: string;
  profile: string;
  keyQualification: string;
  mustDo: string;
}

export interface AttackLine {
  line: string;
}

export interface CongressStrategicPosition {
  status: string;
  incumbentName: string;
  termCount: number;
  mainChallenger: string;
  positionNotes: string;
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLine[];
  congressPosition: CongressStrategicPosition;
}

// ============================================================================
// KEY LOCAL ISSUES (aggregated)
// ============================================================================

export interface KeyLocalIssue {
  rank: number;
  title: string;
  description: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC027KapurthalaTypes {
  // Identity
  identity: ConstituencyIdentity;
  geographicProfile: GeographicProfile;
  historicalContext: HistoricalContext;

  // Demographics
  demographics: Demographics;

  // Elections
  electionHistory: ElectionHistory;
  voterTurnout: VoterTurnout[];

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;
  localIssues: LocalIssues;

  // Power Structure
  powerStructure: PowerStructure;

  // Media
  mediaLandscape: MediaLandscape;

  // Physical
  physicalMapping: PhysicalMapping;

  // Strategy
  swotAnalysis: SWOTAnalysis;
  strategicBlueprint: StrategicBlueprint;
  courseChangingFactors: CourseChangingFactors;

  // Political Strategy
  politicalStrategy: PoliticalStrategy;

  // Data Quality
  dataGaps: DataGaps;
  documentStatus: string;
  preparedFor: string;
  classification: string;
}

// Type exports for index file
export type {
  ConstituencyIdentity as AC027ConstituencyIdentity,
  Demographics as AC027Demographics,
  ElectionHistory as AC027ElectionHistory,
  PublicSentiment as AC027PublicSentiment,
  GovernanceGap as AC027GovernanceGap,
  LocalIssues as AC027LocalIssues,
  PowerStructure as AC027PowerStructure,
  MediaLandscape as AC027MediaLandscape,
  PhysicalMapping as AC027PhysicalMapping,
  SWOTAnalysis as AC027SWOTAnalysis,
  StrategicBlueprint as AC027StrategicBlueprint,
  CourseChangingFactors as AC027CourseChangingFactors,
  PoliticalStrategy as AC027PoliticalStrategy,
  DataGaps as AC027DataGaps,
};
