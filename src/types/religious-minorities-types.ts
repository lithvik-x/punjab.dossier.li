// Religious Minorities Demographics Types for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/religious-minorities.md
// Research Date: 19 May 2026

// ==========================================
// RELIGIOUS MINORITY POPULATION OVERVIEW
// ==========================================

export interface ReligiousMinorityPopulation {
  religion: "muslim" | "christian" | "buddhist" | "jain";
  population2011: number;
  sharePercent: number;
  decadalGrowth?: {
    2001?: number;
    2011?: number;
    note?: string;
  };
}

export interface ReligiousMinoritiesOverview {
  researchDate: string;
  sourcesConsulted: number;
  dataFreshness: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
  totalMinorityPercent: number;
  populations: ReligiousMinorityPopulation[];
}

// ==========================================
// MUSLIM COMMUNITY
// ==========================================

export interface DistrictMuslimPopulation {
  district: string;
  muslimPopulation: number;
  percentOfDistrict: number;
}

export interface MuslimDenominationalBreakdown {
  denomination: "Sunni" | "Ahmadiyya" | "Shia";
  description: string;
  location?: string;
  populationStatus: "verified" | "NOT_FOUND";
}

export interface MuslimKeyInstitution {
  name: string;
  type: string;
  location: string;
  description: string;
}

export interface MuslimCommunity {
  population2011: number;
  sharePercent: number;
  decadalGrowth: {
    2001: number;
    2011: number;
    percentIncrease: number;
    note: string;
  };
  highestConcentration: {
    district: string;
    population: number;
    percentOfDistrict: number;
  };
  malerkotla: {
    isIndiaOnlyMuslimMajorityMunicipality: boolean;
    muslimPopulationPercent: number;
    createdAsDistrictYear: number;
    note: string;
  };
  qadian: {
    isAhmadiyyaHeadquarters: boolean;
    founder: string;
    founderBirthYear: number;
    district: string;
  };
  urbanMigrantPockets: {
    city: string;
    population: number;
    originStates: string[];
  }[];
  districtWise: DistrictMuslimPopulation[];
  denominationalBreakdown: MuslimDenominationalBreakdown[];
  keyInstitutions: MuslimKeyInstitution[];
  politicalDisposition: {
    malerkotlaTendencia: string;
    urbanMigrantTendencia: string;
    generalMessaging: string;
    verificationNeeded: string[];
  };
  estimatedVoterCount: string;
}

// ==========================================
// CHRISTIAN COMMUNITY
// ==========================================

export interface ChristianDenominationalBreakdown {
  denomination: string;
  description: string;
  keyOrganizations?: string[];
  populationStatus: "verified" | "NOT_FOUND";
}

export interface ChristianGrowthDynamics {
  census2011: {
    population: number;
    sharePercent: number;
  };
  estimatedCurrentShare: {
    lowEstimate: number;
    highEstimate: number;
    note: string;
  };
  reportedConversions: {
    number: number;
    period: string;
    source: string;
    verificationStatus: string;
  };
  dalitConnection: {
    punjabDalitPercent: number;
    rankingAmongStates: string;
    primaryDriverOfChristianGrowth: string;
  };
}

export interface DalitChristianReservationIssue {
  supremeCourtRuling: {
    caseName: string;
    rulingDate: string;
    keyFinding: string;
  };
  impactOnPunjab: {
    affectedCommunities: string[];
    consequences: string[];
  };
  historicalContext: {
    presidentialOrder1950: string;
    "1956Amendment": string;
    "1990Amendment": string;
    currentExclusion: string;
  };
  pendingLegalChallenges: {
    description: string;
    commissions: string[];
  };
  politicalExploitation: {
    party: string;
    leader: string;
    statement: string;
  };
  communityResponse: {
    leaders: { name: string; role: string }[];
  };
}

export interface ChristianCommunity {
  growthDynamics: ChristianGrowthDynamics;
  geographicDistribution: {
    region: string;
    dalitPercent: string;
    description: string;
  }[];
  denominationalBreakdown: ChristianDenominationalBreakdown[];
  dalitChristianIssue: DalitChristianReservationIssue;
  educationalSocialInfrastructure: {
    missionSchools: string;
    churches: string;
    fcraRestrictions: string;
  };
  estimatedVoterCount: string;
  voterCountContested: boolean;
}

// ==========================================
// BUDDHIST COMMUNITY
// ==========================================

export interface BuddhistCommunity {
  population2011: number;
  sharePercent: number;
  urbanConcentration: string[];
  literacyRate2001: number;
  ambedkariteMovement: {
    description: string;
    communityOrigin: string[];
    connection: string;
    reservationBenefit: string;
  };
  organizationalPresence: {
    status: string;
    note: string;
  };
  politicalRelevance: {
    numericImpact: string;
    symbolicSignificance: string;
    regionalConnection: string;
  };
}

// ==========================================
// JAIN COMMUNITY
// ==========================================

export interface JainCommunity {
  population2011: number;
  sharePercent: number;
  literacyRate2001: number;
  urbanConcentration: string[];
  sects: {
    predominant: string[];
    breakdownStatus: string;
  };
  economicProfile: {
    traditionalOccupations: string[];
    industrialPresence: string;
    perCapitaAffluence: string;
    institutions: string[];
  };
  politicalRelevance: {
    voteShare: string;
    economicInfluence: string;
    tendency: string;
    verificationNeeded: string[];
  };
}

// ==========================================
// STRATEGIC IMPLICATIONS FOR CONGRESS
// ==========================================

export interface MuslimVoteBankStrategy {
  component: string;
  description: string;
  priority: string;
}

export interface ChristianVoteBankStrategy {
  component: string;
  description: string[];
  politicalOpportunity: string;
}

export interface BuddhistJainStrategy {
  community: string;
  approach: string;
  rationale: string;
}

export interface CrossCuttingMinorityStrategy {
  reforms: string[];
  infrastructure: string[];
  employment: string;
  coalitionBuilding: string;
}

export interface ReligiousMinoritiesStrategicImplications {
  muslimVoteBank: {
    estimatedVoters: string;
    strategies: MuslimVoteBankStrategy[];
  };
  christianVoteBank: {
    estimatedVoters: string;
    contested: boolean;
    strategies: ChristianVoteBankStrategy[];
  };
  buddhistJainCommunities: BuddhistJainStrategy[];
  crossCuttingStrategy: CrossCuttingMinorityStrategy;
}

// ==========================================
// DATA POINTS TABLE
// ==========================================

export interface ReligiousMinorityDataPoint {
  metric: string;
  value: string;
  source: string;
  date: string;
}

// ==========================================
// GAPS AND VERIFICATION NEEDS
// ==========================================

export interface DataGap {
  id: number;
  topic: string;
  description: string;
  priority: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}

export interface ReligiousMinoritiesDataGaps {
  gaps: DataGap[];
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface ReligiousMinoritiesData {
  overview: ReligiousMinoritiesOverview;
  muslim: MuslimCommunity;
  christian: ChristianCommunity;
  buddhist: BuddhistCommunity;
  jain: JainCommunity;
  strategicImplications: ReligiousMinoritiesStrategicImplications;
  dataPoints: ReligiousMinorityDataPoint[];
  dataGaps: ReligiousMinoritiesDataGaps;
}
