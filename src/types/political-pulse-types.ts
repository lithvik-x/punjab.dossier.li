// Political Pulse Tracking Types
// Derived from: g72-punjab-monthly-political-pulse-tracking-protocol.md

// ==========================================
// PULSE TRACKING WAVE
// ==========================================

export interface PulseWave {
  waveNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  month: string;
  year: number;
  fieldWorkDates: string;
  reportDelivery: string;
  status: "Planned" | "In Progress" | "Completed";
}

// ==========================================
// SAMPLE DESIGN
// ==========================================

export interface SampleDesign {
  respondentsPerAC: number;
  totalStatewide: number;
  marginOfError: {
    statewide: string;
    regional: string;
    acLevel: string;
  };
  stratification: {
    dimension: string;
    categories: string[];
    targetShare: string;
  }[];
}

// ==========================================
// SURVEY MODES
// ==========================================

export type SurveyMode = "Phone (IVR + Live)" | "WhatsApp Structured" | "Booth Agent F2F";

export interface SurveyModeConfig {
  mode: SurveyMode;
  share: number;
  respondents: number;
  advantages: string;
  challenges: string;
}

export const SURVEY_MODE_CONFIG: SurveyModeConfig[] = [
  {
    mode: "Phone (IVR + Live)",
    share: 0.40,
    respondents: 23400,
    advantages: "Urban respondents, younger voters, speed",
    challenges: "Landline decline in rural areas",
  },
  {
    mode: "WhatsApp Structured",
    share: 0.35,
    respondents: 20475,
    advantages: "Jat Sikh and middle-class respondents, high response rates",
    challenges: "Excludes non-WhatsApp users",
  },
  {
    mode: "Booth Agent F2F",
    share: 0.25,
    respondents: 14625,
    advantages: "Rural, older, SC voters—hardest to reach segments",
    challenges: "Slowest, requires training",
  },
];

// ==========================================
// CORE QUESTIONS (Consistent)
// ==========================================

export interface VoteChoiceData {
  party: "Congress" | "AAP" | "SAD" | "BJP" | "Other" | "Undecided" | "Will not disclose";
  percentage: number;
}

export interface LeaderApprovalData {
  leader: string;
  approve: number;
  disapprove: number;
  dontKnow: number;
  netApproval: number;
}

export interface IntentionToVote {
  certainty: "Absolutely certain" | "Very likely" | "Somewhat likely" | "Unlikely" | "Will not vote";
  percentage: number;
}

// ==========================================
// ROTATING ISSUE QUESTIONS
// ==========================================

export type IssueForRanking =
  | "Drug abuse"
  | "Unemployment"
  | "Farmer debt"
  | "Water crisis"
  | "Women safety"
  | "Law and order"
  | "Religious harmony"
  | "Corruption"
  | "Healthcare"
  | "Power/electricity"
  | "Road infrastructure"
  | "Other";

export interface IssueRanking {
  issue: IssueForRanking;
  rank1: number;
  rank2: number;
  rank3: number;
  totalMentions: number;
}

// ==========================================
// TRACKED KPIs
// ==========================================

export interface TrackedKPI {
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  name: string;
  measurement: string;
}

export const TRACKED_KPIS: TrackedKPI[] = [
  { number: 1, name: "Congress Vote Share Estimate", measurement: "% respondents naming Congress, after undecided allocation" },
  { number: 2, name: "AAP Vote Share Estimate", measurement: "% respondents naming AAP" },
  { number: 3, name: "BJP Vote Share Estimate", measurement: "% respondents naming BJP (in BJP-contested seats)" },
  { number: 4, name: "SAD Vote Share Estimate", measurement: "% respondents naming SAD (in SAD-contested seats)" },
  { number: 5, name: "Top 3 Issues by Salience", measurement: "Ranked list of issues from rotating block" },
  { number: 6, name: "Congress Leader Approval Rating", measurement: "% approving of Congress Punjab President, net of disapproving" },
  { number: 7, name: "AAP Leader Approval Rating", measurement: "% approving of Bhagwant Mann, net of disapproving" },
  { number: 8, name: "Intended Turnout Rate", measurement: "% saying absolutely certain or very likely to vote" },
  { number: 9, name: "Congress Swing Voter Index", measurement: "% of 2022 non-Congress voters now considering Congress" },
  { number: 10, name: "Regional Confidence Score", measurement: "Congress vote share estimate by Malwa/Majha/Doaba" },
];

// ==========================================
// WAVE REPORT
// ==========================================

export interface PulseWaveReport {
  wave: PulseWave;
  regionalData: {
    region: "Malwa" | "Majha" | "Doaba";
    congressVoteShare: number;
    aapVoteShare: number;
    topIssues: string[];
    congressLeaderApproval: number;
    aapLeaderApproval: number;
  }[];
  statewideData: {
    congressVoteShare: number;
    aapVoteShare: number;
    turnout: number;
    swingVoterIndex: number;
  };
  significantShifts: {
    metric: string;
    magnitude: string;
    significance: "Likely noise" | "Probable signal" | "Strong signal";
    consecutiveWaves?: number;
  }[];
  trafficLight: {
    kpi: string;
    status: "Green" | "Amber" | "Red";
  }[];
}

// ==========================================
// SHIFT SIGNIFICANCE
// ==========================================

export interface ShiftSignificance {
  magnitude: string;
  oneWaveSignificance: string;
  consecutiveWavesRequired: number;
}

export const SHIFT_SIGNIFICANCE: ShiftSignificance[] = [
  { magnitude: "±1-2%", oneWaveSignificance: "Likely noise", consecutiveWavesRequired: 3 },
  { magnitude: "±2-4%", oneWaveSignificance: "Probable signal", consecutiveWavesRequired: 2 },
  { magnitude: "±4%+", oneWaveSignificance: "Strong signal", consecutiveWavesRequired: 1 },
];

// ==========================================
// COST ESTIMATES
// ==========================================

export interface WaveCost {
  component: string;
  wave1: number;
  wave2To9: number;
}

export const WAVE_COSTS: WaveCost[] = [
  { component: "Agency setup", wave1: 450000, wave2To9: 0 },
  { component: "Phone survey", wave1: 1053000, wave2To9: 1053000 },
  { component: "WhatsApp survey", wave1: 511875, wave2To9: 511875 },
  { component: "Booth agent field work", wave1: 950625, wave2To9: 950625 },
  { component: "Data processing", wave1: 200000, wave2To9: 150000 },
  { component: "Report design", wave1: 75000, wave2To9: 50000 },
  { component: "Translator/QA", wave1: 100000, wave2To9: 50000 },
];

export const TOTAL_WAVE_COST = {
  wave1: 3340500,
  waves2to9: 2715500,
  total9Waves: 29953070,
};
