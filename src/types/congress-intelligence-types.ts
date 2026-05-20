// Congress Party Intelligence Types for Punjab Congress 2027 Election
// Derived from: research-P2/02_congress_party_intelligence/

// ==========================================
// CENTRAL LEADERSHIP TYPES
// ==========================================

export interface CongressCentralLeadership {
  highCommand: PartyHighCommand;
  aiccOfficeBearers: AICCPosition[];
  cwcMembers: CWGMember[];
  groups: PartyGroup[];
  centralElectionsAuthority: CentralElectionAuthority;
}

export interface PartyHighCommand {
  honoraryPresident: string;
  generalSecretaries: string[];
  treasurer: string;
  communication: string;
  mediaChairperson: string;
}

export interface AICCPosition {
  role: string;
  incumbent: string;
  stateCharge?: string;
  notes?: string;
}

export interface CWGMember {
  name: string;
  position: string;
  faction?: string;
}

export interface PartyGroup {
  name: string;
  leader: string;
  members: number;
  ideology: string;
  influence: "HIGH" | "MEDIUM" | "LOW";
}

export interface CentralElectionAuthority {
  chairman: string;
  members: string[];
  role: string;
}

// ==========================================
// PPCC STRUCTURE TYPES
// ==========================================

export interface PPCCStructure {
  president: string;
  workingPresident?: string;
  generalSecretaries: string[];
  vicePresidents: string[];
  secretaries: string[];
  treasurer: string;
  chiefSpokesperson: string;
  officeBearersCount: number;
  departments: CongressDepartment[];
  cells: CongressCell[];
}

export interface CongressDepartment {
  name: string;
  head: string;
  staff?: number;
}

export interface CongressCell {
  name: string;
  chairman: string;
  secretary?: string;
  focus: string;
}

// ==========================================
// DISTRICT & BLOCK LEVEL TYPES
// ==========================================

export interface DistrictCongressCommittee {
  district: string;
  president: string;
  workingPresident?: string;
  generalSecretaries: number;
  blockCount: number;
  boothCount: number;
  status: "Active" | "Reorganizing" | "Weak";
}

export interface BlockCongressCommittee {
  block: string;
  district: string;
  president: string;
  coordinator?: string;
  boothCount: number;
}

export interface RegionalStructure {
  region: "Malwa" | "Majha" | "Doaba";
  coordinator?: string;
  dccCount: number;
  boothCount: number;
  politicalContext: string;
}

// ==========================================
// BOOTH LEVEL ORGANIZATION TYPES
// ==========================================

export interface BoothOrganization {
  totalBooths: number;
  targetBoothSevaks: number;
  appointedBoothSevaks: number;
  coveragePercent: number;
  boothPresidentModel: BoothPresidentModel;
  pannaPramukhModel: PannaPramukhModel;
  womensParticipation: WomensBoothParticipation;
}

export interface BoothPresidentModel {
  description: string;
  target: number;
  appointed: number;
  coverage: number;
}

export interface PannaPramukhModel {
  description: string;
  totalAppointed: number;
  responsibility: string;
  perBoothRatio: string;
}

export interface WomensBoothParticipation {
  targetPercent: number;
  currentPercent: number;
  gap: number;
  strategy: string;
}

export interface BoothRole {
  role: string;
  quantity: number;
  responsibility: string;
  appointmentStatus: "Appointed" | "Target" | "Gap";
}

// ==========================================
// SC CELL TYPES
// ==========================================

export interface SCCellData {
  totalSCPopulation: number;
  scPercent: number;
  scVoters: string;
  communities: SCCommunity[];
  strategy: SCStrategy;
  outreach: SCOutreach;
  mazhabiSikh: MazhabiSikhData;
  ravidasia: RavidasiaData;
}

export interface SCCommunity {
  community: string;
  populationPercent: number;
  primaryRegion: string;
  votingTendency: string;
  keyIssue: string;
}

export interface SCStrategy {
  targetVoteShare: number;
  currentEstimate: number;
  swingSeats: number;
  outreachPriority: "CRITICAL" | "HIGH" | "MEDIUM";
}

export interface SCOutreach {
  programs: string[];
  leaders: string[];
  organizations: string[];
}

export interface MazhabiSikhData {
  population: string;
  concentration: string[];
  votingPattern: string;
  congressReach: number;
  bspVulnerability: number;
}

export interface RavidasiaData {
  population: string;
  concentration: string[];
  votingPattern: string;
  BSPConnection: string;
}

// ==========================================
// OBC CELL TYPES
// ==========================================

export interface OBCCellData {
  totalOBCPopulation: number;
  obcPercent: number;
  obcVoters: string;
  communities: OBCCommunity[];
  categories: OBCCategory[];
  strategy: OBCStrategy;
  artisanCommunities: ArtisanCommunityData[];
}

export interface OBCCommunity {
  community: string;
  population: string;
  primaryRegion: string;
  occupation: string;
  votingTendency: string;
}

export interface OBCCategory {
  category: string;
  jatis: string[];
  populationPercent: number;
}

