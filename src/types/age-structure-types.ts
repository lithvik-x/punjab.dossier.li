// Age Structure & Political Cohorts Types for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/age-structure.md

// ==========================================
// POPULATION OVERVIEW
// ==========================================

export interface AgeStructurePopulationOverview {
  projectedPopulationJuly2026: number;
  projectedPopulationCrore: string;
  male: number;
  maleCrore: string;
  female: number;
  femaleCrore: string;
  sexRatio: string;
  indiaShare: number;
  growthRate2026: number;
  growthRank: string;
  tfr: number;
  tfrNote: string;
}

// ==========================================
// FIVE-YEAR AGE COHORTS
// ==========================================

export interface AgeCohort {
  ageGroup: string;
  population: number;
  percentOfTotal: number;
  male: number;
  female: number;
  malesPer100Females: number;
}

export interface AgeCohortData {
  cohorts: AgeCohort[];
  total: number;
  totalMale: number;
  totalFemale: number;
  totalSexRatio: number;
}

// ==========================================
// POPULATION PYRAMID ANALYSIS
// ==========================================

export interface PopulationPyramidAnalysis {
  description: string;
  currentShares: {
    ageGroup: string;
    percent2011: number;
    percent2026Projected: number;
  }[];
  birthRegistrations: {
    year: number;
    count: number;
    decline?: string;
  }[];
  pyramidShape: string;
  constrictiveBaseEvidence: string;
}

// ==========================================
// POLITICAL AGE COHORTS
// ==========================================

export interface PoliticalCohort {
  name: string;
  ageRange: string;
  estimatedPopulation: string;
  percentOfTotal: number;
  politicalSignificance: string;
}

export interface PoliticalCohortData {
  cohorts: PoliticalCohort[];
  summary: {
    firstTimeVoters: string;
    newVoters: string;
    youthTotal: string;
    middleAge: string;
    preSenior: string;
    seniorCitizens: string;
    preVotingAge: string;
  };
}

// ==========================================
// FIRST-TIME VOTERS 2027
// ==========================================

export interface FirstTimeVoterEstimation {
  birthYears: string;
  ageRange: string;
  electorate2022: number;
  electorate2024: number;
  sirStatus: string;
}

export interface FirstTimeVoterPool {
  parameter: string;
  estimate: string;
}

export interface FirstTimeVoterData {
  estimation: FirstTimeVoterEstimation;
  pool: FirstTimeVoterPool[];
  netNewVoters: string;
  verificationNeeded: string;
  politicalCharacter: {
    bornDuringAAPGovernance: boolean;
    digitalNative: boolean;
    primaryInfoSources: string[];
    keyIssues: string[];
    votingPattern: string;
  };
}

// ==========================================
// AGE x LIFE STAGE CROSS-TABULATION
// ==========================================

export interface LifeStage {
  stage: string;
  ageGroup: string;
  keyConcerns: string[];
  votingBehaviorPattern: string;
}

export interface LifeStageData {
  stages: LifeStage[];
}

// ==========================================
// TEMPORAL CHANGE 2001-2011-2026
// ==========================================

export interface TemporalChangeIndicator {
  indicator: string;
  value2001: string | number;
  value2011: string | number;
  value2026Projected: string | number;
}

export interface TemporalChangeData {
  indicators: TemporalChangeIndicator[];
  agingInsight: string;
  medianAgeComparison: {
    india: number;
    punjab: number;
    comparableTo: string;
  };
}

// ==========================================
// EMIGRATION IMPACT
// ==========================================

export interface EmigrationImpact {
  annualEmigrationEstimate: string;
  profile: string;
  impactOn2027Electorate: string;
  udiseEvidence: {
    sikhChildrenFoundational: string;
    populationShare2011: string;
    gap: string;
  };
  netEffect: string;
}

export interface EmigrationData {
  scale: EmigrationImpact;
  destinations: string[];
}

// ==========================================
// REGIONAL AGE VARIATIONS
// ==========================================

export interface RegionalAgeProfile {
  region: string;
  seats: number;
  districts: string;
  ageProfileCharacter: string;
}

export interface RegionalAgeData {
  regions: RegionalAgeProfile[];
  doabaNote: string;
}

// ==========================================
// DATA GAPS & VERIFICATION
// ==========================================

export interface DataGap {
  dataPoint: string;
  status: string;
  sourceNeeded: string;
}

export interface DataQuality {
  dataGaps: DataGap[];
  confidence: string;
  sources: string[];
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface AgeStructureData {
  populationOverview: AgeStructurePopulationOverview;
  ageCohorts: AgeCohortData;
  populationPyramid: PopulationPyramidAnalysis;
  politicalCohorts: PoliticalCohortData;
  firstTimeVoters: FirstTimeVoterData;
  lifeStages: LifeStageData;
  temporalChanges: TemporalChangeData;
  emigration: EmigrationData;
  regionalAge: RegionalAgeData;
  dataQuality: DataQuality;
}
