// Law, Order & Welfare Types for Punjab 2022-2027
// Derived from: research-M2/MP1-foundational/governance/laworder-welfare.md
// Research Date: 20 May 2026 | Data Coverage: 2024-2026

// ==========================================
// METADATA
// ==========================================

export interface LawOrderWelfareMetadata {
  researchDate: string;
  dataCoverage: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
  source: string;
  megaPillar: string;
  domain: string;
  taskId: string;
  status: string;
}

// ==========================================
// OFFICIAL CRIME STATISTICS
// ==========================================

export interface CrimeStatistics2025 {
  casesRegistered: number;
  arrests: number;
  heroinSeized: number; // kg
  methamphetamineSeized: number; // kg ("ice")
  opiumSeized: number; // kg
  poppyHuskSeized: number; // kg
  intoxicantPillsSeized: number; // count (55.78 lakh)
  drugMoneyRecovered: number; // Rs crore
  ndpsConvictionRate: number; // percentage
}

export interface EncounterStats {
  encounters: number;
  deaths: number;
  arrests: number;
  bulletInjured: number; // arrested gangsters with bullet injuries
  bulletInjuryRate: number; // percentage
}

export interface AAPGovernmentClaims {
  crimeRatePerLakh: number;
  nationalAverageCrimeRate: number;
  himachalPradeshCrimeRate: number;
  gangstersArrested2025: number;
  foreignGangstersIdentified: number;
  redCornerNoticesIssued: number;
  drugSeizures: CrimeStatistics2025;
  encounterStatsSinceApril2022: EncounterStats;
}

export interface MurderRateData {
  from: number;
  to: number;
  reduction: number; // percentage
}

export interface IndependentVerification {
  murderRate: MurderRateData;
  gangRapeDecrease2025: string; // "79%" - VERIFICATION_NEEDED
  officialCrimeDecrease2024_2025: number; // percentage (less than 2%)
  ndpsRanking: string; // "Highest in India" - NCRB 2024
  verificationNotes: string[];
}

// ==========================================
// ENCOUNTER DATA
// ==========================================

export interface EncounterCase {
  date: string;
  name: string;
  location: string;
  type: "custody" | "checkpoint" | "encounter" | "weapon-recovery";
  outcome: "killed" | "injured" | "arrested";
  details: string;
}

export interface ThreeMonthEncounterData {
  period: string; // "November 2025 - January 2026"
  totalEncounters: number;
  deaths: number;
  injured: number;
  january2026Alone: number;
  custodyEncountersPercentage: number;
  keyCases: EncounterCase[];
}

export interface YearlyEncounterData {
  year: number;
  encounters: number;
  deaths: number;
  accusedInjured: number;
  policeInjured: number;
  policeDeaths: number;
}

export interface EncounterData {
  sinceApril2022: EncounterStats;
  threeMonthIntensive: ThreeMonthEncounterData;
  yearlyData: {
    2024: YearlyEncounterData;
    "2025_Jan_Jul": { encounters: number; custodyDeaths: number; note: string };
  };
  nhrcNotice: {
    issued: boolean;
    noticeDate: string;
    stateResponse: string;
    unansweredQuestions: string[];
  };
}

// ==========================================
// ORGANISED CRIME NETWORKS
// ==========================================

export interface GangsterProfile {
  name: string;
  alias?: string;
  base: string;
  knownNetwork?: string;
  keyActivities: string[];
  status: "jail" | "foreign" | "operational" | "killed";
  note?: string;
}

export interface GangsterNetworkData {
  foreignBasedGangsters: GangsterProfile[];
  bishnoiNetwork: {
    kingpin: string;
    internationalReach: boolean;
    isiLinks: boolean;
    californiaConnection: boolean;
    note: string;
  };
  extortionData: {
    totalFIRs3Years: number;
    firs2023: number;
    firs2024: number;
    firsTillMarch2025: number;
    dgpQuote: string;
    localVsOrganised: {
      localExtortion: number; // percentage
      organisedGangs: number; // percentage
    };
  };
  agtfInfo: {
    established: string;
    predecessor: string;
    role: string;
    legislationGap: string;
    pcocaProposal: {
      firstSent: string;
      neverPromulgated: boolean;
      freshProposalAfterAAP: string;
      stillNotPromulgated: boolean;
    };
  };
}

// ==========================================
// POLICE-MILITARY SCANDALS
// ==========================================

export interface PoliceScandal {
  incident: string;
  date: string;
  location: string;
  outcome: string;
  politicalImpact: string;
}

export interface PoliceCorruptionIncidents {
  cbiRaidDIG: {
    officer: string;
    outcome: string;
  };
  suspendedOfficers: string[];
  highProfileCases: PoliceScandal[];
}

// ==========================================
// VULNERABLE CONSTITUENCIES
// ==========================================

export interface DistrictEncounterData {
  district: string;
  encountersNov2025_Jan2026: number;
  notableIncidents: string[];
}

export interface RegionalImpact {
  mostAffectedDistricts: DistrictEncounterData[];
  firstWeekJanuary2026: {
    murders: number;
    period: string;
    notableIncidents: string[];
  };
  kabaddiPromoterCase: {
    victim: string;
    date: string;
    location: string;
    significance: string;
    highCourtAction: string;
    subsequentEncounter: string;
  };
}

export interface ConstituencyRecommendation {
  constituency: string;
  mlacount: number;
  priority: "HIGH" | "MEDIUM" | "LOW";
  reason: string;
}

// ==========================================
// CAMPAIGN DATA
// ==========================================

export interface CampaignAttackLine {
  number: number;
  title: string;
  message: string;
}

export interface CampaignData {
  attackLines: CampaignAttackLine[];
  casesToReference: {
    case: string;
    outragePotential: string;
  }[];
  whatToAvoid: string[];
  voterDemographics: {
    segment: string;
    reason: string;
  }[];
}

export interface CongressStrategy {
  opportunities: string[];
  risks: string[];
  effectiveWhen: string[];
}

// ==========================================
// COMPARATIVE ANALYSIS
// ==========================================

export interface AAPPromiseReality {
  promise: string;
  reality: string;
}

export interface ComparativeAnalysis {
  congressWeaknesses: string[];
  aapPromisesVsReality: AAPPromiseReality[];
}

// ==========================================
// INTELLIGENCE GAPS
// ==========================================

export interface IntelligenceGap {
  id: number;
  dataPoint: string;
  verificationNeeded: string;
}

// ==========================================
// SOURCE DATA
// ==========================================

export interface SourceEntry {
  source: string;
  date: string;
  keyInformation: string;
}

export interface ConfidenceAssessment {
  dimension: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// MAIN DATA INTERFACE
// ==========================================

export interface LawOrderWelfareData {
  metadata: LawOrderWelfareMetadata;
  officialClaims: AAPGovernmentClaims;
  independentVerification: IndependentVerification;
  encounterData: EncounterData;
  gangsterNetworks: GangsterNetworkData;
  policeIncidents: PoliceCorruptionIncidents;
  regionalImpact: RegionalImpact;
  campaign: CampaignData;
  congressStrategy: CongressStrategy;
  comparativeAnalysis: ComparativeAnalysis;
  intelligenceGaps: IntelligenceGap[];
  sources: SourceEntry[];
  confidenceAssessment: ConfidenceAssessment[];
}