export interface OBCStrategy {
  targetVoteShare: number;
  currentEstimate: number;
  keyCommunities: string[];
  swingSeats: number;
}

export interface ArtisanCommunityData {
  community: string;
  traditionalOccupation: string;
  concentration: string[];
  economicStatus: string;
}

// ==========================================
// MINORITY CELL TYPES
// ==========================================

export interface MinorityCellData {
  totalMinorityPercent: number;
  minorityVoters: string;
  communities: MinorityCommunity[];
  strategy: MinorityStrategy;
  malerkotlaFocus: MalerkotlaData;
  christianOutreach: ChristianOutreachData;
}

export interface MinorityCommunity {
  community: string;
  population: string;
  primaryLocation: string[];
  votingTendency: string;
  keyIssue: string;
}

export interface MinorityStrategy {
  targetCommunities: string[];
  currentEstimate: number;
  outreachPriority: "CRITICAL" | "HIGH" | "MEDIUM";
  messageThemes: string[];
}

export interface MalerkotlaData {
  description: string;
  muslimPopulation: string;
  significance: string;
  congressConnection: string;
}

export interface ChristianOutreachData {
  estimatedPopulation: string;
  concentration: string[];
  dalitChristianIssue: string;
  congressPosition: string;
}

// ==========================================
// YOUTH CONGRESS TYPES
// ==========================================

export interface YouthCongressData {
  totalYouthPopulation: number;
  youthPercent: number;
  youthVoters: string;
  structure: YouthStructure;
  nsuiConnection: NSUIData;
  strategy: YouthStrategy;
  digitalNativeEngagement: DigitalEngagement;
}

export interface YouthStructure {
  president: string;
  generalSecretaries: string[];
  blockUnits: number;
  collegeUnits: number;
  activeMembers: number;
}

export interface NSUIData {
  statePresident: string;
  units: number;
  activeMembers: number;
  campusPresence: string[];
}

export interface YouthStrategy {
  priorityIssues: string[];
  outreachChannels: string[];
  targetActivation: number;
  digitalFirst: boolean;
}

export interface DigitalEngagement {
  socialMediaFollowing: number;
  whatsappGroups: number;
  engagementRate: string;
  contentTypes: string[];
}

// ==========================================
// FARMER CELL TYPES
// ==========================================

export interface FarmerCellData {
  totalFarmers: number;
  farmerHouseholds: number;
  farmLabor: number;
  landlessFarmLabor: number;
  strategy: FarmerStrategy;
  bkuConnection: BKUConnection;
  ruralOutreach: RuralOutreach;
}

export interface FarmerStrategy {
  targetVoteShare: number;
  currentEstimate: number;
  keyIssues: string[];
  outreachPriority: "CRITICAL" | "HIGH" | "MEDIUM";
}

export interface BKUConnection {
  status: string;
  supportLevel: string;
  leaderContacts: string[];
  memberEstimate: number;
}

export interface RuralOutreach {
  villages: number;
  targetVillages: number;
  bkuChembers: number;
  kisanMahapanchayat: number;
}

// ==========================================
// NRI CELL TYPES
// ==========================================

export interface NRICellData {
  totalDiaspora: string;
  diasporaCountries: NRICountry[];
  voterRegistration: NRIVoterData;
  strategy: NRIStrategy;
  remittanceInfluence: RemittanceData;
}

export interface NRICountry {
  country: string;
  population: string;
  congressSympathy: string;
  aapSympathy: string;
  riskLevel: "HIGH" | "MEDIUM" | "LOW";
  keyFactor: string;
}

export interface NRIVoterData {
  registered2019: number;
  votesCast2019: number;
  potentialIfOnline: string;
  registrationChallenge: string;
}

export interface NRIStrategy {
  priorityCountries: string[];
  engagementChannels: string[];
  targetOutcome: string;
}

export interface RemittanceData {
  annualRemittance: string;
  percentOfStateGDP: string;
  influenceChannels: string[];
}

// ==========================================
// MEDIA & SOCIAL MEDIA TYPES
// ==========================================

export interface MediaCellData {
  traditionalMedia: TraditionalMedia;
  socialMedia: SocialMediaPresence;
  digitalStrategy: DigitalStrategy;
  contentTeam: ContentTeam;
  responseCell: ResponseCell;
}

export interface TraditionalMedia {
  print: PrintMedia;
  tv: TVMedia;
  digital: DigitalMedia;
}

export interface PrintMedia {
  newspapers: Newspaper[];
  magazines: string[];
  expenditure: string;
}

export interface Newspaper {
  name: string;
  language: string;
  reach: string;
  congressStance: string;
}

export interface TVMedia {
  channels: string[];
  debates: number;
  expenditure: string;
}

export interface DigitalMedia {
  newsPortals: string[];
  expenditure: string;
}

export interface SocialMediaPresence {
  platforms: SocialPlatform[];
  totalFollowers: number;
  engagementRate: string;
  contentTypes: ContentType[];
}

