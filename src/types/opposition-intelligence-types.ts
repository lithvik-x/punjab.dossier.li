// Opposition Intelligence Types for Punjab 2027
// Derived from: research-P2/03_opposition_intelligence/
// Research Date: May 20, 2026 | Data Currency: May 2026

// ==========================================
// SHROMANI AKALI DAL (SAD) STATUS
// ==========================================

export interface SADElectoralTrajectory {
  electionYear: number;
  seatsWon: number;
  voteShare: number;
  alliancePartner?: string;
}

export interface SADLeadership {
  position: string;
  name: string;
  status: string;
}

export interface SADAllianceStatus {
  partner: string;
  duration?: string;
  status: "active" | "collapsed" | "none";
  endDate?: string;
  reason?: string;
}

export interface SADSplinterFaction {
  name: string;
  formedDate?: string;
  leader: string;
  status: "active" | "alliance_formed" | "collapsed";
  alliancePartner?: string;
  notes?: string;
}

export interface SADKeyEvent {
  date: string;
  event: string;
  significance?: string;
}

export interface SADStatusReport {
  documentDate: string;
  classification: string;
  currentStatus: {
    partyPresident: SADLeadership;
    formerCM?: SADLeadership;
    seniorLeader?: SADLeadership;
  };
  electoralTrajectory: SADElectoralTrajectory[];
  allianceStatus: SADAllianceStatus;
  religiousCensorship?: {
    date: string;
    offense: string;
    punishment: string;
    verificationStatus: string;
  };
  resignationAndReelection?: {
    resignationDate: string;
    reElectionDate: string;
    delegatesCount?: number;
  };
  internalConflicts?: string[];
  splinterFactions: SADSplinterFaction[];
  policyPositions2027?: string[];
  trendAnalysis: {
    phase: string;
    direction: "declining" | "stable" | "growing";
    uncertainty: "low" | "medium" | "high";
  };
  intelligenceImplications: {
    opportunities: string[];
    threats: string[];
    recommendations: string[];
  };
  keyEventsTimeline: SADKeyEvent[];
}

// ==========================================
// BJP PUNJAB STRATEGY
// ==========================================

export interface BJPVoteShareTrajectory {
  election: string;
  voteShare: number;
  assemblySeats?: number;
  lokSabhaSeats?: number;
}

export interface BJPStateLeadership {
  name: string;
  position: string;
  background: string;
}

export interface BJPKeyCampaigner {
  name: string;
  role: string;
}

export interface BPJCasteStrategy {
  target: string;
  population?: string;
  approach: string[];
  keyMessage?: string;
}

export interface BJPResourceStatus {
  funding?: string;
  organizationStatus: string;
}

export interface BJPSeatProjection {
  source: string;
  projection: string;
}

export interface BJPChallenge {
  challenge: string;
  analysis: string;
}

export interface BJPPunjabReport {
  documentDate: string;
  currentSeats: {
    election: string;
    voteShare: number;
    assemblySeats: number;
    lokSabhaSeats: number;
  };
  voteShareTrajectory: BJPVoteShareTrajectory[];
  strategyFor2027: {
    contestMode: string;
    targetSeats: string;
    focusAreas: string[];
  };
  allianceStatus: {
    status: string;
    partner?: string;
    breakDate?: string;
  };
  stateLeadership: BJPStateLeadership[];
  keyCampaigners: BJPKeyCampaigner[];
  casteStrategy: BPJCasteStrategy[];
  resources: BJPResourceStatus;
  seatProjections: BJPSeatProjection[];
  challenges: BJPChallenge[];
  partyPresidentStatement?: string;
}

// ==========================================
// AAP PARTY STRUCTURE
// ==========================================

export interface AAPDistrictPresident {
  name: string;
  constituency?: string;
  role?: string;
}

export interface AAPZoneLeadership {
  zone: string;
  mlAInCharge: string;
}

export interface AAPMPStructure {
  constituency: string;
  incharge: string;
}

export interface AAPMinister {
  name: string;
  portfolio: string;
  status?: string;
}

export interface AAPDefector {
  name: string;
  role: string;
  joined: string;
  date: string;
}

export interface AAPGovernancePromise {
  promise: string;
  status: "fulfilled" | "not_fulfilled" | "partial" | "failed" | "in_progress";
  details?: string;
}

export interface AAPKeyFailure {
  category: string;
  description: string;
}

export interface AAPFactionalIssue {
  issue: string;
  details: string;
}

export interface AAPOrganizationalStrength {
  factor: string;
  status: "strong" | "moderate" | "weak";
  notes?: string;
}

export interface AAPResourceStatus {
  resource: string;
  status: "healthy" | "stressed" | "limited" | "moderate";
  details?: string;
}

