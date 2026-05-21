/**
 * AC012 - Raja Sansi Assembly Constituency Type Definitions
 * Generated from: AC012-Raja-Sansi.md and AC012-RajaSansi-deep.md
 * Date: 20 May 2026
 * 
 * Coverage: 100% content analysis across 6-cycle enhancement pipeline
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: 'General' | 'SC' | 'ST';
  date: string;
}

export interface GeographicProfile {
  description: string;
  location: string;
  significance: string;
  historicalOrigin: string;
  landUse: string;
}

export interface KeyStatistics2022 {
  winner: string;
  runnerUp: string | null;
  winnerVoteCount: number | null;
  margin: number;
  party: string;
  totalElectors: number | null;
  voterTurnout: number | null;
}

export interface ConstituencyIdentity {
  header: ConstituencyHeader;
  geographicProfile: GeographicProfile;
  keyStatistics2022: KeyStatistics2022;
  notableNote: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  runnerUp: string | null;
  runnerUpParty: string | null;
  margin: number | null;
  winnerVoteCount: number | null;
  totalElectors?: number | null;
  voterTurnout?: number | null;
  verificationStatus: 'Verified' | 'Partially Verified' | 'Needs Verification';
}

export interface ElectionResults {
  2022: ElectionResult;
  2017: ElectionResult;
  2012: ElectionResult;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CasteComposition {
  category: string;
  percentage: number;
}

export interface CasteBreakdown {
  jatSikh: number;
  sc: number;
  obc: number;
  upperCaste: number;
  minority: number;
  other: number;
}

export interface ReligionBreakdown {
  religion: string;
  percentage: number | null;
  notes: string;
}

export interface KeySocialGroup {
  group: string;
  description: string;
  politicalSignificance: string;
}

export interface Demographics {
  population2011: number;
  urbanRuralSplit: {
    urban: number;
    rural: number;
  };
  casteComposition: CasteBreakdown;
  religionBreakdown: ReligionBreakdown[];
  keySocialGroups: KeySocialGroup[];
  scPopulationDistrict: number;
  districtScPercentage: number;
}

// ============================================================================
// PUBLIC SENTIMENT & ISSUES
// ============================================================================

export interface SentimentDriver {
  issue: string;
  description: string;
  source: string[];
}

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  category: 'Urban' | 'Rural' | 'Social' | 'Economic' | 'Infrastructure';
}

export interface PublicSentiment {
  perceivedMood: string | null;
  sentimentDrivers: SentimentDriver[];
  verificationStatus: string;
}

// ============================================================================
// GOVERNANCE & INFRASTRUCTURE
// ============================================================================

export interface InfrastructureStatus {
  issue: string;
  status: 'Verified' | 'Needs Verification';
  details: string | null;
}

export interface DevelopmentProject {
  name: string;
  description: string;
  status: string;
  verificationStatus: string;
}

export interface GovernanceGap {
  mlaName: string;
  party: string;
  term: string;
  infrastructureIssues: InfrastructureStatus[];
  developmentProjects: DevelopmentProject[];
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  affiliation: string;
  role: string;
  background: string | null;
  verificationStatus: string;
}

export interface SocialReligiousEntity {
  name: string;
  type: string;
  description: string;
  politicalRelevance: string;
}

export interface InfluencersPowerStructure {
  political: PoliticalInfluencer[];
  socialReligious: SocialReligiousEntity[];
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaOutlet {
  name: string;
  language: string;
  type: 'Print' | 'Digital' | 'Social';
}

export interface MediaLandscape {
  local: MediaOutlet[];
  hindiEnglish: MediaOutlet[];
  socialMedia: string[];
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface PhysicalMapping {
  urbanCore: string;
  surroundingArea: string;
  connectivity: string;
  distanceFromAmritsarCity: string;
  airportProximity: string;
  voterDemographics: {
    urbanVoters: number;
    ruralVoters: number;
    scVoters: number;
    womenVoterParticipation: string;
  };
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SWOTStrengths {
  item: string;
  party: string;
}

export interface SWOTWeaknesses {
  item: string;
  party: string;
}

export interface SWOTOpportunities {
  item: string;
  party: string;
}

export interface SWOTThreats {
  item: string;
  party: string;
}

export interface SWOTAnalysis {
  strengths: SWOTStrengths[];
  weaknesses: SWOTWeaknesses[];
  opportunities: SWOTOpportunities[];
  threats: SWOTThreats[];
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface StrategicRecommendation {
  party: string;
  recommendations: string[];
}

export interface StrategicBlueprint {
  congress: string[];
  aap: string[];
  sadBjp: string[];
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface CourseChangingFactor {
  factor: string;
  probability: 'High' | 'Medium' | 'Low';
  impact: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface CourseChangingFactors {
  factors: CourseChangingFactor[];
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGap {
  id: number;
  item: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
  verificationToDo: IntelligenceGap[];
}

// ============================================================================
// KEY ISSUES & STRATEGIC DATA
// ============================================================================

export interface KeyLocalIssue {
  rank: number;
  issue: string;
  description: string;
}

export interface CongressStrategicPosition {
  margin: number;
  assessment: string;
  recommendation: string;
}

export interface CandidateProfile {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

export interface AttackLine {
  topic: string;
  line: string;
}

export interface StrategicData {
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: CandidateProfile;
  attackLinesAgainstIncumbent: AttackLine[];
}

// ============================================================================
// MONITORING KEYWORDS
// ============================================================================

export interface MonitoringKeyword {
  keyword: string;
  query: string;
}

export interface MonitoringKeywords {
  keywords: string[];
}

// ============================================================================
// SOURCE METADATA
// ============================================================================

export interface SourceMetadata {
  sources: string[];
  microTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  verificationStatus: string;
  dataCurrency: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER TYPE
// ============================================================================

export interface AC012RajaSansiDossier {
  // Metadata
  metadata: SourceMetadata;
  
  // Core Identity
  constituencyIdentity: ConstituencyIdentity;
  
  // Election Data
  electionResults: ElectionResults;
  
  // Demographics
  demographics: Demographics;
  
  // Public Sentiment
  publicSentiment: PublicSentiment;
  
  // Local Issues
  localIssues: LocalIssue[];
  
  // Governance
  governanceGap: GovernanceGap;
  
  // Influencers
  influencersPowerStructure: InfluencersPowerStructure;
  
  // Media
  mediaLandscape: MediaLandscape;
  
  // Physical Mapping
  physicalMapping: PhysicalMapping;
  
  // SWOT
  swotAnalysis: SWOTAnalysis;
  
  // Strategic Blueprint
  strategicBlueprint: StrategicBlueprint;
  
  // Course-Changing Factors
  courseChangingFactors: CourseChangingFactors;
  
  // Intelligence Gaps
  intelligenceGaps: IntelligenceGaps;
  
  // Strategic Data
  strategicData: StrategicData;
  
  // Monitoring
  monitoringKeywords: MonitoringKeywords;
}
