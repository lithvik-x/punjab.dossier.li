/**
 * AC035 - JalandharCentral Assembly Constituency Type Definitions
 * Generated from constituency dossier sources
 * Document IDs: AC035-Jalandhar-Central.md, AC035-JalandharCentral-deep.md
 */

// ============================================================================
// CONSTITUENCY IDENTITY & BASELINE
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  lokSabha: string;
  reservation: 'General' | 'SC' | 'ST' | 'OBC';
  totalElectors2022: number;
  category: 'General' | 'SC' | 'ST' | 'OBC';
  cityArea: string;
}

export interface GeographicContext {
  description: string;
  type: 'Urban' | 'Rural' | 'Semi-Urban';
  keyCharacteristics: string[];
}

export interface KeyIdentifiers {
  urban: string;
  commercial: string;
  educational: string;
  industrial: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface ReligiousComposition {
  sikh: number;       // percentage
  hindu: number;      // percentage
  other: number;      // percentage
  dataSource?: string;
  verificationStatus?: 'VERIFIED' | 'PARTIALLY VERIFIED' | 'UNVERIFIED';
}

export interface CasteComposition {
  category: string;
  percentage: string;  // stored as string due to ranges like "~30-35%"
  dataSource?: string;
}

export interface CasteCompositionTable {
  entries: CasteComposition[];
  totalSC: number;
  generalCategory: string;
}

export interface UrbanDemographics {
  voterProfile: string;
  commercialWorkers: string;
  socioeconomicClass: string;
  migrantPopulation: string;
}

// ============================================================================
// ELECTORAL HISTORY
// ============================================================================

export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  voteShare?: string;
  margin?: string;
  runnerUp?: string;
  runnerUpParty?: string;
  votes?: number;
  marginVotes?: number;
  verificationStatus?: 'VERIFIED' | 'PARTIALLY VERIFIED' | 'DATA NEEDS VERIFICATION' | 'UNVERIFIED';
}

export interface ElectoralHistory {
  elections: ElectionResult[];
  historicalTrend: string[];
  partySwing: 'Congress to AAP' | 'AAP to Congress' | 'Stable' | 'Mixed';
}

// ============================================================================
// PUBLIC SENTIMENT
// ============================================================================

export type PartySentiment = 'Pro-AAP' | 'Pro-Congress' | 'Pro-BJP' | 'Mixed' | 'Undecided';

export interface PublicSentiment {
  currentMood: PartySentiment;
  moodDescription: string;
  keyDrivers: string[];
  grievances: string[];
}

