// Public Sentiment & Media Intelligence Types for Punjab Congress 2027 Election
// Derived from: research-P5/public-sentiment/ and research-P5/media-sentiment/

/**
 * Poll Data from various sources
 */
export interface PollEntry {
  source: string;
  date: string;
  congress: number;
  aap: number;
  sad: number;
  bjp: number;
  others: number;
  margin: string;
  methodology?: string;
}

export interface PollTrend {
  month: string;
  congress: number;
  aap: number;
  bjp: number;
}

/**
 * Viral Content Analysis
 */
export interface ViralContent {
  type: "meme" | "video" | "scandal" | "celebrity" | "governance";
  title: string;
  sentiment: "Positive" | "Negative" | "Neutral";
  viralityDriver: string;
  impact: string;
  platform: string[];
}

/**
 * Trending Topic
 */
export interface TrendingTopic {
  rank: number;
  topic: string;
  sentiment: "Negative" | "Positive" | "Neutral" | "Mixed";
  partyAssociation: string;
  velocity: "High" | "Medium" | "Low";
  trajectory: "Rising" | "Falling" | "Stable";
}

/**
 * Opinion Leader Tracking
 */
export interface OpinionLeader {
  name: string;
  party: string;
  influenceSphere: string;
  publicSentiment: number; // -100 to +100
  trend: "Rising" | "Stable" | "Declining";
  vulnerabilityIndex?: number;
}

/**
 * Voter Segment Sentiment
 */
export interface SegmentSentiment {
  segment: string;
  primaryConcern: string;
  currentLeaning: string;
  switchProbability: "High" | "Medium" | "Low";
  keyIssues: string[];
}

/**
 * Issue Priority Matrix
 */
export interface IssuePriority {
  issue: string;
  voterImportance: number; // percentage
  aapPerformance: "Strong" | "Mixed" | "Weak";
  congressOpportunity: "Major" | "Moderate" | "Limited";
  velocity: "Accelerating" | "Stable" | "De-escalating";
}

/**
 * Media Outlet Information
 */
export interface MediaOutlet {
  name: string;
  language: "Punjabi" | "Hindi" | "English";
  type: "Print" | "TV" | "Digital" | "Radio";
  reach: string;
  credibility: "High" | "Medium" | "Low";
  politicalLean?: string;
  website?: string;
  notes?: string;
}

/**
 * Media Engagement Strategy
 */
export interface MediaStrategy {
  priority: "Critical" | "High" | "Medium";
  outlet: string;
  language: string;
  reason: string;
  targetAudience: string;
}

/**
 * Crisis Response Protocol
 */
export interface CrisisResponseProtocol {
  severity: "High" | "Medium" | "Low";
  responseWindow: string; // e.g., "2 hours"
  escalationPath: string[];
  spokesperson: string;
}

/**
 * Sentiment Tracking KPIs
 */
export interface SentimentKPI {
  metric: string;
  current: number;
  target: number;
  baseline?: number;
  trend: "up" | "down" | "stable";
  frequency: string;
}

/**
 * Viral Content Recommendation
 */
export interface ViralContentStrategy {
  contentType: string;
  topic: string;
  platform: string;
  objective: string;
  successMetric: string;
}

/**
 * Party Sentiment Breakdown
 */
export interface PartySentimentBreakdown {
  party: string;
  positive: number;
  neutral: number;
  negative: number;
  netScore: number;
}

/**
 * Public Sentiment Summary
 */
export interface PublicSentimentSummary {
  overallMood: string;
  primaryConcerns: string[];
  voterExhaustion: number; // percentage
  antiIncumbencyLevel: number; // percentage
  alternativeSeeking: number; // percentage
}
