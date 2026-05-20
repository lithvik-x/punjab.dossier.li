// Competitor Intelligence Types for Punjab Congress 2027 Election
// Derived from: research-P5/competition-management/

/**
 * AAP (Aam Aadmi Party) Punjab Analysis
 */
export interface AAPCompetitor {
  party: "AAP";
  governanceRecord: GovernanceRecord;
  welfareSchemes: WelfareScheme[];
  weaknesses: CompetitorWeakness[];
  voterBase: VoterBaseSegment[];
  electoralPerformance: ElectoralPerformance;
  swot: SWOTAnalysis;
  strategy: AAPStrategy;
}

export interface GovernanceRecord {
  healthInfrastructure: string;
  educationInitiatives: string;
  infrastructureRoads: string;
  lawEnforcement: string;
  fiscalPerformance: FiscalData;
}

export interface WelfareScheme {
  name: string;
  description: string;
  launchDate: string;
  status: "Active" | "Partial" | "Failed" | "Announced";
}

export interface FiscalData {
  totalDebt: string;
  debtToGSDP: string;
  newLoans: string;
  irregularities: string;
}

export interface CompetitorWeakness {
  area: string;
  severity: "Critical" | "High" | "Medium";
  description: string;
  evidence: string;
}

export interface VoterBaseSegment {
  segment: string;
  support: string;
  trend: "Growing" | "Stable" | "Declining";
  keyFactors: string[];
}

export interface ElectoralPerformance {
  2022: PartyResult;
  2024: LokSabhaResult;
  current: CurrentStatus;
}

export interface PartyResult {
  seats: number;
  voteShare: number;
}

export interface LokSabhaResult {
  seats: number;
  voteShare?: number;
  details: string;
}

export interface CurrentStatus {
  assemblySeats: number;
  rajyaSabhaSeats: number;
  lokSabhaSeats: number;
  mlacount: number;
}

export interface SWOTAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface AAPStrategy {
  welfareExpansion: string[];
  antiBJPPolarization: string[];
  digitalCampaign: string[];
  farmerDamageControl: string[];
}

/**
 * SAD (Shiromani Akali Dal) Analysis
 */
export interface SADCompetitor {
  party: "SAD";
  currentStatus: SADCurrentStatus;
  factions: SADFaction[];
  electoralDecline: DeclineData[];
  leadership: SADLeadership;
  allianceStatus: AllianceStatus;
  swot: SWOTAnalysis;
}

export interface SADCurrentStatus {
  president: string;
  assemblySeats: number;
  lokSabhaSeats: number;
  voteShare2022: number;
  voteShare2024: number;
}

export interface SADFaction {
  name: string;
  leader: string;
  status: "Active" | "Split" | "Merged";
  position?: string;
}

export interface DeclineData {
  election: string;
  seats?: number;
  voteShare?: string;
  notes: string;
}

export interface SADLeadership {
  president: string;
  formerCM: string;
  lokSabhaLeader: string;
  legalCases: string[];
}

export interface AllianceStatus {
  bjpAlliance: AllianceDetails;
  bspAlliance: AllianceDetails;
  current: string;
}

export interface AllianceDetails {
  status: "Active" | "Collapsed" | "Negotiating" | "None";
  date?: string;
  reason?: string;
}

/**
 * BJP Punjab Analysis
 */
export interface BJPCompetitor {
  party: "BJP";
  currentStatus: BJPCurrentStatus;
  growthTrajectory: GrowthData[];
  strategy: BJPStrategy;
  voterTargeting: VoterTargeting[];
  leadership: BJPLeadership;
  swot: SWOTAnalysis;
}

export interface BJPCurrentStatus {
  statePresident: string;
  workingPresident?: string;
  assemblySeats: number;
  lokSabhaSeats: number;
  voteShare2022: number;
  voteShare2024: number;
  soloStatus: "Confirmed" | "Possible" | "Alliance";
}

export interface GrowthData {
  election: string;
  type: "Assembly" | "Lok Sabha";
  voteShare: number;
  seats?: number;
  notes: string;
}

export interface BJPStrategy {
  socialCoalition: string[];
  organizationalBuild: string[];
  antiDrugCampaign: string[];
  deraEngagement: string[];
}

export interface VoterTargeting {
  community: string;
  population: string;
  currentSupport: string;
  target: string;
  strategy: string;
}

export interface BJPLeadership {
  statePresident: string;
  nationalOversight: string;
  keyUnionMinisters: string[];
  defectorLeaders: DefectorLeader[];
}

export interface DefectorLeader {
  name: string;
  fromParty: string;
  role: string;
  impact: string;
}

/**
 * BSP Analysis
 */
export interface BSPCompetitor {
  party: "BSP";
  currentStatus: BSPStatus;
  declineTrajectory: DeclineData[];
  outreachCampaign: string;
}

export interface BSPStatus {
  president: string;
  assemblySeats: number;
  voteShare2022: number;
  trend: string;
}

/**
 * Poll Data
 */
export interface PollData {
  source: string;
  date: string;
  congress: number;
  aap: number;
  sad: number;
  bjp: number;
  others: number;
  margin: string;
}

/**
 * Sentiment Data
 */
export interface SentimentTrend {
  party: "Congress" | "AAP" | "SAD" | "BJP";
  favorable: number;
  unfavorable: number;
  netScore: number;
  trend: "Improving" | "Declining" | "Stable";
}

/**
 * Key Issue Ownership
 */
export interface IssueOwnership {
  issue: string;
  importance: number; // percentage of voters
  congressOwnership: number;
  aapOwnership: number;
  sadBJPOwnership: number;
  owner: "Congress" | "AAP" | "SAD-BJP" | "Others";
}
