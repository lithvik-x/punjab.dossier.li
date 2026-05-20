// Population Structure & Demographics Types for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/population-structure.md

// ==========================================
// POPULATION OVERVIEW
// ==========================================

export interface PopulationOverview {
  census2011: {
    population: number;
    populationCrore: string;
    rankingAmongStates: number;
    shareOfIndiaPopulation: number;
    density: number; // persons per km²
    decadalGrowthRate: number;
    previousDecadalGrowthRate: number; // 1991-2001
  };
  projections: {
    projectedPopulation2026: number;
    projectedPopulationMillion: string;
    annualGrowthRate2026: number;
    growthRankAmongStates: string; // "10th lowest"
    growthTrend: {
      yearlyGrowth2011: number; // lakh/year
      yearlyGrowth2020: number; // lakh/year
    };
  };
}

// ==========================================
// RELIGIOUS COMPOSITION
// ==========================================

export interface ReligiousComposition {
  census2011: {
    sikh: number;
    hindu: number;
    christian: number;
    muslim: number;
    other: number;
  };
  sikhTrend: {
    census2001: number;
    census2011: number;
    projected2025: number; // estimated
    projected2030: number; // estimated
  };
  dalitSC: {
    populationPercent: number;
    rankingAmongStates: string;
    highestConcentration: {
      district: string;
      percent: number;
    }[];
  };
  unverifiedClaims: {
    christianPopulationClaim: number;
    source: string;
    note: string;
    requiresVerification: boolean;
  };
}

// ==========================================
// GENDER & SEX RATIO
// ==========================================

export interface SexRatio {
  historical: {
    year: number;
    ratio: number; // females per 1000 males
  }[];
  census2011: number;
  sexRatioAtBirth2025: number;
  nationalAverage2025: number;
  regionalGap: string;
  districtLevel: {
    district: string;
    sexRatio: number;
    region: "Doaba" | "Majha" | "Malwa";
  }[];
  regionalPattern: {
    region: "Doaba" | "Majha" | "Malwa";
    average: number;
    trend: string;
  }[];
}

// ==========================================
// AGE STRUCTURE
// ==========================================

export interface AgeStructure {
  census2011: {
    ageGroups: {
      group: string;
      population: number;
      percent: number;
    }[];
    workingAge: {
      population: number;
      percent: number;
      ageRange: string;
    };
  };
  dependencyRatios: {
    youngDependency: number; // per 100 working-age
    oldDependency: number; // per 100 working-age
    totalDependency: number; // per 100 working-age
  };
  fertilityRates: {
    education: string;
    rate: number;
  }[];
  keyInsights: {
    agingRate: string;
    comparisonToKerala: string;
    youthPipelineImplication: string;
  };
}

// ==========================================
// URBAN vs RURAL
// ==========================================

export interface UrbanRuralSplit {
  census2011: {
    urbanPercent: number;
    ruralPercent: number;
    urbanGrowth2001to2011: number;
  };
  urbanizationRank: string;
  majorUrbanCenters: {
    city: string;
    populationApprox: number; // in millions
  }[];
  politicalImplication: {
    urbanVoterGrowth: string;
    ruralHeartland: string;
    malwaSeats: number;
  };
}

// ==========================================
// LITERACY & EDUCATION
// ==========================================

export interface LiteracyEducation {
  census2011: {
    overall: number;
    male: number;
    female: number;
  };
  lifeExpectancy: {
    state: number;
    national: number;
    urban: number;
    rural: number;
    gap: number;
  };
  implications: string[];
}

// ==========================================
// ECONOMIC & OCCUPATIONAL STRUCTURE
// ==========================================

export interface SectoralEmployment {
  sector: string;
  percentOfEmployment: number;
}

export interface EconomicStructure {
  sectoralEmployment: SectoralEmployment[];
  agricultureAllied: number;
  secondary: number;
  tertiary: number;
  keyFinding: string;
  politicalImplication: string;
}

// ==========================================
// YOUTH UNEMPLOYMENT
// ==========================================

export interface YouthUnemployment {
  urbanYouthRate: {
    period: string;
    unemploymentRate: number;
    trend: string;
  }[];
  genderBreakdown: {
    gender: string;
    unemploymentRate: number;
  }[];
  labourForceIndicators: {
    indicator: string;
    octToDec2024: number;
    previousQuarter: number;
  }[];
  usDeportationConnection: {
    totalDeported: number;
    punjabOrigin: number;
    percent: number;
    implication: string;
  };
  politicalRisk: string;
}

// ==========================================
// NRI / DIASPORA
// ==========================================

export interface NRIEstimates {
  destination: string;
  estimatedPopulation: string;
}

export interface NRIDemographics {
  estimates: NRIEstimates[];
  totalEstimated: string;
  diasporaAsPercentOfDomestic: string;
  nriHouseholds: {
    region: "Doaba" | "Majha" | "Malwa";
    percentRuralHouseholds: number;
  }[];
  nriVotingPotential: {
    registration: string;
    actualTurnout: string;
    strategicImplication: string;
  };
  changingSocialProfile: {
    communityShift: string;
    classShift: string;
    genderShift: string;
    casteBroadening: string;
  };
  villages: {
    name: string;
    district: string;
    classification: string;
    percentHouseholds: number;
  }[];
}

// ==========================================
// MIGRATION PATTERNS
// ==========================================

export interface MigrationPatterns {
  outboundEmigration: {
    historicPattern: string;
    regions: {
      region: string;
      description: string;
    }[];
    pushFactors: string[];
    pullFactors: string[];
  };
  recentReversal: {
    indicator: string;
    trend: string;
    source: string;
  }[];
  inboundMigration: {
    description: string;
    tensions: string;
  };
  financialCost: {
    category: string;
    amountCrore: string;
  }[];
}

// ==========================================
// VOTER ROLL & ELECTORAL DATA
// ==========================================

export interface ElectoralData {
  registeredVoters2022: number;
  voterTurnout2022: number;
  turnoutChangeFrom2017: number;
  previousTurnout: number;
  votesCast2022: number;
  totalAssemblySeats: number;
  seatsNeededForMajority: number;
  femaleTurnout: string;
}

// ==========================================
// 2027 ELECTION IMPLICATIONS
// ==========================================

export interface DemographicImplication {
  factor: string;
  direction: string;
  intensity: "HIGH" | "MEDIUM" | "LOW";
}

export interface CongressStrategy {
  priority: number;
  strategyName: string;
  description: string;
  targetSeats?: string;
  keyActions: string[];
}

// ==========================================
// DATA QUALITY
// ==========================================

export interface DataQualityEntry {
  dataPoint: string;
  quality: "HIGH" | "MEDIUM" | "LOW";
  notes: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface PopulationStructureData {
  populationOverview: PopulationOverview;
  religiousComposition: ReligiousComposition;
  sexRatio: SexRatio;
  ageStructure: AgeStructure;
  urbanRuralSplit: UrbanRuralSplit;
  literacyEducation: LiteracyEducation;
  economicStructure: EconomicStructure;
  youthUnemployment: YouthUnemployment;
  nriDiaspora: NRIDemographics;
  migrationPatterns: MigrationPatterns;
  electoralData: ElectoralData;
  electionImplications: {
    factors: DemographicImplication[];
    congressStrategies: CongressStrategy[];
  };
  dataQuality: DataQualityEntry[];
}
