// Voter Behavior Types for Punjab
// Derived from: mega-pillar M1/02-VOTER-BEHAVIOR.md
// Research Date: May 2026 | Status: COMPLETE

// ==========================================
// METADATA
// ==========================================

export interface VoterBehaviorMetadata {
  documentVersion: string;
  researchDate: string;
  electionContext: string;
  classification: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// VOTING MOTIVATORS
// ==========================================

export interface VotingMotivator {
  rank: number;
  name: string;
  priority: "HIGHEST" | "HIGH" | "MEDIUM" | "LOW";
  description: string;
  evidence: string[];
  campaignImplication: string;
}

export interface IssueMotivator {
  rank: number;
  issue: string;
  salience: "CRITICAL" | "VERY HIGH" | "HIGH" | "MEDIUM";
  voterPriority: string;
  emotionalDriver: string;
  aapPosition?: string;
  congressOpportunity?: string;
  evidence: string[];
}

// ==========================================
// VOTING DETERRENTS
// ==========================================

export type BarrierType =
  | "registration"
  | "logistical"
  | "motivational"
  | "social"
  | "informational";

export interface Barrier {
  type: BarrierType;
  category: string;
  description: string;
  affectedVoters: string;
  mitigation?: string;
}

// ==========================================
// TURNOUT TRIGGERS
// ==========================================

export interface TurnoutTrigger {
  effectiveness:
    | "MOST_EFFECTIVE"
    | "EFFECTIVE"
    | "MODERATELY_EFFECTIVE";
  name: string;
  description: string;
  impact: string;
  evidence?: string[];
}

// ==========================================
// ISSUE SALIENCE
// ==========================================

export interface IssueSalience {
  cycle: string;
  issues: IssueRank[];
}

export interface IssueRank {
  rank: number;
  issue: string;
  note?: string;
}

export interface IssueOwnership {
  issue: string;
  congress: "STRONG" | "Moderate" | "Weak";
  aap: "STRONG" | "Moderate" | "Weak" | "FAILED";
  sad: "STRONG" | "Moderate" | "Weak";
  bjp: "STRONG" | "Moderate" | "Weak";
  note?: string;
}

// ==========================================
// CANDIDATE PREFERENCE FACTORS
// ==========================================

export interface CandidatePreferenceFactor {
  rank: number;
  factor: string;
  description: string;
  importance: "HIGHEST" | "HIGH" | "MEDIUM";
  note?: string;
}

// ==========================================
// KEY INTELLIGENCE INSIGHTS
// ==========================================

export interface KeyVoterBehaviorInsight {
  category: string;
  insight: string;
  strategicImplication: string;
}

// ==========================================
// ISSUE SHIFTS
// ==========================================

export interface IssueShift {
  fromCycle: string;
  toCycle: string;
  changes: string[];
  criticalNotes?: string;
}

// ==========================================
// REGIONAL VARIATIONS
// ==========================================

export interface RegionalVoterPattern {
  region: string;
  dominantFactors: string[];
  turnoutPattern: string;
  keyCharacteristics: string[];
}

// ==========================================
// COMPLETE VOTER BEHAVIOR REPORT
// ==========================================

export interface VoterBehaviorReport {
  metadata: VoterBehaviorMetadata;
  keyBehavioralPatterns: string[];
  votingMotivators: VotingMotivator[];
  issueBasedMotivators: IssueMotivator[];
  votingDeterrents: Barrier[];
  turnoutTriggers: TurnoutTrigger[];
  issueSalienceByCycle: IssueSalience[];
  issueOwnershipAnalysis: IssueOwnership[];
  issueShifts: IssueShift[];
  candidatePreferenceFactors: CandidatePreferenceFactor[];
  regionalPatterns: RegionalVoterPattern[];
  keyInsights: KeyVoterBehaviorInsight[];
}
