// Candidate Intelligence Types for Punjab Congress 2027 Election
// Derived from: research-P2/04_candidate_intelligence/

// ==========================================
// CM FACE CANDIDATE TYPES
// ==========================================

export interface CMCandidate {
  name: string;
  fullName: string;
  currentRole: string;
  age: number;
  casteBackground: string;
  region: "Malwa" | "Majha" | "Doaba";
  assessment: CMCandidateAssessment;
  strengths: string[];
  weaknesses: string[];
  winnabilityScore: number;
}

export interface CMCandidateAssessment {
  leadershipQuality: number; // 1-10
  casteAppeal: number; // 1-10
  regionalBalance: number; // 1-10
  youthImage: number; // 1-10
  antiIncumbencyFactor: number; // 1-10
  organizationalControl: number; // 1-10
  mediaPresence: number; // 1-10
  overallRating: string; // "Strong" | "Moderate" | "Weak"
}

// ==========================================
// CONGRESS REBEL MLA TYPES
// ==========================================

export interface RebelMLA {
  name: string;
  constituency: string;
  region: "Malwa" | "Majha" | "Doaba";
  seatType: "General" | "SC" | "ST";
  rebellionType: "ticket_denied" | "factional" | "programmatic";
  impactLevel: "High" | "Medium" | "Low";
  votesPolled: number;
  marginOfDefeat: number;
  currentStatus: "active" | "inactive" | "reconciled";
}

// ==========================================
// TURNCAT CANDIDATE TYPES
// ==========================================

export interface TurncoatCandidate {
  name: string;
  formerParty: string;
  newParty: string;
  entryMode: "defection" | "partnership" | "Merged";
  electionYear: number;
  seatWon: boolean;
  constituency: string;
  region: "Malwa" | "Majha" | "Doaba";
  casteBackground: string;
  impactAssessment: TurncoatImpact;
}

export interface TurncoatImpact {
  voterPerception: "positive" | "negative" | "neutral";
  partyReinforcement: number; // 1-10
  credibilityScore: number; // 1-10
  electoralRisk: "High" | "Medium" | "Low";
}

// ==========================================
// YOUTH CANDIDATE TYPES
// ==========================================

export interface YouthCandidate {
  category: "millennial" | "gen_z" | "first_time";
  ageRange: string;
  criteria: YouthCandidateCriteria;
  targetPercentage: number;
  strategy: string;
  profileRequirements: string[];
}

export interface YouthCandidateCriteria {
  maxAge: number;
  newFaceRatio: number;
  educationRequirement: string;
  socialMediaPresence: boolean;
  grassrootsExperience: boolean;
}

// ==========================================
// NRI CANDIDATE TYPES
// ==========================================

export interface NRICandidate {
  name: string;
  homeConstituency: string;
  country: string;
  occupation: string;
  returnFrequency: "frequent" | "occasional" | "rare";
  politicalExperience: "none" | "local" | "state";
  candidacyStatus: "probable" | "possible" | "unlikely";
  nriVoteBankSize: number;
}

// ==========================================
// WOMEN CANDIDATE TYPES
// ==========================================

export interface WomenCandidateData {
  totalWomenMLAs: number;
  womenByParty: WomenMLAByParty;
  reservationTarget: number;
  currentPipeline: number;
  keyProfiles: WomenCandidateProfile[];
  strategy: WomenOutreachStrategy;
}

export interface WomenMLAByParty {
  aap: number;
  congress: number;
  sad: number;
  bjp: number;
  others: number;
}

export interface WomenCandidateProfile {
  name: string;
  constituency: string;
  party: string;
  status: "sitting" | "probable" | "possible";
  age: number;
  casteBackground: string;
}

export interface WomenOutreachStrategy {
  targetSeats: number;
  priorityRegions: string[];
  keyIssues: string[];
  winnabilityThreshold: number;
}

// ==========================================
// DALIT CANDIDATE TYPES
// ==========================================

export interface DalitCandidateData {
  totalDSCandidates: number;
  scReservedSeats: number;
  congressSCSeatsWon2022: number;
  aapSCSeatsWon2022: number;
  keyLeaders: DalitLeader[];
  strategy: DalitCandidateStrategy;
  challenges: string[];
}

export interface DalitLeader {
  name: string;
  constituency: string;
  position: "sitting" | "former" | "probable";
  community: string;
  influenceLevel: "High" | "Medium" | "Low";
}

export interface DalitCandidateStrategy {
  targetSeats: number;
  communityFocus: string[];
  keyIssues: string[];
  coalitionRequirement: string;
}

// ==========================================
// JAT SIKH CANDIDATE TYPES
// ==========================================

