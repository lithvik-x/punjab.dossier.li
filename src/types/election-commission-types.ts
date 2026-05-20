// Election Commission Types - Punjab 2027
// Derived from: research-P2/08_election_commission/*.md
// Research Date: May 2026 | Status: COMPLETE

// ==========================================
// METADATA
// ==========================================

export interface ElectionCommissionMetadata {
  researchDate: string;
  sourceType: string;
  analyst: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// ECI READINESS TYPES (A-08-01)
// ==========================================

export interface ECITimeline {
  milestone: string;
  date: string;
  status: "VERIFIED" | "UNCERTAIN" | "ESTIMATED";
}

export interface CEOInformation {
  currentCEO: string;
  previousCEO: string;
  office: string;
  officialPortal: string;
  officialPortalAlt: string;
}

export interface VoterRollStats {
  totalVoters: number;
  preSIRMapping: number;
  mappingCompletionRate: number;
  ruralMappingRate: number;
  urbanMappingRate: number;
  unmappedVoters: number;
}

export interface ElectionMachinery {
  assemblyConstituencies: number;
  bloCount: number;
  supervisors: number;
  eros: number;
  aeros: number;
  pollingStations: number;
  districts: number;
}

export interface SIRRiskAssessment {
  risk: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
  description: string;
}

export interface ECIRiskMatrix {
  risk: string;
  likelihood: "HIGH" | "MEDIUM" | "LOW";
  impact: "VERY_HIGH" | "HIGH" | "MEDIUM" | "LOW";
  mitigation: string;
}

export interface PartyEngagement {
  party: string;
  representatives: string[];
  position: string;
}

export interface ECIReadinessKPI {
  metadata: ElectionCommissionMetadata;

  // Timeline
  timeline: ECITimeline[];

  // CEO Info
  ceo: CEOInformation;

  // Current Assembly Composition
  assemblyComposition: {
    party: string;
    seats: number;
    voteShare: number;
  }[];

  // Voter Roll Statistics
  voterRollStats: VoterRollStats;

  // Election Machinery
  machinery: ElectionMachinery;

  // 2022 Election Baseline
  baseline2022: {
    totalCandidates: number;
    voterTurnout: number;
    pollingDate: string;
  };

  // SIR Details
  sir: {
    description: string;
    lastRevision: string;
    phases: {
      phase: string;
      period: string;
      activity: string;
    }[];
    methodology: {
      preFilledForms: boolean;
      mandatoryCompliance: boolean;
      threeVisitRule: boolean;
      documentation: string[];
      aadhaarLimitation: string;
      nonComplianceConsequence: string;
      duplicateVotingPenalty: string;
    };
    riskAssessment: SIRRiskAssessment[];
    mappingByAreaType: {
      areaType: string;
      mappingRate: number;
      gap: number;
      riskLevel: "HIGH" | "MEDIUM" | "LOW";
    }[];
  };

  // EVM/VVPAT
  evmVVPAT: {
    deployment: string;
    evmType: string;
    vvpat: string;
    ballotPaperBackup: string;
  };

  // ECI New Initiatives
  eciInitiatives: {
    initiative: string;
    description: string;
    impactOnPunjab: string;
  }[];

  // Party Engagement
  partyEngagement: PartyEngagement[];

  // Intelligence Implications
  intelligenceImplications: {
    immediateActions: {
      action: string;
      priority: string;
    }[];
    strategicMonitoring: {
      area: string;
      action: string;
      priority: string;
    }[];
    riskMatrix: ECIRiskMatrix[];
    congressAdvantages: string[];
  };

  // Comparative Timeline
  comparativeTimeline: {
    event: string;
    election2022: string;
    election2027: string;
  }[];

  // Key Personnel
  keyPersonnel: {
    role: string;
    name: string;
    notes: string;
  }[];

  // Sources
  sources: string[];
}

// ==========================================
// VOTER LIST TYPES (A-08-02)
// ==========================================

export interface VoterDemographics {
  totalVoters: number;
  maleVoters: number;
  femaleVoters: number;
  transgenderVoters: number;
  firstTimeVoters: number;
  votersAbove85: number;
  divyangVoters: number;
  nriVoters: number;
}

export interface GenderRatio {
  maleToFemale: string;
  femalePer100Male: number;
  nationalAverage: number;
  gapBelowNational: number;
}

export interface ElectorateGrowth {
  year: number;
  totalElectorate: number;
  change: string;
}

export interface CasteGroupElectorate {
  casteGroup: string;
  populationPercent: number;
  estimatedVoterBase: string;
  politicalSignificance: string;
}

export interface AgeGroupDistribution {
  ageGroup: string;
  estimatedVoters: string;
  significance: string;
}

export interface UrbanRuralMapping {
  category: string;
  pollingStations: number;
  mappingCoverage: number;
}

export interface VoterTurnoutTrend {
  election: string;
  year: number;
  turnout: number;
  notes: string;
}

export interface TurnoutByGender {
  election: string;
  maleTurnout: number;
  femaleTurnout: number;
  womenLed: boolean;
}

export interface WomenParticipation {
  metric: string;
  punjab: number;
  comparison: number;
  nationalAverage: number;
}

export interface SIRPhaseResult {
  phase: string;
  states: string;
  totalVotersBefore: number;
  totalVotersAfter: number;
  netDeletion: number;
  deletionPercent: number;
}

export interface ProjectedDeletionImpact {
  scenario: string;
  deletionPercent: number;
  votersRemoved: string;
  remainingElectorate: string;
}

export interface SCSubCaste {
  subCaste: string;
  populationPercent: number;
  traditionalAffiliation: string;
  currentTrend: string;
}

export interface VoterListKPI {
  metadata: ElectionCommissionMetadata;

