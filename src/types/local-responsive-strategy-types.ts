// Local Responsive Strategy Types
// Derived from: g73-punjab-local-responsive-strategy-playbook.md

import type { IssueCategory } from "./booth-analysis-types";

// ==========================================
// ISSUE PRIORITIZATION
// ==========================================

export interface IssueScore {
  severity: 1 | 2 | 3 | 4 | 5;
  affectedVoters: 1 | 2 | 3 | 4 | 5;
  fixability: 1 | 2 | 3 | 4 | 5;
  electoralSalience: 1 | 2 | 3 | 4 | 5;
  totalScore: number;
}

export interface PrioritizedIssue {
  id: string;
  location: string;
  description: string;
  score: IssueScore;
  actionType: ActionType;
  assignedTo?: string;
  startDate?: string;
  targetResolutionDate?: string;
  status: "Not Started" | "In Progress" | "Completed" | "Blocked";
}

// ==========================================
// ACTION TYPES
// ==========================================

export type ActionType = "Direct Repair" | "Protest/Dharna" | "Petition with Media" | "Government Liaison" | "Public Meeting/Ward Shivir";

export interface ActionTypeConfig {
  type: ActionType;
  costRange: string;
  timeRange: string;
  bestFor: string[];
  credibility: "Highest" | "High" | "Medium";
}

export const ACTION_TYPE_CONFIGS: ActionTypeConfig[] = [
  {
    type: "Direct Repair",
    costRange: "Rs 5,000-50,000",
    timeRange: "1-7 days",
    bestFor: ["Water pumps", "Minor road patches", "Streetlight repair", "School boundary walls"],
    credibility: "Highest",
  },
  {
    type: "Protest/Dharna",
    costRange: "Rs 2,000-10,000",
    timeRange: "1 day",
    bestFor: ["Electricity transformer", "Road reconstruction", "Sewage overflow"],
    credibility: "High",
  },
  {
    type: "Petition with Media",
    costRange: "Rs 1,000-5,000",
    timeRange: "1-3 days",
    bestFor: ["Issues requiring government department action", "School teacher vacancies"],
    credibility: "Medium",
  },
  {
    type: "Government Liaison",
    costRange: "Rs 1,000-3,000",
    timeRange: "3-10 days",
    bestFor: ["Issues requiring bureaucratic rather than political resolution"],
    credibility: "Medium",
  },
  {
    type: "Public Meeting/Ward Shivir",
    costRange: "Rs 5,000-20,000",
    timeRange: "1 day + preparation",
    bestFor: ["Clustered issues in one area", "Voter ID collection", "Volunteer recruitment"],
    credibility: "High",
  },
];

// ==========================================
// DECISION THRESHOLDS
// ==========================================

export interface ScoreThreshold {
  range: string;
  action: string;
  resourceLevel: string;
}

export const SCORE_THRESHOLDS: ScoreThreshold[] = [
  { range: "300+", action: "Immediate campaign priority", resourceLevel: "Dedicated karyakarta + budget allocation + candidate visit" },
  { range: "150-299", action: "Significant attention", resourceLevel: "Senior karyakarta assignment + social media documentation" },
  { range: "50-149", action: "Monitor and support", resourceLevel: "Booth-level engagement, limited resource commitment" },
  { range: "Below 50", action: "Document only", resourceLevel: "Add to intelligence file, no campaign action" },
];

// ==========================================
// LOCAL ACTION REGISTER
// ==========================================

export interface LocalActionRegisterEntry {
  issueId: string;
  location: string;
  issueDescription: string;
  issueScore: number;
  actionType: ActionType;
  assignedTo: string;
  startDate: string;
  targetResolutionDate: string;
  currentStatus: "Not Started" | "In Progress" | "Completed" | "Blocked";
  resultDocumentation?: string;
  voterReactions?: string;
}

// ==========================================
// MEETING FORMATS
// ==========================================

export interface MeetingFormat {
  type: "Ward Shivir" | "Women's Meeting" | "Youth Rally";
  duration: string;
  idealSize: string;
  bestTiming: string;
  keyItems: string[];
}

