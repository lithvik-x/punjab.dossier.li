/**
 * SERP Keyword Research Types - Punjab 2027 Election Intelligence
 * Generated through 6-cycle enhancement pipeline
 * Source file: SERP-output-P6.md
 */

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface PunjabElectionOverview {
  electionType: string;
  date: string;
  majorityThreshold: number;
  regionalSeats: {
    malwa: number;
    majha: number;
    doaba: number;
  };
  currentCM: string;
  keyParties: string[];
  currentDebt: string;
  fiscalDeficit: string;
}

// ============================================================================
// POLITICAL ENTITIES - LEADERSHIP & STRATEGY
// ============================================================================

export interface SearchResult {
  title: string;
  link?: string;
  description?: string;
  date?: string;
}

export interface CongressLeadership {
  ppccChief: PoliticalLeader;
  clpLeader: PoliticalLeader;
  potentialCmFaces: PoliticalLeader[];
  centralObservers: PoliticalLeader[];
}

export interface PoliticalLeader {
  name: string;
  role: string;
  status: "active" | "inactive" | "deceased" | "expelled";
  details?: string;
  constituency?: string;
  party?: string;
}

export interface PartyStrategy {
  party: string;
  strategy: string;
  keyStatements: string[];
  targetVotes: string[];
}

export interface BJPStrategy {
  soloAnnounced: boolean;
  announcementDate?: string;
  keyFigures: PoliticalLeader[];
  strategy: string;
  targetDemographics: string[];
}

// ============================================================================
// GEOGRAPHY & REGIONS
// ============================================================================

export interface RegionProfile {
  name: string;
  seats: number;
  percentage: number;
  districts: string[];
  keyFight: string;
  primaryIssues: string[];
  dominantCaste: string;
}

export interface MalwaRegion extends RegionProfile {
  heartOfFarmerAgitation: boolean;
  drugCrisisImpact: "severe" | "moderate" | "low";
  jatSikhOBCCommunities: string[];
}

export interface MajhaRegion extends RegionProfile {
  borderAreas: string[];
  pathankotSeats: number;
  gurdaspurSeats: number;
  hoshiarpurSeats: number;
}

export interface DoabaRegion extends RegionProfile {
  scDalitPopulation: string;
  channiHomeRegion: boolean;
  drugCrisisImpact: "severe" | "moderate" | "low";
}

// ============================================================================
// CASTE & COMMUNITY
// ============================================================================

export interface CasteCommunity {
  community: string;
  politicalInfluence: string;
  keyDemand?: string;
  population?: string;
}

export interface JatSikhOBC {
  status: string;
  obcDemand: boolean;
  shrinkingHoldings: boolean;
  risingDebt: boolean;
  fallingFarmIncomes: boolean;
}

export interface SCDalitCommunity {
  population: string;
  voteBankSignificance: string;
  bspOutreach: boolean;
  channiRepresentation: string;
}

// ============================================================================
// DRUGS & FARMER DISTRESS
// ============================================================================

export interface DrugCrisis {
  commonlyAbused: string[];
  heroinSpend: string;
  opioidSpend: string;
  statistics: {
    heroinAbusers: string;
    nonAlcoholTobacco: string;
    injectingDrugUsers: string;
  };
  droneSmuggling: {
    seizures2024: number;
    heroinSeized2024: string;
    increasePercentage: string;
  };
}

export interface FarmerDistress {
  mspDemands: boolean;
  activeProtests: FarmerProtest[];
  keyLeaders: string[];
  suicideData?: FarmerSuicideData;
}

export interface FarmerProtest {
  name: string;
  demand: string;
  status: "active" | "ended" | "ongoing";
  endDate?: string;
}

export interface FarmerSuicideData {
  total: number;
  period: string;
  debtRidden: string;
  age1935: string;
  malwaConcentration: string;
}

// ============================================================================
// GOVERNANCE & SCHEMES
// ============================================================================

export interface AAPWelfareScheme {
  name: string;
  promise: string;
  implementationStatus: "implemented" | "partial" | "delayed" | "not_implemented";
  launchDate?: string;
  details?: string;
}

export interface MukhMantriSehatYojana {
  coverage: string;
  launchDate?: string;
  auditFindings?: string;
  patientCount?: string;
}