  // Current Status
  sirStatus: {
    phase: string;
    announcementDate: string;
    enumerationStart: string;
    doorToDoorVerification: string;
    draftElectoralRolls: string;
    claimsObjections: string;
    disposalOfClaims: string;
    finalElectoralRolls: string;
  };

  // Pre-SIR Mapping Progress
  preSIRMapping: {
    totalVoters: number;
    mappingCompleted: number;
    coveragePercent: number;
    ruralCoverage: number;
    urbanCoverage: number;
    unmappedVoters: string;
  };

  // Human Resource Deployment
  hrDeployment: {
    bloCount: number;
    supervisors: number;
    eros: number;
    aeros: number;
    householdsPerBLO: number;
    votersPerBLO: number;
  };

  // SIR Phase Results
  sirPhaseResults: SIRPhaseResult[];

  // Voter Demographics
  demographics: VoterDemographics;
  genderRatio: GenderRatio;
  electorateGrowth: ElectorateGrowth[];
  casteGroups: CasteGroupElectorate[];
  ageDistribution: AgeGroupDistribution[];
  urbanRuralMapping: UrbanRuralMapping[];

  // New Voter Registration
  newVoterTrends: {
    decadalDecline: {
      year: number;
      newVoters: number;
      change: string;
    }[];
    firstTimeVoters: {
      electionYear: number;
      count: number;
      percentOfElectorate: number;
    }[];
  };

  // Voter Turnout
  turnoutTrends: VoterTurnoutTrend[];
  turnoutByGender: TurnoutByGender[];
  womenParticipation: WomenParticipation;

  // Deletion Projections
  deletionProjections: ProjectedDeletionImpact[];
  deletionMechanism: string[];

  // NRI Voters
  nriVoters: {
    registered: number;
    form: string;
    eligibility: string;
    presenceRequired: boolean;
    barriers: string[];
  };

  // SC/ST Data
  scSTData: {
    reservedSeats: {
      assembly: number;
      lokSabha: number;
    };
    scPopulation: number;
    scSubCastes: SCSubCaste[];
  };

  // Forms
  forms: {
    form: string;
    purpose: string;
    usageDuringSIR: string;
  }[];

  // Intelligence Implications
  intelligence: {
    risks: {
      risk: string;
      severity: "HIGH" | "MEDIUM" | "LOW";
      mitigation: string;
    }[];
    recommendations: string[];
    criticalDates: {
      date: string;
      event: string;
      congressAction: string;
    }[];
    dataGaps: {
      gap: string;
      priority: "HIGH" | "MEDIUM" | "LOW";
      method: string;
    }[];
  };
}

// ==========================================
// CRIMINALIZATION TYPES (A-08-03)
// ==========================================

export interface CandidateCriminalData {
  totalCandidates: number;
  candidatesWithCriminalCases: number;
  percentage: number;
  candidatesWithSeriousCases: number;
  seriousPercentage: number;
}

export interface PartyCriminalBreakdown {
  party: string;
  totalCandidates: number;
  withCriminalCases: number;
  percentage: number;
  withSeriousCases: number;
  seriousPercentage: number;
}

export interface YearOverYearComparison {
  year: number;
  candidatesWithCriminalCases: number;
  percentage: number;
  trend: "up" | "down" | "stable";
  changePoints: number;
}

export interface StateComparison {
  state: string;
  percentage: number;
  rank: number;
}

export interface DistrictCriminalization {
  district: string;
  candidatesWithCriminalCases: number;
  totalCandidates: number;
  percentage: number;
  seriousCases: number;
}

export interface CriminalizationKPI {
  metadata: ElectionCommissionMetadata;

  // 2022 Assembly Election Data
  assembly2022: {
    totalCandidates: number;
    withCriminalCases: number;
    percentage: number;
    withSeriousCases: number;
    seriousPercentage: number;
    trend: string;
  };

  // Party-wise Breakdown
  partyBreakdown: PartyCriminalBreakdown[];

  // Year over Year
  yearOverYear: YearOverYearComparison[];

  // State Comparison
  stateComparison: StateComparison[];

  // District Analysis
  districtAnalysis: DistrictCriminalization[];

  // Key Statistics
  stats: {
    avgAssetsOfCriminalCandidates: number;
    avgAssetsOfCleanCandidates: number;
    moneyInElections: string;
  };