export interface AAPPartyStructureReport {
  documentDate: string;
  stateUnit: {
    statePresident: string;
    stateInCharge: string;
    headquarters: string;
    partyLeader: string;
    status: string;
    wings?: string[];
    ideology?: string[];
    symbol: string;
    flagColor: string;
  };
  districtCommittees: {
    restructuringDate: string;
    districtPresidents: number;
    zonalVicePresidents: number;
    zones?: AAPZoneLeadership[];
  };
  lokSabhaStructure?: AAPMPStructure[];
  keyLeaders: {
    cmBhagwantMann: {
      constituency: string;
      tenure: string;
      background: string;
    };
    ministers: AAPMinister[];
  };
  formerKeyStrategists: AAPDefector[];
  governanceRecord: {
    performancePeriod: string;
    positivesClaimed: string[];
    brokenPromises: AAPGovernancePromise[];
    keyFailures: AAPKeyFailure[];
  };
  internalDynamics: {
    factionalIssues: AAPFactionalIssue[];
    defectionCrisis?: {
      date: string;
      numberOfMPs: number;
      impact: string;
    };
  };
  readiness2027: {
    organization: AAPOrganizationalStrength[];
    resources: AAPResourceStatus[];
    electoralPosition: string;
  };
  strategicImplications: {
    weaknessesToExploit: string[];
    advantages: string[];
    risks: string[];
  };
}

// ==========================================
// AAP FUNDING & FINANCES
// ==========================================

export interface AAPFundingSource {
  source: string;
  amount?: string;
  details?: string;
}

export interface AAPFundingReport {
  documentDate: string;
  fundingSources: AAPFundingSource[];
  campaignSpending?: {
    amount: string;
    details?: string;
  };
  financialChallenges?: string[];
}

// ==========================================
// AAP PUNJAB STRATEGY 2027
// ==========================================

export interface AAPStrategyFocus {
  area: string;
  approach: string[];
}

export interface AAPStrategyReport {
  documentDate: string;
  strategyFocus: AAPStrategyFocus[];
  targetVoterSegments?: string[];
  keyMessages?: string[];
  resourceAllocation?: string[];
}

// ==========================================
// AAP VOLUNTEER & GRASSROOTS
// ==========================================

export interface AAPVolunteerMetrics {
  totalVolunteers?: string;
  activeVolunteers?: string;
  boothLevelStrength?: string;
}

export interface AAPVolunteerReport {
  documentDate: string;
  volunteerMetrics: AAPVolunteerMetrics;
  organizationalStrengths?: string[];
  organizationalChallenges?: string[];
}

// ==========================================
// AAP BROKEN PROMISES
// ==========================================

export interface AAPBrokenPromise {
  originalPromise: string;
  deliveryStatus: string;
  publicPerception: string;
  oppositionMessaging: string;
}

export interface AAPBrokenPromisesReport {
  documentDate: string;
  promises: AAPBrokenPromise[];
  overallNarrative: string;
}

// ==========================================
// AAP CORRUPTION CASES
// ==========================================

export interface AAPCorruptionCase {
  minister: string;
  position: string;
  caseType: string;
  date: string;
  status: string;
  details: string;
}

export interface AAPCorruptionReport {
  documentDate: string;
  cases: AAPCorruptionCase[];
  patternAnalysis?: string;
  governanceImpact?: string;
}

// ==========================================
// KEY OPPOSITION LEADERS PROFILES
// ==========================================

export interface MannProfile {
  name: string;
  position: string;
  background: string;
  strengths: string[];
  vulnerabilities: string[];
  electoralRecord?: string;
}

export interface BainsProfile {
  name: string;
  position: string;
  background: string;
  politicalReach?: string;
  supportBase?: string;
}

export interface KultarSinghProfile {
  name: string;
  position: string;
  role: string;
  background?: string;
}

export interface SukhbirBadalProfile {
  name: string;
  position: string;
  tenure: string;
  familyLegacy?: string;
  currentStatus: string;
  challenges?: string[];
}

export interface BJPPunjabPresident {
  name: string;
  background: string;
  appointmentDate?: string;
}

export interface OppositionLeaderProfiles {
  mann: MannProfile;
  bains: BainsProfile;
  kultarSingh?: KultarSinghProfile;
  sukhbirBadal: SukhbirBadalProfile;
  bjpPunjabPresident: BJPPunjabPresident;
}

// ==========================================
// BSP PUNJAB
// ==========================================

export interface BSPPunjabStatus {
  documentDate: string;
  currentSeats: {
    assembly: number;
    lokSabha: number;
  };
  voteShare?: string;
  allianceStatus?: string;
  leadership?: string;
  strategy?: string;
  challenges?: string[];
}

// ==========================================
// SAD CORE VOTE ANALYSIS
// ==========================================

export interface SADCoreVoteReport {
  documentDate: string;
  traditionalVoteBank: string[];
  voteShareHistory: {
    year: number;
    share: number;
  }[];
  erosionFactors?: string[];
  retentionStrategies?: string[];
  keyConstituencies?: string[];
}

// ==========================================
// AAP CORE VOTE ANALYSIS
// ==========================================

export interface AAPCoreVoteReport {
  documentDate: string;
  traditionalSupportBase: string[];
  voteShareHistory: {
    year: number;
    share: number;
  }[];
  erosionFactors?: string[];
  stabilityFactors?: string[];
  keyConstituencies?: string[];
}