export interface JatSikhCandidateData {
  totalJatSikhCandidates: number;
  jatSikhPopulation: number;
  regionalDistribution: JatSikhRegionalDistribution[];
  keyClans: string[];
  strategy: JatSikhCandidateStrategy;
  challenges: string[];
}

export interface JatSikhRegionalDistribution {
  region: "Malwa" | "Majha" | "Doaba";
  jatSikhPercentage: number;
  dominantClans: string[];
  congressReach: number;
}

export interface JatSikhCandidateStrategy {
  targetSeats: number;
  clanBalancing: string;
  keyIssues: string[];
  coalitionMessage: string;
}

// ==========================================
// TICKET DENIAL TYPES
// ==========================================

export interface TicketDenialData {
  totalDenied: number;
  highImpactDenials: TicketDenialImpact[];
  rebelCrossoverRate: number;
  reconciliationStatus: ReconciliationStatus;
}

export interface TicketDenialImpact {
  name: string;
  constituency: string;
  previousMargin: number;
  denialReason: string;
  likelyAction: "rebel" | "conciliate" | "inactive";
  votesPolled: number;
}

export interface ReconciliationStatus {
  totalRebels: number;
  reconciled: number;
  stillRebel: number;
  activeRebelImpact: number;
}

// ==========================================
// TICKET SELECTION PROCESS TYPES
// ==========================================

export interface TicketSelectionProcess {
  stages: TicketSelectionStage[];
  criteria: SelectionCriteria;
  authority: string;
  timeline: SelectionTimeline;
}

export interface TicketSelectionStage {
  stage: number;
  name: string;
  description: string;
  duration: string;
  decisionMakers: string[];
}

export interface SelectionCriteria {
  winnability: SelectionWeight;
  casteBalance: SelectionWeight;
  youthQuota: SelectionWeight;
  minorityRepresentation: SelectionWeight;
  financialRules: SelectionWeight;
  localVsExternal: SelectionWeight;
}

export interface SelectionWeight {
  weight: number;
  description: string;
}

export interface SelectionTimeline {
  processStart: string;
  applicationDeadline: string;
  interviewStart: string;
  centralApproval: string;
  finalList: string;
}

// ==========================================
// CANDIDATE QUALITY INDEX (CQI) TYPES
// ==========================================

export interface CQIFramework {
  version: string;
  dimensions: CQIDimension[];
  scoringMethodology: string;
  weightage: CQIScoreWeightage;
}

export interface CQIDimension {
  dimension: string;
  weight: number;
  indicators: CQIScoreIndicator[];
  scoringRange: { min: number; max: number };
}

export interface CQIScoreIndicator {
  indicator: string;
  weight: number;
  dataSource: string;
}

export interface CQIScoreWeightage {
  winnabilityScore: number;
  loyaltyIndex: number;
  antiIncumbencyFactor: number;
  localConnectivity: number;
  resourceCapability: number;
  digitalPresence: number;
  crisisManagement: number;
}

export interface CQIScore {
  candidateName: string;
  constituency: string;
  totalScore: number;
  dimensionScores: Record<string, number>;
  ranking: number;
  recommendation: "safe" | "probable" | "possible" | "unlikely";
}

// ==========================================
// SAD CHIEF CANDIDATE TYPES
// ==========================================

export interface SADChiefCandidate {
  name: string;
  position: string;
  age: number;
  casteBackground: string;
  faction: string;
  politicalBase: string;
  assessment: SADCandidateAssessment;
}

export interface SADCandidateAssessment {
  leadershipQuality: number;
  factionControl: number;
  electoralWinnability: number;
  organizationalStrength: number;
  overallRating: "Strong" | "Moderate" | "Weak";
}

// ==========================================
// BJP CANDIDATE STRATEGY TYPES
// ==========================================

export interface BJPcandidateStrategy {
  totalSeats: number;
  soloSeats: number;
  contested2022: number;
  targetSeats2027: number;
  candidateProfile: BJPcandidateProfile;
  keyStrategies: string[];
  vulnerabilities: string[];
}

export interface BJPcandidateProfile {
  upperCasteHeavy: number;
  youthCandidates: number;
  dalitCandidates: number;
  womanCandidates: number;
  turncoatPercentage: number;
}

// ==========================================
// AAP CANDIDATE BENCH TYPES
// ==========================================

export interface AAPCandidateBench {
  totalMLAs: number;
  firstTimeMLAs: number;
  retentionRate: number;
  benchStrength: AAPBenchStrength;
  recruitmentPipeline: AAPRecruitmentPipeline;
  vulnerabilities: string[];
}

export interface AAPBenchStrength {
  strongRecruit: number;
  moderateRecruit: number;
  weakRecruit: number;
  unknown: number;
}

export interface AAPRecruitmentPipeline {
  targetProfiles: string[];
  sectors: string[];
  processStages: string[];
}