  // Intelligence Implications
  intelligence: {
    keyFindings: string[];
    concerns: string[];
    recommendations: string[];
  };

  sources: string[];
}

// ==========================================
// CANDIDATE AFFIDAVIT TYPES (A-08-04)
// ==========================================

export interface AssetDisclosure {
  category: string;
  avgAssets: number;
  medianAssets: number;
  candidatesAbove1Crore: number;
  candidatesAbove10Crore: number;
}

export interface EducationLevel {
  level: string;
  candidates: number;
  percentage: number;
}

export interface SelfSwornAffidavit {
  totalCandidates: number;
  filedAffidavits: number;
  pendingAffidavits: number;
  complianceRate: number;
}

export interface PartyAssetProfile {
  party: string;
  avgAssets: number;
  candidatesWithCriminalCases: number;
  candidatesAbove1Crore: number;
}

export interface AffidavitKPI {
  metadata: ElectionCommissionMetadata;

  // Asset Disclosure
  assets: {
    totalCandidates: number;
    assetDisclosures: AssetDisclosure[];
    partyProfiles: PartyAssetProfile[];
    overallStats: {
      avgAssets: number;
      medianAssets: number;
      candidatesAbove1Crore: number;
      candidatesZeroAssets: number;
    };
  };

  // Education Levels
  education: {
    totalCandidates: number;
    levels: EducationLevel[];
  };

  // Self-Sworn Affidavits
  selfSwornAffidavits: SelfSwornAffidavit;

  // Rejection Patterns
  rejectionPatterns: {
    totalAffidavitsRejected: number;
    rejectionRate: number;
    commonReasons: string[];
  };

  // Intelligence Implications
  intelligence: {
    findings: string[];
    concerns: string[];
    recommendations: string[];
  };

  sources: string[];
}

// ==========================================
// EXPENDITURE TYPES (A-08-05)
// ==========================================

export interface ExpenditureLimit {
  category: string;
  limit: number;
  currency: string;
  notes: string;
}

export interface ExpenditureBreakdown {
  category: string;
  avgSpending: number;
  maxSpending: number;
  spendingPercentOfLimit: number;
}

export interface BoothLevelExpenditure {
  category: string;
  amount: number;
  description: string;
}

export interface ExpenditureKPI {
  metadata: ElectionCommissionMetadata;

  // 2022 Election Spending
  election2022: {
    totalCandidates: number;
    totalExpenditure: number;
    avgPerCandidate: number;
    limitPerCandidate: number;
    limitInCrores: number;
  };

  // Expenditure Limits
  limits: ExpenditureLimit[];

  // Spending Breakdown
  breakdown: ExpenditureBreakdown[];

  // Booth Level Spending
  boothLevelSpending: BoothLevelExpenditure[];

  // Intelligence Implications
  intelligence: {
    keyFindings: string[];
    violations: string[];
    recommendations: string[];
  };

  sources: string[];
}

// ==========================================
// POSTAL BALLOT TYPES (A-08-15)
// ==========================================

export interface PostalBallotUptake {
  category: string;
  eligible: number;
  applied: number;
  issued: number;
  returned: number;
  counted: number;
  uptakePercent: number;
}

export interface ServiceVoterCategory {
  category: string;
  count: number;
  eligiblePostal: number;
}

export interface PostalBallotKPI {
  metadata: ElectionCommissionMetadata;

  // 2022 Election Data
  election2022: {
    totalVoters: number;
    totalPostalBallots: number;
    turnout: number;
    postalBallotPercent: number;
    countingPercentage: number;
  };

  // Category-wise Uptake
  categoryUptake: PostalBallotUptake[];

  // Service Voter Categories
  serviceVoters: ServiceVoterCategory[];

  // Application Process
  applicationProcess: {
    onlineApplication: boolean;
    offlineApplication: boolean;
    deadlineDays: number;
    issuedBeforeDays: number;
  };

  // Intelligence Implications
  intelligence: {
    keyFindings: string[];
    barriers: string[];
    recommendations: string[];
  };

  sources: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const ELECTION_commission_CATEGORIES = [
  "eci_readiness",
  "voter_list",
  "electoral_integrity",
  "candidate_affidavits",
  "expenditure",
  "postal_ballot",
] as const;

export type ElectionCommissionCategory = typeof ELECTION_commission_CATEGORIES[number];

export const PUNJAB_ASSEMBLY_SEATS = 117;
export const LOK_SABHA_SEATS = 13;
export const SC_RESERVED_ASSEMBLY = 34;
export const ST_RESERVED_ASSEMBLY = 0;

export const TOTAL_ELECTORS_2026 = 21457160;
export const BLO_COUNT = 24453;
export const SUPERVISOR_COUNT = 2476;
export const ERO_COUNT = 117;
export const AERO_COUNT = 234;

export const ELECTION_EXPENDITURE_LIMIT = 4000000; // INR 40 lakh in rupees
export const EXPENDITURE_LIMIT_CRORES = 0.4; // INR 40 lakh in crores