export const MEETING_FORMATS: MeetingFormat[] = [
  {
    type: "Ward Shivir",
    duration: "45-90 minutes",
    idealSize: "30-80 voters",
    bestTiming: "5:30-7:00 PM or Sunday morning",
    keyItems: ["Arrival and seating", "Issue identification", "Issue prioritization", "Congress action commitment", "Voter ID check", "Q&A"],
  },
  {
    type: "Women's Meeting",
    duration: "60 minutes",
    idealSize: "20-40 women",
    bestTiming: "10:00 AM or 3:00 PM",
    keyItems: ["Water collection burden", "School timing", "Anganwadi conditions", "Safety"],
  },
  {
    type: "Youth Rally",
    duration: "60 minutes",
    idealSize: "50-200 youth",
    bestTiming: "Saturday or Sunday 4:00 PM",
    keyItems: ["Unemployment vision", "Open mic for concerns", "Voter registration workshop"],
  },
];

// ==========================================
// BUDGET ALLOCATION
// ==========================================

export interface BudgetCategory {
  category: string;
  minimum: number;
  recommended: number;
  maximum: number;
}

export const BUDGET_CATEGORIES: BudgetCategory[] = [
  { category: "Issue Validation", minimum: 3000, recommended: 5000, maximum: 8000 },
  { category: "Direct Repairs", minimum: 20000, recommended: 40000, maximum: 75000 },
  { category: "Protest/Dharna Actions", minimum: 5000, recommended: 10000, maximum: 20000 },
  { category: "Petitions and Press Conferences", minimum: 5000, recommended: 10000, maximum: 15000 },
  { category: "Ward Shivirs", minimum: 20000, recommended: 35000, maximum: 60000 },
  { category: "Women's Meetings", minimum: 8000, recommended: 15000, maximum: 25000 },
  { category: "Youth Rallies", minimum: 10000, recommended: 20000, maximum: 35000 },
  { category: "Social Media Documentation", minimum: 3000, recommended: 5000, maximum: 8000 },
  { category: "Contingency", minimum: 10000, recommended: 20000, maximum: 30000 },
];

export const MONTHLY_BUDGET_TOTALS = {
  minimum: 84000,
  recommended: 160000,
  maximum: 276000,
};

// ==========================================
// APPROVAL AUTHORITY
// ==========================================

export interface ApprovalAuthority {
  amount: string;
  approvalRequired: string;
}

export const APPROVAL_AUTHORITY: ApprovalAuthority[] = [
  { amount: "Up to Rs 5,000", approvalRequired: "Booth karyakarta + block coordinator" },
  { amount: "Rs 5,001 - Rs 25,000", approvalRequired: "Block coordinator + constituency coordinator" },
  { amount: "Rs 25,001 - Rs 75,000", approvalRequired: "Constituency coordinator + candidate" },
  { amount: "Above Rs 75,000", approvalRequired: "District Congress committee approval" },
];

// ==========================================
// SUCCESS METRICS
// ==========================================

export interface SuccessMetric {
  metric: string;
  target: string;
  measurement: string;
}

export const SUCCESS_METRICS: SuccessMetric[] = [
  { metric: "GOTV Conversion Rate", target: "5-10% improvement vs 2022 baseline", measurement: "Compare booth-level contact rates" },
  { metric: "Volunteer Sign-ups", target: "1 new volunteer per booth per month", measurement: "Track sign-up forms at ward shivirs" },
  { metric: "Media Pickup", target: "2+ local media mentions per week", measurement: "Monitor vernacular press and social media" },
  { metric: "Voter Contact Rate", target: "70%+ of identified Congress voters contacted", measurement: "Booth karyakarta contact logs" },
  { metric: "Issue Resolution Rate", target: "60%+ of score-150+ issues showing progress", measurement: "Local Action Register tracking" },
  { metric: "Voter Sentiment Shift", target: "15+ point improvement in net favorability", measurement: "Monthly 50-call quick poll" },
];