// ==========================================
// CASTE BALANCE ANALYSIS TYPES
// ==========================================

export interface CasteBalanceAnalysis {
  totalSeats: number;
  casteComposition: CasteSeatComposition[];
  balanceScore: number;
  recommendations: CasteBalanceRecommendation[];
}

export interface CasteSeatComposition {
  casteCategory: string;
  populationPercent: number;
  seatsContested: number;
  seatsTargeted: number;
}

export interface CasteBalanceRecommendation {
  casteGroup: string;
  currentRepresentation: number;
  targetRepresentation: number;
  gap: number;
  priority: "Critical" | "High" | "Medium";
}

// ==========================================
// URBAN CANDIDATE TYPES
// ==========================================

export interface UrbanCandidateData {
  totalUrbanSeats: number;
  urbanVoterPercentage: number;
  congressUrbanSeats2022: number;
  strategy: UrbanCandidateStrategy;
  keyChallenges: string[];
}

export interface UrbanCandidateStrategy {
  targetSeats: number;
  voterProfile: string;
  candidateProfile: string;
  priorityIssues: string[];
  marketingApproach: string;
}

// ==========================================
// RURAL CANDIDATE TYPES
// ==========================================

export interface RuralCandidateData {
  totalRuralSeats: number;
  ruralVoterPercentage: number;
  congressRuralSeats2022: number;
  regionalDistribution: RuralRegionalDistribution[];
  strategy: RuralCandidateStrategy;
  keyChallenges: string[];
}

export interface RuralRegionalDistribution {
  region: "Malwa" | "Majha" | "Doaba";
  ruralSeats: number;
  congressSeats2022: number;
  targetSeats2027: number;
}

export interface RuralCandidateStrategy {
  targetSeats: number;
  farmerFocus: string[];
  candidateProfile: string;
  keyIssues: string[];
  regionalPriorities: RuralRegionalPriority[];
}

export interface RuralRegionalPriority {
  region: "Malwa" | "Majha" | "Doaba";
  prioritySeats: number;
  keyMessage: string;
  dominantCaste: string;
}

// ==========================================
// FIRST-TIME CANDIDATE TYPES
// ==========================================

export interface FirstTimeCandidateData {
  targetPercentage: number;
  newFaceRatio: number;
  selectionCriteria: FirstTimeCandidateCriteria;
  onboardingProcess: OnboardingProcess;
  supportStructure: SupportStructure;
}

export interface FirstTimeCandidateCriteria {
  ageLimit: number;
  educationRequirement: string;
  socialMediaPresence: boolean;
  grassrootsExperience: boolean;
  criminalRecord: string;
}

export interface OnboardingProcess {
  trainingModules: string[];
  duration: string;
  mentorshipProgram: string;
}

export interface SupportStructure {
  warRoomSupport: boolean;
  digitalTeam: boolean;
  fundsAllocation: string;
  seniorMentor: boolean;
}

// ==========================================
// INCUMBENT VULNERABILITY TYPES
// ==========================================

export interface IncumbentVulnerabilityIndex {
  totalIncumbents: number;
  vulnerableIncumbents: VulnerableIncumbent[];
  vulnerabilityScore: number;
  keyFactors: string[];
}

export interface VulnerableIncumbent {
  name: string;
  constituency: string;
  party: string;
  marginOfVictory2022: number;
  vulnerabilityFactors: VulnerabilityFactor[];
  vulnerabilityScore: number;
  recommendation: string;
}

export interface VulnerabilityFactor {
  factor: string;
  impact: "High" | "Medium" | "Low";
  description: string;
}

// ==========================================
// CANDIDATE INTELLIGENCE REPORT
// ==========================================

export interface CandidateIntelligenceReport {
  reportDate: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
  sourcesConsulted: number;
  dataCurrency: string;
  cmCandidates: CMCandidate[];
  rebelMLAs: RebelMLA[];
  turncoatAnalysis: TurncoatCandidate[];
  youthCandidates: YouthCandidate;
  nriCandidates: NRICandidate[];
  womenData: WomenCandidateData;
  dalitData: DalitCandidateData;
  jatSikhData: JatSikhCandidateData;
  ticketDenialData: TicketDenialData;
  selectionProcess: TicketSelectionProcess;
  cqiFramework: CQIFramework;
  sadCandidates: SADChiefCandidate[];
  bjpStrategy: BJPcandidateStrategy;
  aapBench: AAPCandidateBench;
  casteBalance: CasteBalanceAnalysis;
  urbanData: UrbanCandidateData;
  ruralData: RuralCandidateData;
  firstTimeCandidates: FirstTimeCandidateData;
  incumbentVulnerability: IncumbentVulnerabilityIndex;
  gaps: string[];
}