export interface SentimentDrivers {
  urbanGovernance: string;
  business: string;
  employment: string;
  lawAndOrder: string;
  municipal: string;
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface CurrentRepresentation {
  mla: string;
  mlaParty: string;
  mayor?: string;
  district: string;
  stateGovernment: string;
  verificationStatus?: 'VERIFIED' | 'NEEDS VERIFICATION';
}

export interface ActiveSchemes {
  schemeName: string;
  category: string;
}

export interface GovernanceGap {
  representation: CurrentRepresentation;
  activeSchemes: string[];
  developmentGaps: string[];
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  issue: string;
  details: string[];
}

export interface LocalIssues {
  topIssues: LocalIssue[];
  constituencySpecific: string[];
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalActor {
  name: string;
  role: string;
  party?: string;
  verificationStatus?: 'VERIFIED' | 'NEEDS VERIFICATION';
}

export interface CommunityInfluencer {
  category: string;
  description: string;
  influenceArea: string;
}

export interface PowerStructure {
  rulingParty: string;
  mp?: PoliticalActor;
  oppositionParties: string[];
  businessCommunityInfluence: string;
  summary: string;
}

export interface Influencers {
  politicalActors: PoliticalActor[];
  communityInfluencers: CommunityInfluencer[];
  powerStructure: PowerStructure;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaInfo {
  penetration: string;
  languages: string[];
  channels: string[];
  digitalPresence: boolean;
  businessPublications: boolean;
}

export interface MediaLandscape {
  localMedia: MediaInfo;
  informationFlow: string;
  politicalAdvertising: string;
  socialMediaPenetration: string;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface KeyLocation {
  name: string;
  type: 'Commercial' | 'Residential' | 'Educational' | 'Industrial' | 'Healthcare' | 'Government';
}

export interface Infrastructure {
  healthcare: string;
  education: string;
  commercial: string;
  general: string;
}

export interface PhysicalMapping {
  keyLocations: KeyLocation[];
  infrastructure: Infrastructure;
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SwotCategory {
  items: string[];
}

export interface SwotAnalysis {
  strengths: SwotCategory;
  weaknesses: SwotCategory;
  opportunities: SwotCategory;
  threats: SwotCategory;
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface PartyStrategy {
  party: string;
  candidate: string | string[];
  casteComposition: string;
  keyIssues: string[];
  campaignMessage: string;
  targetSegments: string[];
}

export interface StrategicBlueprint {
  congress: PartyStrategy;
  aap: PartyStrategy;
  targetSegments: string[];
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface Wildcard {
  factor: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
}

export interface Trigger {
  event: string;
  potentialImpact: string;
}

export interface CourseChangingFactors {
  wildcards: Wildcard[];
  triggers: Trigger[];
}

// ============================================================================
// DATA GAPS & RECOMMENDATIONS
// ============================================================================

export interface DataGap {
  item: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface IntelligencePriority {
  item: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface DataGaps {
  requiredVerification: DataGap[];
  intelligencePriorities: IntelligencePriority[];
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  line: string;
  target: string;
  category: 'Governance' | 'Infrastructure' | 'Drug Crisis' | 'Employment' | 'Broken Promises';
}

export interface AttackLines {
  lines: AttackLine[];
}

// ============================================================================
// CANDIDATE ANALYSIS
// ============================================================================

export interface CandidateProfile {
  recommendedCaste: string;
  background: string;
  keyQualifications: string[];
  disqualifications: string[];
}

export interface PreviousMLA {
  name: string;
  party: string;
  year: number;
}

// ============================================================================
// CONFLICTING DATA FLAGS
// ============================================================================

export interface DataConflict {
  field: string;
  value1: string;
  source1: string;
  value2: string;
  source2: string;
  resolution: string;
}

export interface ConflictReport {
  hasConflicts: boolean;
  conflicts: DataConflict[];
}

// ============================================================================
// MAIN CONSTITUENCY DATA INTERFACE
// ============================================================================

export interface JalandharCentralConstituencyData {
  // Metadata
  documentId: string;
  researchDossierId: string;
  topic: string;
  date: string;
  dataCurrency: string;
  sources: string[];
  verificationStatus: string;
  documentStatus: string;
  preparedFor: string;
  classification: string;

  // Core Data Sections
  identity: {
    basic: ConstituencyIdentity;
    geographic: GeographicContext;
    identifiers: KeyIdentifiers;
  };

  demographics: {
    religious: ReligiousComposition;
    caste: CasteCompositionTable;
    urban: UrbanDemographics;
  };

  electoral: {
    history: ElectoralHistory;
    results: ElectionResult[];
  };

  sentiment: PublicSentiment;

  governance: GovernanceGap;

  issues: LocalIssues;

  influencers: Influencers;

  media: MediaLandscape;

  physicalMapping: PhysicalMapping;

  swot: SwotAnalysis;

  strategy: StrategicBlueprint;

  courseChanging: CourseChangingFactors;

  dataGaps: DataGaps;

  // Supplementary
  attackLines: AttackLines;
  candidateProfile: CandidateProfile;
  previousMLAs: PreviousMLA[];

  // Data Quality
  conflicts: ConflictReport;
}

// ============================================================================
// TYPE GUARDS & VALIDATORS
// ============================================================================

export function isValidElectoralYear(year: number): boolean {
  return [2012, 2017, 2022, 2027].includes(year);
}

export function hasVerificationStatus(
  data: ElectionResult
): data is ElectionResult & { verificationStatus: string } {
  return data.verificationStatus !== undefined;
}

export function createEmptyConstituencyData(): JalandharCentralConstituencyData {
  return {
    documentId: '',
    researchDossierId: '',
    topic: '',
    date: '',
    dataCurrency: '',
    sources: [],
    verificationStatus: '',
    documentStatus: '',
    preparedFor: '',
    classification: '',
    identity: {
      basic: {
        acNumber: 0,
        officialName: '',
        district: '',
        region: '',
        lokSabha: '',
        reservation: 'General',
        totalElectors2022: 0,
        category: 'General',
        cityArea: '',
      },
      geographic: {
        description: '',
        type: 'Urban',
        keyCharacteristics: [],
      },
      identifiers: {
        urban: '',
        commercial: '',
        educational: '',
        industrial: '',
      },
    },
    demographics: {
      religious: { sikh: 0, hindu: 0, other: 0 },
      caste: { entries: [], totalSC: 0, generalCategory: '' },
      urban: { voterProfile: '', commercialWorkers: '', socioeconomicClass: '', migrantPopulation: '' },
    },
    electoral: { history: { elections: [], historicalTrend: [], partySwing: 'Mixed' }, results: [] },
    sentiment: { currentMood: 'Undecided', moodDescription: '', keyDrivers: [], grievances: [] },
    governance: {
      representation: { mla: '', mlaParty: '', district: '', stateGovernment: '' },
      activeSchemes: [],
      developmentGaps: [],
    },
    issues: { topIssues: [], constituencySpecific: [] },
    influencers: {
      politicalActors: [],
      communityInfluencers: [],
      powerStructure: { rulingParty: '', oppositionParties: [], businessCommunityInfluence: '', summary: '' },
    },
    media: {
      localMedia: { penetration: '', languages: [], channels: [], digitalPresence: false, businessPublications: false },
      informationFlow: '',
      politicalAdvertising: '',
      socialMediaPenetration: '',
    },
    physicalMapping: { keyLocations: [], infrastructure: { healthcare: '', education: '', commercial: '', general: '' } },
    swot: { strengths: { items: [] }, weaknesses: { items: [] }, opportunities: { items: [] }, threats: { items: [] } },
    strategy: {
      congress: { party: '', candidate: [], casteComposition: '', keyIssues: [], campaignMessage: '', targetSegments: [] },
      aap: { party: '', candidate: [], casteComposition: '', keyIssues: [], campaignMessage: '', targetSegments: [] },
      targetSegments: [],
    },
    courseChanging: { wildcards: [], triggers: [] },
    dataGaps: { requiredVerification: [], intelligencePriorities: [] },
    attackLines: { lines: [] },
    candidateProfile: {
      recommendedCaste: '',
      background: '',
      keyQualifications: [],
      disqualifications: [],
    },
    previousMLAs: [],
    conflicts: { hasConflicts: false, conflicts: [] },
  };
}