// ==========================================
// ALLIANCE TALKS & DYNAMICS
// ==========================================

export interface SADAllianceTalks {
  documentDate: string;
  party: string;
  potentialPartners: string[];
  negotiationStatus: "active" | "collapsed" | "none" | "informal";
  keyIssues?: string[];
  timeline?: string[];
}

export interface AAPAllianceTalks {
  documentDate: string;
  party: string;
  potentialPartners: string[];
  negotiationStatus: "active" | "collapsed" | "none" | "informal";
  keyIssues?: string[];
  timeline?: string[];
}

// ==========================================
// OPPOSITION PROMISES ANALYSIS
// ==========================================

export interface OppositionPromise {
  party: string;
  promise: string;
  targetSegment?: string;
  feasibility?: string;
  costImplication?: string;
}

export interface OppositionPromisesReport {
  documentDate: string;
  promisesByParty: {
    party: string;
    promises: OppositionPromise[];
  }[];
  commonThemes?: string[];
  affordabilityConcerns?: string[];
}

// ==========================================
// OPPOSITION FINANCES
// ==========================================

export interface OppositionPartyFinances {
  party: string;
  fundingSources?: string[];
  spendingCapacity?: string;
  financialChallenges?: string[];
}

export interface OppositionFinancesReport {
  documentDate: string;
  parties: OppositionPartyFinances[];
  overallAssessment?: string;
}

// ==========================================
// RSS-BJP CONNECTION
// ==========================================

export interface RSSBJPConnection {
  documentDate: string;
  connectionType: string;
  organizationalLinks?: string[];
  politicalCoordination?: string[];
  impactAssessment?: string;
}

// ==========================================
// OPPOSITION IT & SOCIAL MEDIA
// ==========================================

export interface OppositionSocialMediaPresence {
  party: string;
  platforms: {
    platform: string;
    followers?: string;
    engagement?: string;
    activity?: string;
  }[];
  strategy?: string;
  effectiveness?: string;
}

export interface OppositionITSocialMediaReport {
  documentDate: string;
  parties: OppositionSocialMediaPresence[];
  overallDigitalAssessment?: string;
  congressComparison?: string;
}

// ==========================================
// CASTE-BASED OUTREACH
// ==========================================

export interface CasteJatSikh {
  population: string;
  traditionalAffiliation: string;
  currentAlignment: string;
  outreachStatus: "active" | "limited" | "none";
}

export interface CasteMazhabi {
  population: string;
  traditionalAffiliation: string;
  currentAlignment: string;
  deraInfluence?: string;
}

export interface CasteKhatri {
  population: string;
  traditionalAffiliation: string;
  currentAlignment: string;
}

export interface CasteBamia {
  population: string;
  traditionalAffiliation: string;
  currentAlignment: string;
}

export interface CasteBrahmin {
  population: string;
  traditionalAffiliation: string;
  currentAlignment: string;
  outreachStatus: "active" | "limited" | "none";
}

export interface CasteOutreachReports {
  documentDate: string;
  jatSikh: CasteJatSikh;
  mazhabi: CasteMazhabi;
  khatri?: CasteKhatri;
  bamia?: CasteBamia;
  brahmin: CasteBrahmin;
  overallStrategy?: string;
}

// ==========================================
// AAP CM FACE 2027
// ==========================================

export interface AAPCMFace2027 {
  documentDate: string;
  currentCM: string;
  candidacyStatus: "confirmed" | "uncertain" | "replaced";
  partyPosition?: string;
  alternatives?: string[];
  considerations?: string[];
}

// ==========================================
// CONGRESS MUSLIM OUTREACH
// ==========================================

export interface MuslimOutreachStatus {
  documentDate: string;
  communitySize?: string;
  traditionalAffiliation: string;
  currentAlignment: string;
  outreachEfforts?: string[];
  challenges?: string[];
  congressStrategy?: string;
}

// ==========================================
// MAIN EXPORT - COMPLETE OPPOSITION INTELLIGENCE
// ==========================================

export interface OppositionIntelligenceReport {
  reportDate: string;
  source: string;
  quality: string;

  // Party-specific reports
  sadStatus: SADStatusReport;
  bjpPunjab: BJPPunjabReport;
  aapStructure: AAPPartyStructureReport;

  // Additional data
  bspPunjab?: BSPPunjabStatus;
  sadCoreVote?: SADCoreVoteReport;
  aapCoreVote?: AAPCoreVoteReport;
  casteOutreach?: CasteOutreachReports;
  aapCMFace2027?: AAPCMFace2027;
  muslimOutreach?: MuslimOutreachStatus;
  oppositionPromises?: OppositionPromisesReport;
  oppositionFinances?: OppositionFinancesReport;
  rssBJPConnection?: RSSBJPConnection;
  itSocialMedia?: OppositionITSocialMediaReport;

  // Synthesized analysis
  strategicSummary?: {
    keyThreats: string[];
    keyOpportunities: string[];
    recommendations: string[];
  };
}
