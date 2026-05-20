// Sentiment Analysis, Rumor Management & Influencer Mapping Types
// Derived from: direct-documentation/cat-7-public-sentiment/b18-sentiment-rumor-influencer-methodology.md
// Punjab Congress Digital Intelligence Dashboard 2027

// ==========================================
// PART A: SENTIMENT ANALYSIS
// ==========================================

/**
 * Primary Emotions in Electoral Context
 */
export interface PrimaryEmotion {
  emotion: string;
  electoralRelevance: string;
  punjabContext: string;
}

/**
 * Emotion Intensity Classification
 */
export interface EmotionIntensity {
  level: "Mild" | "Moderate" | "Strong";
  indicators: string[];
  example: string;
}

/**
 * Emotion Duration Classification
 */
export interface EmotionDuration {
  type: "Transient" | "Persistent" | "Crystallized";
  characteristics: string;
  electoralImpact: string;
}

/**
 * Attribution Framework
 */
export interface AttributionType {
  attributionType: string;
  definition: string;
  example: string;
}

/**
 * Trust Metrics
 */
export interface TrustMetric {
  dimension: string;
  measurementIndicators: string;
}

/**
 * Sentiment Temporal Patterns
 */
export interface SentimentBaselineType {
  type: string;
  description: string;
  stability: "High" | "Medium" | "Low";
}

/**
 * Net Sentiment Score Range
 */
export interface NSSRange {
  range: string;
  interpretation: string;
}

/**
 * Sentiment Volume Index Components
 */
export interface SVIComponent {
  component: string;
  description: string;
  measurement: string;
}

/**
 * Velocity Thresholds
 */
export interface VelocityThreshold {
  velocityLevel: string;
  indicators: string;
  alertStatus: "Normal monitoring" | "Watch" | "Active tracking" | "Crisis protocol";
}

/**
 * Emotion Taxonomy
 */
export interface EmotionTaxonomy {
  primaryEmotions: string[];
  secondaryEmotions: string[];
}

/**
 * Issue-Specific Sentiment
 */
export interface IssueSentiment {
  issueCategory: string;
  dominantSentiment: string[];
  secondarySentiment: string[];
  intensity: "High" | "Moderate" | "Very High";
}

/**
 * Demographic Sentiment
 */
export interface DemographicSentiment {
  demographic: string;
  primarySentimentDrivers: string;
  swingPotential: "High" | "Moderate" | "Very High";
}

/**
 * Regional Sentiment Variation
 */
export interface RegionalSentiment {
  region: string;
  seats: number;
  dominantSentiment: string;
  keyIssues: string[];
  swingPattern: string;
}

/**
 * Media Platform Coverage
 */
export interface PlatformCoverage {
  platform: string;
  punjabiAudienceShare: string;
  sentimentValue: "High" | "Medium" | "Low";
  notes: string;
}

/**
 * Survey Instrument Types
 */
export interface SurveyType {
  type: string;
  frequency: string;
  sampleSize: string;
  purpose: string;
}

/**
 * Focus Group Types
 */
export interface FocusGroupType {
  type: string;
  composition: string;
  purpose: string;
}

/**
 * Media Content Analysis Types
 */
export interface MediaType {
  type: string;
  sources: string;
  sentimentCoding: string;
}

/**
 * Ground Level Intelligence Report
 */
export interface GLIAgentReport {
  date: string;
  location: string;
  sentimentIndicator: number;
  keyIssue: string;
  notableChange: string;
  rumorAlert: "YES" | "NO";
}

// ==========================================
// PART B: MISINFORMATION & RUMOR MANAGEMENT
// ==========================================

/**
 * Rumor Classification by Type
 */
export interface RumorType {
  type: string;
  intent: string;
  falsityLevel: string;
  harmPotential: "Very High" | "High" | "Low-Moderate" | "Variable";
}

/**
 * Punjab-Specific Rumor Categories
 */
export interface PunjabRumorCategory {
  category: string;
  examples: string;
  sourcePattern: string;
}

/**
 * Rumor Lifecycle Stages
 */
export interface RumorLifecycleStage {
  stage: string;
  typicalTiming: string;
  interventionWindow: string;
}

/**
 * Spread Origin Types
 */
export interface SpreadOriginType {
  originType: string;
  typicalSource: string;
  spreadPattern: string;
}

/**
 * Amplifier Types
 */
export interface AmplifierType {
  type: string;
  reach: "Very High" | "High" | "Moderate" | "Variable";
  credibility: "High" | "Very High" | "Low";
  threatLevel: "Critical" | "High" | "Moderate";
}

/**
 * Detection Channel
 */
export interface DetectionChannel {
  channel: string;
  method: string;
  latency: string;
}

/**
 * Verification Checklist Item
 */
