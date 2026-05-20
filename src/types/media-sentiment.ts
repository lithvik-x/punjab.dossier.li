// Media Sentiment Types for Punjab Dashboard
// Derived from: direct-documentation/cat-8-media-sentiment/*.md
// Date: May 20, 2026 | Status: COMPLETE

// ==========================================
// NEWSPAPER TYPES
// ==========================================

export interface PunjabiNewspaper {
  name: string;
  dialect: "Malwai" | "Doaba" | "Majha" | "Standard Punjabi";
  circulation: string;
  reach: string;
  politicalLean: string;
  owner: string;
  editorialFocus: string;
  rateCard: NewspaperRateCard;
  placementCalendar: PlacementCalendar;
}

export interface EnglishNewspaper {
  name: string;
  circulation: string;
  reach: string;
  regionalEdition: string;
  politicalLean: string;
}

export interface HindiNewspaper {
  name: string;
  circulation: string;
  reach: string;
  regionalEdition: string;
  politicalLean: string;
}

export interface NewspaperRateCard {
  standard: string;
  frontPage: string;
  backPage: string;
  perColumnCm: string;
  classified: string;
}

export interface PlacementCalendar {
  leadDays: number;
  bookingDeadline: string;
  specialSections: string[];
  politicalAdPolicy: string;
}

// ==========================================
// JOURNALIST TYPES (Extended from MD files)
// ==========================================

export interface JournalistProfile {
  name: string;
  outlet: string;
  designation: string;
  location: string;
  beat: string;
  phone: string;
  email?: string;
  twitter?: string;
  leaning: "Pro-Congress" | "Pro-AAP" | "Pro-BJP" | "Pro-SAD" | "Neutral" | "Anti-establishment";
  influence: "High" | "Medium" | "Low";
  accessLevel: "Preferred" | "Regular" | "Restricted";
  crisisContact: boolean;
  notes?: string;
}

export interface JournalistTier {
  tier: "A" | "B" | "C";
  criteria: string;
  engagement: string;
  priority: string;
}

export interface Spokesperson {
  name: string;
  role: string;
  tier: "National" | "State" | "Regional" | "Local";
  specialization: string[];
  mediaTrained: boolean;
  availability: string;
}

// ==========================================
// SERM (Search Engine Reputation Management) TYPES
// ==========================================

export interface SERMStrategy {
  type: "Pushdown" | "ContentCreation" | "WikipediaEditing" | "SocialListening" | "CrisisResponse";
  objective: string;
  targetKeywords: string[];
  timeline: string;
  responsible: string;
}

export interface SERMKeyword {
  keyword: string;
  category: "Positive" | "Negative" | "Neutral";
  priority: "High" | "Medium" | "Low";
  pushdownTargets: string[];
  contentBrief: string;
}

export interface PushdownContent {
  type: "WikiArticle" | "NewsSite" | "BlogPost" | "SocialProfile" | "Video" | "Document";
  title: string;
  url?: string;
  platform?: string;
  status: "Published" | "InProgress" | "Planned";
  owner: string;
}

export interface WikipediaEdit {
  articleName: string;
  editType: "Create" | "Update" | "Monitor" | "Dispute";
  status: "Complete" | "InProgress" | "Flagged";
  lastUpdated?: string;
  notes: string;
}

// ==========================================
// CRISIS MEDIA MANAGEMENT TYPES
// ==========================================

export interface CrisisProtocol {
  level: "Red" | "Orange" | "Yellow" | "Green";
  trigger: string;
  responseTime: string;
  spokesperson: string;
  actions: string[];
  stakeholders: string[];
}

export interface CrisisMessage {
  type: "Statement" | "Press Release" | "Social Media" | "Video Message";
  tone: "Apologetic" | "Defensive" | "Neutral" | "Aggressive";
  audience: string;
  channels: string[];
  approvalChain: string[];
}

export interface CrisisEscalation {
  stage: string;
  timeline: string;
  criteria: string;
  actions: string[];
  stakeholders: string[];
}

// ==========================================
// CONSTITUENCY MEDIA AGENT TYPES
// ==========================================

export interface LCO {
  name: string;
  area: string;
  constituency: string;
  cableReach: string;
  digitalSubscriberCount: number;
  politicalLean: string;
  congressEngagement: "Active" | "Passive" | "Hostile" | "Unknown";
  activationPotential: "High" | "Medium" | "Low";
  notes?: string;
}

export interface Stringer {
  name: string;
  area: string;
  outlet: string;
  beat: string;
  politicalLean: string;
  congressEngagement: "Active" | "Passive" | "Hostile" | "Unknown";
  storyYield: string;
  contactFrequency: string;
  notes?: string;
}

export interface FacebookAdmin {
  name: string;
  groupName: string;
  members: number;
  region: string;
  politicalLean: string;
  congressEngagement: "Active" | "Passive" | "Hostile" | "Unknown";
  monetization: boolean;
  adminType: "Official" | "Sympathizer" | "Rent-free" | "Hostile";
  notes?: string;
}

export interface WhatsAppOperator {
  name: string;
  groupName: string;
  members: number;
  region: string;
  purpose: "Voter Outreach" | "Worker Coordination" | "News Sharing" | "Crisis Management";
  politicalLean: string;
  congressEngagement: "Active" | "Passive" | "Hostile" | "Unknown";
  forwardingReliability: "High" | "Medium" | "Low";
  notes?: string;
}