export interface WomenScheme {
  name: string;
  amountGeneral: string;
  amountSC: string;
  announced: string;
  implementationStarted?: string;
}

export interface FiscalCrisis {
  totalDebt: string;
  debtIncrease: string;
  fiscalDeficit: string;
  revenueDeficit?: string;
  debtToGSDP?: string;
}

// ============================================================================
// ENVIRONMENTAL ISSUES
// ============================================================================

export interface StubbleBurning {
  incidents2025?: string;
  reduction?: string;
  centreResponse?: string;
}

export interface GroundwaterContamination {
  affectedDistricts: string[];
  contaminationPercentage: string;
  primaryContaminants: string[];
  malwaSeverity: "critical" | "moderate" | "low";
  healthImpact?: string;
}

// ============================================================================
// MEDIA & COMMUNICATION
// ============================================================================

export interface NewsChannel {
  name: string;
  type: "government" | "entertainment" | "movies" | "news";
}

export interface MediaLandscape {
  channels: NewsChannel[];
  majorChannels: string[];
}

// ============================================================================
// MISCELLANEOUS ISSUES
// ============================================================================

export interface KhalistanMovement {
  currentStatus: string;
  securityThreat: "high" | "moderate" | "low";
  referendumActivities?: string[];
  keyFigures: string[];
}

export interface PunjabCanadaRelations {
  nijjarKilling: boolean;
  TrudeauAccusation: boolean;
  diplomaticStatus: string;
}

export interface NRIDiaspora {
  majorDestinations: string[];
  votingRightsStatus: string;
  influence: string;
  remittanceImpact?: string;
}

// ============================================================================
// KEYWORD COMBINATIONS DATA
// ============================================================================

export interface KeywordCombination {
  id: number;
  query: string;
  category: string;
  subcategory?: string;
}

export interface PartyIssueMatrix extends KeywordCombination {
  party: string;
  issue: string;
}

export interface RegionIssueMatrix extends KeywordCombination {
  region: string;
  issue: string;
}

export interface LeaderIssueMatrix extends KeywordCombination {
  leader: string;
  issue: string;
}

export interface CastePartyMatrix extends KeywordCombination {
  caste: string;
  party: string;
}

export interface CrisisMatrix extends KeywordCombination {
  crisis1: string;
  crisis2: string;
}

export interface EventResponseMatrix extends KeywordCombination {
  event: string;
  response: string;
}

// ============================================================================
// KEY FINDINGS SYNTHESIS
// ============================================================================

export interface KeyFinding {
  id: number;
  title: string;
  description: string;
  severity: "critical" | "high" | "medium" | "low";
}

export interface RegionalBattleground {
  region: string;
  seats: number;
  percentage: string;
  keyFight: string;
  mainIssues: string[];
}

export interface LeaderTracking {
  leader: PoliticalLeader;
  party: string;
  role: string;
  currentStatus: string;
}

export interface KeyDataPoint {
  metric: string;
  value: string;
}

// ============================================================================
// INTELLIGENCE GATHERED - PHASE 3
// ============================================================================

export interface PoliticalDevelopment {
  date: string;
  title: string;
  description: string;
  impact: string;
  severity: "critical" | "high" | "medium" | "low";
}

export interface RajyaSabhaDefection extends PoliticalDevelopment {
  mpCount: number;
  totalMPs: number;
  leader: string;
  impactOn2027: string[];
}

export interface DGPStrategy {
  name: string;
  announcementDate?: string;
  keyPoints: string[];
  targetAudience: string[];
}

export interface TrustVote {
  date: string;
  result: "passed" | "failed";
  margin?: string;
}

export interface FarmerProtestMovement {
  protestName: string;
  demands: string[];
  leader: string;
  startDate?: string;
  endDate?: string;
  status: "active" | "ended" | "ongoing";
}

export interface DrugSeizureData {
  year: number;
  dronesSeized: number;
  heroinKg: number;
  totalContraband?: string;
}

export interface DeraProfile {
  name: string;
  location: string;
  regionalReach: string;
  politicalAlignment: string;
  influence: string;
}

export interface SGPCUpdate {
  president: string;
  electionDate?: string;
  significance: string;
}

// ============================================================================
// OPPOSITION ATTACK LINES
// ============================================================================