export interface SocialPlatform {
  platform: string;
  followers: number;
  postsPerWeek: number;
  engagementRate: string;
}

export interface ContentType {
  type: string;
  frequency: string;
  avgReach: string;
}

export interface DigitalStrategy {
  targetReach: string;
  currentReach: string;
  priorityPlatforms: string[];
  contentThemes: string[];
  influencerBudget: string;
}

export interface ContentTeam {
  teamSize: number;
  roles: string[];
  outputTarget: number;
}

export interface ResponseCell {
  monitoringHours: string;
  responseTime: string;
  teamSize: number;
}

// ==========================================
// REBEL MANAGEMENT TYPES
// ==========================================

export interface RebelManagementData {
  rebelAssessment: RebelAssessment;
  seatNegotiation: SeatNegotiation;
  winnabilityAnalysis: WinnabilityAnalysis;
}

export interface RebelAssessment {
  totalRebelCandidates: number;
  potentialRebels: number;
  highImpactRebels: number;
  history: RebelHistory;
}

export interface RebelHistory {
  2017: number;
  2022: number;
  pattern: string;
}

export interface SeatNegotiation {
  negotiableSeats: number;
  sittingMLAs: number;
 RebelFactor: string;
  negotiationTimeline: string;
}

export interface WinnabilityAnalysis {
  criteria: string[];
  weightage: Record<string, number>;
  topFactors: string[];
}

// ==========================================
// TICKET DISTRIBUTION TYPES
// ==========================================

export interface TicketDistributionData {
  screeningProcess: ScreeningProcess;
  criteria: TicketCriteria;
  timeline: TicketTimeline;
  candidateProfile: CandidateProfile;
}

export interface ScreeningProcess {
  committees: ScreeningCommittee[];
  stages: string[];
  finalAuthority: string;
}

export interface ScreeningCommittee {
  name: string;
  members: string[];
  role: string;
}

export interface TicketCriteria {
  winnability: number;
  casteBalance: number;
  youthQuota: number;
  minorityRepresentation: number;
  financialRules: number;
  localVSExternal: number;
}

export interface TicketTimeline {
  applicationStart: string;
  interviewStart: string;
  centralApproval: string;
  finalList: string;
}

export interface CandidateProfile {
  totalSeats: number;
  insiders: number;
  outsiders: number;
  womenQuota: number;
  youthQuota: number;
  RebelFactor: number;
}

// ==========================================
// DATA ANALYTICS TYPES
// ==========================================

export interface DataAnalyticsData {
  infrastructure: AnalyticsInfrastructure;
  dataCoverage: DataCoverage;
  tools: AnalyticsTools;
  capabilities: AnalyticsCapabilities;
  gaps: AnalyticsGaps;
}

export interface AnalyticsInfrastructure {
  verbStatus: string;
  dataCenter: string;
  staffSize: number;
  budget: string;
}

export interface DataCoverage {
  voterList: string;
  boothLevel: string;
  demographic: string;
  casteMapping: string;
  sentiment: string;
}

export interface AnalyticsTools {
  crm: string;
  gIS: string;
  socialListening: string;
  survey: string;
  predictive: string;
}

export interface AnalyticsCapabilities {
  realTimeTracking: boolean;
  microTargeting: boolean;
  sentimentAnalysis: boolean;
  predictiveModeling: boolean;
  competitorAnalysis: boolean;
}

export interface AnalyticsGaps {
  critical: string[];
  important: string[];
  minor: string[];
}

// ==========================================
// WORKER NETWORK TYPES
// ==========================================

export interface WorkerNetwork {
  totalWorkers: number;
  activeWorkers: number;
  activationRate: number;
  byLevel: WorkerLevel[];
  byRegion: WorkerRegion[];
}

export interface WorkerLevel {
  level: string;
  count: number;
  target: number;
  coverage: number;
  status: "Active" | "Partial" | "Weak";
}

export interface WorkerRegion {
  region: "Malwa" | "Majha" | "Doaba";
  workers: number;
  booths: number;
  workerPerBooth: number;
  activationTrend: "up" | "down" | "stable";
}

// ==========================================
// CONGRESS INTELLIGENCE REPORT
// ==========================================

export interface CongressIntelligenceReport {
  reportDate: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
  sourcesConsulted: number;
  dataCurrency: string;
  leadership: CongressCentralLeadership;
  ppcc: PPCCStructure;
  districtStructure: DistrictCongressCommittee[];
  regionalStructure: RegionalStructure[];
  boothOrganization: BoothOrganization;
  scCell: SCCellData;
  obcCell: OBCCellData;
  minorityCell: MinorityCellData;
  youthCongress: YouthCongressData;
  farmerCell: FarmerCellData;
  nriCell: NRICellData;
  mediaCell: MediaCellData;
  rebelManagement: RebelManagementData;
  ticketDistribution: TicketDistributionData;
  dataAnalytics: DataAnalyticsData;
  workerNetwork: WorkerNetwork;
  gaps: string[];
}