export interface ConstituencyYouTuber {
  name: string;
  channelName: string;
  subscribers: string;
  contentType: "News" | "Opinion" | "Entertainment" | "Political";
  politicalLean: string;
  congressEngagement: "Active" | "Passive" | "Hostile" | "Unknown";
  reach: string;
  monetization: boolean;
  notes?: string;
}

// ==========================================
// RATE CARD TYPES
// ==========================================

export interface VernacularPressRateCard {
  newspaperName: string;
  standard: string;
  frontPage: string;
  backPage: string;
  perColumnCm: string;
  classifiedPerWord: string;
  digitalDisplay: string;
  regionalDiscount: string;
}

export interface RadioRateCard {
  station: string;
  frequency: string;
  standard: string;
  primeTime: string;
  package: string;
  minimumBuy: string;
}

export interface TVRateCard {
  channel: string;
  type: "News" | "GEC" | "Regional";
  standard: string;
  primeTime: string;
  package: string;
  minimumBuy: string;
  ddFreeDish: boolean;
}

export interface CableTVRateCard {
  mso: string;
  lcn: string;
  basePackage: string;
  politicalRate: string;
  placementFee: string;
}

// ==========================================
// CONTENT FORMAT TYPES
// ==========================================

export interface PressReleaseTemplate {
  type: "Standard" | "Crisis" | "Achievement" | "Announcement" | "Counter-Narrative";
  format: string;
  keyElements: string[];
  distribution: string[];
  approvalChain: string[];
}

export interface RadioContentFormat {
  format: "Jingle" | "PSA" | "TalkShow" | "Interview" | "NewsBulletin" | "SponsoredSegment";
  duration: string;
  productionRequirements: string;
  complianceNotes: string;
}

export interface TVContentFormat {
  format: "NewsPackage" | "TalkShow" | "Interview" | "Debate" | "PSA" | "Documentary";
  duration: string;
  productionRequirements: string;
  placementStrategy: string;
}

// ==========================================
// BUDGET ALLOCATION TYPES
// ==========================================

export interface RegionalMediaBudget {
  region: string;
  totalBudget: string;
  tvAllocation: string;
  radioAllocation: string;
  printAllocation: string;
  digitalAllocation: string;
  contingency: string;
}

export interface MediaCampaignBudget {
  scale: "Minimum" | "Recommended" | "Maximum";
  duration: string;
  tvBudget: string;
  radioBudget: string;
  printBudget: string;
  digitalBudget: string;
  total: string;
  costPerReach: string;
}

// ==========================================
// PLATFORM-SPECIFIC TYPES
// ==========================================

export interface DialectPreference {
  dialect: "Malwai" | "Doaba" | "Majha" | "Standard Punjabi";
  percentage: string;
  mediaPreference: string;
  contentTone: string;
}

export interface CommunityRadioStation {
  name: string;
  frequency: string;
  coverage: string;
  format: string;
  politicalAdPolicy: string;
  engagement: string;
}

// ==========================================
// STORY PLACEMENT TYPES
// ==========================================

export interface StoryPlacement {
  storyType: "Achievement" | "Policy" | "Counter-Narrative" | "Crisis" | "Announcement";
  targetOutlet: string;
  placement: "Lead" | "Secondary" | "Brief" | "Opinion";
  pitchTiming: string;
  followUp: string;
  success: "Placed" | "Partial" | "Rejected" | "Pending";
}

export interface QuestionToAvoid {
  question: string;
  topic: string;
  recommendedResponse: string;
  approvedSpokesperson: string;
}

// ==========================================
// TV PANEL STRATEGY TYPES
// ==========================================

export interface TVPanelist {
  name: string;
  organization: string;
  leaning: string;
  reliability: "Dependable" | "Unpredictable" | "Hostile";
  topics: string[];
  avoidTopics: string[];
  notes?: string;
}

export interface TVPanelStrategy {
  show: string;
  channel: string;
  format: "Debate" | "Interview" | "News" | "TalkShow";
  panelists: string[];
  talkingPoints: string[];
  questionsToAvoid: string[];
  counterNarratives: string[];
}

// ==========================================
// SOCIAL MEDIA WAR ROOM TYPES
// ==========================================

export interface SocialMediaWarRoom {
  activePlatforms: ("Facebook" | "Twitter" | "Instagram" | "YouTube" | "WhatsApp")[];
  teamSize: string;
  shifts: string[];
  responseTime: string;
  escalationProtocol: string;
}

export interface ContentCalendar {
  week: string;
  theme: string;
  platforms: string[];
  contentTypes: string[];
  keyMessages: string[];
  approvers: string[];
}

// ==========================================
// DISTRIBUTION CHANNEL TYPES
// ==========================================

export interface DistributionChannel {
  channel: "WhatsApp" | "Facebook" | "Telegram" | "Email" | "Physical";
  type: "Official" | "Sympathizer" | "Friendly Media";
  reach: string;
  reliability: "High" | "Medium" | "Low";
  cost: string;
}

export interface WhatsAppDistribution {
  groupName: string;
  type: "Workers" | "Sympathizers" | "Media" | "Leaders";
  members: number;
  purpose: string;
  forwardingReliability: "High" | "Medium" | "Low";
}