export interface GovernanceAttackLine {
  issue: string;
  attackLine: string;
}

export interface DrugCrisisAttackLine {
  statistic: string;
  attackLine: string;
}

export interface FarmerDistressAttackLine {
  data: string;
  attackLine: string;
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface PartySWOT {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface CongressSWOT extends PartySWOT {
  leadershipDisputes: string[];
  noClearCMFace: boolean;
}

// ============================================================================
// KEYWORD SHORT-TAIL SEARCHES
// ============================================================================

export interface ShortTailSearch {
  keyword: string;
  fullName?: string;
  status: "active" | "inactive" | "deceased" | "search_error";
  notes?: string;
}

export interface LeaderShortSearch extends ShortTailSearch {
  mpConstituency?: string;
  position?: string;
  keyIdentity?: string;
}

export interface DistrictShortSearch {
  name: string;
  keyCharacteristics: string[];
  notableUpdate?: string;
}

// ============================================================================
// CRITICAL CORRECTIONS
// ============================================================================

export interface DeceasedLeader {
  name: string;
  deathDate?: string;
  removeFromTracking: boolean;
  notes: string;
}

export interface SearchError {
  searchQuery: string;
  actualResult: string;
  correction: string;
}

// ============================================================================
// COMPLETE SERP DATA STRUCTURE
// ============================================================================

export interface SERPKeywordResearch {
  // Header
  documentGenerated: string;
  researchDate: string;
  searchQueriesExecuted: number;
  categoriesCovered: number;
  keywordCombinationsGenerated: number;

  // Executive
  electionOverview: PunjabElectionOverview;

  // Categories
  congressLeadership: CongressLeadership;
  bjpStrategy: BJPStrategy;
  sadStrategy: PartyStrategy;

  // Regions
  malwaRegion: MalwaRegion;
  majhaRegion: MajhaRegion;
  doabaRegion: DoabaRegion;

  // Communities
  jatSikhOBC: JatSikhOBC;
  scDalitCommunity: SCDalitCommunity;

  // Crisis Data
  drugCrisis: DrugCrisis;
  farmerDistress: FarmerDistress;

  // Governance
  aapSchemes: AAPWelfareScheme[];
  fiscalCrisis: FiscalCrisis;
  womenScheme: WomenScheme;

  // Environment
  stubbleBurning: StubbleBurning;
  groundwaterContamination: GroundwaterContamination;

  // Media
  mediaLandscape: MediaLandscape;

  // External Factors
  khalistanMovement: KhalistanMovement;
  punjabCanadaRelations: PunjabCanadaRelations;
  nriDiaspora: NRIDiaspora;

  // Intelligence
  keyFindings: KeyFinding[];
  regionalBattlegrounds: RegionalBattleground[];
  leaderTracking: LeaderTracking[];
  keyDataPoints: KeyDataPoint[];

  // Keyword Matrices
  partyIssueMatrix: PartyIssueMatrix[];
  regionIssueMatrix: RegionIssueMatrix[];
  leaderIssueMatrix: LeaderIssueMatrix[];
  castePartyMatrix: CastePartyMatrix[];
  crisisMatrix: CrisisMatrix[];
  eventResponseMatrix: EventResponseMatrix[];

  // Phase 3 Intelligence
  politicalDevelopments: PoliticalDevelopment[];
  rajyaSabhaDefections: RajyaSabhaDefection[];
  dgpStrategies: DGPStrategy[];
  trustVotes: TrustVote[];
  farmerProtests: FarmerProtestMovement[];
  drugSeizureData: DrugSeizureData[];

  // Deras
  deraPolitics: DeraProfile[];

  // SGPC
  sgpcUpdate: SGPCUpdate;

  // Attack Lines
  governanceAttackLines: GovernanceAttackLine[];
  drugCrisisAttackLines: DrugCrisisAttackLine[];
  farmerDistressAttackLines: FarmerDistressAttackLine[];

  // SWOT
  congressSWOT: CongressSWOT;

  // Short-tail searches
  leaderShortSearches: LeaderShortSearch[];
  districtShortSearches: DistrictShortSearch[];

  // Corrections
  deceasedLeaders: DeceasedLeader[];
  searchErrors: SearchError[];
}