export interface VerificationStep {
  step: string;
  action: string;
  output: string;
}

/**
 * Assessment Matrix Cell
 */
export interface AssessmentCell {
  factor: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  viralityPotential: string;
  credibilityImpact: string;
  demographicReach: string;
  speedOfSpread: string;
}

/**
 * Response Tier
 */
export interface ResponseTier {
  tier: number;
  criteria: string;
  responseTime: string;
  approvalLevel: string;
}

/**
 * Response Options
 */
export interface ResponseOption {
  option: string;
  useCase: string;
  approval: string;
  platform: string;
}

/**
 * Legal Provisions
 */
export interface LegalProvision {
  section: string;
  offense: string;
  punishment: string;
  applicability: string;
}

/**
 * Platform Reporting
 */
export interface PlatformReporting {
  platform: string;
  policy: string;
  reportingLink: string;
  responseTime: string;
}

// ==========================================
// PART C: INFLUENCER MAPPING
// ==========================================

/**
 * Journalist Categories
 */
export interface JournalistCategory {
  category: string;
  subTypes: string;
  influenceMechanism: string;
  reach: string;
}

/**
 * Key Media Metrics
 */
export interface MediaMetrics {
  metric: string;
  measurement: string;
  punjabContext: string;
}

/**
 * Former Politician Categories
 */
export interface FormerPoliticianCategory {
  category: string;
  influenceType: string;
  credibility: string;
  alignmentCertainty: string;
}

/**
 * Political Analyst Types
 */
export interface PoliticalAnalystType {
  type: string;
  platform: string;
  credibility: string;
  reach: string;
}

/**
 * Religious Authority Types
 */
export interface ReligiousAuthority {
  category: string;
  examples: string;
  communityReach: string;
  politicalInfluence: string;
}

/**
 * Dera Information
 */
export interface DeraInfo {
  name: string;
  location: string;
  followerEstimate: string;
  politicalAlignmentHistory: string;
}

/**
 * Caste Panchayat Leaders
 */
export interface CastePanchayatLeader {
  casteCategory: string;
  panchayatType: string;
  influenceLevel: string;
}

/**
 * Celebrity Categories
 */
export interface CelebrityCategory {
  category: string;
  examples: string;
  influenceType: string;
  youthReach: string;
}

/**
 * NRI Influence Channels
 */
export interface NRIInfluenceChannel {
  type: string;
  influenceMechanism: string;
  reach: string;
  alignment: string;
}

/**
 * Grassroots Leadership
 */
export interface GrassrootsLeadership {
  category: string;
  countEstimate: string;
  influenceSphere: string;
  reliability: string;
}

/**
 * Professional Network
 */
export interface ProfessionalNetwork {
  network: string;
  keyInfluencers: string;
  influenceMechanism: string;
}

/**
 * Influencer Scoring Components
 */
export interface InfluencerScoringComponent {
  component: string;
  scoreRange: string;
  weight: number;
}

/**
 * Alignment Scoring
 */
export interface AlignmentScoring {
  score: string;
  label: string;
  definition: string;
}

/**
 * Activity Metrics
 */
export interface ActivityMetric {
  metric: string;
  description: string;
  frequency: string;
}

/**
 * Tier Classification
 */
export interface InfluencerTier {
  tier: string;
  oisRange: string;
  engagementStrategy: string;
  resourceLevel: string;
}

/**
 * Influencer Database Schema Types
 */
export interface Influencer {
  id: string;
  name: string;
  category: "MEDIA" | "POLITICAL" | "RELIGIOUS" | "SOCIAL" | "COMMUNITY";
  subCategory: string;
  platforms: string[];
  followerCounts: Record<string, number>;
  reachScore: number;
  credibilityScore: number;
  engagementScore: number;
  alignmentScore: number;
  ois: number;
  state: string;
  region: string;
  constituency?: string;
  primaryLanguage: string;
  specialTags: string[];
  lastContacted?: string;
  lastPositivePost?: string;
  engagementTier: number;
  costPerPost?: number;
  notes?: string;
}

export interface InfluencerActivity {
  id: string;
  influencerId: string;
  activityType: string;
  platform: string;
  contentPreview: string;
  sentiment: "Positive" | "Negative" | "Neutral";
  reach: number;
  engagement: number;
  date: string;
  partyMentioned?: string;
  partySentiment?: string;
}

export interface InfluencerRelationship {
  influencerId1: string;
  influencerId2: string;
  relationshipType: string;
  strength: string;
  lastInteraction?: string;
}

/**
 * Dashboard Integration Types
 */
export interface SentimentDashboardWidget {
  name: string;
  description: string;
}

export interface RumorDashboardWidget {
  name: string;
  description: string;
}

export interface InfluencerDashboardWidget {
  name: string;
  description: string;
}
