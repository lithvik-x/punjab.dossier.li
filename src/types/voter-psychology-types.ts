// Voter Psychology & Influence/Persuasion Types for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/b13-voter-psychology-influence-methodology.md
// Date: 20 May 2026 | Agent: Track B | Task ID: B13

// ==========================================
// NEEDS HIERARCHY IN POLITICAL TRANSLATION
// ==========================================

export interface NeedCategory {
  need: string;
  politicalManifestation: string;
  punjabApplication: string;
}

export interface PhysiologicalNeeds extends NeedCategory {
  baseNeed: string;
}

export interface SafetyNeeds extends NeedCategory {
  safetyNeed: string;
}

export interface BelongingNeeds extends NeedCategory {
  belongingNeed: string;
}

export interface EsteemNeeds extends NeedCategory {
  esteemNeed: string;
}

export interface SelfActualizationNeeds extends NeedCategory {
  selfActualizationNeed: string;
}

// ==========================================
// DECISION-MAKING MODELS
// ==========================================

export interface DecisionMakingModel {
  name: string;
  corePremise: string;
  politicalApplication: string;
  punjabApplication: string;
}

export interface RationalChoiceModel extends DecisionMakingModel {
  name: "Rational Choice";
}

export interface AffectiveIntelligenceModel extends DecisionMakingModel {
  name: "Affective Intelligence";
}

export interface SocialIdentityModel extends DecisionMakingModel {
  name: "Social Identity";
}

export interface BoundedRationalityModel extends DecisionMakingModel {
  name: "Bounded Rationality";
}

// ==========================================
// PAIN POINT ANALYSIS
// ==========================================

export interface IndividualPainPoint {
  painPoint: string;
  intensity: number; // 1-5
  politicalSalience: string;
}

export interface CommunityPainPoint {
  communityPainPoint: string;
  affectedCommunities: string;
  politicalTrigger: string;
}

export interface CollectivePainPoint {
  collectiveIssue: string;
  geographicScope: string;
  politicalFraming: string;
}

// ==========================================
// ASPIRATION MAPPING
// ==========================================

export interface EconomicAspiration {
  aspiration: string;
  targetDemographic: string;
  politicalExpression: string;
}

export interface SocialAspiration {
  aspiration: string;
  targetDemographic: string;
  politicalExpression: string;
}

export interface AspirationalSegment {
  segment: string;
  region: string;
  aspirations: string;
  politicalOrientation: string;
  painPoints: string;
}

// ==========================================
// INFLUENCE CHANNEL EFFECTIVENESS
// ==========================================

export interface InfluenceChannel {
  channel: string;
  reach: "Low" | "Medium" | "High" | "Very High";
  efficacy: "Low" | "Medium" | "High" | "Highest";
  cost: "Very Low" | "Low" | "Medium" | "High" | "Very High";
  punjabRelevance: string;
  category: "Face-to-Face" | "Mass Communication" | "Digital" | "Interpersonal Networks";
}

export interface ChannelCategory {
  name: "Face-to-Face" | "Mass Communication" | "Digital" | "Interpersonal Networks";
  channels: InfluenceChannel[];
}

// ==========================================
// MESSAGE ARCHITECTURE
// ==========================================

export interface MessageAppeal {
  appealType: "Rational" | "Emotional-Hope" | "Emotional-Anger" | "Emotional-Fear" | "Emotional-Pride" | "Moral" | "Identity";
  structure: string[];
  punjabApplication: string;
  exampleFraming: string;
}

export interface MessengerCredibility {
  dimension: string;
  highCredibilitySignal: string;
  lowCredibilitySignal: string;
  category: "Expertise" | "Trustworthiness" | "Similarity" | "Authority";
}

export interface AuthoritySource {
  authoritySource: string;
  effectivenessInPunjab: string;
}

// ==========================================
// CASTE-BASED INFLUENCE STRATEGY
// ==========================================

export interface CasteInfluenceStrategy {
  casteGroup: string;
  keyIssue: string;
  influencer: string;
  message: string;
  channel: string;
}

// ==========================================
// DERA NETWORK ENGAGEMENT
// ==========================================

export interface DeraEngagementStrategy {
  deraName: string;
  followerBase: string;
  politicalAlignment: string;
  engagementApproach: string;
}

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export interface KnowledgeConfidence {
  section: string;
  confidenceLevel: "High" | "Medium" | "Low";
  notes: string;
}

export interface VerificationItem {
  item: string;
  status: "VERIFICATION_NEEDED" | "VERIFIED";
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface VoterPsychologyData {
  documentDate: string;
  agent: string;
  taskId: string;
  frameworkSections: string[];

  // Needs Hierarchy
  physiologicalNeeds: PhysiologicalNeeds[];
  safetyNeeds: SafetyNeeds[];
  belongingNeeds: BelongingNeeds[];
  esteemNeeds: EsteemNeeds[];
  selfActualizationNeeds: SelfActualizationNeeds[];

  // Decision Models
  decisionModels: DecisionMakingModel[];

  // Pain Points
  individualPainPoints: IndividualPainPoint[];
  communityPainPoints: CommunityPainPoint[];
  collectivePainPoints: CollectivePainPoint[];

  // Aspirations
  economicAspirations: EconomicAspiration[];
  socialAspirations: SocialAspiration[];
  aspirationalSegments: AspirationalSegment[];

  // Influence Channels
  influenceChannels: ChannelCategory[];

  // Message Architecture
  messageAppeals: MessageAppeal[];
  messengerCredibility: MessengerCredibility[];
  authoritySources: AuthoritySource[];

  // Caste Strategies
  casteStrategies: CasteInfluenceStrategy[];

  // Dera Engagement
  deraEngagement: DeraEngagementStrategy[];

  // Knowledge Confidence
  knowledgeConfidence: KnowledgeConfidence[];
  verificationItems: VerificationItem[];
}
