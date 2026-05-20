// Punjab Ideological Spectrum & Political Positioning Types
// Derived from: direct-documentation/cat-3-party-propulsion/b37-ideological-spectrum-political-positioning.md
// Research Date: 2026-05-20 | Data Currency: May 2026

// ==========================================
// METADATA
// ==========================================

export interface IdeologicalSpectrumMetadata {
  reportDate: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// LEFT-RIGHT SPECTRUM TYPES
// ==========================================

export interface LeftistTraditions {
  historicalPresence: string;
  cpiStrongholds: string[];
  naxaliteMovement: string;
  tradeUnionCulture: string;
  culturalProduction: string;
  currentStatus: string;
}

export interface PartySocialistPositioning {
  party: string;
  positioning: string;
}

export interface VoterPreferenceParadox {
  proMarket: string;
  proWelfare: string;
  campaignImplication: string;
}

// ==========================================
// SECULAR-COMMUNAL POLITICS TYPES
// ==========================================

export interface CongressSecularPositioning {
  pre1947: string;
  post1947: string;
  "1970s1980s": string;
  post1984: string;
  "2020s": string;
}

export interface BJPCommunalPolitics {
  constraints: string;
  historicalPresence: string;
  currentPositioning: string[];
  demographicLimitation: string;
}

export interface AAPPostIdeological {
  antiIdeology: string;
  secularLite: string;
  antiCommunalFraming: string;
  welfarePopulism: string;
  "2022GovernanceRecord": string;
}

export interface SADReligiousBalance {
  coreIdentity: string;
  secularOutreach: string;
  badalEraContradiction: string;
  communalPositioning: string[];
  post2022Crisis: string;
}

export interface VoterCommunalResponse {
  sikhVoters: string;
  hinduVoters: string;
  muslimVoters: string;
  overallPattern: string;
}

// ==========================================
// SOCIALIST-CAPITALIST POSITIONING TYPES
// ==========================================

export interface PunjabSocialistHeritage {
  ghadarParty: string;
  kisanMovements: string;
  awaraCulture: string;
  anandpurSahibResolution: string;
}

export interface ProFarmerVsIndustry {
  proFarmer: ProFarmerPosition;
  proIndustry: ProIndustryPosition;
  proMSME: string;
  proDiaspora: string;
}

export interface ProFarmerPosition {
  politicalLogic: string;
  seats: string;
  parties: string;
}

export interface ProIndustryPosition {
  politicalLogic: string;
  urbanVoters: string;
  parties: string;
}

export interface GovernmentJobPolitics {
  aspirationalAppeal: string;
  congressPitch: string;
  aapDisruption: string;
  "2027Strategy": string[];
}

export interface WelfareSchemePolitics {
  aapWelfareRollout: string[];
  congressChallenge: string;
  differentiationStrategy: string[];
  freebiesTrap: string;
}

// ==========================================
// REGIONAL-NATIONAL IDENTITY TYPES
// ==========================================

export interface PunjabDistinctIdentity {
  linguisticIdentity: string;
  culturalDistinctiveness: string;
  historicalStatehood: string;
  farmersAsIdentity: string;
}

export interface PunjabvsIndiaIdentity {
  sylCanalWater: string;
  drugsAsCrisis: string;
  armyMilitaryService: string;
  khalistanIssue: string;
}

export interface FederalismDebates {
  statesRights: string;
  centralGovernmentOverreach: string;
  congressPositioning: string;
  allPartyConsensus: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface IdeologicalSpectrumData {
  metadata: IdeologicalSpectrumMetadata;
  leftRightSpectrum: {
    leftistTraditions: LeftistTraditions;
    communistInfluence: string;
    partySocialistPositioning: PartySocialistPositioning[];
    voterPreferenceParadox: VoterPreferenceParadox;
  };
  secularCommunal: {
    congress: CongressSecularPositioning;
    bjp: BJPCommunalPolitics;
    aap: AAPPostIdeological;
    sad: SADReligiousBalance;
    voterResponses: VoterCommunalResponse;
  };
  socialistCapitalist: {
    socialistHeritage: PunjabSocialistHeritage;
    farmerVsIndustry: ProFarmerVsIndustry;
    governmentJobs: GovernmentJobPolitics;
    welfareScheme: WelfareSchemePolitics;
  };
  regionalNational: {
    distinctIdentity: PunjabDistinctIdentity;
    punjabvsIndia: PunjabvsIndiaIdentity;
    federalismDebates: FederalismDebates;
  };
}
