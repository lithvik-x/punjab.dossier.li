// Local Responsive Strategy Data
// Derived from: g73-punjab-local-responsive-strategy-playbook.md

import type {
  ActionTypeConfig,
  ScoreThreshold,
  MeetingFormat,
  BudgetCategory,
  ApprovalAuthority,
  SuccessMetric,
} from "@/types/local-responsive-strategy-types";

// ==========================================
// ACTION TYPE CONFIGURATIONS
// ==========================================

export const ACTION_TYPE_CONFIGS: ActionTypeConfig[] = [
  {
    type: "Direct Repair" as const,
    costRange: "Rs 5,000-50,000",
    timeRange: "1-7 days",
    bestFor: ["Water pumps", "Minor road patches", "Streetlight repair", "School boundary walls"],
    credibility: "Highest",
  },
  {
    type: "Protest/Dharna" as const,
    costRange: "Rs 2,000-10,000",
    timeRange: "1 day",
    bestFor: ["Electricity transformer", "Road reconstruction", "Sewage overflow"],
    credibility: "High",
  },
  {
    type: "Petition with Media" as const,
    costRange: "Rs 1,000-5,000",
    timeRange: "1-3 days",
    bestFor: ["Issues requiring government department action", "School teacher vacancies"],
    credibility: "Medium",
  },
  {
    type: "Government Liaison" as const,
    costRange: "Rs 1,000-3,000",
    timeRange: "3-10 days",
    bestFor: ["Issues requiring bureaucratic rather than political resolution"],
    credibility: "Medium",
  },
  {
    type: "Public Meeting/Ward Shivir" as const,
    costRange: "Rs 5,000-20,000",
    timeRange: "1 day + preparation",
    bestFor: ["Clustered issues in one area", "Voter ID collection", "Volunteer recruitment"],
    credibility: "High",
  },
];

// ==========================================
// SCORE THRESHOLDS
// ==========================================

export const SCORE_THRESHOLDS: ScoreThreshold[] = [
  { range: "300+", action: "Immediate campaign priority", resourceLevel: "Dedicated karyakarta + budget allocation + candidate visit" },
  { range: "150-299", action: "Significant attention", resourceLevel: "Senior karyakarta assignment + social media documentation" },
  { range: "50-149", action: "Monitor and support", resourceLevel: "Booth-level engagement, limited resource commitment" },
  { range: "Below 50", action: "Document only", resourceLevel: "Add to intelligence file, no campaign action" },
];

// ==========================================
// MEETING FORMATS
// ==========================================

export const MEETING_FORMATS: MeetingFormat[] = [
  {
    type: "Ward Shivir" as const,
    duration: "45-90 minutes",
    idealSize: "30-80 voters",
    bestTiming: "5:30-7:00 PM or Sunday morning",
    keyItems: ["Arrival and seating", "Issue identification", "Issue prioritization", "Congress action commitment", "Voter ID check", "Q&A"],
  },
  {
    type: "Women's Meeting" as const,
    duration: "60 minutes",
    idealSize: "20-40 women",
    bestTiming: "10:00 AM or 3:00 PM",
    keyItems: ["Water collection burden", "School timing", "Anganwadi conditions", "Safety"],
  },
  {
    type: "Youth Rally" as const,
    duration: "60 minutes",
    idealSize: "50-200 youth",
    bestTiming: "Saturday or Sunday 4:00 PM",
    keyItems: ["Unemployment vision", "Open mic for concerns", "Voter registration workshop"],
  },
];

// ==========================================
// BUDGET ALLOCATION
// ==========================================

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

export const APPROVAL_AUTHORITY: ApprovalAuthority[] = [
  { amount: "Up to Rs 5,000", approvalRequired: "Booth karyakarta + block coordinator" },
  { amount: "Rs 5,001 - Rs 25,000", approvalRequired: "Block coordinator + constituency coordinator" },
  { amount: "Rs 25,001 - Rs 75,000", approvalRequired: "Constituency coordinator + candidate" },
  { amount: "Above Rs 75,000", approvalRequired: "District Congress committee approval" },
];

// ==========================================
// SUCCESS METRICS
// ==========================================

export const SUCCESS_METRICS: SuccessMetric[] = [
  { metric: "GOTV Conversion Rate", target: "5-10% improvement vs 2022 baseline", measurement: "Compare booth-level contact rates" },
  { metric: "Volunteer Sign-ups", target: "1 new volunteer per booth per month", measurement: "Track sign-up forms at ward shivirs" },
  { metric: "Media Pickup", target: "2+ local media mentions per week", measurement: "Monitor vernacular press and social media" },
  { metric: "Voter Contact Rate", target: "70%+ of identified Congress voters contacted", measurement: "Booth karyakarta contact logs" },
  { metric: "Issue Resolution Rate", target: "60%+ of score-150+ issues showing progress", measurement: "Local Action Register tracking" },
  { metric: "Voter Sentiment Shift", target: "15+ point improvement in net favorability", measurement: "Monthly 50-call quick poll" },
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get action type config by type
 */
export function getActionTypeConfig(type: ActionTypeConfig["type"]): ActionTypeConfig | undefined {
  return ACTION_TYPE_CONFIGS.find(c => c.type === type);
}

/**
 * Get score threshold by score
 */
export function getScoreThreshold(score: number): ScoreThreshold | undefined {
  if (score >= 300) return SCORE_THRESHOLDS[0];
  if (score >= 150) return SCORE_THRESHOLDS[1];
  if (score >= 50) return SCORE_THRESHOLDS[2];
  return SCORE_THRESHOLDS[3];
}

/**
 * Get meeting format by type
 */
export function getMeetingFormat(type: "Ward Shivir" | "Women's Meeting" | "Youth Rally"): MeetingFormat | undefined {
  return MEETING_FORMATS.find(m => m.type === type);
}

/**
 * Get budget category by name
 */
export function getBudgetCategory(name: string): BudgetCategory | undefined {
  return BUDGET_CATEGORIES.find(b => b.category === name);
}

/**
 * Calculate total budget from categories
 */
export function calculateTotalBudget(categories: { category: string; amount: number }[]): number {
  return categories.reduce((sum, c) => sum + c.amount, 0);
}

/**
 * Get approval authority for amount
 */
export function getApprovalAuthority(amount: number): ApprovalAuthority | undefined {
  if (amount <= 5000) return APPROVAL_AUTHORITY[0];
  if (amount <= 25000) return APPROVAL_AUTHORITY[1];
  if (amount <= 75000) return APPROVAL_AUTHORITY[2];
  return APPROVAL_AUTHORITY[3];
}

/**
 * Calculate issue score
 */
export function calculateIssueScore(
  severity: number,
  affectedVoters: number,
  fixability: number,
  electoralSalience: number
): number {
  return severity * affectedVoters * fixability * electoralSalience;
}

/**
 * Get priority action recommendation
 */
export function getPriorityAction(score: number): string {
  const threshold = getScoreThreshold(score);
  return threshold?.action ?? "Document only";
}
