// Campaign Budget & Resource Allocation Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g38-campaign-budget-resource-allocation.md

// ==========================================
// RESOURCE LANDSCAPE
// ==========================================

export interface PartyResourceEstimate {
  party: "AAP" | "Congress" | "BJP";
  resourceSource: string;
  "2022Estimate": string;
  "2027Projected": string;
  notes: string;
}

export interface ResourceGapScenario {
  scenario: string;
  congressBudget: string;
  aapBudget: string;
  bjpBudget: string;
  congressGapVsAAP: string;
}

// ==========================================
// BUDGET ALLOCATION FRAMEWORK
// ==========================================

export interface MasterBudgetAllocation {
  category: string;
  percentage: string;
  amount: string;
  rationale: string;
}

export interface FieldOperationsBudget {
  subCategory: string;
  allocation: string;
  amount: string;
}

export interface MediaAdvertisingBudget {
  subCategory: string;
  allocation: string;
  amount: string;
}

export interface DigitalSocialBudget {
  subCategory: string;
  allocation: string;
  amount: string;
}

export interface EventsRalliesBudget {
  eventType: string;
  estimatedCount: string;
  costPerEvent: string;
  totalAllocation: string;
}

export interface StaffInfrastructureBudget {
  subCategory: string;
  allocation: string;
  amount: string;
}

export interface SecurityComplianceBudget {
  subCategory: string;
  allocation: string;
  amount: string;
}

export interface ContingencyBudget {
  allocation: string;
  amount: string;
  purpose: string;
}

// ==========================================
// CONSTITUENCY-LEVEL RESOURCE ALLOCATION
// ==========================================

export interface SeatCategory {
  category: string;
  seats: number;
  description: string;
  priorityWeight: string;
}

export interface BasePerSeatBudget {
  category: string;
  weight: string;
  weightedSeats: string;
  perSeatAllocation: string;
}

export interface ConstituencyBudgetBreakdown {
  subAllocation: string;
  percentage: string;
  perSeat: string;
  total: string;
}

export interface MarginAdjustmentFormula {
  description: string;
  example: string;
}

export interface CompetitiveIntensityMultiplier {
  scenario: string;
  multiplier: string;
}

// ==========================================
// ROI OPTIMIZATION
// ==========================================

export interface InvestmentROIRanking {
  rank: number;
  investmentType: string;
  roiScore: string;
  timeHorizon: string;
  notes: string;
}

export interface ChannelROIComparison {
  channel: string;
  costPerVoterReached: string;
  persuasionRate: string;
  turnoutImpact: string;
  overallROI: string;
}

export interface CampaignPhase {
  phase: string;
  timeline: string;
  budgetPercentage: string;
  allocationBreakdown: Record<string, string>;
}

export interface WastedInvestment {
  investment: string;
  reason: string;
  alternative: string;
}

// ==========================================
// RESOURCE GAP MITIGATION
// ==========================================

export interface GapFillingPriority {
  priority: number;
  action: string;
  potentialAmount: string;
  timeline: string;
}

export interface BudgetCutTier {
  tier: number;
  cuts: string[];
  savings: string;
}

export interface NRIFundraisingPotential {
  market: string;
  estimatedDonors: string;
  averageDonation: string;
  potential: string;
  approach: string;
}

export interface CentralPartyRequest {
  ask: string;
  amount: string;
  justification: string;
}

// ==========================================
// CANDIDATE SELF-FUNDING
// ==========================================

export interface ECIExpenditureLimit {
  category: string;
  "2022Limit": string;
  "2027ProjectedLimit": string;
}

export interface CandidateSelfFundingExpectation {
  seatType: string;
  expectedSelfFunding: string;
  includes: string;
}

export interface PartyVsCandidateFundExpenditure {
  expenditureType: string;
  partyFund: string;
  candidateFund: string;
  notes: string;
}

export interface SelfFundingRisk {
  risk: string;
  mitigation: string;
}

// ==========================================
// TRACKING & ACCOUNTABILITY
// ==========================================

export interface FinancialReport {
  report: string;
  contents: string;
  deadline: string;
  submission: string;
}

export interface AuditMechanism {
  type: string;
  frequency: string;
  conductedBy: string;
  scope: string;
}

export interface FundAllocationDecision {
  trigger: string;
  action: string;
}

export interface ProtectedBudgetItem {
  category: string;
  description: string;
}

// ==========================================
// FUNDRAISING MILESTONES
// ==========================================

export interface MonthlyFundraisingTarget {
  month: string;
  target: string;
  cumulative: string;
  primaryFocus: string;
}

export interface FundraisingResponsibility {
  role: string;
  responsibility: string;
  targetAmount: string;
}

export interface DonorEngagementStrategy {
  donorType: string;
  engagementMethod: string;
  incentive: string;
}

export interface DonorBenefits {
  donationLevel: string;
  benefits: string[];
}

// ==========================================
// RISK SCENARIOS
// ==========================================

export interface AAPOutspendScenario {
  impactAssessment: string;
  congressResponse: {
    action: string;
    amount: string;
    details: string;
  }[];
  newAllocation: Record<string, string>;
}

export interface CentralPartyGapScenario {
  impactAssessment: string;
  congressResponse: {
    action: string;
    amount: string;
    details: string;
  }[];
}

export interface CrisisTypeBudget {
  crisisType: string;
  reserveRequired: string;
  source: string;
  authorization: string;
}

// ==========================================
// KEY CONCEPTS
// ==========================================

export const CAMPAIGN_BUDGET_CONCEPTS = {
  flipList: "Seats lost by <5% margin in 2022",
  defendList: "Seats won by Congress in 2022",
  priorityList: "Winnable seats not currently held",
  hardCore: "Safe/strong Congress seats",
  outside: "Deeply problematic seats",
  roi: "Return on Investment",
  gotv: "Get Out the Vote"
} as const;
