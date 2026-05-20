// Social Coalition Management Types for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/g18-social-coalition-management-framework.md
// Date: 20 May 2026 | Agent: Track B | Task ID: G18

// ==========================================
// COALITION ARCHITECTURE
// ==========================================

export interface MinimumWinningCoalition {
  targetSeats: string;
  voteShareTarget: string;
  marginRequirement: string;
  coalitionRationale: string;
}

export interface CoalitionComponent {
  community: string;
  percentOfElectorate: string;
  currentAlignment: string;
  targetAlignment: string;
  voteShareTarget: string;
  engagementPriority: "Critical" | "High" | "Medium";
}

export interface Congress2022Baseline {
  seatsWon: number;
  voteShare: string;
  keyWeakness: string;
  recoveryTarget: string;
}

// ==========================================
// REGIONAL STRATEGY
// ==========================================

export interface MalwaStrategy {
  region: "Malwa";
  seats: number;
  challenges: string[];
  coalitionBuildingApproach: string;
  communityPriorities: string[];
  deraEngagementStrategy: string;
  keyMessageFramework: string;
}

export interface MajhaStrategy {
  region: "Majha";
  seats: number;
  characteristics: string[];
  coalitionBuildingApproach: string;
  communityPriorities: string[];
  urbanRuralDivide: string;
  keyMessageFramework: string;
}

export interface DoabaStrategy {
  region: "Doaba";
  seats: number;
  characteristics: string[];
  coalitionBuildingApproach: string;
  nriInfluence: string;
  youthEngagement: string;
  keyMessageFramework: string;
}

// ==========================================
// CASTE-CANDIDATE MATCHING
// ==========================================

export interface SCReservedSeat {
  seatCategory: "SC-Reserved";
  totalSeats: number;
  historicalPattern: string;
  congressStrength: string;
  targetSeats: string;
  candidateCriteria: string[];
}

export interface JatSikhSeat {
  seatCategory: "Jat Sikh Dominant";
  totalSeats: number;
  JatPopulationPercent: string;
  congressHistoricalSupport: string;
  targetSeats: string;
  candidateProfile: string;
}

export interface OBCSeat {
  seatCategory: "OBC";
  totalSeats: number;
  obcPopulationPercent: string;
  keyCommunities: string[];
  congressOutreach: string;
  targetSeats: string;
}

// ==========================================
// INTER-CASTE DYNAMICS
// ==========================================

export interface InterCasteFriction {
  communityPair: string;
  historicalIssue: string;
  currentTensionLevel: "High" | "Medium" | "Low" | "Resolved";
  politicalImplication: string;
  mitigationStrategy: string;
}

export interface CastebasedVoteTransfer {
  fromCommunity: string;
  toCommunity: string;
  transferCondition: string;
  voteShare: string;
  electoralImpact: string;
}

// ==========================================
// DERA NETWORK ENGAGEMENT
// ==========================================

export interface DeraEngagementProfile {
  deraName: string;
  location: string;
  followerBase: string;
  politicalAlignment: string;
  influenceMechanism: string;
  engagementApproach: string;
  potentialEndorsementImpact: string;
}

export interface DeraSachaSaudaProfile extends DeraEngagementProfile {
  deraName: "Dera Sacha Sauda";
  headquarters: string;
  followerBase: "50,000+";
  keyLeader: string;
  socialServiceBase: string;
  politicalHistory: string;
}

export interface DeraBallanProfile extends DeraEngagementProfile {
  deraName: "Dera Sachkhand Ballan";
  headquarters: string;
  followerBase: string;
  keyLeader: string;
  influenceRegion: string;
  politicalStance: string;
}

export interface RadhaSoamiProfile extends DeraEngagementProfile {
  deraName: "Radha Soami";
  headquarters: string;
  followerBase: string;
  spiritualOrientation: string;
  politicalNeutrality: string;
  engagementConstraints: string;
}

// ==========================================
// MINORITY OUTREACH
// ==========================================

export interface MuslimOutreach {
  community: "Muslim";
  populationPercent: string;
  geographicConcentration: string;
  keyConcerns: string[];
  congressHistoricalSupport: string;
  outreachStrategy: string;
  keyMessages: string[];
}

export interface ChristianOutreach {
  community: "Christian";
  populationPercent: string;
  geographicConcentration: string;
  keyConcerns: string[];
  congressHistoricalSupport: string;
  outreachStrategy: string;
}

// ==========================================
// GENDER COALITION
// ==========================================

export interface WomenCoalitionStrategy {
  targetWomenVoters: string;
  womensIssuesPriority: string[];
  mobilizationChannels: string[];
  familyVoterTargeting: string;
  womenCandidateStrategy: string;
}

// ==========================================
// YOUTH COALITION
// ==========================================

export interface YouthCoalitionStrategy {
  targetAgeSegment: string;
  youthIssues: string[];
  digitalEngagementApproach: string;
  peerInfluenceLeverage: string;
  employmentMessaging: string;
  aspirationalMessaging: string;
}

// ==========================================
// SEAT-LEVEL TARGETING
// ==========================================

export interface HighPrioritySeat {
  seatName: string;
  region: string;
  reasonForPriority: string;
  currentIncumbent: string;
  congressChance: string;
  resourceAllocation: string;
}

export interface DefensiveSeat {
  seatName: string;
  region: string;
  currentStatus: string;
  threatLevel: "High" | "Medium" | "Low";
  defenseStrategy: string;
  resourceRequirement: string;
}

// ==========================================
// COALITION COHESION
// ==========================================

export interface CoalitionRisk {
  riskFactor: string;
  affectedCommunities: string[];
  probability: "High" | "Medium" | "Low";
  impactOnCoalition: string;
  mitigationStrategy: string;
}

export interface CommunitySatisfactionMetrics {
  community: string;
  satisfactionScore: string;
  keyGrievances: string[];
  churnRisk: string;
  retentionStrategy: string;
}

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export interface CoalitionConfidence {
  category: string;
  confidenceLevel: "High" | "Medium" | "Low";
  source: string;
  punjabSpecificNotes: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface SocialCoalitionData {
  documentDate: string;
  agent: string;
  taskId: "G18";
  frameworkSections: string[];

  // Architecture
  minimumWinningCoalition: MinimumWinningCoalition;
  coalitionComponents: CoalitionComponent[];
  congressBaseline: Congress2022Baseline;

  // Regional
  malwaStrategy: MalwaStrategy;
  majhaStrategy: MajhaStrategy;
  doabaStrategy: DoabaStrategy;

  // Caste-Candidate
  scReservedSeats: SCReservedSeat;
  jatSikhSeats: JatSikhSeat;
  obcSeats: OBCSeat;

  // Inter-Caste
  casteFrictions: InterCasteFriction[];
  voteTransfers: CastebasedVoteTransfer[];

  // Dera
  deraEngagements: DeraEngagementProfile[];
  deraSachaSauda: DeraSachaSaudaProfile;
  deraBallan: DeraBallanProfile;
  radhaSoami: RadhaSoamiProfile;

  // Minorities
  muslimOutreach: MuslimOutreach;
  christianOutreach: ChristianOutreach;

  // Demographics
  womenCoalition: WomenCoalitionStrategy;
  youthCoalition: YouthCoalitionStrategy;

  // Seats
  highPrioritySeats: HighPrioritySeat[];
  defensiveSeats: DefensiveSeat[];

  // Cohesion
  coalitionRisks: CoalitionRisk[];
  communitySatisfaction: CommunitySatisfactionMetrics[];

  // Confidence
  knowledgeConfidence: CoalitionConfidence[];
}
